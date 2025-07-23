import { SearchForm } from "@/components/search-form"
import { CarGrid } from "@/components/car-grid"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <SearchForm />
      <CarGrid />
      <Features />
    </div>
  )
}
