import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { siteConfig } from "@/lib/config"
import "./globals.css"

const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Empieza Tu SaaS | Lanza tu primer SaaS en 90 días",
    template: "%s | Empieza Tu SaaS"
  },
  description: siteConfig.description,
  generator: "empiezatusaas.com",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: siteConfig.url
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'es_ES',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
