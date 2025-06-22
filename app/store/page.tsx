import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star } from "lucide-react"

export default function StorePage() {
  const products = [
    {
      name: "Solaris Gaming Jersey",
      price: "$79.99",
      originalPrice: "$99.99",
      category: "Apparel",
      rating: 4.8,
      reviews: 124,
      image: "/placeholder.svg?height=300&width=300",
      sale: true,
      popular: true,
    },
    {
      name: "Team Hoodie - Black",
      price: "$89.99",
      category: "Apparel",
      rating: 4.9,
      reviews: 89,
      image: "/placeholder.svg?height=300&width=300",
      sale: false,
      popular: false,
    },
    {
      name: "Solaris Gaming Cap",
      price: "$34.99",
      category: "Accessories",
      rating: 4.7,
      reviews: 156,
      image: "/placeholder.svg?height=300&width=300",
      sale: false,
      popular: true,
    },
    {
      name: "Gaming Mouse Pad",
      price: "$24.99",
      category: "Gaming Gear",
      rating: 4.6,
      reviews: 203,
      image: "/placeholder.svg?height=300&width=300",
      sale: false,
      popular: false,
    },
    {
      name: "Team Backpack",
      price: "$69.99",
      originalPrice: "$89.99",
      category: "Accessories",
      rating: 4.8,
      reviews: 67,
      image: "/placeholder.svg?height=300&width=300",
      sale: true,
      popular: false,
    },
    {
      name: "Solaris Water Bottle",
      price: "$19.99",
      category: "Lifestyle",
      rating: 4.5,
      reviews: 91,
      image: "/placeholder.svg?height=300&width=300",
      sale: false,
      popular: false,
    },
  ]

  const categories = ["All", "Apparel", "Accessories", "Gaming Gear", "Lifestyle"]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Official <span className="text-solaris-yellow">Store</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Show your support for Solaris Gaming with our premium merchandise collection. From team jerseys to gaming
              accessories, represent the champions.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={
                  index === 0
                    ? "bg-solaris-yellow text-black hover:bg-solaris-yellow/90"
                    : "border-gray-300 hover:border-solaris-yellow hover:text-solaris-yellow"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="border-2 border-gray-100 hover:border-solaris-yellow transition-colors group"
              >
                <CardHeader className="p-0">
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    {product.sale && <Badge className="absolute top-2 left-2 bg-red-500 text-white">SALE</Badge>}
                    {product.popular && (
                      <Badge className="absolute top-2 right-2 bg-solaris-yellow text-black">POPULAR</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold mb-2">{product.name}</CardTitle>

                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? "text-solaris-yellow fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-solaris-yellow">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  <Button className="w-full bg-solaris-yellow text-black hover:bg-solaris-yellow/90">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Store Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-solaris-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $75 worldwide</p>
            </div>

            <div>
              <div className="bg-solaris-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">↩️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy on all merchandise</p>
            </div>

            <div>
              <div className="bg-solaris-yellow w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">High-quality materials and official team designs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Exclusive Deals</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for early access to new products, exclusive discounts, and limited edition
            items.
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
