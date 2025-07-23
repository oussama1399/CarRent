import { Shield, Clock, Headphones, CreditCard } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Assurance incluse",
    description: "Tous nos véhicules sont assurés avec une couverture complète",
  },
  {
    icon: Clock,
    title: "Disponible 24h/24",
    description: "Service client disponible à tout moment pour vous aider",
  },
  {
    icon: Headphones,
    title: "Support client",
    description: "Une équipe dédiée pour répondre à toutes vos questions",
  },
  {
    icon: CreditCard,
    title: "Paiement sécurisé",
    description: "Transactions sécurisées et multiples moyens de paiement",
  },
]

export function Features() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Pourquoi nous choisir ?</h2>
          <p className="text-lg text-muted-foreground">
            Des services de qualité pour une expérience de location exceptionnelle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
