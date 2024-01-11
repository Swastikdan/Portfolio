import Link from "next/link";
export default function HeroSection() {
  return (
    <>
      <section className="relative">
        <h1 className="text-[42px] md:text-7xl lg:text-8xl xl:text-9xl font-heading font-black flex flex-col text-center py-6 group text-gray-800 dark:text-gray-200 tracking-wide">
          <span className="z-10 -rotate-1">Hay , I'm</span>
          <span>
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400/80 text-white px-2 ">
              Swastik Dan ,
            </span>
            <span className="">I </span>
          </span>
          <span className="z-10 rotate-1">Develop Stuff </span>
        </h1>
        <h2 className="lg:text-xl text-center md:hidden">
          From coffee to code, I build pixel-perfect, accessible products for
          the web and beyond.
        </h2>
        <h2 className="lg:text-xl text-center hidden md:inline-flex">
          Fueled by coffee and a passion for pixel perfection, I'm a UI/UX
          designer and web developer from India, crafting experiences that are
          both beautiful and intuitive.
        </h2>

        <div className="flex items-center justify-start text-lg md:text-xl font-heading gap-4 pt-5 ">
          <Link
            href="/contact"
            className="group inline-flex py-1 items-center gap-2.5 rounded-md bg-gray-300/80 hover:bg-gray-200 px-3 transition-all duration-500 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <span className="text-lg lg:text-xl tracking-normal ">Let's talk</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 text-black/60 dark:text-white/60  transition duration-300 group-hover:rotate-45 group-hover:text-black dark:group-hover:text-white"
            >
              <path
                fillRule="evenodd"
                d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>

          <Link href="/about" className="text-lg lg:text-xl tracking-normal gap-2.5 px-3 py-1 rounded-md  hover:bg-gray-300/80  dark:hover:bg-gray-800 transition duration-300"> 
            About Me
          </Link>
        </div>
      </section>
    </>
  );
}
