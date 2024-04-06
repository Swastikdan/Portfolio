"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import navLinks from "../NavLinks";
export default function Navlinks() {
  const path = usePathname();
  return (
    <>
      {navLinks.map((item) => (
        <Link
          href={item.href}
          key={item.title}
          aria-label={item.title}
          className={`text-base md:text-lg   underline-offset-8 transition-all duration-200 hover:underline hover:text-blue-500 ${
            path === item.href && "text-blue-400 underline"
          }  `}
        >
          {item.title}
        </Link>
      ))}
    </>
  );
}
