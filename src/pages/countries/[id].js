import { useFetch } from "@hyper-fetch/react";
import { useRouter } from "next/router";
import { getCountries } from "@/api/api";
import CountryPage from "@/components/countrypage";

export default function CountryID() {
  const { data, loading, error } = useFetch(getCountries);
  const countries = data;
  const { asPath } = useRouter();
  const id = asPath.split("/").slice(-1)[0].replaceAll("%20", " ");

  return (
    <div className="flex min-h-screen flex-col items-center justify-start gap-8 p-24">
      {error ? (
        <div>Something went wrong...</div>
      ) : loading || countries === null ? (
        <div>Fetching data...</div>
      ) : (
        <>
          {console.log(id)}
          {countries
            .filter((c) => c.name.common.includes(id))
            .map((country) => {
              return (
                <CountryPage
                  key={country.name.common}
                  country={country}
                  countries={countries}
                />
              );
            })}
        </>
      )}
    </div>
  );
}
