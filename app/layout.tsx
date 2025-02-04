import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kartik Chopra - Frontend Engineer",
  description: "Portfolio of Kartik Chopra, a Frontend Engineer specializing in React and Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

