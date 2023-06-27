import Link from "next/link";
import LayoutButton from "@/componants/layoutbutton";

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
          <LayoutButton link="/about" text="About" color="green" />
          <LayoutButton link="/access" text="Access" color="cyan" />
          <LayoutButton link="/countries" text="Countries" color="blue" />
        </div>
      </div>
      {children}
    </>
  );
}
