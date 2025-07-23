import { CarGrid } from "@/components/car-grid"
import { SearchForm } from "@/components/search-form"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, SlidersHorizontal } from "lucide-react"

export default function VehiclesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Vehicle Fleet</h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Discover our wide range of vehicles adapted to all your needs and budgets
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
                All Vehicles
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">
                Economy
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">
                Compact
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">
                Premium
              </Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Sort
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
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="economy">Economy</TabsTrigger>
              <TabsTrigger value="compact">Compact</TabsTrigger>
              <TabsTrigger value="premium">Premium</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <CarGrid />
            </TabsContent>

            <TabsContent value="economy" className="mt-8">
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold mb-4">Economy Vehicles</h3>
                <p className="text-muted-foreground mb-8">Perfect for your urban travels</p>
                <CarGrid />
              </div>
            </TabsContent>

            <TabsContent value="compact" className="mt-8">
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold mb-4">Compact Vehicles</h3>
                <p className="text-muted-foreground mb-8">The perfect balance between comfort and economy</p>
                <CarGrid />
              </div>
            </TabsContent>

            <TabsContent value="premium" className="mt-8">
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold mb-4">Premium Vehicles</h3>
                <p className="text-muted-foreground mb-8">Luxury and performance for an exceptional experience</p>
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
            <h2 className="text-3xl font-bold mb-4">Included Services</h2>
            <p className="text-lg text-muted-foreground">All our vehicles include these essential services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Full Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Complete coverage included in all our rates</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Unlimited Mileage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Drive without mileage limits</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>24/7 Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Customer support available at any time</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
