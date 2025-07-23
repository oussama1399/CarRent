import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Users, Fuel, Settings, Star, Check, MessageCircle, Shield, MapPin } from "lucide-react"

// Données mockées des voitures
const cars = {
  "1": {
    id: "1",
    name: "Peugeot 208",
    category: "Économique",
    price: 250,
    image: "/placeholder.svg?height=400&width=600&text=Peugeot+208",
    features: ["5 places", "Climatisation", "Bluetooth", "Direction assistée", "Vitres électriques"],
    transmission: "Manuelle",
    fuel: "Essence",
    description:
      "La Peugeot 208 est parfaite pour vos déplacements urbains. Économique et confortable, elle vous accompagnera dans tous vos trajets.",
    specs: {
      doors: "5 portes",
      luggage: "285L",
      consumption: "4.5L/100km",
      power: "100 ch",
    },
  },
  "2": {
    id: "2",
    name: "Renault Clio",
    category: "Économique",
    price: 280,
    image: "/placeholder.svg?height=400&width=600&text=Renault+Clio",
    features: ["5 places", "GPS", "Climatisation", "Bluetooth", "Régulateur de vitesse"],
    transmission: "Automatique",
    fuel: "Essence",
    description:
      "La Renault Clio allie style et praticité. Avec sa boîte automatique, elle offre un confort de conduite optimal.",
    specs: {
      doors: "5 portes",
      luggage: "300L",
      consumption: "4.8L/100km",
      power: "90 ch",
    },
  },
  "3": {
    id: "3",
    name: "Volkswagen Golf",
    category: "Compacte",
    price: 350,
    image: "/placeholder.svg?height=400&width=600&text=Volkswagen+Golf",
    features: ["5 places", "GPS", "Bluetooth", "Climatisation", "Régulateur de vitesse"],
    transmission: "Automatique",
    fuel: "Diesel",
    description:
      "La Volkswagen Golf offre un parfait équilibre entre performance et économie. Idéale pour les longs trajets.",
    specs: {
      doors: "5 portes",
      luggage: "380L",
      consumption: "4.2L/100km",
      power: "115 ch",
    },
  },
  "4": {
    id: "4",
    name: "BMW Série 3",
    category: "Premium",
    price: 650,
    image: "/placeholder.svg?height=400&width=600&text=BMW+Série+3",
    features: ["5 places", "Cuir", "GPS", "Climatisation auto", "Sièges chauffants"],
    transmission: "Automatique",
    fuel: "Diesel",
    description:
      "La BMW Série 3 incarne l'excellence allemande. Luxe, performance et technologie pour une expérience de conduite exceptionnelle.",
    specs: {
      doors: "4 portes",
      luggage: "480L",
      consumption: "5.2L/100km",
      power: "190 ch",
    },
  },
  "5": {
    id: "5",
    name: "Mercedes Classe A",
    category: "Premium",
    price: 550,
    image: "/placeholder.svg?height=400&width=600&text=Mercedes+Classe+A",
    features: ["5 places", "GPS", "Bluetooth", "Climatisation", "Écran tactile"],
    transmission: "Automatique",
    fuel: "Essence",
    description:
      "La Mercedes Classe A combine élégance et modernité. Parfaite pour allier style et confort au quotidien.",
    specs: {
      doors: "5 portes",
      luggage: "350L",
      consumption: "5.8L/100km",
      power: "163 ch",
    },
  },
  "6": {
    id: "6",
    name: "Audi A4",
    category: "Premium",
    price: 700,
    image: "/placeholder.svg?height=400&width=600&text=Audi+A4",
    features: ["5 places", "Cuir", "GPS", "Climatisation auto", "Système audio premium"],
    transmission: "Automatique",
    fuel: "Diesel",
    description:
      "L'Audi A4 représente le summum du raffinement. Design sophistiqué et technologies avancées pour les plus exigeants.",
    specs: {
      doors: "4 portes",
      luggage: "460L",
      consumption: "4.9L/100km",
      power: "204 ch",
    },
  },
}

interface CarDetailPageProps {
  params: {
    id: string
  }
}

export default function CarDetailPage({ params }: CarDetailPageProps) {
  const car = cars[params.id as keyof typeof cars]

  if (!car) {
    return <div>Voiture non trouvée</div>
  }

  const whatsappMessage = `Bonjour, je suis intéressé(e) par la location de la ${car.name} à ${car.price} DH/jour. Pouvez-vous me donner plus d'informations ?`
  const whatsappUrl = `https://wa.me/212634350272?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Retour aux véhicules
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image et informations principales */}
          <div className="lg:col-span-2">
            <div className="relative mb-6">
              <Image
                src={car.image || "/placeholder.svg"}
                alt={car.name}
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-lg"
              />
              <Badge className="absolute top-4 left-4 bg-orange-600">{car.category}</Badge>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{car.name}</h1>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </div>
                    <span className="text-sm text-muted-foreground">(4.8/5 - 124 avis)</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-orange-600">{car.price} DH</div>
                  <div className="text-sm text-muted-foreground">par jour</div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">{car.description}</p>

              {/* Caractéristiques rapides */}
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span>5 places</span>
                </div>
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-muted-foreground" />
                  <span>{car.transmission}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Fuel className="h-5 w-5 text-muted-foreground" />
                  <span>{car.fuel}</span>
                </div>
              </div>
            </div>

            {/* Spécifications détaillées */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Spécifications techniques</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <div className="font-semibold">Portes</div>
                    <div className="text-muted-foreground">{car.specs.doors}</div>
                  </div>
                  <div>
                    <div className="font-semibold">Coffre</div>
                    <div className="text-muted-foreground">{car.specs.luggage}</div>
                  </div>
                  <div>
                    <div className="font-semibold">Consommation</div>
                    <div className="text-muted-foreground">{car.specs.consumption}</div>
                  </div>
                  <div>
                    <div className="font-semibold">Puissance</div>
                    <div className="text-muted-foreground">{car.specs.power}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Équipements */}
            <Card>
              <CardHeader>
                <CardTitle>Équipements inclus</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar de réservation */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Réserver maintenant
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-4 w-4 text-orange-600" />
                    <span className="font-semibold">Réservation sécurisée</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Réservez directement via WhatsApp pour une réponse rapide
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Prix par jour</span>
                    <span className="font-semibold">{car.price} DH</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Assurance incluse</span>
                    <span>✓</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Kilométrage illimité</span>
                    <span>✓</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>Disponible dans toutes nos agences</span>
                  </div>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700" size="lg" asChild>
                  <Link href={whatsappUrl} target="_blank">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Réserver via WhatsApp
                  </Link>
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Vous serez redirigé vers WhatsApp pour finaliser votre réservation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
