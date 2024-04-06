import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import TechStacks from "@/components/TechStacks";
export const metadata = {
  title: "About | Swastik Dan",
  
};
export default function page() {
  return (
    <section className="max-w-7xl mx-auto  px-4 md:px-8 relative ">
      <h1 className="text-3xl md:text-6xl font-black text-center  py-5 ">
        About
      </h1>
      <h2 className="text-sm md:text-base lg:text-xl font-normal text-gray-400  text-center items-center mx-auto max-w-[37ch] pb-5">
        Thanks for stopping by. Read below to learn more about myself and my
        background.
      </h2>
      <div aria-label="About Me Section">
        <AboutMe />
      </div>
      <div aria-label="Education Section">
        <Education />
      </div>
      <div aria-label="Tech Stacks Section">
        <TechStacks />
      </div>
    </section>
  );
}
