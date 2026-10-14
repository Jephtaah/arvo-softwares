import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { OnboardingStepper } from "@/components/ui/onboarding-stepper"

export default function SampleReviewPage() {
  const router = useRouter()

  const [toneAdjustment, setToneAdjustment] = useState<"formal" | "casual">("casual")
  const [detailLevel, setDetailLevel] = useState<"short" | "detailed">("short")

  const handleRegenerate = () => {
    // In a real implementation, this would regenerate the email with adjusted tone
    alert("Email regenerated with new tone settings!")
  }

  const handleApproveAndContinue = () => {
    // In a real implementation, we would save the approved sample and move to final step
    router.push("/onboarding/complete")
  }

  const steps = [
    { label: "Sign in", description: "Continue with Google or Microsoft", completed: true },
    { label: "Choose role", description: "Role selected", completed: true },
    { label: "Tell us about you", description: "Profile information added", completed: true },
    { label: "Set targeting", description: "Targeting preferences set", completed: true },
    { label: "Connect mailbox", description: "Mailbox connected", completed: true },
    { label: "Design email", description: "Email template created", completed: true },
    { label: "Set rules", description: "Autopilot rules configured", completed: true },
    { label: "Review sample", description: "Preview a sample email", completed: false },
    { label: "Turn on autopilot", description: "Start automated outreach", completed: false },
  ]

  // Mock sample email data - in real app this would be generated from user profile + lead data
  const sampleEmail = {
    subject: "Frontend Developer role at InnovateTech",
    preview: "I came across your recent job post for a Frontend Developer position...",
    body: `Hi Alex,

I came across your recent job post for a Frontend Developer position at InnovateTech and was impressed by your company's mission to revolutionize how teams collaborate remotely.

With 5 years of experience building responsive web applications using React and TypeScript, I've helped companies like Tech Innovations Inc improve their user engagement by 40% through performance optimization and intuitive UI design.

I'd love to discuss how my expertise in modern frontend development could contribute to your team's goals. Are you available for a brief call next week?

Best regards,
Alex Johnson
Frontend Developer • Tech Innovations Inc
+1 (555) 123-4567 • https://alexjohnson.dev
GitHub: https://github.com/alexjohnson
LinkedIn: https://linkedin.com/in/alexjohnson`
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <OnboardingStepper
          currentStep={7}
          totalSteps={steps.length}
          steps={steps}
          className="mb-8"
        />

        <Card className="w-full">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl font-bold">
              Review your sample email
            </CardTitle>
            <CardDescription>
              See how your email will look and adjust tone if needed
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Email Preview */}
            <div className="border rounded p-6 bg-background">
              <div className="space-y-4">
                <p className="font-medium text-right text-sm text-muted-foreground">
                  {{sampleEmail.subject}}
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  {{sampleEmail.preview}}
                </p>
                <div className="whitespace-pre-line">
                  {sampleEmail.body}
                </div>
              </div>
            </div>

            {/* Tone Adjustment */}
            <Separator className="my-6" />
            <div className="space-y-4">
              <Label htmlFor="tone-adjustment">Adjust tone</Label>
              <p className="text-sm text-muted-foreground mb-2">
                Make the email more formal or casual, short or detailed
              </p>
              <div className="space-y-2">
                <Label htmlFor="tone-formality">Formality</Label>
                <ToggleGroup
                  id="tone-formality"
                  type="radio"
                  defaultValue="casual"
                  value={toneAdjustment}
                  onValueChange={setToneAdjustment}
                >
                  <ToggleGroupItem value="formal">More formal</ToggleGroupItem>
                  <ToggleGroupItem value="casual">More casual</ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="detail-level">Detail level</Label>
                <ToggleGroup
                  id="detail-level"
                  type="radio"
                  defaultValue="short"
                  value={detailLevel}
                  onValueChange={setDetailLevel}
                >
                  <ToggleGroupItem value="short">Shorter</ToggleGroupItem>
                  <ToggleGroupItem value="detailed">More detailed</ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>

            {/* Regenerate Button */}
            <Separator className="my-6" />
            <div className="space-y-4">
              <Button
                variant="outline"
                onClick={handleRegenerate}
                className="w-full"
              >
                Regenerate sample with adjusted tone
              </Button>
            </div>
          </CardContent>
          <CardFooter className="pt-6">
            <Button onClick={handleApproveAndContinue} className="w-full">
              Looks good! Turn on autopilot
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}