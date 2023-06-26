import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <Link href={"/about"}>
        <button>About</button>
      </Link>
      {children}
    </>
  );
}
