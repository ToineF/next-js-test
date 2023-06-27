import Link from "next/link";

export default function LayoutButton({ link, text, color }) {
  return (
    <Link href={link}>
      <button className={`rounded-md border px-4 py-2 ${color} text-gray-50`}>
        {text}&nbsp;&nbsp;&nbsp;&gt;
      </button>
    </Link>
  );
}
