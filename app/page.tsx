"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Github,
  Package,
  BarChart3,
  ShoppingCart,
  Warehouse,
  Check,
  Copy,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const INSTALL_COMMAND = "curl -fsSL https://raw.githubusercontent.com/polterware/ops/main/install.sh | bash"
const GITHUB_URL = "https://github.com/polterware/ops"

const features = [
  {
    icon: Package,
    title: "Product Management",
    description: "Full catalog with variants, pricing, and media.",
  },
  {
    icon: Warehouse,
    title: "Inventory",
    description: "Real-time stock tracking with reservation workflows.",
  },
  {
    icon: ShoppingCart,
    title: "Sales & Orders",
    description: "POS-ready order flow with status transitions and refunds.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Revenue, top products, and operational dashboards.",
  },
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button variant="ghost" size="icon-sm" onClick={handleCopy} className="shrink-0 text-muted-foreground hover:text-foreground">
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
    </Button>
  )
}

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        <span className="font-brand text-xl tracking-wide">OPS</span>
        <Button variant="outline" size="sm" asChild>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            <Github className="size-3.5" data-icon="inline-start" />
            GitHub
          </a>
        </Button>
      </header>

      <Separator />

      {/* Hero — split layout */}
      <main className="flex flex-1 flex-col items-center gap-20 px-6 py-20">
        <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left — text + features */}
          <div className="flex flex-col items-start gap-6">
            <h1 className="font-brand text-5xl tracking-tight sm:text-6xl">OPS</h1>
            <p className="text-lg text-muted-foreground">
              Open-source operations manager. Products, inventory, sales, and analytics in a native
              desktop app — powered by Supabase.
            </p>

            {/* Install command */}
            <div className="w-full max-w-lg flex flex-col gap-2">
              <p className="text-sm font-medium text-muted-foreground">
                Install using the command below:
              </p>
              <div className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3 font-mono text-sm">
                <code className="flex-1 select-all truncate">{INSTALL_COMMAND}</code>
                <CopyButton text={INSTALL_COMMAND} />
              </div>
            </div>

            {/* Features grid */}
            <div className="grid w-full grid-cols-2 gap-3 pt-4">
              {features.map((feature) => (
                <Card key={feature.title} className="bg-card/50">
                  <CardHeader>
                    <div className="mb-2 flex size-8 items-center justify-center rounded-md bg-primary/10">
                      <feature.icon className="size-4 text-primary" />
                    </div>
                    <CardTitle className="text-sm">{feature.title}</CardTitle>
                    <CardDescription className="text-xs">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Right — screenshots */}
          <div className="flex flex-col gap-6">
            <Image src="/screenshots/products.png" alt="Product catalog" width={1400} height={900} className="w-full rounded-xl" />
            <Image src="/screenshots/analytics.png" alt="Analytics dashboard" width={1400} height={900} className="w-full rounded-xl" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Separator />
      <footer className="flex items-center justify-between px-6 py-4 text-xs text-muted-foreground">
        <span className="font-brand tracking-wide">OPS</span>
        <span>
          Built by{" "}
          <a
            href="https://polterware.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline-offset-4 hover:underline"
          >
            Polterware
          </a>
        </span>
      </footer>
    </div>
  )
}
