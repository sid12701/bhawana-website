import { ArrowRight, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import SectionHeading from "../components/SectionHeading"
import { blogPosts } from "../lib/content"

export default function BlogSection() {
  return (
    <section className="py-16 md:py-24 bg-neutralBg" id="blog">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Latest from Our Blog"
          subtitle="Stay informed with our latest insights and updates"
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-160">
              <CardHeader className="pb-4">
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg mb-4 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-primary/50" />
                </div>
                <CardTitle className="font-poppins text-lg text-secondary group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-neutralText text-sm line-clamp-3">{post.excerpt}</p>

                <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto font-medium text-primary hover:text-primary/80"
                  asChild
                >
                  <a href={post.href} className="flex items-center space-x-2">
                    <span>Read more</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="/blog">View all posts</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
