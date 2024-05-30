"use client";

import { cn } from "@shared/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const navs = [
    { path: "/", name: "Parallax" },
    { path: "/grid", name: "Grid" },
    { path: "/list", name: "List" },
  ];

  return (
    <nav className="fixed left-[50%] top-5 z-50 mx-auto flex max-w-[280px] translate-x-[-50%] gap-[4px] rounded-full  bg-third px-1 py-1 text-[14px] backdrop-blur-lg lg:top-8 lg:max-w-[300px] ">
      {navs.map((nav, index) => (
        <Link
          key={index}
          href={nav.path}
          className={cn(
            "h-[40px] w-[88px] content-center rounded-full bg-transparent text-center font-semibold text-primary lg:w-[96px]",
            { "bg-primary text-white": nav.path === pathname },
          )}
        >
          {nav.name}
        </Link>
      ))}
    </nav>
  );
}
