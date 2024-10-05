import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "@/components/Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Link */}
        <Link href={"/"}>
          <h1 className="pl-5 xl:p-0 text-4xl font-semibold">
            Hasnain{" "}<span className="text-[#00ff99]">.</span>
          </h1>
        </Link>
        {/* desktop navbar */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* mobile navbar */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
