import { Outfit } from "next/font/google"
import "./globals.css"

export const metadata = {
  title: "QR Code",
  description: "QR code component created with Next.js",
}

const font = Outfit({
  subsets: [ "latin"],
  weight: [ "400", "700" ]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
