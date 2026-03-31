import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"  
import SectionHeading from "../components/SectionHeading"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { meta as personalLoanMeta } from "@/content/blog/why-taking-a-personal-loan-is-beneficial"
import { meta as uniteWorkMeta } from "@/content/blog/how-do-i-unite-my-daily-work-and-small-side-business"
import { meta as worseningMeta } from "@/content/blog/what-are-the-early-indicators-that-my-financial-situation-is-worsening"

export const metadata = {
  title: "Blog | Bhawana Capital",
  description: "Insights on personal loans, salary advances, and responsible borrowing from Bhawana Capital.",
}

type BlogListItem = {
  slug: string
  title: string
  description: string
  date?: string
  coverImage?: string | any
}

export default function BlogIndexPage() {
  const posts: BlogListItem[] = [
    {
      slug: personalLoanMeta.slug,
      title: personalLoanMeta.title,
      description: personalLoanMeta.description,
      date: personalLoanMeta.date,
      coverImage: personalLoanMeta.coverImage,
    },
    {
      slug: uniteWorkMeta.slug,
      title: uniteWorkMeta.title,
      description: uniteWorkMeta.description,
      date: uniteWorkMeta.date,
      coverImage: uniteWorkMeta.coverImage,
    },
    {
      slug: worseningMeta.slug,
      title: worseningMeta.title,
      description: worseningMeta.description,
      date: worseningMeta.date,
      coverImage: worseningMeta.coverImage,
    },
  ]

  return (
    <>
      <Header />
      <main className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Blog" subtitle="Guides and insights to help you borrow responsibly" centered />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post) => (
              <Card key={post.slug} className="group hover:shadow-lg transition-shadow duration-150">
                <CardHeader className="pb-3">
                  {post.coverImage ? (
                    <div className="aspect-video overflow-hidden rounded-md bg-neutral-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.coverImage || "/placeholder.svg?height=360&width=640&query=blog%20cover"}
                        alt={`${post.title} cover`}
                        className="h-full w-full object-cover transition-transform group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>
                  ) : null}
                </CardHeader>
                <CardContent>
                  <CardTitle className="font-poppins text-lg text-secondary group-hover:text-primary transition-colors line-clamp-2 mb-2">
                    {post.title}
                  </CardTitle>
                  <p className="text-neutral-700 text-sm line-clamp-3">{post.description}</p>
                  <div className="mt-4">
                    <Link className="text-primary hover:text-primary/80 font-medium" href={`/blog/${post.slug}`}>
                      Read more →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
