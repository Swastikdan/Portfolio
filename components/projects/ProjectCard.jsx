import Link from "next/link";
import Image from "next/image";
export default function ProjectCard({
  keys,
  title,
  description,
  url,
  imageSrc,
  tags,
  ongoing,
}) {
  return (
    <>
      <Link
        key={keys}
        href={url}
        aria-label={title}
        target="blank" rel="noopener noreferrer"
        className="overflow-hidden rounded-2xl bg-gradient-to-b from-gray-400 to-gray-300 p-px dark:from-gray-500 dark:via-gray-400 dark:to-darker  shadow-sm transition hover:shadow-lg  dark:shadow-gray-700/25  group "
      >
        <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-2 dark:bg-gray-800">
          <article className="">
            <Image
              alt={title}
              src={imageSrc}
              width={1170}
              height={500}
              quality={50}
              priority={true} 
              className="h-56 w-full rounded-xl object-cover shadow-xl transition  group-hover:scale-[1.01] "
            />

            <div className="px-4 py-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {title}
                </h3>
                {ongoing && (
                  <span className="text-sm whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-green-600 border border-green-600">
                    Ongoing
                  </span>
                )}
              </div>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-600 dark:text-gray-400">
                {description.split(" ").slice(0, 30).join(" ")}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 px-4 pt-2 pb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="whitespace-nowrap rounded-full bg-blue-200 px-2.5 py-0.5 text-xs text-blue-600 border border-blue-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </div>
      </Link>
    </>
  );
}
{
  /* <span className="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600">
                JavaScript
              </span>
              <span className="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600">
                JavaScript
              </span>
              <span className="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600">
                JavaScript
              </span>
              <span className="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600">
                JavaScript
              </span>
              <span className="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600">
                JavaScript
              </span>
              <span className="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-blue-600">
                JavaScript
              </span> */
}
