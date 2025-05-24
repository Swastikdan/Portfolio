import type { APIRoute } from "astro";

const manifest = {
  name: "Swastik Dan | Portfolio",
  short_name: "Swastik Dan",
  description:
    "Explore the portfolio site of Swastik Dan with a range of creative skills and experiences...",
  start_url: "/",
  display: "standalone",
  background_color: "#171717",
  theme_color: "#171717",
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
      src: "https://sdhwfcnr1k.ufs.sh/f/fce7dbfd-81b5-49b9-93c3-73b673beb23b-ephj4t.svg",
      sizes: "192x192",
      type: "image/svg+xml",
    },
    {
      src: "https://sdhwfcnr1k.ufs.sh/f/fce7dbfd-81b5-49b9-93c3-73b673beb23b-ephj4t.svg",
      sizes: "512x512",
      type: "image/svg+xml",
    },
  ],
};

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(manifest), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
};
