import Link from "next/link";
export default function NotFound() {
  return (
    <>
      <div className="relative grid h-screen place-content-center  px-4 ">
        <div className="text-center">
          <h1 className="text-9xl font-black text-gray-200">404</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-500 sm:text-4xl">
            Uh-oh!
          </p>

          <p className="mt-4 text-gray-300  mb-10">We can't find that page.</p>

          <Link
            href="/"
            aria-label="About Me"
            className="text-base font-medium tracking-normal gap-2.5 px-5 py-2 rounded-md  hover:bg-gray-700 transition-colors duration-300 active:scale-95 "
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
}
