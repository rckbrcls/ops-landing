"use client"

import { useState } from "react"
import {
  Github,
  Package,
  BarChart3,
  ShoppingCart,
  Warehouse,
  Check,
  Copy,
} from "lucide-react"
import Image from "next/image"

import { BrandLockup } from "@/components/brand-lockup"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

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
    <div className="flex h-svh flex-col">
      {/* Header */}
      <header className="flex flex-wrap items-center justify-between gap-4 px-6 py-3">
        <div className="flex items-center gap-2">
          <BrandLockup size="sm" />
          <Badge variant="secondary" className="text-[10px] font-medium uppercase tracking-widest">alpha</Badge>
        </div>
        <Button variant="outline" size="sm" asChild>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            <Github className="size-3.5" data-icon="inline-start" />
            GitHub
          </a>
        </Button>
      </header>

      {/* Hero — split layout */}
      <main className="flex min-h-0 flex-1 items-center justify-center overflow-hidden px-6 py-6">
        <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-6 lg:grid-cols-2">
          {/* Left — text + features */}
          <div className="flex flex-col items-start gap-4">
            <h1 className="max-w-3xl font-brand text-4xl leading-none tracking-tight sm:text-5xl lg:text-6xl">
              One desktop workspace for products, inventory, sales, and analytics.
            </h1>

            {/* Install command */}
            <div className="flex w-full flex-col gap-2 pt-1">
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground/80">
                Quick install
              </span>
              <div className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3 font-mono text-sm">
                <code className="flex-1 select-all truncate">{INSTALL_COMMAND}</code>
                <CopyButton text={INSTALL_COMMAND} />
              </div>
            </div>

            {/* Features grid */}
            <div className="grid w-full grid-cols-2 gap-3 pt-2">
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
          <div className="hidden grid-rows-2 lg:grid" style={{ height: "calc(100svh - 8rem)" }}>
            <div className="relative min-h-0">
              <Image src="/screenshots/products.png" alt="Product catalog" fill className="rounded-xl object-contain object-center" />
            </div>
            <div className="relative min-h-0">
              <Image src="/screenshots/analytics.png" alt="Analytics dashboard" fill className="rounded-xl object-contain object-center" />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-center px-6 py-2.5 text-xs text-muted-foreground">
        <span className="text-center">
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
