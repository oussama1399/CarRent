"use client"

import { SearchForm } from "@/components/search-form"
import { CarGrid } from "@/components/car-grid"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { ErrorBoundary } from "@/components/error-boundary"
import { useEffect, useState } from "react"

function LoadingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="h-12 bg-slate-600 rounded mb-6 animate-pulse"></div>
            <div className="h-6 bg-slate-600 rounded mb-8 animate-pulse"></div>
            <div className="flex gap-4">
              <div className="h-12 w-32 bg-slate-600 rounded animate-pulse"></div>
              <div className="h-12 w-32 bg-slate-600 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <LoadingPage />
  }

  return (
    <div className="min-h-screen bg-background">
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>

      <ErrorBoundary>
        <SearchForm />
      </ErrorBoundary>

      <ErrorBoundary>
        <CarGrid />
      </ErrorBoundary>

      <ErrorBoundary>
        <Features />
      </ErrorBoundary>
    </div>
  )
}
