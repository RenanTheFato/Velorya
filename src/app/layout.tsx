import "./globals.css";
import { Source_Sans_3, Work_Sans, Merriweather } from 'next/font/google'

const sourceSans = Source_Sans_3({ 
  subsets: ["latin"], 
  variable: "--font-source-sans" 
})

const sourceSerif = Merriweather({ 
  subsets: ["latin"],
  weight: ["300","400", "700", "900"],
  variable: "--font-merriweather" 
})

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${sourceSerif.variable} ${workSans.variable}`}>
      <link rel="icon" type="image/x-icon" href="favicon.svg" />
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  )
}