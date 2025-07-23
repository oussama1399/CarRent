"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarDays, MapPin } from "lucide-react"

export function SearchForm() {
  const [pickupDate, setPickupDate] = useState("")
  const [returnDate, setReturnDate] = useState("")
  const [location, setLocation] = useState("")

  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-center mb-6">Rechercher une voiture</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Lieu de prise en charge
                </Label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir une ville" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="paris">Paris</SelectItem>
                    <SelectItem value="lyon">Lyon</SelectItem>
                    <SelectItem value="marseille">Marseille</SelectItem>
                    <SelectItem value="toulouse">Toulouse</SelectItem>
                    <SelectItem value="nice">Nice</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pickup-date" className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  Date de prise en charge
                </Label>
                <Input
                  id="pickup-date"
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="return-date" className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  Date de retour
                </Label>
                <Input
                  id="return-date"
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>

              <div className="flex items-end">
                <Button className="w-full bg-orange-600 hover:bg-orange-700">Rechercher</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
