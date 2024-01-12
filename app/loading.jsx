import NavBar from "@/components/navbar/NavBar";

import Footer from "@/components/footer/Footer";

export default function loading() {
  return (
    <>
      <div
        aria-hidden="true"
        className="fixed bg-fixed inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 blur-sm"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-orange-300/10 to-purple-400 "></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 "></div>
      </div>

      <NavBar />
      <div className="relative grid h-screen place-content-center  px-4 animate-pulse">
        <h1 className="uppercase tracking-widest text-gray-500 dark:text-gray-400">
          loading...
        </h1>
      </div>

      <Footer />
    </>
  );
}
