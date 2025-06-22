import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User } from "lucide-react"

export default function NewsPage() {
  const news = [
    {
      title: "Solaris Mobile Legends Team Wins M6 World Championship",
      excerpt:
        "Our Mobile Legends roster made history by claiming the M6 World Championship title in a spectacular 4-2 victory, bringing home the ultimate prize in mobile esports.",
      date: "2026-12-03",
      author: "Solaris Media",
      category: "Tournament",
      featured: true,
    },
    {
      title: "New Partnership with HyperX Announced",
      excerpt:
        "We're excited to announce our official partnership with HyperX, providing our players with cutting-edge gaming peripherals.",
      date: "2024-01-10",
      author: "Business Team",
      category: "Partnership",
      featured: false,
    },
    {
      title: "Solaris Gaming Facility Grand Opening",
      excerpt:
        "Our state-of-the-art training facility is now open, featuring the latest technology and dedicated spaces for each team.",
      date: "2024-01-05",
      author: "Solaris Media",
      category: "Facility",
      featured: false,
    },
    {
      title: "League of Legends Team Reaches Worlds Semifinals",
      excerpt: "After an incredible run through the tournament, our LoL team secured a spot in the Worlds semifinals.",
      date: "2023-12-28",
      author: "Esports Desk",
      category: "Tournament",
      featured: false,
    },
    {
      title: "Rookie of the Year: Phoenix Joins CS2 Roster",
      excerpt: "We welcome Phoenix, the rising star in Counter-Strike, to our professional CS2 team roster.",
      date: "2023-12-20",
      author: "Recruitment Team",
      category: "Roster",
      featured: false,
    },
    {
      title: "Solaris Gaming Merchandise Store Launch",
      excerpt:
        "Show your support with our new official merchandise line, featuring jerseys, hoodies, and gaming accessories.",
      date: "2023-12-15",
      author: "Marketing Team",
      category: "Merchandise",
      featured: false,
    },
  ]

  const featuredNews = news.filter((article) => article.featured)
  const regularNews = news.filter((article) => !article.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Latest <span className="text-solaris-yellow">News</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay updated with the latest news, tournament results, roster changes, and announcements from Solaris
              Gaming.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Story</h2>
            {featuredNews.map((article, index) => (
              <Card key={index} className="border-2 border-solaris-yellow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-solaris-yellow text-black">{article.category}</Badge>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-3xl font-bold">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 mb-4">{article.excerpt}</p>
                  <div className="flex items-center text-gray-600">
                    <User className="h-4 w-4 mr-1" />
                    <span className="text-sm">By {article.author}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Regular News */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">All News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((article, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-solaris-yellow transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-solaris-yellow text-solaris-yellow">
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold line-clamp-2">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center text-gray-600">
                    <User className="h-4 w-4 mr-1" />
                    <span className="text-sm">By {article.author}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates, exclusive content, and behind-the-scenes access.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg text-black" />
            <button className="bg-solaris-yellow text-black px-6 py-3 rounded-lg font-semibold hover:bg-solaris-yellow/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
