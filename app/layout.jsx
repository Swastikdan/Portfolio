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
        <link rel="apple-touch-icon-precomposed" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
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
