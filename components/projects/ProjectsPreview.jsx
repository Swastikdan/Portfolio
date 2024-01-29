import ProjectCard from "./ProjectCard";
import Link from "next/link";
import SelectedProjectData from "./SelectedProjectData";
export default function ProjectsPreview() {
  return (
    <>
      <section className="relative py-10 space-y-4  ">
        <div className="flex items-center justify-between">
          <span className="  text-xl md:text-2xl lg:text-4xl font-bold">
            Selected Projects
          </span>
          <Link
            href="/projects"
            aria-label="View All Projects"
            className="inline-flex items-center md:text-lg lg:text-xl font-medium tracking-normal gap-2.5  px-3 py-1 rounded-md  hover:bg-gray-200  dark:hover:bg-gray-700/80 transition-colors duration-300 active:scale-95 "
          >
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 rotate-45 "
            >
              <path
                fillRule="evenodd"
                d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
        <div className=" text-start text-sm md:text-base ">
          Take a look below at some of my best projects.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {SelectedProjectData.map((project) => (
            <ProjectCard
              key={project.id}
              keys={project.id}
              title={project.title}
              description={project.description}
              url={project.url}
              imageSrc={project.imageSrc}
              tags={project.tags}
              ongoing={project.ongoing}
              github={project.github}
              
            />
          ))}
        </div>
      </section>
    </>
  );
}
