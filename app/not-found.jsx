"use client";
import Link from "next/link";
import { useEffect } from "react";
export default function NotFound() {

 
  useEffect(() => {
    document.title = "404 - Not Found";
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed bg-fixed inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 blur-sm"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-orange-300/10 to-purple-400 "></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 "></div>
      </div>

      <div className="relative grid h-screen place-content-center  px-4 ">
        <div className="text-center">
          <h1 className="text-9xl font-black text-gray-600 dark:text-gray-700">
            404
          </h1>

          <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Uh-oh!
          </p>

          <p className="mt-4 text-gray-500 dark:text-gray-400 mb-10">
            We can't find that page.
          </p>

          <Link
            href="/"
            aria-label="About Me"
            className="text-lg lg:text-xl font-medium tracking-normal gap-2.5 px-5 py-2 rounded-md  hover:bg-gray-200  dark:hover:bg-gray-700 transition-colors duration-300 active:scale-95 "
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
}
