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
    <section className="max-w-7xl">
      <div className="py-10 md:py-20 md:px-10">
        <div class="relative grid overflow-hidden rounded-[1.25rem] bg-gray-200/50 p-1 dark:bg-gray-800/50 sm:grid-cols-3 border-[2px] border-gray-300 dark:border-gray-800">
          {skills.map((skill) => (
            <div
              key={skill.id}
              class="flex flex-col gap-6 rounded-2xl p-8 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 dark:hover:bg-gray-700/60 dark:hover:shadow-none"
            >
              {skill.icon}

              <div>
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                  {skill.title}
                </h2>
                <p class="mt-3 text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
