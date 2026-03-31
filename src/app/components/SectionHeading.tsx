import { cn } from "../lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  centered?: boolean
}

export default function SectionHeading({ title, subtitle, className, centered = false }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="font-poppins text-3xl md:text-4xl font-bold text-secondary mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-neutralText max-w-2xl">{subtitle}</p>}
    </div>
  )
}
