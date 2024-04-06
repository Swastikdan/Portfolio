import Link from "next/link";
import { Eye, Github } from "lucide-react";
import Image from "next/image";
export default function ProjectCard({
  title,
  description,
  url,
  imageSrc,
  tags,
  ongoing,
  github,
}) {
  return (
    <>
  <div class="group flex flex-col h-full shadow-sm rounded-xl border bg-gray-900/50 border-gray-500 shadow-gray-600/[.7]">
  <Image
    src={imageSrc}
    alt={`Project ${title}`}
    width={1170}
    height={500}
    quality={50}
    className="h-52 bg-gray-600 rounded-t-xl object-cover object-center"
  />

  <div class="p-3 md:pt-4 md:pb-6">
    <div className="flex items-center justify-between">
      <h3 class="text-xl font-semibold text-gray-300 hover:text-white">
        {title}
      </h3>
      {ongoing && (
        <span className="text-xs  font-light text-green-400 px-2 py-.5 bg-green-900 rounded-sm">
          Ongoing
        </span>
      )}
    </div>
    <p class=" text-gray-500 text-xs sm:text-sm">
      {description.split(" ").slice(0, 30).join(" ")}
    </p>
    <div className="flex flex-wrap gap-1  pt-3">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-[8px] md:text-[9px] inline-flex items-center gap-1.5 py-1 px-2 rounded-md  font-medium  bg-gray-700 text-gray-200"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>

  <div class="mt-auto flex border-t divide-x border-gray-500 divide-gray-700">
    <Link
      href={url}
      target="_blank"
      aria-label="Link to live demo of project"
      rel="noopener noreferrer" // improves security for links that open in a new tab
      class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl   shadow-sm  disabled:opacity-50 disabled:pointer-events-none bg-gray-900/50 border-gray-500 text-white hover:bg-gray-800"
    >
      <Eye className="p-1" aria-hidden="true" /> Live Demo
    </Link>
    <Link
      href={github}
      target="_blank"
      aria-label="Link to source code of project"
      rel="noopener noreferrer" // improves security for links that open in a new tab
      class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl  shadow-sm  disabled:opacity-50 disabled:pointer-events-none bg-gray-900/50 border-gray-500 text-white hover:bg-gray-800"
    >
      <Github className="p-1" aria-hidden="true" /> Source Code
    </Link>
  </div>
</div>
    </>
  );
}
