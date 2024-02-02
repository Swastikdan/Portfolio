import AllProjectData from "./AllProjectData";
import Image from "next/image";
import { Eye, Github } from "lucide-react";
import Link from "next/link";
export default function ProjectPageCard() {
  return (
    <>
  <section className="mt-16">
    <ul className="mx-auto grid max-w-5xl gap-10">
    {AllProjectData.map((project) => (
     
     <li key={project.id} className=" transition-transform duration-300 hover:dark:bg-gray-900/50 hover:bg-gray-200/50 py-4 px-8 rounded-md  ">
       <div className="grid items-center gap-5 md:grid-cols-2 md:gap-10">
         <Image
           src={project.imageSrc}
           sizes="(max-width: 800px) 100vw, 800px"
           loading="eager"
           decoding="sync"
           className="w-full rounded-md bg-white object-cover object-center"
           width="800"
           height="600"
           placeholder='blur'
           blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88RYAAqMBx/7mcfYAAAAASUVORK5CYII='
          alt={`Preview image of ${project.title.toLowerCase()}`}
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
           <div className="flex justify-center md:justify-start  space-x-2 pt-4 text-xs  md:text-sm ">
           <Link
             href={project.url}
             target="_blank"
             className="flex gap-1 ring-1 ring-black dark:ring-white px-2 py-1 rounded-md opacity-80 hover:opacity-100 active:scale-95 items-center "
           >
             <Eye className="p-1" /> Live Demo
           </Link>
           <Link
             href={project.github}
             target="_blank"
             className={`flex gap-2 ring-1 ring-black dark:ring-white px-2 py-1 rounded-md opacity-80 hover:opacity-100 active:scale-95 items-center ${!project.github ? "hidden" : ""}`}
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
