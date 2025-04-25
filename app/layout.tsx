import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PropertyDirect - Find Properties Without Brokers",
  description: "Search and list properties without broker fees",
    generator: 'my dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-vh-100">{children}</main>
        <Footer />
      </body>
    </html>
  )
}


import './globals.css'