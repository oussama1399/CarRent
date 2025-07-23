import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, MessageCircle } from "lucide-react"
import Link from "next/link"

const tarifs = [
  {
    category: "Économique",
    description: "Parfait pour les déplacements urbains",
    vehicles: ["Peugeot 208", "Renault Clio"],
    pricePerDay: 250,
    pricePerWeek: 1500,
    pricePerMonth: 5500,
    features: ["Assurance incluse", "Kilométrage illimité", "Climatisation", "Bluetooth", "Support 24h/24"],
  },
  {
    category: "Compacte",
    description: "L'équilibre parfait",
    vehicles: ["Volkswagen Golf"],
    pricePerDay: 350,
    pricePerWeek: 2100,
    pricePerMonth: 7500,
    features: [
      "Assurance incluse",
      "Kilométrage illimité",
      "GPS intégré",
      "Climatisation",
      "Bluetooth",
      "Support 24h/24",
    ],
    popular: true,
  },
  {
    category: "Premium",
    description: "Luxe et performance",
    vehicles: ["BMW Série 3", "Mercedes Classe A", "Audi A4"],
    pricePerDay: 600,
    pricePerWeek: 3600,
    pricePerMonth: 13000,
    features: [
      "Assurance premium",
      "Kilométrage illimité",
      "GPS premium",
      "Climatisation automatique",
      "Sièges cuir",
      "Système audio premium",
      "Support prioritaire 24h/24",
    ],
  },
]

export default function TarifsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Tarifs</h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Des prix transparents et compétitifs pour tous vos besoins de location
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tarifs.map((tarif, index) => (
              <Card key={index} className={`relative ${tarif.popular ? "border-orange-500 shadow-lg scale-105" : ""}`}>
                {tarif.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600">
                    Plus Populaire
                  </Badge>
                )}

                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tarif.category}</CardTitle>
                  <p className="text-muted-foreground">{tarif.description}</p>
                  <div className="mt-4">
                    <div className="text-3xl font-bold text-orange-600">{tarif.pricePerDay} DH</div>
                    <div className="text-sm text-muted-foreground">par jour</div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Véhicules inclus :</h4>
                    <div className="flex flex-wrap gap-1">
                      {tarif.vehicles.map((vehicle, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {vehicle}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Tarifs dégressifs :</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>1 semaine :</span>
                        <span className="font-semibold">{tarif.pricePerWeek} DH</span>
                      </div>
                      <div className="flex justify-between">
                        <span>1 mois :</span>
                        <span className="font-semibold">{tarif.pricePerMonth} DH</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Services inclus :</h4>
                    <div className="space-y-2">
                      {tarif.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                    <Link
                      href="https://wa.me/212634350272?text=Bonjour, je suis intéressé(e) par vos tarifs de location. Pouvez-vous me donner plus d'informations ?"
                      target="_blank"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Réserver maintenant
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Informations Importantes</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Conditions de Location</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• Âge minimum : 21 ans</p>
                  <p className="text-sm">• Permis de conduire valide depuis 2 ans minimum</p>
                  <p className="text-sm">• Caution : 500 DH à 1500 DH selon le véhicule</p>
                  <p className="text-sm">• Carburant à la charge du locataire</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Services Additionnels</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• Siège bébé : 50 DH/jour</p>
                  <p className="text-sm">• GPS supplémentaire : 30 DH/jour</p>
                  <p className="text-sm">• Conducteur additionnel : 100 DH</p>
                  <p className="text-sm">• Livraison/récupération : 100 DH</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
