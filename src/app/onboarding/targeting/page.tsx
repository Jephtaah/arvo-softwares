import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox, CheckboxItem } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { OnboardingStepper } from "@/components/ui/onboarding-stepper"

export default function TargetingPage() {
  const router = useRouter()

  const handleContinue = () => {
    // In a real implementation, we would save the targeting preferences
    router.push("/onboarding/mailbox")
  }

  // Determine if user is job seeker or agency (in real app, this would come from session/profile)
  const isJobSeeker = true // This would be determined from user data

  const steps = [
    { label: "Sign in", description: "Continue with Google or Microsoft", completed: true },
    { label: "Choose role", description: isJobSeeker ? "Selected: Job Seeker" : "Selected: Agency", completed: true },
    { label: "Tell us about you", description: "Profile information added", completed: true },
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
          currentStep={3}
          totalSteps={steps.length}
          steps={steps}
          className="mb-8"
        />

        <Card className="w-full">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl font-bold">
              Set targeting
            </CardTitle>
            <CardDescription>
              Define who you want to reach and what signals to follow
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Company Size Limit Section */}
            <div className="space-y-4">
              <Label htmlFor="company-size">Company size limit</Label>
              <p className="text-sm text-muted-foreground mb-2">
                Maximum employees for a company to count as "small"
              </p>
              <div className="flex items-baseline gap-3">
                <Slider
                  defaultValue={50}
                  min={10}
                  max={200}
                  step={10}
                  className="flex-1"
                />
                <span id="company-size-value">50</span> employees
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Companies larger than this will be automatically excluded
              </p>
            </div>

            {/* Industries Section */}
            <Separator className="my-6" />
            <div className="space-y-4">
              <Label htmlFor="industries">Industries to focus on</Label>
              <p className="text-sm text-muted-foreground mb-2">
                Leave blank to consider all industries
              </p>
              <div className="space-y-2">
                <Input
                  id="industries"
                  placeholder="e.g., Technology, Healthcare, Finance, Marketing"
                />
                <Input
                  id="industries"
                  placeholder="Add another industry..."
                />
              </div>
            </div>

            {/* Regions Section */}
            <Separator className="my-6" />
            <div className="space-y-4">
              <Label htmlFor="regions">Regions to focus on</Label>
              <p className="text-sm text-muted-foreground mb-2">
                Leave blank to consider all regions
              </p>
              <div className="space-y-2">
                <Input
                  id="regions"
                  placeholder="e.g., US, Canada, UK, Germany, Australia, Remote"
                />
                <Input
                  id="regions"
                  placeholder="Add another region..."
                />
              </div>
            </div>

            {/* Signals to Follow Section */}
            <Separator className="my-6" />
            <div className="space-y-4">
              <Label htmlFor="signals-heading">Signals to follow</Label>
              <p className="text-sm text-muted-foreground mb-2">
                Select which types of signals create leads for you
              </p>
              <div className="space-y-2">
                {isJobSeeker ? (
                  <>
                    <CheckboxItem value="job-posts">
                      Job posts from RemoteOK, We Work Remotely, Hacker News, company careers pages
                    </CheckboxItem>
                  </>
                ) : (
                  <>
                    <CheckboxItem value="hiring">
                      Hiring signals (job posts, team expansions)
                    </CheckboxItem>
                    <CheckboxItem value="funding">
                      Funding announcements from startup news sites
                    </CheckboxItem>
                    <CheckboxItem value="launches">
                      Product launches and rebrands from Product Hunt, Show HN
                    </CheckboxItem>
                  </>
                )}
              </div>
            </div>

            {/* Exclusions Section */}
            <Separator className="my-6" />
            <div className="space-y-4">
              <Label htmlFor="exclusions">Excluded companies, domains, industries</Label>
              <p className="text-sm text-muted-foreground mb-2">
                Never contacted (useful for blocking current employers, competitors, etc.)
              </p>
              <div className="space-y-2">
                <Input
                  id="exclusions"
                  placeholder="e.g., currentemployer.com, competitor.com, tobacco"
                />
                <Input
                  id="exclusions"
                  placeholder="Add another exclusion..."
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-6">
            <Button onClick={handleContinue} className="w-full">
              Continue to Mailbox Connection
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}