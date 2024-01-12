import Image from "next/image";
import NavBar from "@/components/navbar/NavBar";
import HeroSection from "@/components/herosction/HeroSection";
import Skills from "@/components/Skills";
import ProjectsPreview from "@/components/projects/ProjectsPreview";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      {/* <div
        aria-hidden="true"
        className="fixed bg-fixed inset-0 grid grid-cols-2 -space-x-52 opacity-20 dark:opacity-20 "
      >
        <div className="blur-[106px] h-96 bg-gradient-to-br from-orange-900/10 to-purple-400 "></div>
        <div className="blur-[106px] h-96 bg-gradient-to-r from-cyan-600 to-sky-500 "></div>
      </div> */}
      <NavBar />
      <main className="pt-20 max-w-7xl mx-auto py-4 px-5 xl:px-0 ">
        <HeroSection />
        <Skills />
        <ProjectsPreview />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
