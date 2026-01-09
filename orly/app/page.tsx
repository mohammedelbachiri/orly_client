"use client"

import { useState } from "react"
import { Heart, Search, ShoppingCart, User, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


const year = new Date().getFullYear().toString()

const COLLECTIONS = [
  {
    name: "Chandeliers",
    description: "Crystal chandeliers that capture light with timeless elegance",
    image: "/luxury-crystal-chandelier-parisian-apartment.jpg",
  },
  {
    name: "Pendant Lights",
    description: "Contemporary pendant fixtures for modern sophisticated spaces",
    image: "/modern-gold-pendant-light-luxury.jpg",
  },
  {
    name: "Floor Lamps",
    description: "Statement floor lamps blending form and function",
    image: "/brass-arc-floor-lamp-elegant.jpg",
  },
  {
    name: "Wall Fixtures",
    description: "Refined wall sconces and lighting for curated interiors",
    image: "/minimalist-wall-sconce-luxury.jpg",
  },
]

const SIGNATURE_PRODUCTS = [
  {
    id: 1,
    name: "Céline Crystal Chandelier",
    price: 2850,
    material: "Brass & Crystal",
    image: "/luxury-crystal-chandelier-ceiling-light.jpg",
  },
  {
    id: 2,
    name: "Marseille Pendant Light",
    price: 680,
    material: "Brushed Steel & Linen",
    image: "/elegant-pendant-light-linen-shade.jpg",
  },
  {
    id: 3,
    name: "Lyon Floor Lamp",
    price: 1240,
    material: "Walnut & Brass",
    image: "/mid-century-floor-lamp-brass-wood.jpg",
  },
  {
    id: 4,
    name: "Versailles Wall Sconce",
    price: 520,
    material: "Matte Black Steel",
    image: "/minimalist-wall-sconce-black-modern.jpg",
  },
  {
    id: 5,
    name: "Riviera Table Lamp",
    price: 890,
    material: "Marble & Crystal",
    image: "/luxury-table-lamp-marble-base.jpg",
  },
  {
    id: 6,
    name: "Montparnasse Arch Lamp",
    price: 1680,
    material: "Polished Brass",
    image: "/arc-floor-lamp-polished-brass-luxury.jpg",
  },
]

const TESTIMONIALS = [
  {
    quote: "Orly's chandeliers transformed my dining room into a gallery of light. Each piece is truly a work of art.",
    author: "M.",
    initials: "M",
  },
  {
    quote:
      "The craftsmanship is extraordinary. These aren't just light fixtures—they're investments in timeless beauty.",
    author: "C.",
    initials: "C",
  },
  {
    quote: "From first glance to installation, every detail spoke of luxury and attention to heritage.",
    author: "A.",
    initials: "A",
  },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [wishlistItems, setWishlistItems] = useState<number[]>([])
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const toggleWishlist = (id: number) => {
    setWishlistItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex flex-col items-start">
              <div className="font-serif text-2xl font-bold text-foreground">ORLY</div>
              <div className="text-xs text-secondary tracking-widest">LUMIÈRE FRANÇAISE</div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-12">
              <a
                href="#collections"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Collections
              </a>
              <a href="#signature" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Signature
              </a>
              <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-6">
              <button className="p-2 hover:bg-muted rounded-sm transition-colors" title="Search">
                <Search size={20} />
              </button>
              <button className="p-2 hover:bg-muted rounded-sm transition-colors" title="Account">
                <User size={20} />
              </button>
              <button className="p-2 hover:bg-muted rounded-sm transition-colors" title="Shopping Cart">
                <ShoppingCart size={20} />
              </button>
              <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} title="Menu">
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-6 flex flex-col gap-4 border-t border-border/10 pt-6">
              <a href="#collections" className="text-sm font-medium text-foreground hover:text-primary">
                Collections
              </a>
              <a href="#signature" className="text-sm font-medium text-foreground hover:text-primary">
                Signature
              </a>
              <a href="#about" className="text-sm font-medium text-foreground hover:text-primary">
                About
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary">
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full pt-20 h-screen min-h-[90vh] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=1200&width=1800&query=luxury-chandelier-parisian-apartment-elegant-interior)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 text-balance">ORLY</h1>
          <p className="text-xl md:text-2xl text-white/95 mb-2 font-serif italic">Illuminating Elegance</p>
          <p className="text-base md:text-lg text-white/85 mb-12 max-w-xl">
            Handcrafted lighting for distinguished spaces
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button
              className="border-2 border-accent bg-transparent hover:bg-accent text-accent hover:text-accent-foreground px-10 py-3 text-base transition-all duration-300"
              asChild
            >
              <a href="#signature">Explore Collection</a>
            </Button>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={24} className="text-white/60" />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-foreground">The Art of Light</h2>
          <div className="flex justify-center mb-8">
            <div className="w-20 h-px bg-secondary" />
          </div>
          <p className="text-lg text-foreground/80 leading-relaxed">
            At Orly, we believe lighting is more than illumination—it's an expression of refined taste and architectural
            philosophy. Each fixture honors French heritage while embracing contemporary craftsmanship. From hand-blown
            crystal to polished brass, every material is selected for its ability to transform spaces into sanctuaries
            of light and beauty.
          </p>
        </div>
      </section>

      {/* Featured Collections */}
      <section id="collections" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16 text-center">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COLLECTIONS.map((collection) => (
              <div key={collection.name} className="group cursor-pointer overflow-hidden">
                <div className="relative h-64 md:h-80 overflow-hidden bg-muted">
                  <img
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                </div>
                <div className="mt-6">
                  <h3 className="font-serif text-2xl font-bold mb-2 text-foreground">{collection.name}</h3>
                  <p className="text-foreground/70 mb-4 text-sm">{collection.description}</p>
                  <a href="#" className="text-primary hover:text-primary/80 transition-colors font-medium text-sm">
                    View Collection →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Pieces */}
      <section id="signature" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">Signature Collection</h2>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            Curated pieces that define Orly's commitment to luxury and artisanal excellence
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SIGNATURE_PRODUCTS.map((product) => (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                className="flex flex-col"
              >
                <div className="relative aspect-square mb-6 overflow-hidden bg-background group">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-6 right-6 p-3 bg-white/90 hover:bg-white shadow-lg rounded-full transition-all opacity-0 group-hover:opacity-100 duration-300"
                    title="Add to wishlist"
                  >
                    <Heart
                      size={20}
                      className={
                        wishlistItems.includes(product.id) ? "fill-red-500 text-red-500" : "text-foreground/40"
                      }
                    />
                  </button>

                  <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="bg-foreground hover:bg-foreground/90 text-white px-8 py-2 rounded-sm">
                      View Details
                    </Button>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold mb-2 text-foreground">{product.name}</h3>
                <p className="text-sm text-foreground/60 mb-4">{product.material}</p>
                <p className="text-2xl font-semibold text-primary">${product.price.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Banner */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 overflow-hidden">
              <img
                src="/artisan-craftsperson-creating-luxury-lamp-workshop.jpg"
                alt="Artisan craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">Artisanal Excellence</h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Each Orly fixture is hand-finished by master craftspeople in our Parisian atelier. We source only the
                finest materials—from Murano crystal to sustainably harvested walnut—and employ techniques refined over
                generations.
              </p>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                Our commitment to artisanal quality means every detail is intentional. No mass production. No shortcuts.
                Only the art of light, preserved and elevated for discerning spaces.
              </p>
              <a href="#" className="inline-block text-primary hover:text-primary/80 transition-colors font-medium">
                Our Story →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16 text-center">Celebrated by Connoisseurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 bg-accent"
                      style={{
                        clipPath:
                          "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                      }}
                    />
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <p className="text-foreground font-semibold text-sm">— {testimonial.author}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-foreground text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Join the Orly Circle</h2>
          <p className="text-lg text-white/80 mb-12">
            Receive exclusive previews of new collections and interior lighting inspiration
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              alert("Thank you for subscribing to Orly Circle.")
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border-b border-white/30 text-white placeholder:text-white/50 rounded-none px-0 focus:border-accent focus:ring-0"
              required
            />
            <Button
              type="submit"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-2 rounded-sm whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="font-serif text-xl font-bold mb-4">ORLY</div>
              <p className="text-white/70 text-sm leading-relaxed">
                French lighting since 1998. Handcrafted chandeliers, pendants, and fixtures for distinguished interiors.
              </p>
            </div>

            {/* Collections */}
            <div>
              <h4 className="text-sm font-semibold mb-6 uppercase tracking-wide">Collections</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                    Chandeliers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                    Pendant Lights
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                    Floor Lamps
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                    Wall Fixtures
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold mb-6 uppercase tracking-wide">Company</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                    Atelier
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                    Showroom
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-sm font-semibold mb-6 uppercase tracking-wide">Connect</h4>
              <ul className="space-y-3 text-sm">
                <li>support@orly.fr</li>
                <li>+33 1 XX XX XX XX</li>
                <li className="mt-6">
                  <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                    Pinterest
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/70">
            <p>© {year} Orly. All rights reserved. Parisian light. French heritage.</p>
            <div className="flex gap-6 mt-6 md:mt-0">
              <a href="#" className="hover:text-secondary transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

