import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox, CheckboxItem } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { OnboardingStepper } from "@/components/ui/onboarding-stepper"

export default function AutopilotRulesPage() {
  const router = useRouter()

  const [minMatchScore, setMinMatchScore] = useState(70)
  const [dailyLimit, setDailyLimit] = useState(5)
  const [sendingDays, setSendingDays] = useState<string[]>(["monday", "tuesday", "wednesday", "thursday", "friday"])
  const [sendingHours, setSendingHours] = useState<{ start: number; end: number }>({ start: 9, end: 17 })
  const [companySizeLimit, setCompanySizeLimit] = useState(50)
  const [tone, setTone] = useState<{ formality: "formal" | "casual"; detail: "short" | "detailed" }>({ formality: "casual", detail: "short" })
  const [followupEnabled, setFollowupEnabled] = useState(true)
  const [selectedDesign, setSelectedDesign] = useState("default")

  const handleSaveAndContinue = () => {
    // In a real implementation, we would save the autopilot rules
    router.push("/onboarding/sample-review")
  }

  const steps = [
    { label: "Sign in", description: "Continue with Google or Microsoft", completed: true },
    { label: "Choose role", description: "Role selected", completed: true },
    { label: "Tell us about you", description: "Profile information added", completed: true },
    { label: "Set targeting", description: "Targeting preferences set", completed: true },
    { label: "Connect mailbox", description: "Mailbox connected", completed: true },
    { label: "Design email", description: "Email template created", completed: true },
    { label: "Set rules", description: "Configure your autopilot preferences", completed: false },
    { label: "Review sample", description: "Preview a sample email", completed: false },
    { label: "Turn on autopilot", description: "Start automated outreach", completed: false },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <OnboardingStepper
          currentStep={6}
          totalSteps={steps.length}
          steps={steps}
          className="mb-8"
        />

        <Card className="w-full">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl font-bold">
              Set autopilot rules
            </CardTitle>
            <CardDescription>
              Configure how Arvo Reach works for you on autopilot
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Minimum Match Score */}
            <div className="space-y-4">
              <Label htmlFor="min-match-score">Minimum match score</Label>
              <p className="text-sm text-muted-foreground mb-2">
                Only leads at or above this score are written to and sent
              </p>
              <div className="flex items-baseline gap-3">
                <Slider
                  defaultValue={minMatchScore}
                  min={0}
                  max={100}
                  step={5}
                  value={minMatchScore}
                  onValueChange={setMinMatchScore}
                  className="flex-1"
                />
                <span id="min-match-score-value">{minMatchScore}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Higher scores mean better matches but fewer leads
              </p>
            </div>

            {/* Daily Sending Limit */}
            <Separator className="my-6" />
            <div className="space-y-4">
              <Label htmlFor="daily-limit">Daily sending limit</Label>
              <p className="text-sm text-muted-foreground mb-2">
                Emails per day, never above your current safe cap
              </p>
              <div className="flex items-baseline gap-3">
                <Slider
                  defaultValue={dailyLimit}
                  min={1}
                  max={25}
                  step={1}
                  value={dailyLimit}
                  onValueChange={setDailyLimit}
                  className="flex-1"
                />
                <span id="daily-limit-value">{dailyLimit}</span> emails/day
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                New users start at 5 emails/day, can increase to 25 with good sender health
              </p>
            </div>

            {/* Sending Days */}
            <Separator className="my-6" />
            <div className="space-y-4">
              <Label htmlFor="sending-days">Sending days</Label>
              <p className="text-sm text-muted-foreground mb-2">
                When emails may go out
              </p>
              <div className="flex flex-wrap gap-2">
                {[["monday", "Monday"], ["tuesday", "Tuesday"], ["wednesday", "Wednesday"], ["thursday", "Thursday"], ["friday", "Friday"], ["saturday", "Saturday"], ["sunday", "Sunday"]].map(([value, label]) => (
                  <CheckboxItem
                    key={value}
                    value={value}
                    checked={sendingDays.includes(value)}
                    onChange={(checked) => {
                      if (checked) {
                        setSendingDays([...sendingDays, value]);
                      } else {
                        setSendingDays(sendingDays.filter(day => day !== value));
                      }
                    }}
                  >
                    {label}
                  </CheckboxItem>
                ))}
              </div>
            </div>

            {/* Sending Hours */}
            <Separator className="my-6" />
            <div className="space-y-4">
              <Label htmlFor="sending-hours">Sending hours</Label>
              <p className="text-sm text-muted-foreground mb-2">
                In your time zone
              </p>
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="hour-start">Start time</Label>
                  <Input
                    id="hour-start"
                    type="number"
                    min={0}
                    max={23}
                    value={sendingHours.start}
                    onChange={(e) => setSendingHours(prev => ({ ...prev, start: parseInt(e.target.value) || 0 }))}
                  />
                </div>
                <div>
                  <Label htmlFor="hour-end">End time</Label>
                  <Input
                    id="hour-end"
                    type="number"
                    min={0}
                    max={23}
                    value={sendingHours.end}
                    onChange={(e) => setSendingHours(prev => ({ ...prev, end: parseInt(e.target.value) || 23 }))}
                  />
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Example: 9 for 9:00 AM, 17 for 5:00 PM
              </p>
            </div>

            {/* Company Size Limit */}
            <Separator className="my-6" />
            <div className="space-y-4">
              <Label htmlFor="company-size-limit">Company size limit</Label>
              <p className="text-sm text-muted-foreground mb-2">
                Maximum employees for a company to count as small
              </p>
              <div className="flex items-baseline gap-3">
                <Slider
                  defaultValue={companySizeLimit}
                  min={10}
                  max={200}
                  step={10}
                  value={companySizeLimit}
                  onValueChange={setCompanySizeLimit}
                  className="flex-1"
                />
                <span id="company-size-limit-value">{companySizeLimit}</span> employees
              </div>
            </div>

            {/* Tone Settings */}
            <Separator className="my-6" />
            <div className="space-y-4">
              <Label htmlFor="tone-settings">Email tone</Label>
              <div className="space-y-2">
                <Label htmlFor="tone-formality">Formality</Label>
                <RadioGroup
                  id="tone-formality"
                  defaultValue="casual"
                  value={tone.formality}
                  onValueChange={(v) => setTone(prev => ({ ...prev, formality: v }))}
                  className="flex gap-4"
                >
                  <RadioGroupItem value="formal">Formal</RadioGroupItem>
                  <RadioGroupItem value="casual">Casual</RadioGroupItem>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tone-detail">Detail level</Label>
                <RadioGroup
                  id="tone-detail"
                  defaultValue="short"
                  value={tone.detail}
                  onValueChange={(v) => setTone(prev => ({ ...prev, detail: v }))}
                  className="flex gap-4"
                >
                  <RadioGroupItem value="short">Short</RadioGroupItem>
                  <RadioGroupItem value="detailed">Detailed</RadioGroupItem>
                </RadioGroup>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Casual, short: "Hi Alex, I saw your job post for a Frontend Role..."<br/>
                Formal, detailed: "Dear Mr. Johnson, I am writing to express my interest in the Frontend Developer position..."
              </p>
            </div>

            {/* Follow-up Settings */}
            <Separator className="my-6" />
            <div className="space-y-4">
              <Label htmlFor="followup-enabled">Follow-up email</Label>
              <ToggleGroup
                id="followup-enabled"
                type="radio"
                defaultValue={followupEnabled ? "on" : "off"}
                value={followupEnabled ? "on" : "off"}
                onValueChange={(v) => setFollowupEnabled(v === "on")}
              >
                <ToggleGroupItem value="on">Send one follow-up if no reply after ~5 days</ToggleGroupItem>
                <ToggleGroupItem value="off">No follow-up emails</ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* Email Design Selection */}
            <Separator className="my-6" />
            <div className="space-y-4">
              <Label htmlFor="email-design">Email design to use</Label>
              <p className="text-sm text-muted-foreground mb-2">
                Which saved design should autopilot use for sending emails
              </p>
              <RadioGroup
                id="email-design"
                defaultValue="default"
                value={selectedDesign}
                onValueChange={setSelectedDesign}
                className="space-y-2"
              >
                <RadioGroupItem value="default">
                  Default design (the one you just created)
                </RadioGroupItem>
                <RadioGroupItem value="alternative">
                  Alternative design (if you had saved multiple)
                </RadioGroupItem>
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter className="pt-6">
            <Button onClick={handleSaveAndContinue} className="w-full">
              Continue to Sample Review
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}