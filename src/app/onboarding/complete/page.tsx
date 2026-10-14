import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { OnboardingStepper } from "@/components/ui/onboarding-stepper"

export default function OnboardingCompletePage() {
  const router = useRouter()

  const handleGoToDashboard = () => {
    router.push("/dashboard")
  }

  const steps = [
    { label: "Sign in", description: "Continue with Google or Microsoft", completed: true },
    { label: "Choose role", description: "Role selected", completed: true },
    { label: "Tell us about you", description: "Profile information added", completed: true },
    { label: "Set targeting", description: "Targeting preferences set", completed: true },
    { label: "Connect mailbox", description: "Mailbox connected", completed: true },
    { label: "Design email", description: "Email template created", completed: true },
    { label: "Set rules", description: "Autopilot rules configured", completed: true },
    { label: "Review sample", description: "Sample email reviewed", completed: true },
    { label: "Turn on autopilot", description: "Start automated outreach", completed: false },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <OnboardingStepper
          currentStep={8}
          totalSteps={steps.length}
          steps={steps}
          className="mb-8"
        />

        <Card className="w-full">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl font-bold">
              You're all set!
            </CardTitle>
            <CardDescription>
              Your Arvo Reach account is configured and ready to run on autopilot
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg mb-2">
                What happens next?
              </h3>
              <p className="text-muted-foreground">
                Arvo Reach will now start working for you in the background:
              </p>
              <ol className="list-decimal list-inside space-y-2 mt-2 text-sm">
                <li>Finding companies with recent public needs (job posts, funding, launches)</li>
                <li>Enriching company data with contact information</li>
                <li>Matching leads to your profile and scoring them</li>
                <li>Writing personalized emails using your facts and their signals</li>
                <li>Fact-checking every email for accuracy</li>
                <li>Sending emails through your Gmail or Outlook during your selected hours</li>
                <li>Following up once if there's no reply (after ~5 days)</li>
                <li>Notifying you when someone replies</li>
              </ol>
            </div>

            <div className="border-t pt-6">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  {/* Success icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Autopilot is OFF</p>
                  <p className="text-sm text-muted-foreground">
                    Click "Start Autopilot" below to begin automated outreach
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-6">
            <Button
              onClick={handleGoToDashboard}
              className="w-full"
            >
              Go to Dashboard
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}