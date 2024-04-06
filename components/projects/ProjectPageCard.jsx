import AllProjectData from "./AllProjectData";
import Imaage from "next/image";
import { Eye, Github } from "lucide-react";
import Link from "next/link";
export default function ProjectPageCard() {
  return (
    <>
      <section className="mt-16" aria-labelledby="project-list-heading">
        <h2 id="project-list-heading" className="sr-only">
          Project List
        </h2>
        <ul className="mx-auto grid max-w-5xl gap-10">
          {AllProjectData.map((project) => (
            <li
              key={project.id}
              className="transition-transform duration-300 hover:bg-gray-900 ring-[2px] ring-gray-900 px-2 py-2 md:py-4 md:px-4 rounded-md"
              tabIndex="0"
            >
              <div className="grid items-center gap-5 md:grid-cols-2 md:gap-10">
                <Imaage
                  src={project.imageSrc}
                  width={800}
                  height={350}
                  quality={100}
                  loading="lazy"
                  className="w-full rounded-md bg-gray-600 object-cover object-center"
                  alt={`Preview image of ${project.title.toLowerCase()}`}
                />
                <div>
                  {project.ongoing && (
                    <span className="text-xs  font-light text-green-400 px-2 py-.5 bg-green-900 rounded-sm">
                      Ongoing
                    </span>
                  ) }

                  <h2 className="mt-1  text-center md:text-start text-2xl lg:text-3xl font-semibold ">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 text-center md:text-start py-2">
                    {project.description}
                  </p>
                  <div className="px-3 md:px-1 flex flex-col items-center md:items-start">
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] inline-flex items-center gap-1.5 py-1 px-3 rounded-md  font-medium  bg-gray-700 text-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-start  space-x-2 pt-4 text-xs  md:text-sm ">
                    <Link
                      href={project.url}
                      target="_blank"
                      className="flex gap-1 ring-1 ring-white px-2 py-1 rounded-md opacity-80 hover:opacity-100 active:scale-95 items-center "
                      aria-label="Live Demo"
                    >
                      <Eye className="p-1" /> Live Demo
                    </Link>
                    <Link
                      href={project.github}
                      target="_blank"
                      className={`flex gap-2 ring-1 ring-white px-2 py-1 rounded-md opacity-80 hover:opacity-100 active:scale-95 items-center ${
                        !project.github ? "hidden" : ""
                      }`}
                      aria-label="Source Code"
                    >
                      <Github className="p-1" /> Source Code
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
