import Link from "next/link";
import Image from "next/image";
import { Eye, Github } from "lucide-react";
export default function ProjectCard({
  keys,
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
      <div
        key={keys}
        aria-label={title}
        target="blank"
        rel="noopener noreferrer"
        className="overflow-hidden rounded-2xl bg-gradient-to-b from-gray-400 to-gray-300 p-px dark:from-gray-500 dark:via-gray-400 dark:to-darker  shadow-sm transition hover:shadow-lg  dark:shadow-gray-700/25  group "
      >
        <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-2 dark:bg-gray-800">
          <article className="">
            <div className="group relative flex h-56 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <Image
                alt={title}
                src={imageSrc}
                width={1170}
                height={500}
                quality={50}
                priority={true}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88RYAAqMBx/7mcfYAAAAASUVORK5CYII="
                className="absolute inset-0 h-56 w-full object-cover object-center  shadow-xl transition  group-hover:scale-[1.01] "
              />
              <div className="h-56 pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              {ongoing && (
                <span className="relative mr-3 mb-3 text-xs whitespace-nowrap rounded-md bg-green-500/80 px-2.5 py-0.5 text-white">
                  Ongoing
                </span>
              )}
            </div>

            {/* <Image
              alt={title}
              src={imageSrc}
              width={1170}
              height={500}
              quality={50}
              priority={true} 
              className="h-56 w-full rounded-xl object-cover shadow-xl transition  group-hover:scale-[1.01] "
            /> */}

            <div className="px-4 py-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {title}
                </h3>
              </div>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-600 dark:text-gray-400">
                {description.split(" ").slice(0, 30).join(" ")}
              </p>
            </div>
            <div className="flex px-4 justify-start  space-x-2 pb-4 text-xs   ">
              <Link
                href={url}
                target="_blank"
                className="flex gap-1 ring-1 ring-black dark:ring-white px-2 py-1 rounded-md opacity-80 hover:opacity-100 active:scale-95 items-center "
              >
                <Eye className="p-1" /> Live Demo
              </Link>
              <Link
                href={github}
                target="_blank"
                className={`flex gap-2 ring-1 ring-black dark:ring-white px-2 py-1 rounded-md opacity-80 hover:opacity-100 active:scale-95 items-center ${
                  !github ? "hidden" : ""
                }`}
              >
                <Github className="p-1" /> Source Code
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 px-4 pt-2 pb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="whitespace-nowrap font-light rounded-sm  px-1.5 md:px-2.5 py-0.5 text-[10px] md:text-xs ring-1 ring-black dark:ring-white  bg-white dark:bg-black "
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
