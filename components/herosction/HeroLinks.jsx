import Link from "next/link"
import {MoveRight } from "lucide-react";
export default function HeroLinks({link , text }) {
  return (
    <Link href={link} class="block group font-bold">
    <div
      class="relative before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-sky-300 before:mx-auto before:mt-auto  before:bg-sky-600 before:transition before:scale-x-0 group-hover:before:scale-x-100 "
    >
      
      <span class="transition text-sky-500  dark:text-sky-400 flex items-center space-x-2  ">
      <MoveRight className="text-gray-800 "  /> <span> {text}</span>
      </span>
    </div>
  </Link>
  )
}
