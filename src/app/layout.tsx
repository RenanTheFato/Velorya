import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <link rel="icon" type="image/x-icon" href="favicon.svg" />
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  )
}