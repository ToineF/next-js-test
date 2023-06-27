import Link from "next/link";

export default function LayoutButton({ link, text, color }) {
  const buttonclass = "rounded-md border px-4 py-2 text-gray-50 ";
  return (
    <Link href={link}>
      <button className={`${buttonclass} ${color}`}>
        {text}&nbsp;&nbsp;&nbsp;&gt;
      </button>
    </Link>
  );
}
