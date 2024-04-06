import HeroSection from "@/components/herosction/HeroSection";
import ProjectsPreview from "@/components/projects/ProjectsPreview";
import Skills from "@/components/Skills";
import Contact from "@/components/contact/contact";
export default function Home() {
  return (
    <>
      <section className="max-w-7xl mx-auto items-center px-4 md:px-8">
        <HeroSection />

        <ProjectsPreview />
        <Skills />
        <Contact />
      </section>
    </>
  );
}
