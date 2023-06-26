import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex justify-between py-6 px-8">
        <div className="font-bold text-lg">
          <Link href={"/"}>
            <button>UpVoteMe</button>
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href={"/about"}>
            <button className="rounded-md px-4 py-2 bg-green-500 text-gray-50 hover:bg-green-600">
              About&nbsp;&nbsp;&nbsp;&gt;
            </button>
          </Link>
          <Link href={"/access"}>
            <button className="rounded-md px-4 py-2 bg-cyan-500 text-gray-50 hover:bg-cyan-600">
              Access&nbsp;&nbsp;&nbsp;&gt;
            </button>
          </Link>
        </div>
      </div>
      {children}
    </>
  );
}
