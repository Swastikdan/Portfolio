import Link from "next/link";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import {Eye ,Github } from 'lucide-react';
import AllProjectData from "@/components/projects/AllProjectData";
export default function page() {
  return (
    <>
      <NavBar />
      <div
        aria-hidden="true"
        className="absolute inset-0 top-0 grid grid-cols-2 space-x-52 opacity-30 dark:opacity-20"
      >
        <div className="h-60 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
        <div className="h-40 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
      </div>
      <main className=" relative pt-20 max-w-7xl mx-auto py-4 px-5">
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:gap-6 xl:gap-8">
          <div class="flex flex-col items-center overflow-hidden rounded-lg border-2 border-gray-400 dark:border-gray-600  md:flex-row bg-gray-100 dark:bg-black">
            <a
              href="#"
              class="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48"
            >
              <img
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                loading="lazy"
                alt="Photo by Minh Pham"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <div class="flex flex-col gap-2 p-4 lg:p-6">
              <span class="text-sm text-gray-400">July 2021 - Jun 2022</span>

              <h2 class="text-xl font-bold">
                <span>New trends in Tech</span>
              </h2>

              <p class="text-gray-500">
                This is a section of some simple filler text, also known as
                placeholder text.
              </p>

              <div>
              <div className="flex flex-wrap gap-2  pt-2 ">
              
                <span
                  
                  className="whitespace-nowrap font-thin rounded-sm bg-sky-500/80 px-1.5 md:px-2.5 py-0.5 text-[10px] md:text-xs text-white font-mono "
                >
                  Java
                </span>
              
            </div>
                <div className="flex  space-x-2 pt-4 ">
                <Link href="#" class="flex gap-2 ring-1 ring-black dark:ring-white px-2 py-1 rounded-md opacity-80 hover:opacity-100 active:scale-95 ">
                <Eye /> Live Demo
                </Link>
                <Link href="#" class="flex gap-2 ring-1 ring-black dark:ring-white px-2 py-1 rounded-md opacity-80 hover:opacity-100 active:scale-95 ">
                <Github /> Source Code
                </Link></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
