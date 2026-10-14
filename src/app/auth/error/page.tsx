import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ErrorPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader className="pb-6">
          <CardTitle className="text-2xl font-bold text-destructive">
            Authentication Error
          </CardTitle>
          <CardDescription>
            There was an error during the authentication process. Please try again.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={() => window.location.href="/auth/signin"}
            className="w-full"
          >
            Return to Sign In
          </Button>
        </CardContent>
      </Card>
    </main>
  )
}