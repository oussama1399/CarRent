import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Louez la voiture parfaite pour votre voyage</h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200">
            Des véhicules de qualité, des prix compétitifs et un service client exceptionnel
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              Réserver maintenant
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
            >
              Voir nos véhicules
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
