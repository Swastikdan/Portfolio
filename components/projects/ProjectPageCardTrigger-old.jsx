"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

import AllProjectData from "./AllProjectData";
import Image from "next/image";
export default function ProjectPageCardTrigger() {
  return (
    <>
      {AllProjectData.map((project) => (
        <Dialog>
          <DialogTrigger asChild >
            <li className=" transition-transform duration-300 hover:scale-105  ">
              <div className="grid items-center gap-5 md:grid-cols-2 md:gap-10">
                <Image
                  src={project.imageSrc}
                  sizes="(max-width: 800px) 100vw, 800px"
                  loading="eager"
                  decoding="sync"
                  className="w-full rounded-md bg-white object-cover object-center"
                  width="800"
                  height="600"
                />
                <div>
                  {project.ongoing ? (
                    <span className="text-green-400 text-start px-2 md:px-0 text-sm  flex">
                      Ongoing
                    </span>
                  ) : (
                    ""
                  )}

                  <h2 className="mt-1  text-center md:text-start text-2xl lg:text-3xl font-semibold ">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-center md:text-start py-2">
                    {project.description}
                  </p>
                  <div className="px-3 md:px-1 flex flex-col items-center md:items-start">
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs  tracking-wider  text-blue-600 dark:text-blue-400 ring-1 px-1.5 md:px-2 py-0.5 text-[10px] md:text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </DialogTrigger>
          <DialogContent className="mr-20">
            <DialogHeader>
              <DialogTitle className="pt-10 pb-5 text-2xl">
                {project.title}
              </DialogTitle>
              <DialogDescription  >
                <ScrollArea className="h-[60vh] md:h-[80vh]">
                  <figure className="ms-auto px-4 relative z-[1] max-w-full  h-auto rounded-b-lg ">
                    <div className="relative flex items-center  bg-gray-800 rounded-t-lg py-2 px-24 dark:bg-gray-700">
                      <div className="flex space-x-1 absolute top-2/4 start-4 -translate-y-1">
                        <span className="w-2 h-2 bg-red-600 rounded-full dark:bg-red-600"></span>
                        <span className="w-2 h-2 bg-yellow-600 rounded-full dark:bg-yellow-600"></span>
                        <span className="w-2 h-2 bg-green-600 rounded-full dark:bg-green-600"></span>
                      </div>

                      <div className="flex justify-center items-center w-full h-full bg-gray-700 text-xs text-white rounded-sm sm:text-sm dark:bg-gray-600 ">
                        {project.url}
                      </div>
                    </div>

                    <div className="rounded-b-lg">
                      <ScrollArea className="h-[70vh]">
                        <Image
                          src={project.fullImageSrc}
                          width="2000"
                          height="4000"
                          quality={100}
                          loading="eager"
                          decoding="sync"
                          className="w-full  bg-white object-cover object-center"
                        />
                      </ScrollArea>
                    </div>
                  </figure>
                </ScrollArea>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      ))}
    </>
  );
}
