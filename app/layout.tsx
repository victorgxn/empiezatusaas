import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Empieza Tu SaaS | Lanza tu primer SaaS en 90 días",
  description:
    "El roadmap exacto que usaría para lanzar mi SaaS en 90 días, evitando perder meses en cosas innecesarias.",
  generator: "empiezatusaas.com",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased ${_spaceGrotesk.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
