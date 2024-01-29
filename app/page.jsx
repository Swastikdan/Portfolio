

import NavBar from "@/components/navbar/NavBar";
import HeroSection from "@/components/herosction/HeroSection";
import Skills from "@/components/Skills";
import ProjectsPreview from "@/components/projects/ProjectsPreview";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pt-20 max-w-7xl mx-auto py-4 px-5 ">
        <HeroSection />
        <Skills />
        <ProjectsPreview />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

// "use client";
// import { useState, useEffect } from 'react';
// import NavBar from "@/components/navbar/NavBar";
// import HeroSection from "@/components/herosction/HeroSection";
// import Skills from "@/components/Skills";
// import ProjectsPreview from "@/components/projects/ProjectsPreview";
// import Contact from "@/components/contact/Contact";
// import Footer from "@/components/footer/Footer";
// import Logo from '@/components/icons/Logo';
// export default function Home() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 0); // Change this to the amount of time you want the preloader to show

//     return () => clearTimeout(timer); // This will clear the timer when the component unmounts
//   }, []);

//   if (loading) {
//     return (    <>
    
//       <div className="relative grid h-screen place-content-center  px-4 ">
//         <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
//           <div className="flex justify-center">
//             <Logo />
//               <span className="sr-only">Loading...</span>
//             </div>
//           </div>
//         </div>
    

     
//     </>); // Replace this with your preloader component
//   }

//   return (
//     <>
//       <NavBar />
//       <main className="pt-20 max-w-7xl mx-auto py-4 px-5 ">
//         <HeroSection />
//         <Skills />
//         <ProjectsPreview />
//         <Contact />
//       </main>

//       <Footer />
//     </>
//   );
// }



