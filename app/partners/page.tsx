import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PartnersPage() {
  const partners = [
    {
      name: "HyperX",
      category: "Gaming Peripherals",
      description: "Official gaming headsets, keyboards, and mice for all our professional teams.",
      tier: "Title Sponsor",
    },
    {
      name: "NVIDIA",
      category: "Graphics Technology",
      description: "Powering our gaming setups with the latest RTX graphics cards and technology.",
      tier: "Technology Partner",
    },
    {
      name: "Red Bull",
      category: "Energy & Lifestyle",
      description: "Fueling our players' performance with premium energy drinks and lifestyle support.",
      tier: "Official Partner",
    },
    {
      name: "Secretlab",
      category: "Gaming Chairs",
      description: "Premium gaming chairs ensuring comfort during long practice sessions and tournaments.",
      tier: "Equipment Partner",
    },
    {
      name: "Discord",
      category: "Communication",
      description: "Official communication platform for team coordination and community engagement.",
      tier: "Platform Partner",
    },
    {
      name: "Twitch",
      category: "Streaming",
      description: "Primary streaming platform for live matches, practice sessions, and player content.",
      tier: "Media Partner",
    },
  ]

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Title Sponsor":
        return "bg-solaris-yellow text-black"
      case "Technology Partner":
        return "bg-blue-500 text-white"
      case "Official Partner":
        return "bg-green-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="text-solaris-yellow">Partners</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're proud to work with industry-leading brands that share our commitment to excellence and innovation in
              competitive gaming.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-solaris-yellow transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl font-bold">{partner.name}</CardTitle>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTierColor(partner.tier)}`}>
                      {partner.tier}
                    </span>
                  </div>
                  <p className="text-solaris-yellow font-medium">{partner.category}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Partnership Benefits</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our partnerships go beyond sponsorship - they're strategic alliances that drive innovation and success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-solaris-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">1M+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">Access to our worldwide fanbase across multiple platforms and regions.</p>
            </div>

            <div className="text-center">
              <div className="bg-solaris-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">24/7</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Brand Exposure</h3>
              <p className="text-gray-600">Continuous brand visibility through tournaments, streams, and content.</p>
            </div>

            <div className="text-center">
              <div className="bg-solaris-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">ROI</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">Measurable return on investment through targeted gaming demographics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Become a Partner</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the elite brands that power Solaris Gaming. Let's create something extraordinary together.
          </p>
          <div className="space-y-4">
            <div className="bg-solaris-yellow text-black px-8 py-3 rounded-lg inline-block font-semibold mr-4">
              Partnership Inquiries: partnerships@solarisgaming.com
            </div>
            <div className="block text-gray-300">
              For sponsorship opportunities, brand collaborations, and strategic partnerships
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
