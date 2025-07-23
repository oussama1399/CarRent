import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, MessageCircle } from "lucide-react"
import Link from "next/link"

const tariffs = [
  {
    category: "Economy",
    description: "Perfect for urban travel",
    vehicles: ["Peugeot 208", "Renault Clio"],
    pricePerDay: 250,
    pricePerWeek: 1500,
    pricePerMonth: 5500,
    features: ["Insurance included", "Unlimited mileage", "Air conditioning", "Bluetooth", "24/7 support"],
  },
  {
    category: "Compact",
    description: "The perfect balance",
    vehicles: ["Volkswagen Golf"],
    pricePerDay: 350,
    pricePerWeek: 2100,
    pricePerMonth: 7500,
    features: [
      "Insurance included",
      "Unlimited mileage",
      "Integrated GPS",
      "Air conditioning",
      "Bluetooth",
      "24/7 support",
    ],
    popular: true,
  },
  {
    category: "Premium",
    description: "Luxury and performance",
    vehicles: ["BMW Series 3", "Mercedes A-Class", "Audi A4"],
    pricePerDay: 600,
    pricePerWeek: 3600,
    pricePerMonth: 13000,
    features: [
      "Premium insurance",
      "Unlimited mileage",
      "Premium GPS",
      "Automatic air conditioning",
      "Leather seats",
      "Premium audio system",
      "Priority 24/7 support",
    ],
  },
]

export default function TariffsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Tariffs</h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Transparent and competitive prices for all your rental needs
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tariffs.map((tariff, index) => (
              <Card key={index} className={`relative ${tariff.popular ? "border-orange-500 shadow-lg scale-105" : ""}`}>
                {tariff.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tariff.category}</CardTitle>
                  <p className="text-muted-foreground">{tariff.description}</p>
                  <div className="mt-4">
                    <div className="text-3xl font-bold text-orange-600">{tariff.pricePerDay} DH</div>
                    <div className="text-sm text-muted-foreground">per day</div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Included vehicles:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tariff.vehicles.map((vehicle, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {vehicle}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Degressive rates:</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>1 week:</span>
                        <span className="font-semibold">{tariff.pricePerWeek} DH</span>
                      </div>
                      <div className="flex justify-between">
                        <span>1 month:</span>
                        <span className="font-semibold">{tariff.pricePerMonth} DH</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Included services:</h4>
                    <div className="space-y-2">
                      {tariff.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                    <Link
                      href="https://wa.me/212634350272?text=Hello, I'm interested in your rental rates. Can you give me more information?"
                      target="_blank"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Book now
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
            <h2 className="text-3xl font-bold text-center mb-8">Important Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Rental Conditions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• Minimum age: 21 years</p>
                  <p className="text-sm">• Valid driving license for at least 2 years</p>
                  <p className="text-sm">• Deposit: 500 DH to 1500 DH depending on vehicle</p>
                  <p className="text-sm">• Fuel at renter's expense</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Additional Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• Baby seat: 50 DH/day</p>
                  <p className="text-sm">• Additional GPS: 30 DH/day</p>
                  <p className="text-sm">• Additional driver: 100 DH</p>
                  <p className="text-sm">• Delivery/pickup: 100 DH</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
