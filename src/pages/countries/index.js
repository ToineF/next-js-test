import { useState } from "react";
import styles from "../../styles/countries.module.css";
import CountryCard from "@/components/countrycard";

export const getServerSideProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  if (data === null) return { notFound: true };
  return { props: { data } };
};

export default function Countries({ data }) {
  const [input, setInput] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-8 p-24">
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
    </main>
  );
}
