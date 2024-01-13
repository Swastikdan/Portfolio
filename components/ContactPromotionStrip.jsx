import React from "react";
import {Send } from "lucide-react";
export default function ContactPromotionStrip() {
  return (
    <div className="relative before:absolute before:inset-0 before:h-px  before:bg-gradient-to-r before:from-yellow-300 before:via-pink-400 before:to-transparent after:absolute after:inset-0 after:ml-auto after:mt-auto after:h-px after:bg-gradient-to-l after:from-yellow-300 after:via-pink-400 after:to-transparent py-10">
      <div className="max-w-7xl mx-auto px-5 relative flex flex-col lg:flex-row lg:justify-between items-center space-y-10">
        <span className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Interested in working together?
        </span>
        <a
          href="mailto:contact@swastikdan.in "
          aria-label="Contact Me"
          className="group inline-flex py-2 items-center gap-2.5 rounded-md bg-gray-300 hover:bg-gray-300/70 px-4 transition-all duration-500 dark:bg-gray-600 dark:hover:bg-gray-700 max-w-fit"
        >
          <span className="text-lg lg:text-xl font-medium tracking-normal">
            Send Me a Message
          </span>
          <Send />
        </a>
      </div>
    </div>
  );
}
