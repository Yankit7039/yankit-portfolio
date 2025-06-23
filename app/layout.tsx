import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yankit Rajor - Full Stack Developer & Data Science Student",
  description:
    "Full Stack Developer and Data Science student specializing in MERN stack, IoT solutions, and intelligent web applications. LeetCode rating: 1513.",
  keywords: "Full Stack Developer, MERN Stack, Data Science, React, Node.js, IoT, Machine Learning, Portfolio",
  authors: [{ name: "Yankit Rajor" }],
  icons: {
    icon: '/letter-y.png',
    shortcut: '/letter-y.png',
    apple: '/letter-y.png'
  },
  openGraph: {
    title: "Yankit Rajor - Full Stack Developer & Data Science Student",
    description: "Full Stack Developer specializing in MERN stack, IoT solutions, and intelligent web applications.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>{children}</body>
    </html>
  )
}
