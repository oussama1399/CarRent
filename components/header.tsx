import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Car, Phone, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Car className="h-6 w-6 text-orange-600" />
            <span>CarRental Pro</span>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:text-orange-600 transition-colors">
              Accueil
            </Link>
            <Link href="/vehicules" className="hover:text-orange-600 transition-colors">
              Véhicules
            </Link>
            <Link href="/tarifs" className="hover:text-orange-600 transition-colors">
              Tarifs
            </Link>
            <Link href="/contact" className="hover:text-orange-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4" />
              <span>+212 634 350 272</span>
            </div>
            <Button className="bg-orange-600 hover:bg-orange-700">Réserver</Button>
          </div>

          {/* Menu mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden bg-transparent">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-semibold">
                  Accueil
                </Link>
                <Link href="/vehicules" className="text-lg font-semibold">
                  Véhicules
                </Link>
                <Link href="/tarifs" className="text-lg font-semibold">
                  Tarifs
                </Link>
                <Link href="/contact" className="text-lg font-semibold">
                  Contact
                </Link>
                <div className="flex items-center gap-2 mt-4">
                  <Phone className="h-4 w-4" />
                  <span>+212 634 350 272</span>
                </div>
                <Button className="bg-orange-600 hover:bg-orange-700 mt-4">Réserver</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
