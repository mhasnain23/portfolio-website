"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const MobileNav = () => {
  const links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "services",
      path: "/services",
    },
    {
      name: "resume",
      path: "/resume",
    },
    {
      name: "work",
      path: "/work",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ];

  const pathName = usePathname();
  const [onOpen, setOnOpen] = useState<boolean>(false);

  return (
    <Sheet open={onOpen} onOpenChange={()=> setOnOpen(true)}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-[#00ff99] mr-3 xl:mr-0" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-[25px]">
          <Link href={"/"}>
            <h1>
              Hasnain<span className="text-[#00ff99]">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8 -mt-20">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              onClick={()=> setOnOpen(false)}
              className={`${
                link.path === pathName &&
                "text-[#00ff99] border-b-2 border-[#00ff99]"
              } capitalize font-medium text-[13px] xl:text-balance hover:text-[#00e187] transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
