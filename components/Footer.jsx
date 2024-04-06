import navLinks from "./NavLinks";
import Link from "next/link";
import socialLinks from "./socialLinks";
export default function Footer() {
  return (
    <>
<footer className=" py-6  relative border-t">
  <div className="flex flex-col flex-wrap items-center justify-between gap-4 py-6 text-sm  sm:flex-row sm:gap-6 mx-auto max-w-7xl">
    <span className="order-last sm:order-first">
      Made with ❤️ by{" "}
      <a
        href="https://github.com/Swastikdan/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline underline-offset-2"
      >
        Swastik
      </a>
    </span>
    <div className="order-first flex gap-6 sm:order-2">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          aria-label={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:underline underline-offset-2"
        >
          {link.label}
        </a>
      ))}
    </div>
    <div className="flex">
      {navLinks.map((link) => (
        <a
          key={link.title}
          href={link.href}
          aria-label={link.title}
          className="block py-1 px-3 hover:underline underline-offset-2"
        >
          {link.title}
        </a>
      ))}
    </div>
  </div>
</footer>
    </>
  );
}
