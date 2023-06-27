import Link from "next/link";

export default function LayoutButton({ link, text, color }) {
  return (
    <Link href={link}>
      <button
        className={
          "rounded-md px-4 py-2 bg-green-500 text-gray-50 hover:bg-green-600"
        }
      >
        {text}&nbsp;&nbsp;&nbsp;&gt;
      </button>
    </Link>
  );
}
