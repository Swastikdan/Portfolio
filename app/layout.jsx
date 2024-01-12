import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
const inter = Space_Grotesk({ subsets: ['latin'] })
export const metadata = {
  title: "Portfolio | Swastik Dan",
  description:
    "Stayz is a web application that helps users find the best home deals in their desired location. We offer a wide range of homes to choose from, with competitive prices and excellent customer service.",
  ogUrl: "https://swastikdan.in/",
};

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
        <meta property="og:description" content="Stayz is a web application that helps users find the best home deals in their desired location. We offer a wide range of homes to choose from, with competitive prices and excellent customer service." />
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
        <meta name="application-name" content="Personal Portfolio | Swastik Dan" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
        <meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
        <meta name="msapplication-square310x310logo" content="mstile-310x310.png" />
        <meta property="og:image" content="opengraph-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Explore the portfolio site of Swastik Dan with a range of creative skills and experiences, including problem solving, research, and proficiency in Full Stack Web Development" />
        <meta name="twitter:image" content="twitter-image.png" />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:alt" content="Explore the portfolio site of Swastik Dan with a range of creative skills and experiences, including problem solving, research, and proficiency in Full Stack Web Development" />
      </head>
      <body  className='mx-auto select-none md:select-auto bg-gray-100 dark:bg-gray-900 ' >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
