export const getStaticPaths = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  const paths = data.map((c) => {
    return {
      params: { id: c.name.common.toString() },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://restcountries.com/v3.1/all/${id}`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      country: data,
    },
  };
};

export default function CountryID({ country }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start gap-8 p-24">
      {console.log(country)}
      <p>COUNTRY PAGE</p>
    </div>
  );
}
