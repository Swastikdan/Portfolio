"use client";
import React, { useEffect, useState } from "react";
import Logo from "@/components/icons/Logo";
import NavMenu from "./NavMenu";
import Link from "next/link";

export default function NavBar() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navClass, setNavClass] = useState("");
  const [bgClass, setBgClass] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const scrollDistance = 80;

      if (scrollY > lastScrollTop) {
        // Scrolling down
        setNavClass("slide-up");
      } else {
        // Scrolling up
        setNavClass("slide-down");
      }

      if (scrollY >= scrollDistance) {
        setBgClass("bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-md");
      } else {
        setBgClass("");
      }

      setLastScrollTop(scrollY);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollTop]);

  return (
    <header>
      <nav
        className={`fixed inset-x-0 top-0 z-50 duration-200  ${navClass} ${bgClass}`}
      >
        <div className="items-center flex justify-between max-w-7xl mx-auto py-5 px-5">
          <Link
            href="/"
            aria-label="Home"
            className="flex space-x-2 items-center text-2xl  font-semibold "
          >
            <Logo width={50} height={50} className="w-10 h-10 md:w-12 hover:scale-105 hover:-rotate-6 transition-all duration-200 " />
            {/* <span className="hidden sm:flex">Swastik Dan</span> */}
          </Link>
          <NavMenu />
        </div>
      </nav>
    </header>
  );
}
