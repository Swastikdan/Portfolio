import { Sora } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
const inter = Sora({ subsets: ['latin'] })
import { SpeedInsights } from "@vercel/speed-insights/next"
export const metadata = {
  title: "Portfolio | Swastik Dan",
  description:
    "Explore the portfolio site of Swastik Dan with a range of creative skills and experiences...",
  ogUrl: "https://swastikdan.in/",
};
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="en" />
        <meta name="author" content="....." />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="robots" content="noodp " />
        <title>{metadata.title}</title>
        <link rel="canonical" href={metadata.ogUrl} />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content="Portfolio | Swastik Dan" />
        <meta property="og:description" content="Explore the portfolio site of Swastik Dan with a range of creative skills and experiences..." />
        <meta property="og:url" content={metadata.ogUrl} />
        <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon-precomposed" sizes="60x60" href="apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon-precomposed" sizes="120x120" href="apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon-precomposed" sizes="76x76" href="apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon-precomposed" sizes="152x152" href="apple-touch-icon-152x152.png" />
        <link rel="icon" type="image/png" href="favicon-196x196.png" sizes="196x196" />
        <link rel="icon" type="image/png" href="favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="favicon-128.png" sizes="128x128" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="application-name" content="Personal Portfolio | Swastik Dan" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
        <meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
        <meta name="msapplication-square310x310logo" content="mstile-310x310.png" />
        <meta property="og:url" content="https://www.swastikdan.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Portfolio | Swastik Dan" />
        <meta property="og:description" content="Explore the portfolio site of Swastik Dan with a range of creative skills and experiences..." />
        <meta property="og:image" content="https://swastikdan.in/opengraph-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="swastikdan.in" />
        <meta property="twitter:url" content="https://www.swastikdan.in/" />
        <meta name="twitter:title" content="Portfolio | Swastik Dan" />
        <meta name="twitter:description" content="Explore the portfolio site of Swastik Dan with a range of creative skills and experiences..." />
        <meta name="twitter:image" content="https://swastikdan.in/opengraph-image.png" />
<a rel="me" href="https://hachyderm.io/@swastik">Mastodon</a>
      </head>
      <body className='mx-auto select-none md:select-auto bg-gray-50 dark:bg-gray-950 overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-none
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-none
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-slate-700
  dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 ' >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
           <NavBar />
           <a rel="me" href="https://hachyderm.io/@swastik">Mastodon</a>
          {children}
          <Footer />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
