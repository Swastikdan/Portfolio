"use client";
import Link from "next/link";
import navLinks from "../NavLinks";
import ThemeSwitch from "../ThemeSwitch";
export default function NavMenu() {
  return (
    <div className="flex space-x-5 items-center">
      <div className="flex space-x-4  items-center">
        {navLinks.map((link) => (
          <Link
            href={link.href}
            key={link.label}
            aria-label={link.label}
            className="text-lg md:px-2  font-heading hover:text-sky-500 md:transition-all md:duration-200 "
          >
            {link.label}
          </Link>
        ))}
      </div>
      <ThemeSwitch />
    </div>
  );
}
