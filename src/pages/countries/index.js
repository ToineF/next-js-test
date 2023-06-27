import { useState } from "react";
import styles from "../../styles/countries.module.css";
import CountryCard from "@/componants/countrycard";

export const getServerSideProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return { props: { data } };
};

export default function Countries({ data }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-8 p-24">
      <h1 className="text-4xl">Countries</h1>
      {/*Making sure the CSS doesn't break*/}
      <div className="bg-red-400 text-center rounded border-red-800"></div>
      <input className="border border-red-800 rounded w-1/2"></input>
      <div className={styles.cardscontainer}>
        {data === null
          ? ""
          : data.map((country) => {
              console.log(country);
              return <CountryCard props={country} key={country.name.common} />;
            })}
      </div>
    </main>
  );
}
