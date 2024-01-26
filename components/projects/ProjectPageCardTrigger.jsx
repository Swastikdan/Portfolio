"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AllProjectData from "./AllProjectData";
import Image from "next/image";
export default function ProjectPageCardTrigger() {
  return (
    <>
      {AllProjectData.map((project) => (
        <Dialog>
          <DialogTrigger>
            
            <li className=" transition-transform duration-300 p-3 rounded hover:scale-105 hover:border-4   border-gray-600 dark:border-gray-400 -m-5 ">
              <div class="grid items-center gap-5 md:grid-cols-2 md:gap-10">
                <Image
                  src={project.imageSrc}
                  sizes="(max-width: 800px) 100vw, 800px"
                  loading="eager"
                  decoding="sync"
                  class="w-full rounded-md bg-white object-cover object-center"
                  width="800"
                  height="600"
                />
                <div>
                  {project.ongoing ? (
                    <span class="text-green-400 u text-sm  flex">
                      
                      Ongoing
                    </span>
                  ) : (
                    ""
                  )}

                  <h2 class="mt-1  text-center md:text-start text-2xl lg:text-3xl font-semibold ">
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
                          class="text-xs  tracking-wider  text-blue-600 dark:text-blue-400 ring-1 px-1.5 md:px-2 py-0.5 text-[10px] md:text-xs rounded"
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
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      ))}
    </>
  );
}
