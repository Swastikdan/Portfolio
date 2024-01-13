import Image from "next/image";
import TechStack from "@/components/TechStack";
export default function TechStacks() {
  return (
    <>
    
    <h2 className="text-2xl font-bold text-sky-800 dark:text-white lg:mb-0 lg:text-3xl pt-10 underline-offset-8 underline">
          Skills
        </h2>
        <p className=" pt-5 text-base text-gray-600">Tools and Frameworks I use</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-10 py-5 pb-20">
          {TechStack.map((tech, index) => (
            <div
              key={index}
              className="flex space-x-2 items-center justify-center px-2 md:px-3 py-2 rounded-lg bg-gray-300  dark:bg-gray-600"
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                width={50}
                height={50}
                className="h-8 w-8 md:h-10 md:w-10 p-1 bg-white rounded-xl"
              />
              <span className=" text-sm md:text-lg font-semibold ">
                {" "}
                {tech.name}{" "}
              </span>
            </div>
          ))}
        </div>
    
    </>
  )
}
