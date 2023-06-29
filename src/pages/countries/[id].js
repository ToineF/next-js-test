import { useFetch } from "@hyper-fetch/react";
import { getCountries } from "@/api/api";
import CountryCard from "@/components/countrycard";
import styles from "../../styles/countries.module.css";
import { useRouter } from "next/router";

export default function CountryID() {
  const { data, loading, error } = useFetch(getCountries);
  const countries = data;

  const { asPath } = useRouter();

  const id = asPath.split("/").slice(-1)[0];

  let country;

  return (
    <div className="flex min-h-screen flex-col items-center justify-start gap-8 p-24">
      {error ? (
        <div>Something went wrong...</div>
      ) : loading || countries === null ? (
        <div>Fetching data...</div>
      ) : (
        <>
          {countries
            .filter((c) => c.name.common.includes(id))
            .map((country) => {
              return (
                <>
                  <h1 className="font-bold text-lg">
                    {country.name.common} {country.flag}
                  </h1>
                  <div>
                    <div>
                      <p>{`${country.name.common} is a${
                        country.independent ? "n " : " not "
                      } independant country located in ${country.region}.`}</p>
                      <p>{`Its capital is ${
                        country.capital
                      } and the main language${
                        Object.keys(country.languages).length > 1
                          ? `s are ${
                              Object.values(country.languages)
                                .slice(0, -1)
                                .join(", ") +
                              " and " +
                              Object.values(country.languages).slice(-1)
                            }`
                          : ` is ${Object.values(country.languages)}`
                      }.`}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>
                      <u>Continent:</u>{" "}
                      {country.region !== undefined ? country.region : "None"}
                    </p>
                    <p>
                      <u>Subregion:</u>{" "}
                      {country.subregion !== undefined
                        ? country.subregion
                        : "None"}
                    </p>
                    <p>
                      <u>Capital:</u>{" "}
                      {country.capital !== undefined ? country.capital : "None"}
                    </p>
                    <p>
                      <u>Population:</u> {" " + country.population}
                    </p>
                    <p>
                      <u>
                        Language
                        {Object.keys(country.languages).length > 1 ? "s" : ""}:
                      </u>{" "}
                      {country.languages !== undefined
                        ? Object.values(country.languages).join(", ")
                        : "None"}
                    </p>
                    <p>
                      <u>Independence:</u>{" "}
                      {country.independent
                        ? "Is Independent"
                        : "Is not independent"}
                    </p>
                  </div>
                  <div className="w-1/2">
                    <p className="text-lg my-4 text-center">
                      <u>Neighbour Countries:</u>
                    </p>
                    <div className={styles.cardscontainer}>
                      {country.borders === undefined
                        ? "No neighbours..."
                        : countries
                            .filter((c) => country.borders.includes(c.cca3))
                            .map((c) => {
                              return (
                                <CountryCard props={c} key={c.name.common} />
                              );
                            })}
                    </div>
                  </div>
                </>
              );
            })}
        </>
      )}
    </div>
  );
}
