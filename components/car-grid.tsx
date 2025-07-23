"use client"

import { CarCard } from "@/components/car-card"
import { ErrorBoundary } from "@/components/error-boundary"
import { useState, useEffect } from "react"

const cars = [
  {
    id: "1",
    name: "Peugeot 208",
    category: "Économique",
    price: 250,
    image: "/images/peugeot-208.png",
    features: ["5 places", "Climatisation", "Bluetooth"],
    transmission: "Manuelle",
    fuel: "Essence",
  },
  {
    id: "2",
    name: "Renault Clio",
    category: "Économique",
    price: 280,
    image: "/images/renault-clio.png",
    features: ["5 places", "GPS", "Climatisation"],
    transmission: "Automatique",
    fuel: "Essence",
  },
  {
    id: "3",
    name: "Volkswagen Golf",
    category: "Compacte",
    price: 350,
    image: "/images/volkswagen-golf.png",
    features: ["5 places", "GPS", "Bluetooth", "Climatisation"],
    transmission: "Automatique",
    fuel: "Diesel",
  },
  {
    id: "4",
    name: "BMW Série 3",
    category: "Premium",
    price: 650,
    image: "/images/bmw-serie3.png",
    features: ["5 places", "Cuir", "GPS", "Climatisation auto"],
    transmission: "Automatique",
    fuel: "Diesel",
  },
  {
    id: "5",
    name: "Mercedes Classe A",
    category: "Premium",
    price: 550,
    image: "/images/mercedes-classe-a.png",
    features: ["5 places", "GPS", "Bluetooth", "Climatisation"],
    transmission: "Automatique",
    fuel: "Essence",
  },
  {
    id: "6",
    name: "Audi A4",
    category: "Premium",
    price: 700,
    image: "/images/audi-a4.png",
    features: ["5 places", "Cuir", "GPS", "Climatisation auto"],
    transmission: "Automatique",
    fuel: "Diesel",
  },
]

function CarGridFallback() {
  return (
    <div className="text-center py-8">
      <p className="text-muted-foreground">Impossible de charger les véhicules pour le moment.</p>
    </div>
  )
}

function CarCardFallback() {
  return (
    <div className="p-4 border border-dashed border-gray-300 rounded-lg text-center text-gray-500 h-96 flex items-center justify-center">
      <p>Véhicule temporairement indisponible</p>
    </div>
  )
}

export function CarGrid() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
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
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Notre flotte de véhicules</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre large gamme de véhicules adaptés à tous vos besoins
          </p>
        </div>

        <ErrorBoundary fallback={<CarGridFallback />}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <ErrorBoundary key={car.id} fallback={<CarCardFallback />}>
                <CarCard car={car} />
              </ErrorBoundary>
            ))}
          </div>
        </ErrorBoundary>
      </div>
    </section>
  )
}
