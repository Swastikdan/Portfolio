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
      <div className="techs scale-90 text-center relative pt-16 flex items-center justify-center gap-x-8 reveal-element">
    <svg aria-hidden="true" className="relative z-[11] fill-cyan-900/50 dark:fill-white/60"
      xmlns="http://www.w3.org/2000/svg" height="42px" viewBox="0 0 448 512">
      <path
        d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
    </svg>
    <div className="relative -m-14 rounded-full p-14">
      <div className="absolute inset-0 m-auto rotate-180 w-full h-full scale-[.98]">
        <svg viewBox="0 0 558 558" fill="none" aria-hidden="true" className="w-full h-full animate-spin">
          <defs>
            <linearGradient id=":R3b9m:" x1="79" y1="16" x2="105" y2="237" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0DCAFE"></stop>
              <stop offset="1" stop-color="#13B5C8" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
          <path opacity=".2"
            d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z"
            stroke="#13B5C8"></path>
          <path d="M1 279C1 125.465 125.465 1 279 1" stroke="url(#:R3b9m:)" stroke-linecap="round"></path>
        </svg>
      </div>
      <div className="relative z-20 rounded-full">
        <div className="relative rounded-full overflow-hidden tw-look">
          <div className="absolute dark:opacity-90 inset-0 h-full w-full blur-lg grid gap-2 grid-cols-2 duration-700">
            <div className="h-full scale-y- rounded-tl-full bg-secondary"></div>
            <div className="h-full rounded-tr-full bg-yellow-200 dark:bg-teal-400"></div>
            <div className="h-full rounded-bl-full bg-indigo-400 dark:bg-sky-600"></div>
            <div className="h-full rounded-br-full bg-purple-200 dark:bg-indigo-600"></div>
          </div>
          <div className="relative z-[2] h-20 w-20  rounded-full flex bg-white/80 dark:bg-gray-900/80 scale-[.97]">
            <svg className="w-10 h-auto m-auto text-sky-900/90 dark:text-gray-200" viewBox="0 0 153 92" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M76.5 0.122345C56.1002 0.122345 43.3498 10.3176 38.25 30.7074C45.9 20.5122 54.8248 16.6891 65.025 19.238C70.8444 20.692 75.0041 24.9124 79.6084 29.5832C87.109 37.193 95.7894 46 114.75 46C135.15 46 147.9 35.8048 153 15.4149C145.35 25.6101 136.425 29.4333 126.225 26.8843C120.406 25.4303 116.246 21.2099 111.642 16.5391C104.141 8.9293 95.4606 0.122345 76.5 0.122345ZM38.25 46C17.8502 46 5.0998 56.1952 0 76.5851C7.65 66.3899 16.5748 62.5667 26.775 65.1157C32.5944 66.5697 36.7541 70.7901 41.3584 75.4609C48.859 83.0707 57.5394 91.8777 76.5 91.8777C96.8998 91.8777 109.65 81.6824 114.75 61.2926C107.1 71.4878 98.1752 75.3109 87.975 72.762C82.1556 71.308 77.9959 67.0876 73.3916 62.4168C65.891 54.807 57.2106 46 38.25 46Z"
                fill="currentColor"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <svg aria-hidden="true" className="relative z-[11] fill-cyan-900/50 dark:fill-white/60"
      xmlns="http://www.w3.org/2000/svg" height="42px" viewBox="0 0 448 512">
      <path
        d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z" />
    </svg>
  </div>
      </div>

      <Footer />
    </>
  );
}
