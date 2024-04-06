import Image from "next/image";
import TechStack from "@/components/TechStack";
export default function TechStacks() {
  return (
    <>
      <h2 className="text-2xl font-bold text-white lg:mb-0 lg:text-3xl pt-10 underline-offset-8 underline ">
        Skills
      </h2>
      <p className=" pt-5 text-base text-gray-300">
        Tools and Frameworks I use
      </p>

      <div className="flex flex-wrap gap-2 py-5 pb-20" role="list">
        {TechStack.map((tech, index) => (
          <div
            key={index}
            class="inline-flex flex-nowrap items-center rounded-xl p-1.5 pe-3 bg-slate-500/20 text-slate-400"
            role="listitem"
            aria-label={tech.title}
          >
            <Image
              class="me-1.5 inline-block size-8 rounded-lg bg-white p-1"
              src={tech.logo}
              width={32}
              height={32}
              alt={tech.title}
            />
            <div class="whitespace-nowrap text-base font-medium ">
              {tech.title}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
