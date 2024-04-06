
import Link from "next/link";
import Logo from "./Logo";
import Navlinks from "./Navlinks";
export default function NavBar() {
  return (
    <header className="">
      <nav className="items-center flex justify-between max-w-7xl mx-auto py-5 px-5">
        <Link
          href="/"
          aria-label="Home"
          className="flex space-x-2 items-center text-2xl  font-semibold "
        >
          <Logo 
          />
        </Link>
        <div className="flex space-x-3  sm:space-x-5 items-center font-semibold">
          <Navlinks />
        </div>
      </nav>
    </header>
  );
}
