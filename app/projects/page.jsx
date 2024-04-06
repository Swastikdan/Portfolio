import React from "react";
import ProjectPageCard from "@/components/projects/ProjectPageCard";
import AllProjectData from "@/components/projects/AllProjectData";
export const metadata = {
  title: "Projects | Swastik Dan",
  
};
export default function page() {
  return (
    <section
      className="relative max-w-7xl mx-auto py-4 px-4 md:px-8"
      aria-labelledby="projects-heading"
      aria-describedby="projects-description"
    >
      <h1
        id="projects-heading"
        className="text-3xl md:text-6xl font-black text-center py-5"
      >
        Projects
      </h1>
      <h2
        id="projects-description"
        className="text-sm md:text-base lg:text-xl font-normal text-gray-400 text-center items-center mx-auto max-w-[37ch]"
      >
        Here are some of my projects. I am always working on something new.
      </h2>

      <ProjectPageCard AllProjectData={AllProjectData} tabIndex="0" />

      <div className="flex justify-between pb-20">
        <div></div>
        <span className="text-xs md:text-sm py-5">More coming soon ... </span>
      </div>
    </section>
  );
}
