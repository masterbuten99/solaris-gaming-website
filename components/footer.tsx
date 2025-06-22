import Link from "next/link"
import Image from "next/image"
import { Twitter, Instagram, Youtube, Twitch } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-solaris-yellow/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image src="/images/solaris-logo.jpg" alt="Solaris Gaming" width={40} height={40} className="rounded" />
              <span className="text-white font-bold text-xl">SOLARIS GAMING</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional esports organization competing at the highest level across multiple gaming titles. Join us as
              we rise to dominate the competitive gaming scene.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-solaris-yellow transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-solaris-yellow transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-solaris-yellow transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-solaris-yellow transition-colors">
                <Twitch className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/teams" className="text-gray-400 hover:text-solaris-yellow transition-colors">
                  Teams
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-solaris-yellow transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-400 hover:text-solaris-yellow transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/store" className="text-gray-400 hover:text-solaris-yellow transition-colors">
                  Store
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>info@solarisgaming.com</li>
              <li>Business Inquiries</li>
              <li>Press & Media</li>
              <li>Sponsorships</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-solaris-yellow/20 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Solaris Gaming. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
