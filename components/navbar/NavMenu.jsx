"use client";
import Link from "next/link";
import navLinks from "../NavLinks";
import ThemeSwitch from "../ThemeSwitch";
export default function NavMenu() {
  return (
    <div className="flex space-x-5 items-center">
      <div className="flex gap-4 items-center">
        {navLinks.map((link) => (
          <Link
            href={link.href}
            key={link.label}
            aria-label={link.label}
            className="  md:text-lg text-base font-medium  px-2 bg-gray-400/50  dark:bg-gray-400/50 hover:bg-gray-300/80 dark:hover:bg-gray-400/80 rounded-md ring-1 ring-black dark:ring-gray-200 md:transition-all md:duration-200 "
          >
            {link.label}
          </Link>
        ))}
      </div>
      <ThemeSwitch />
    </div>
  );
}
