import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, Target, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10"></div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                RISE TO
                <span className="text-solaris-yellow block">DOMINATE</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Professional esports organization competing at the highest level. Join the Solaris family and witness
                gaming excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-solaris-yellow text-black hover:bg-solaris-yellow/90 px-8 py-3 text-lg">
                  View Teams
                </Button>
                <Button
                  variant="outline"
                  className="border-solaris-yellow text-solaris-yellow hover:bg-solaris-yellow hover:text-black px-8 py-3 text-lg"
                >
                  Latest News
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/solaris-logo.jpg"
                alt="Solaris Gaming Logo"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-solaris-yellow mb-2">15+</div>
              <div className="text-gray-600">Professional Players</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-solaris-yellow mb-2">8</div>
              <div className="text-gray-600">Gaming Titles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-solaris-yellow mb-2">50+</div>
              <div className="text-gray-600">Tournament Wins</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-solaris-yellow mb-2">$2M+</div>
              <div className="text-gray-600">Prize Money</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Why Choose Solaris</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're not just a gaming organization - we're a family dedicated to excellence, innovation, and pushing the
              boundaries of competitive gaming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 border-gray-100 hover:border-solaris-yellow transition-colors">
              <CardContent className="p-6 text-center">
                <Trophy className="h-12 w-12 text-solaris-yellow mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Championship Level</h3>
                <p className="text-gray-600">Competing at the highest tier across multiple esports titles</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-solaris-yellow transition-colors">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-solaris-yellow mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Team Unity</h3>
                <p className="text-gray-600">Strong bonds and teamwork that translate to victory</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-solaris-yellow transition-colors">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-solaris-yellow mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Strategic Excellence</h3>
                <p className="text-gray-600">Data-driven strategies and innovative gameplay approaches</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-solaris-yellow transition-colors">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-solaris-yellow mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-gray-600">Quick adaptation and rapid response to meta changes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Elite?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Follow our journey, support our teams, and be part of the Solaris Gaming legacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-solaris-yellow text-black hover:bg-solaris-yellow/90 px-8 py-3 text-lg">
              Follow Our Teams
            </Button>
            <Button
              variant="outline"
              className="border-solaris-yellow text-solaris-yellow hover:bg-solaris-yellow hover:text-black px-8 py-3 text-lg"
            >
              Shop Merchandise
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
