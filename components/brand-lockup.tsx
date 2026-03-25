import Image from "next/image"

import { cn } from "@/lib/utils"

type BrandLockupProps = {
  className?: string
  imageClassName?: string
  titleClassName?: string
  subtitle?: string
  subtitleClassName?: string
  align?: "left" | "center"
  size?: "sm" | "md" | "lg"
}

const SIZE_STYLES = {
  sm: {
    container: "gap-2.5",
    image: "size-9",
    title: "text-lg",
    subtitle: "text-[11px]",
  },
  md: {
    container: "gap-3",
    image: "size-11",
    title: "text-xl",
    subtitle: "text-xs",
  },
  lg: {
    container: "gap-4",
    image: "size-14",
    title: "text-5xl sm:text-6xl",
    subtitle: "text-sm",
  },
} as const

export function BrandLockup({
  className,
  imageClassName,
  titleClassName,
  subtitle,
  subtitleClassName,
  align = "left",
  size = "md",
}: BrandLockupProps) {
  const styles = SIZE_STYLES[size]
  const imageSizes = size === "lg" ? "56px" : size === "md" ? "44px" : "36px"

  return (
    <div
      className={cn(
        "flex items-center",
        styles.container,
        align === "center" && "justify-center text-center",
        className,
      )}
    >
      <div
        className={cn(
          "relative shrink-0 overflow-hidden",
          styles.image,
          imageClassName,
        )}
      >
        <Image src="/ops-logo.png" alt="OPS logo" fill sizes={imageSizes} className="object-contain" />
      </div>
      <div className={cn("flex min-w-0 flex-col", align === "center" && "items-center")}>
        <span
          className={cn(
            "font-brand leading-none tracking-wide text-foreground",
            styles.title,
            titleClassName,
          )}
        >
          OPS
        </span>
        {subtitle ? (
          <span
            className={cn(
              "text-muted-foreground mt-1 max-w-[26ch] leading-tight",
              styles.subtitle,
              subtitleClassName,
            )}
          >
            {subtitle}
          </span>
        ) : null}
      </div>
    </div>
  )
}
