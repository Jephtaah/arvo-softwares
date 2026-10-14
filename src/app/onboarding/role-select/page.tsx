import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { OnboardingStepper } from "@/components/ui/onboarding-stepper"

export default function RoleSelectPage() {
  const router = useRouter()

  const handleRoleSelect = (role: "job-seeker" | "agency") => {
    // In a real implementation, we would save the role to user profile
    // For now, we'll just redirect to the next step
    router.push(`/onboarding/${role === "job-seeker" ? "job-seeker-profile" : "agency-profile"}`)
  }

  const steps = [
    { label: "Sign in", description: "Continue with Google or Microsoft", completed: true },
    { label: "Choose role", description: "Select whether you're a job seeker or agency", completed: false },
    { label: "Tell us about you", description: "Add your profile information", completed: false },
    { label: "Set targeting", description: "Define your target companies and signals", completed: false },
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
          currentStep={1}
          totalSteps={steps.length}
          steps={steps}
          className="mb-8"
        />

        <Card className="w-full">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl font-bold">
              Choose your role
            </CardTitle>
            <CardDescription>
              This helps us tailor the experience to your needs
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Button
              variant="default"
              className="w-full flex items-center justify-start gap-4 py-6"
              onClick={() => handleRoleSelect("job-seeker")}
            >
              <div className="flex-1 space-y-2">
                <h3 className="font-semibold text-lg">Job Seeker</h3>
                <p className="text-muted-foreground">
                  Looking for a role at a startup or small company
                </p>
              </div>
              {/* Icon would go here */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 8v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 16h.01" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </Button>

            <Button
              variant="outline"
              className="w-full flex items-center justify-start gap-4 py-6"
              onClick={() => handleRoleSelect("agency")}
            >
              <div className="flex-1 space-y-2">
                <h3 className="font-semibold text-lg">Agency or Design Studio</h3>
                <p className="text-muted-foreground">
                  Selling services such as web development, design or branding
                </p>
              </div>
              {/* Icon would go here */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M3 10h18" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 5v14" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}