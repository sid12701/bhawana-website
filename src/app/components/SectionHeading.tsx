import { cn } from "../lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  centered?: boolean
  as?: "h1" | "h2"
}

export default function SectionHeading({ title, subtitle, className, centered = false, as: Heading = "h2" }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <Heading className="font-poppins text-3xl md:text-4xl font-bold text-secondary mb-4">{title}</Heading>
      {subtitle && <p className={cn("text-lg text-neutralText max-w-2xl", centered && "mx-auto")}>{subtitle}</p>}
    </div>
  )
}
