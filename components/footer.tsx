import Link from "next/link"
import { Car, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Car className="h-6 w-6 text-orange-600" />
              <span>CarRental Pro</span>
            </Link>
            <p className="text-slate-300">
              Your trusted partner for vehicle rental. Quality cars for all your travels.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/vehicles" className="block text-slate-300 hover:text-white">
                Our Vehicles
              </Link>
              <Link href="/tariffs" className="block text-slate-300 hover:text-white">
                Tariffs
              </Link>
              <Link href="/contact" className="block text-slate-300 hover:text-white">
                Contact
              </Link>
              <Link href="#" className="block text-slate-300 hover:text-white">
                FAQ
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-slate-300 hover:text-white">
                Short-term rental
              </Link>
              <Link href="#" className="block text-slate-300 hover:text-white">
                Long-term rental
              </Link>
              <Link href="#" className="block text-slate-300 hover:text-white">
                Luxury vehicles
              </Link>
              <Link href="#" className="block text-slate-300 hover:text-white">
                Insurance
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-orange-600" />
                <span className="text-slate-300">+212 634 350 272</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-orange-600" />
                <span className="text-slate-300">contact@carrental.ma</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-orange-600 mt-1" />
                <span className="text-slate-300">
                  123 Mohammed V Avenue
                  <br />
                  Casablanca, Morocco
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 CarRental Pro. All rights reserved.</p>
          <p className="text-sm mt-2">
            Website created by <span className="text-orange-400 font-semibold">chattypixel</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
