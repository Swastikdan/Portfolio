import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import ProjectPageCard from "@/components/projects/ProjectPageCard";
import AllProjectData from "@/components/projects/AllProjectData";
import ContactPromotionStrip from "@/components/ContactPromotionStrip";
export default function page() {
  return (
    <>
      <NavBar />
      <div
        aria-hidden="true"
        className="absolute inset-0 top-0 grid grid-cols-2 space-x-52 opacity-30 dark:opacity-20"
      >
        <div className="h-60 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
        <div className="h-40 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
      </div>
      <main className=" relative pt-20 max-w-7xl mx-auto py-4 px-5">
        <h1 className="text-3xl md:text-6xl font-black text-center md:pt-20 py-5 ">
          Projects
        </h1>
        <h2 className="text-sm md:text-base lg:text-xl font-normal text-gray-600 dark:text-gray-400  text-center items-center mx-auto max-w-[37ch] pb-10">
          Here are some of my projects. I am always working on something new.
        </h2>
        <div className="py-10">
          <ProjectPageCard AllProjectData={AllProjectData} />
        </div>

        <div className="flex justify-between">
          <div></div>
          <span className="text-sm md:text-base ">More coming soon .. </span>
        </div>
      </main>
      <ContactPromotionStrip />
      <Footer />
    </>
  );
}
