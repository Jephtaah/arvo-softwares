import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { OnboardingStepper } from "@/components/ui/onboarding-stepper"

export default function AgencyProfilePage() {
  const router = useRouter()

  const handleContinue = () => {
    // In a real implementation, we would save the profile data
    router.push("/onboarding/targeting")
  }

  const steps = [
    { label: "Sign in", description: "Continue with Google or Microsoft", completed: true },
    { label: "Choose role", description: "Selected: Agency", completed: true },
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
          currentStep={2}
          totalSteps={steps.length}
          steps={steps}
          className="mb-8"
        />

        <Card className="w-full">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl font-bold">
              Tell us about you
            </CardTitle>
            <CardDescription>
              Help us understand your agency so we can find the right clients
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Services Description Section */}
            <div className="space-y-4">
              <Label htmlFor="services-description">Describe your services</Label>
              <Textarea
                id="services-description"
                placeholder="e.g., We specialize in web development for e-commerce brands, UI/UX design for SaaS companies, and digital marketing for startups..."
                rows={4}
              />
            </div>

            {/* Portfolio Sites Section */}
            <Separator className="my-6" />
            <div className="space-y-4">
              <Label htmlFor="portfolio-sites">Add portfolio sites</Label>
              <p className="text-sm text-muted-foreground mb-2">
                Add links to your agency's portfolio or case study pages
              </p>
              <div className="space-y-2">
                <Input
                  id="portfolio-sites"
                  placeholder="https://youragency.com/portfolio"
                />
                <Input
                  id="portfolio-sites"
                  placeholder="https://youragency.com/work"
                />
                <Input
                  id="portfolio-sites"
                  placeholder="https://youragency.com/case-studies"
                />
              </div>
            </div>

            {/* Case Studies Section */}
            <Separator className="my-6" />
            <div className="space-y-4">
              <Label htmlFor="case-studies-heading">Add case studies (2-5)</Label>
              <p className="text-sm text-muted-foreground mb-2">
                Each case study should include title, industry, challenge, action, and result
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="case-study-1-title">Case Study 1</Label>
                  <Input
                    id="case-study-1-title"
                    placeholder="Title"
                  />
                  <Input
                    id="case-study-1-industry"
                    placeholder="Industry"
                  />
                  <Textarea
                    id="case-study-1-details"
                    placeholder="Challenge, Action, Result"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="case-study-2-title">Case Study 2</Label>
                  <Input
                    id="case-study-2-title"
                    placeholder="Title"
                  />
                  <Input
                    id="case-study-2-industry"
                    placeholder="Industry"
                  />
                  <Textarea
                    id="case-study-2-details"
                    placeholder="Challenge, Action, Result"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="case-study-3-title">Case Study 3 (optional)</Label>
                  <Input
                    id="case-study-3-title"
                    placeholder="Title"
                  />
                  <Input
                    id="case-study-3-industry"
                    placeholder="Industry"
                  />
                  <Textarea
                    id="case-study-3-details"
                    placeholder="Challenge, Action, Result"
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* Ideal Client Section */}
            <Separator className="my-6" />
            <div className="space-y-4">
              <Label htmlFor="ideal-client">Describe your ideal client</Label>
              <Textarea
                id="ideal-client"
                placeholder="e.g., B2B SaaS companies with 10-50 employees, located in US/Europe, seeking growth-stage web development..."
                rows={3}
              />
            </div>

            {/* Regions Section */}
            <Separator className="my-6" />
            <div className="space-y-4">
              <Label htmlFor="regions">Preferred regions</Label>
              <Input
                id="regions"
                placeholder="US, Canada, UK, Germany, Australia, etc."
              />
            </div>
          </CardContent>
          <CardFooter className="pt-6">
            <Button onClick={handleContinue} className="w-full">
              Continue to Targeting
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}