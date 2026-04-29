import { Inter } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "OPS — Open-source Operations Manager",
  description:
    "A native desktop app for product management, inventory, sales, and analytics. Built on Supabase with real-time sync and role-based access control.",
  icons: {
    icon: "/ops-logo.png",
    shortcut: "/ops-logo.png",
    apple: "/ops-logo.png",
  },
  other: {
    google: "notranslate",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("antialiased", inter.variable)}>
      <body translate="no">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
