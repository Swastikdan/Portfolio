import Link from "next/link";
import Image from "next/image";
import { Eye, Github } from "lucide-react";
export default function ProjectPageCard({ AllProjectData }) {
  return (
    <>
      <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:gap-6 xl:gap-8">
        {AllProjectData.map((project) => (
          <div class="flex flex-col items-center overflow-hidden rounded-lg border-2 border-gray-400 dark:border-gray-600  md:flex-row bg-gray-100 dark:bg-gray-950">
            <div
              class="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-56"
            >
              <Image
                src={project.imageSrc}
                priority={true}
                width={600}
                height={400}
                
                alt={project.title}
                class="absolute inset-0 h-full w-full object-cover object-center "
              />
            </div>

            <div class="flex flex-col gap-2 p-4 lg:p-6">
              <span class="text-sm text-gray-400">{project.date}</span>

              <h2 class="text-xl font-bold">
                <span>{project.title}</span>
              </h2>

              <p class="text-gray-600 dark:text-gray-400">{project.description}</p>

              <div>
                <div className="flex flex-wrap gap-2  pt-2 ">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="whitespace-nowrap rounded-sm bg-black dark:bg-white px-1.5 md:px-2.5 py-0.5 text-[10px] md:text-xs text-white dark:text-black "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex  space-x-2 pt-4 text-xs  md:text-sm ">
                  <Link
                    href={project.url}
                    class="flex gap-1 ring-1 ring-black dark:ring-white px-2 py-1 rounded-md opacity-80 hover:opacity-100 active:scale-95 items-center "
                  >
                    <Eye className="p-1" /> Live Demo
                  </Link>
                  <Link
                    href={project.github}
                    class="flex gap-2 ring-1 ring-black dark:ring-white px-2 py-1 rounded-md opacity-80 hover:opacity-100 active:scale-95 items-center "
                  >
                    <Github className="p-1" /> Source Code
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
