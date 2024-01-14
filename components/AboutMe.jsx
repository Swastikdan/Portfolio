import Image from "next/image";
import { ArrowDownToLine } from "lucide-react";
export default function AboutMe() {
  return (
    <>
      <div className="lg:bg-gray-200/50 dark:lg:bg-gray-800 lg:p-10 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center mt-20">
        <div className="md:w-5/12 lg:w-1/3">
          <div id="cards" className="rounded-3xl md:-mx-5">
            <div className="card rounded-3xl h-80 xl:h-96">
              <Image
                tabIndex="0"
                className="card-front-image h-full w-full  card-image rounded-3xl border border-black dark:border-white "
                alt="profile Image"
                priority={true}
                width={300}
                height={375}
                src="/profile-pic-final.jpg"
                quality={25}
              />
            </div>
          </div>
        </div>
        <div className="md:w-7/12 lg:w-2/3">
          <h2 className="text-2xl md:text-3xl lg:text-4xl pt-4 font-bold">
            So, Who Am I?
          </h2>
          <p className="my-4 text-gray-600 dark:text-gray-300 gotham">
            A web development enthusiast currently pursuing a B.Tech in CSE. I'm
            all about coding, design, and, of course music. As an individual, I
            take pride in my laid-back and down-to-earth nature. I approach life
            with an open mind and a welcoming spirit, always eager to embrace
            fresh challenges and opportunities who loves taking on new
            challenges.
          </p>

          <a
            href="/resume.pdf"
            aria-label="Download Resume"
            className="group inline-flex py-2 items-center gap-2.5 rounded-md bg-gray-300 hover:bg-gray-300/70 px-4 transition-all duration-500 dark:bg-gray-600 dark:hover:bg-gray-700"
          >
            <ArrowDownToLine />
            <span className="text-lg  lg:text-xl font-medium tracking-normal ">
              Resume
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
