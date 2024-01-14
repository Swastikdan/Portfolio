import Link from "next/link";
import Image from "next/image";
export default function HeroSection() {
  return (
    <><div aria-hidden="true" className="absolute inset-0 top-0 grid grid-cols-2 space-x-52 opacity-30 dark:opacity-20">
                <div className="h-60 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
                <div className="h-40 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
            </div>
      <section className="relative  max-w-7xl mx-auto ">
      
        <h1 className="text-[40px] md:text-7xl lg:text-8xl xl:text-9xl  font-black flex flex-col text-center py-6 group text-gray-800 dark:text-gray-200 tracking-wide">
          <span className="z-10 -rotate-1">Hay , I'm</span>
          <span>
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400/80 text-white px-2 ">
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
        <h2 className="lg:text-xl text-center hidden md:inline-flex">
          Fueled by coffee and a passion for pixel perfection, I'm a UI/UX
          designer and web developer from India, crafting experiences that are
          both beautiful and intuitive.
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between  gap-4 pt-5 py-5 px-5  ">
         <div className="flex items-center gap-4">
          <Link
            href="#contact"
            aria-label="Contact Me"
            className="group text-lg md:text-xl  inline-flex py-1 items-center gap-2.5 rounded-md bg-gray-300/80 hover:bg-gray-200 px-3 transition-colors duration-500 dark:bg-gray-800 dark:hover:bg-gray-700 active:scale-95"
          >
            <span className="text-lg  lg:text-xl font-medium tracking-normal ">Let's talk</span>
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

          <Link href="/about" aria-label="About Me" className="text-lg lg:text-xl font-medium tracking-normal gap-2.5 px-3 py-1 rounded-md  hover:bg-gray-200  dark:hover:bg-gray-700 transition-colors duration-300 active:scale-95"> 
            About Me
          </Link></div>
          
          <div className="flex items-center gap-4 text-sm md:text-base py-5">
            <Link href="/" className="flex items-center gap-2 px-2 py-1 ring-1 ring-black dark:ring-white rounded-md hover:bg-gray-200/80 hover:dark:bg-gray-800 active:scale-95 " >
              <Image src="/images/icons/github-social.svg" className="p-[2px] -mt-[1px]" width={20} height={20} alt="Github logo" />
              Github
            </Link>
            <Link href="/" className="flex items-center gap-2 px-2 py-1 ring-1 ring-black dark:ring-white rounded-md hover:bg-gray-200/80 hover:dark:bg-gray-800 active:scale-95 " >
              <Image src="/images/icons/linkedin-social.svg" className="p-[2px] -mt-1" width={20} height={20} alt="LinkedIn logo" />
              LinkedIn
            </Link>
            <Link href="/" className="flex items-center gap-2 px-2 py-1 ring-1 ring-black dark:ring-white rounded-md hover:bg-gray-200/80 hover:dark:bg-gray-800 active:scale-95 " >
              <Image src="/images/icons/mail-icon.svg" className="p-[2px] -mt-[1px]" width={20} height={20} alt="Mail icon" />
              Mail
            </Link>

          </div>
        </div>

        
      </section>
    </>
  );
}
