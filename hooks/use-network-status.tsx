"use client"

import { useState, useEffect } from "react"

export function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState(true)
  const [wasOffline, setWasOffline] = useState(false)

  useEffect(() => {
    // Check if we're in a browser environment and navigator is available
    if (typeof window === "undefined" || typeof navigator === "undefined") {
      return
    }

    const updateNetworkStatus = () => {
      try {
        const online = navigator.onLine
        setIsOnline(online)

        if (!online) {
          setWasOffline(true)
        }
      } catch (error) {
        console.warn("Error checking network status:", error)
        // Assume online if we can't check
        setIsOnline(true)
      }
    }

    // Set initial status
    updateNetworkStatus()

    // Listen for network changes
    try {
      window.addEventListener("online", updateNetworkStatus)
      window.addEventListener("offline", updateNetworkStatus)
    } catch (error) {
      console.warn("Error setting up network listeners:", error)
    }

    return () => {
      try {
        window.removeEventListener("online", updateNetworkStatus)
        window.removeEventListener("offline", updateNetworkStatus)
      } catch (error) {
        console.warn("Error removing network listeners:", error)
      }
    }
  }, [])

  return { isOnline, wasOffline }
}
