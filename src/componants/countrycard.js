export default function CountryCard({ props }) {
  return (
    <div className="bg-red-400 p-5 text-center rounded border-2 border-red-800">
      <div className="flex gap-2 justify-center">
        <strong>
          {props.name.common} {props.flag}
        </strong>
      </div>
      <p>Continent: {props.region}</p>
      <p>Capital: {props.capital}</p>
      <p>Population: {props.population}</p>
    </div>
  );
}
