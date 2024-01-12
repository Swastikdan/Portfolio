import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import TechStacks from "@/components/TechStacks";
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
      <main className="pt-20 max-w-7xl mx-auto  px-5 relative ">
        <h1 className="text-3xl md:text-6xl font-black text-center md:pt-20 py-5 ">
          About
        </h1>
        <h3 className="text-sm md:text-base lg:text-xl font-normal text-gray-600 dark:text-gray-400  text-center items-center mx-auto max-w-[37ch] pb-5">
          Thanks for stopping by. Read below to learn more about myself and my
          background.
        </h3>
        <AboutMe />
        <Education />
        <TechStacks />
      </main>
      <ContactPromotionStrip />
      <Footer />
    </>
  );
}
