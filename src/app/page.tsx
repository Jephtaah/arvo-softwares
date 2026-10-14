"use client";

import { useEffect } from "react"
import { useRouter } from "next/navigation"

// In a real app, this would check auth status from cookies/session
export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // For demo purposes, we'll simulate checking auth status
    // In reality, this would check for a valid session
    const isAuthenticated = false // Change to true to test dashboard redirect

    if (isAuthenticated) {
      router.push("/dashboard")
    } else {
      router.push("/auth/signin")
    }
  }, [router])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to Arvo Reach
        </h1>
        <p className="text-lg text-muted-foreground">
          Setting up your account...
        </p>
        <div className="mt-6 flex items-center gap-2">
          <div className="h-4 w-4 animate-pulse rounded-full bg-primary"></div>
          <div className="h-4 w-4 animate-pulse rounded-full bg-primary"></div>
          <div className="h-4 w-4 animate-pulse rounded-full bg-primary"></div>
        </div>
      </div>
    </main>
  )
}