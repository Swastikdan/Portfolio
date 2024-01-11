import navLinks from "../NavLinks";
import Link from "next/link";
import socialLinks from "../socialLinks";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      
      <footer className=" py-6 font-heading relative border-t">
        <div className="flex flex-col flex-wrap items-center justify-between gap-4 py-6 text-sm  sm:flex-row sm:gap-6 mx-auto max-w-7xl">
          <span className="order-last sm:order-first">
            Copyright © {year} | All rights reserved
          </span>
          <ul className="order-first flex gap-6 sm:order-2">
            {socialLinks.map((link) => (
              <Link key={link.label} href={link.href} target="_blank" className=" hover:underline underline-offset-2" >
                {link.label}
              </Link>
            ))}
          </ul>
          <div className="flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block py-1 px-3 hover:underline underline-offset-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
