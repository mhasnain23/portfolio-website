"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathName = usePathname();
  console.log(pathName);

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

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathName && "text-[#00ff99] border-b-2 border-[#00ff99]"
          } capitalize font-medium hover:text-[#00e187] transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
