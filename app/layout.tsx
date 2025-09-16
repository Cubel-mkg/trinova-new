import type React from "react"
import type { Metadata } from "next"
import { Kanit } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import WhatsAppWidget from "@/components/whatsapp-widget"

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-kanit",
})

export const metadata: Metadata = {
  title: "Trinova | Desarrollos Inmobiliarios",
  description: "Desarrolladora inmobiliaria enfocada en proyectos residenciales en zonas estratégicas de Buenos Aires.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={kanit.variable}>
      <head>
        <link rel="icon" href="/LOGO_TRINOVA_B&N.svg" />
      </head>
      <body className={`${kanit.className} antialiased`}>
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  )
}
