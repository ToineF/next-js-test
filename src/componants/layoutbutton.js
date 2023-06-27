import Link from "next/link";

export default function LayoutButton({ link, text, color }) {
  const start = "rounded-md px-4 py-2 bg-";
  const center = "-500 text-gray-50 hover:bg-";
  const end = "-600";

  return (
    <Link href={link}>
      <button className={start + color + center + color + end}>
        {text}&nbsp;&nbsp;&nbsp;&gt;
      </button>
    </Link>
  );
}
