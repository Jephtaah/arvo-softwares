import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox, CheckboxItem } from "@/components/ui/checkbox"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandPicker } from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { OnboardingStepper } from "@/components/ui/onboarding-stepper"

export default function JobSeekerProfilePage() {
  const router = useRouter()

  const handleContinue = () => {
    // In a real implementation, we would save the profile data
    router.push("/onboarding/targeting")
  }

  const steps = [
    { label: "Sign in", description: "Continue with Google or Microsoft", completed: true },
    { label: "Choose role", description: "Selected: Job Seeker", completed: true },
    { label: "Tell us about you", description: "Add your profile information", completed: false },
    { label: "Set targeting", description: "Define your target companies and signals", completed: false },
    { label: "Connect mailbox", description: "Link your Gmail or Outlook account", completed: false },
    { label: "Design email", description: "Create your email template", completed: false },
    { label: "Set rules", description: "Configure your autopilot preferences", completed: false },
    { label: "Review sample", description: "Preview a sample email", completed: false },
    { label: "Turn on autopilot", description: "Start automated outreach", completed: false },
  ]

  // Mock data for skills extraction (in real app, this would come from CV parsing)
  const extractedSkills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "UI/UX Design",
    "Project Management",
    "Git",
    "AWS"
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
              Help us understand your background so we can find the right opportunities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* CV Upload Section */}
            <div className="space-y-4">
              <Label htmlFor="cv-upload">Upload your CV</Label>
              <div className="flex items-center gap-3">
                <Input
                  id="cv-upload"
                  placeholder="Choose a PDF or Word document"
                  readOnly
                />
                <Button variant="outline" size="sm">
                  Browse Files
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                We'll extract your skills, experience, and education from your CV
              </p>
            </div>

            {/* Extracted Skills Section */}
            <Separator className="my-6" />
            <div className="space-y-4">
              <Label htmlFor="skills-review">Review extracted skills</Label>
              <p className="text-sm text-muted-foreground mb-2">
                Check the skills that accurately represent your background
              </p>
              <div className="grid gap-2">
                {extractedSkills.map((skill, index) => (
                  <CheckboxItem key={index} value={skill}>
                    {skill}
                  </CheckboxItem>
                ))}
              </div>
            </div>

            {/* Profile Links Section */}
            <Separator className="my-6" />
            <div className="space-y-4">
              <Label htmlFor="portfolio-links">Add portfolio links</Label>
              <p className="text-sm text-muted-foreground mb-2">
                Add links to your portfolio, GitHub, LinkedIn, or personal site
              </p>
              <div className="space-y-2">
                <Input
                  id="portfolio-links"
                  placeholder="https://github.com/yourusername"
                />
                <Input
                  id="portfolio-links"
                  placeholder="https://linkedin.com/in/yourusername"
                />
                <Input
                  id="portfolio-links"
                  placeholder="https://yourpersonal site.com"
                />
              </div>
            </div>

            {/* Target Preferences Section */}
            <Separator className="my-6" />
            <div className="space-y-4">
              <Label htmlFor="target-roles">Target roles</Label>
              <Input
                id="target-roles"
                placeholder="Frontend Engineer, UX Designer, Product Manager"
              />

              <div className="mt-4 space-y-2">
                <Label htmlFor="seniority-level">Seniority level</Label>
                <ToggleGroup type="radio" id="seniority-level" defaultValue="mid">
                  <ToggleGroupItem value="entry">Entry level</ToggleGroupItem>
                  <ToggleGroupItem value="mid">Mid level</ToggleGroupItem>
                  <ToggleGroupItem value="senior">Senior level</ToggleGroupItem>
                  <ToggleGroupItem value="lead">Lead / Manager</ToggleGroupItem>
                </ToggleGroup>
              </div>

              <div className="mt-4 space-y-2">
                <Label htmlFor="location-preference">Location preference</Label>
                <Input
                  id="location-preference"
                  placeholder="Remote, New York, San Francisco, etc."
                />
              </div>

              <div className="mt-4 space-y-2">
                <Label htmlFor="remote-preference">Remote preference</Label>
                <ToggleGroup type="radio" id="remote-preference" defaultValue="flexible">
                  <ToggleGroupItem value="remote">Remote only</ToggleGroupItem>
                  <ToggleGroupItem value="flexible">Remote preferred</ToggleGroupItem>
                  <ToggleGroupItem value="hybrid">Hybrid acceptable</ToggleGroupItem>
                  <ToggleGroupItem value="onsite">Onsite preferred</ToggleGroupItem>
                </ToggleGroup>
              </div>

              <div className="mt-4 space-y-2">
                <Label htmlFor="deal-breakers">Deal-breakers</Label>
                <Textarea
                  id="deal-breakers"
                  placeholder="e.g., No equity-only compensation, Must have health benefits, etc."
                  rows={3}
                />
              </div>
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