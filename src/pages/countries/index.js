import { useFetch } from "@hyper-fetch/react";
import { useState } from "react";
import styles from "../../styles/countries.module.css";
import { getCountries } from "@/api/api";
import CountryCard from "@/components/countrycard";

export default function Countries() {
  const [input, setInput] = useState("");

  const { data, loading, error } = useFetch(getCountries);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-8 p-24">
      {error ? (
        <div>Something went wrong...</div>
      ) : loading ? (
        <div>Fetching data...</div>
      ) : (
        <>
          <h1 className="text-4xl">Countries</h1>
          <input
            className="border-2 bg-red-100 border-red-800 rounded w-1/2"
            value={input}
            onChange={(e) => {
              setInput(e.currentTarget.value.toLowerCase());
            }}
          ></input>
          <div className={styles.cardscontainer}>
            {data === null
              ? ""
              : data
                  .filter(
                    (country) =>
                      country.name.common.toLowerCase().includes(input) ||
                      country.region.toLowerCase().includes(input)
                  )
                  .map((country) => {
                    return (
                      <CountryCard props={country} key={country.name.common} />
                    );
                  })}
          </div>
        </>
      )}
    </main>
  );
}
