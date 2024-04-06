import Link from "next/link";
import Image from "next/image";
const socialLinks = [
  {
    label: "Github",
    href: "https://github.com/Swastikdan",
    icon: "/images/icons/github-social.svg",
  },
  {
    label: "Linkdin",
    href: "https://www.linkedin.com/in/swastikdan",
    icon: "/images/icons/linkedin-social.svg",
  },
  {
    label: "Mail",
    href: "mailto:contact@swastikdan.in",
    icon: "/images/icons/mail-icon.svg",
  },
];
export default function HeroSection() {
  return (
    <>
      <section className="max-w-7xl mx-auto ">
        <h1 className="text-[34px] md:text-7xl lg:text-8xl xl:text-9xl  font-black flex flex-col text-center py-6 group text-gray-200 tracking-wide">
          <span className="z-10 -rotate-1">Hay , I'm</span>
          <span>
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400/80 text-white px-2  ">
              Swastik Dan ,
            </span>
            <span className=""> I </span>
          </span>
          <span className="z-10 rotate-1">Develop Stuff </span>
        </h1>
        <h2 className="lg:text-xl text-center md:hidden ">
          From coffee to code, I build pixel-perfect, accessible products for
          the web and beyond.
        </h2>
        <h2 className="lg:text-lg font-light text-center hidden md:inline-flex">
          Fueled by coffee and a passion for pixel perfection, I'm a UI/UX
          designer and web developer from India, crafting experiences that are
          both beautiful and intuitive.
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between  gap-4 pt-5 py-5 px-5  ">
          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              aria-label="Contact Me"
              className="group text-lg md:text-xl  inline-flex py-1 items-center gap-2.5 rounded-md  px-3 transition-colors duration-500 bg-gray-800 hover:bg-gray-700 active:scale-95"
            >
              <span className="text-lg  lg:text-xl font-medium tracking-normal ">
                Let's talk
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-white/60  transition duration-300 group-hover:rotate-45 group-hover:text-white"
                aria-hidden="true" // hides this icon from screen readers
              >
                <path
                  fillRule="evenodd"
                  d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>

            <Link
              href="/about"
              aria-label="About Me"
              className="text-lg lg:text-xl font-medium tracking-normal gap-2.5 px-3 py-1 rounded-md  hover:bg-gray-700 transition-colors duration-300 active:scale-95"
            >
              About Me
            </Link>
          </div>

          <div className="flex items-center gap-4 text-sm md:text-base py-5">
            {socialLinks.map((socialLink) => (
              <Link
                href={socialLink.href}
                key={socialLink.label}
                aria-label={socialLink.label}
                target="_blank"
                rel="noopener noreferrer" // improves security for links that open in a new tab
                className="flex items-center gap-2 px-2 py-1 ring-1 ring-white rounded-md hover:bg-gray-800/80 active:scale-95 "
              >
                <Image
                  src={socialLink.icon}
                  className="p-[2px] -mt-[1px]"
                  width={20}
                  height={20}
                  alt={`${socialLink.label} logo`}
                />
                {socialLink.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
