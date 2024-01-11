export default function manifest() {
  return {
    name: "Personal Portfolio Of Swastik Dan",
    short_name: "Swastik Dan",

    description:
      "Explore the portfolio site of Swastik Dan with a range of creative skills and experiences...",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    orientation: "portrait",

    categories: [
      "web developer",
      "web design",
      "website design",
      "web development services",
      "front-end web development",
    ],
    lang: "en-US",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
