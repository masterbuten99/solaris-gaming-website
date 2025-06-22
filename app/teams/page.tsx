import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TeamsPage() {
  const teams = [
    {
      game: "Mobile Legends",
      players: ["Idol ko si pyke", "Mhoner", "Tito Badang", "Alaxan", "Chuchu"],
      achievements: ["MPL Philippines Champions", "M5 World Championship", "MSC Southeast Asia"],
      status: "Active",
    },
    {
      game: "League of Legends",
      players: ["Sunburst", "Helios", "Stellar", "Luminous", "Blaze"],
      achievements: ["LCS Spring Champions", "Worlds Semifinals", "MSI Finalists"],
      status: "Active",
    },
    {
      game: "CS2",
      players: ["Phoenix", "Inferno", "Flare", "Ember", "Ignite"],
      achievements: ["ESL Pro League", "IEM Katowice", "BLAST Premier"],
      status: "Active",
    },
    {
      game: "Rocket League",
      players: ["Comet", "Meteor", "Orbit"],
      achievements: ["RLCS World Championship", "Spring Major", "Fall Cup"],
      status: "Active",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="text-solaris-yellow">Teams</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the elite athletes who represent Solaris Gaming across multiple esports titles. Each team embodies
              our commitment to excellence and competitive spirit.
            </p>
          </div>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teams.map((team, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-solaris-yellow transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold">{team.game}</CardTitle>
                    <Badge className="bg-solaris-yellow text-black">{team.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Players */}
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Roster</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {team.players.map((player, playerIndex) => (
                          <div key={playerIndex} className="bg-gray-50 p-3 rounded-lg">
                            <div className="font-medium">{player}</div>
                            <div className="text-sm text-gray-600">Professional Player</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Recent Achievements</h3>
                      <div className="space-y-2">
                        {team.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-solaris-yellow rounded-full"></div>
                            <span className="text-gray-700">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Think You Have What It Takes?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional talent to join our roster. If you're a competitive player with
            championship aspirations, we want to hear from you.
          </p>
          <div className="bg-solaris-yellow text-black px-8 py-3 rounded-lg inline-block font-semibold">
            Tryouts Open - Contact Us
          </div>
        </div>
      </section>
    </div>
  )
}
