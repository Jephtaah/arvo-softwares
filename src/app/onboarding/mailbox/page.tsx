import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { OnboardingStepper } from "@/components/ui/onboarding-stepper"

export default function MailboxPage() {
  const router = useRouter()

  const handleContinue = () => {
    // In a real implementation, we would initiate the OAuth flow here
    // For now, we'll just simulate success and move to the next step
    router.push("/onboarding/email-design")
  }

  const steps = [
    { label: "Sign in", description: "Continue with Google or Microsoft", completed: true },
    { label: "Choose role", description: "Role selected", completed: true },
    { label: "Tell us about you", description: "Profile information added", completed: true },
    { label: "Set targeting", description: "Targeting preferences set", completed: true },
    { label: "Connect mailbox", description: "Link your Gmail or Outlook account", completed: false },
    { label: "Design email", description: "Create your email template", completed: false },
    { label: "Set rules", description: "Configure your autopilot preferences", completed: false },
    { label: "Review sample", description: "Preview a sample email", completed: false },
    { label: "Turn on autopilot", description: "Start automated outreach", completed: false },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <OnboardingStepper
          currentStep={4}
          totalSteps={steps.length}
          steps={steps}
          className="mb-8"
        />

        <Card className="w-full">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl font-bold">
              Connect your mailbox
            </CardTitle>
            <CardDescription>
              Send emails from your real Gmail or Outlook address
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg font-medium mb-4">
                Connect your email account to send outgoing messages
              </p>

              <Button
                variant="outline"
                className="w-full flex items-center justify-start gap-3"
                onClick={() => {
                  // In real app, this would trigger Google OAuth
                  alert("Initiating Google OAuth flow...");
                  // Simulate success after delay
                  setTimeout(() => router.push("/onboarding/email-design"), 1500);
                }}
              >
                <span className="flex-shrink-0">
                  {/* Google icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-1.38-.26-2.72-.7-3.96h-3.91v-2.15h-3.57v2.15h-3.86c-.58 1.74-.9 3.51-.9 5.19s.32 3.45.9 5.19h3.86v2.15h3.57v-2.15h3.91c.44-1.24.7-2.58.7-3.96z" fill="#4285F4"/>
                    <path d="M6.19 19.27c-2.02.55-4.25.87-6.19.87-3.41 0-6.31-1.26-8.39-3.34l1.56-1.42c1.8 1.69 4.19 2.81 6.88 2.81 3.71 0 6.78-1.83 8.8-4.8l-1.56-1.42c-1.52 2.1-3.89 3.31-6.49 3.31z" fill="#34A853"/>
                    <path d="M5.34 6.19c.56-1.81 1.54-3.42 2.89-4.61l1.42 1.56c-1.23 1.15-2.27 2.49-2.89 3.96-.58 1.31-.9 2.74-.9 4.21s.32 2.9.9 4.21l1.56-1.42c-1.17-.98-2.09-2.23-2.72-3.79z" fill="#FBBC05"/>
                    <path d="M12.81 3.96c1.7-.46 3.47-.69 5.31-.69s3.61.23 5.31-.69l1.56 1.42c-1.24-.66-2.66-1.04-4.19-1.04s-2.95.38-4.19 1.04l1.56 1.42z" fill="#EA4335"/>
                  </svg>
                </span>
                Connect with Google
              </Button>

              <Button
                variant="outline"
                className="w-full flex items-center justify-start gap-3 mt-3"
                onClick={() => {
                  // In real app, this would trigger Microsoft OAuth
                  alert("Initiating Microsoft OAuth flow...");
                  // Simulate success after delay
                  setTimeout(() => router.push("/onboarding/email-design"), 1500);
                }}
              >
                <span className="flex-shrink-0">
                  {/* Microsoft icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="4" fill="#F25022"/>
                    <rect x="14" y="2" width="8" height="8" fill="#7FBA00"/>
                    <rect x="2" y="14" width="8" height="8" fill="#00ADEF"/>
                    <rect x="14" y="14" width="8" height="8" fill="#FFB900"/>
                  </svg>
                </span>
                Connect with Microsoft
              </Button>
            </div>

            <div className="border-t pt-4">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> We only request permission to send emails from your address and read threads we start. We never read your other emails or access your contacts.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}