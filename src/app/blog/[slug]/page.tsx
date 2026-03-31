import type React from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "../../components/ui/button"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

type ImportResult = {
  default: React.ComponentType
  meta: {
    slug: string
    title: string
    description: string
    date?: string
    coverImage?: string | any
    readingTime?: string
  }
}

const postImports: Record<string, () => Promise<ImportResult>> = {
  "why-taking-a-personal-loan-is-beneficial": () => import("@/content/blog/why-taking-a-personal-loan-is-beneficial"),
  "how-do-i-unite-my-daily-work-and-small-side-business": () =>
    import("@/content/blog/how-do-i-unite-my-daily-work-and-small-side-business"),
  "what-are-the-early-indicators-that-my-financial-situation-is-worsening": () =>
    import("../../../content/blog/what-are-the-early-indicators-that-my-financial-situation-is-worsening"),
}

export async function generateStaticParams() {
  return Object.keys(postImports).map((slug) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const importer = postImports[slug]
  if (!importer) return {}
  const mod = await importer()
  return {
    title: `${mod.meta.title} | Bhawana Capital`,
    description: mod.meta.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: mod.meta.title,
      description: mod.meta.description,
      type: "article",
      url: `/blog/${slug}`,
      images: mod.meta.coverImage ? [mod.meta.coverImage] : undefined,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const importer = postImports[slug]
  if (!importer) return notFound()

  const mod = await importer()
  const Post = mod.default
  const { title, date, readingTime } = mod.meta

  return (
    <>
      <Header />
      <main className="bg-white">
        <header className="bg-neutral-50 border-b">
          <div className="container mx-auto px-4 py-6 md:py-10">
            <nav aria-label="Breadcrumb" className="text-sm text-neutral-600 mb-3">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span className="px-2">{"/"}</span>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
              <span className="px-2">{"/"}</span>
              <span aria-current="page" className="text-neutral-900">
                {title}
              </span>
            </nav>
            <h1 className="text-2xl md:text-4xl font-semibold text-secondary">{title}</h1>
            {(date || readingTime) && (
              <p className="mt-2 text-sm text-neutral-600">
                {date ? new Date(date).toLocaleDateString() : null}
                {date && readingTime ? " • " : ""}
                {readingTime ?? null}
              </p>
            )}
          </div>
        </header>

        <article className="container mx-auto px-4 py-8 md:py-12 prose prose-neutral max-w-3xl">
          <Post />
          <div className="mt-10">
            <Button asChild variant="outline">
              <Link href="/blog">← Back to blog</Link>
            </Button>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
