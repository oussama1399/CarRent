import { CarGrid } from "@/components/car-grid"
import { SearchForm } from "@/components/search-form"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, SlidersHorizontal } from "lucide-react"

export default function VehiculesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Notre Flotte de Véhicules</h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Découvrez notre large gamme de véhicules adaptés à tous vos besoins et budgets
            </p>
          </div>
        </div>
      </section>

      {/* Search Form */}
      <SearchForm />

      {/* Filters and Categories */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">
                Tous les véhicules
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">
                Économique
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">
                Compacte
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">
                Premium
              </Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filtrer
              </Button>
              <Button variant="outline" size="sm">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Trier
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">Tous</TabsTrigger>
              <TabsTrigger value="economique">Économique</TabsTrigger>
              <TabsTrigger value="compacte">Compacte</TabsTrigger>
              <TabsTrigger value="premium">Premium</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <CarGrid />
            </TabsContent>

            <TabsContent value="economique" className="mt-8">
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold mb-4">Véhicules Économiques</h3>
                <p className="text-muted-foreground mb-8">Parfaits pour vos déplacements urbains</p>
                {/* Ici on pourrait filtrer les voitures économiques */}
                <CarGrid />
              </div>
            </TabsContent>

            <TabsContent value="compacte" className="mt-8">
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold mb-4">Véhicules Compacts</h3>
                <p className="text-muted-foreground mb-8">L'équilibre parfait entre confort et économie</p>
                <CarGrid />
              </div>
            </TabsContent>

            <TabsContent value="premium" className="mt-8">
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold mb-4">Véhicules Premium</h3>
                <p className="text-muted-foreground mb-8">Luxe et performance pour une expérience exceptionnelle</p>
                <CarGrid />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Services Inclus</h2>
            <p className="text-lg text-muted-foreground">Tous nos véhicules incluent ces services essentiels</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Assurance Complète</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Couverture complète incluse dans tous nos tarifs</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kilométrage Illimité</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Roulez sans limite de kilomètres</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Assistance 24h/24</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Support client disponible à tout moment</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
