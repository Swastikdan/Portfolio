import { Codesandbox, ScanSearch, Route } from "lucide-react";
const skills = [
  {
    id: 1,
    title: "Full Stack",
    icon: <Codesandbox />,
    description:
      "Proficient in front-end and back-end technologies, databases, and debugging.",
  },
  {
    id: 2,
    title: "SEO & Marketing",
    icon: <ScanSearch />,
    description:
      "Experienced in optimizing websites for search engines and marketing strategies.",
  },
  {
    id: 3,
    title: "Strategy-Minded",
    icon: <Route />,
    description:
      "Able to develop effective strategies and solve complex problems.",
  },
];
export default function Skills() {
  return (
    <section
      className="max-w-7xl mx-auto px-2 sm:px-5"
      aria-label="Skills section"
    >
      <div className="pt-5 md:px-10">
        <div className="relative grid overflow-hidden rounded-[1.25rem]  p-1 bg-gray-800/50 md:grid-cols-3 border-[2px] border-gray-800">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col gap-6 rounded-2xl p-8 m-2 transition duration-300 bg-gray-700/60"
              aria-label={`Skill: ${skill.title}`}
            >
              {skill.icon}

              <div>
                <h2 className=" font-semibold text-white text-base md:text-lg">
                  {skill.title}
                </h2>
                <p className="mt-3 text-gray-400 text-xs md:text-sm">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
