import { CarCard } from "@/components/car-card"

const cars = [
  {
    id: "1",
    name: "Peugeot 208",
    category: "Économique",
    price: 250,
    image: "/placeholder.svg?height=200&width=300&text=Peugeot+208",
    features: ["5 places", "Climatisation", "Bluetooth"],
    transmission: "Manuelle",
    fuel: "Essence",
  },
  {
    id: "2",
    name: "Renault Clio",
    category: "Économique",
    price: 280,
    image: "/placeholder.svg?height=200&width=300&text=Renault+Clio",
    features: ["5 places", "GPS", "Climatisation"],
    transmission: "Automatique",
    fuel: "Essence",
  },
  {
    id: "3",
    name: "Volkswagen Golf",
    category: "Compacte",
    price: 350,
    image: "/placeholder.svg?height=200&width=300&text=Volkswagen+Golf",
    features: ["5 places", "GPS", "Bluetooth", "Climatisation"],
    transmission: "Automatique",
    fuel: "Diesel",
  },
  {
    id: "4",
    name: "BMW Série 3",
    category: "Premium",
    price: 650,
    image: "/placeholder.svg?height=200&width=300&text=BMW+Série+3",
    features: ["5 places", "Cuir", "GPS", "Climatisation auto"],
    transmission: "Automatique",
    fuel: "Diesel",
  },
  {
    id: "5",
    name: "Mercedes Classe A",
    category: "Premium",
    price: 550,
    image: "/placeholder.svg?height=200&width=300&text=Mercedes+Classe+A",
    features: ["5 places", "GPS", "Bluetooth", "Climatisation"],
    transmission: "Automatique",
    fuel: "Essence",
  },
  {
    id: "6",
    name: "Audi A4",
    category: "Premium",
    price: 700,
    image: "/placeholder.svg?height=200&width=300&text=Audi+A4",
    features: ["5 places", "Cuir", "GPS", "Climatisation auto"],
    transmission: "Automatique",
    fuel: "Diesel",
  },
]

export function CarGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Notre flotte de véhicules</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre large gamme de véhicules adaptés à tous vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  )
}
