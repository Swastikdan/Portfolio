import Image from "next/image";
import NavBar from "@/components/navbar/NavBar";
export default function Home() {
  return (
    <>
      <div aria-hidden="true" className="fixed bg-fixed inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 blur-sm">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-orange-300/10 to-purple-400 "></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 "></div>
      </div>
      <NavBar />
    </>
  );
}
