import Link from "next/link";
import LayoutButton from "@/components/layoutbutton";

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
          <LayoutButton
            link="/about"
            text="About"
            color="bg-green-500 hover:bg-green-600"
          />
          <LayoutButton
            link="/access"
            text="Access"
            color="bg-blue-500 hover:bg-blue-600"
          />
          <LayoutButton
            link="/countries"
            text="Countries"
            color="bg-cyan-500 hover:bg-cyan-600"
          />
        </div>
      </div>
      {children}
    </>
  );
}
