import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Fuel, Settings, Star } from "lucide-react"

interface Car {
  id: string
  name: string
  category: string
  price: number
  image: string
  features: string[]
  transmission: string
  fuel: string
}

interface CarCardProps {
  car: Car
}

export function CarCard({ car }: CarCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <Image
          src={car.image || "/placeholder.svg"}
          alt={car.name}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        <Badge className="absolute top-2 left-2 bg-orange-600">{car.category}</Badge>
      </div>

      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{car.name}</h3>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-muted-foreground">4.8</span>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>5 places</span>
          </div>
          <div className="flex items-center gap-1">
            <Settings className="h-4 w-4" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel className="h-4 w-4" />
            <span>{car.fuel}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {car.features.slice(0, 3).map((feature, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-orange-600">{car.price} DH</span>
            <span className="text-sm text-muted-foreground">/jour</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Link href={`/car/${car.id}`} className="w-full">
          <Button className="w-full bg-orange-600 hover:bg-orange-700">Voir les détails</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
