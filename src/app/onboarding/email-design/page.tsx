import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox, CheckboxItem } from "@/components/ui/checkbox"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandPicker } from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { OnboardingStepper } from "@/components/ui/onboarding-stepper"

export default function EmailDesignPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [layout, setLayout] = useState<"plain" | "light" | "card">("plain")
  const [accentColor, setAccentColor] = useState("#ff7c40") // Primary token color
  const [font, setFont] = useState("system")
  const [textSpacing, setTextSpacing] = useState("comfortable")
  const [logoUrl, setLogoUrl] = useState<string | null>(null)
  const [signature, setSignature] = useState("")
  const [buttonText, setButtonText] = useState("")
  const [buttonUrl, setButtonUrl] = useState("")
  const [followupVariant, setFollowupVariant] = useState<"same" | "lighter">("same")
  const [isSaving, setIsSaving] = useState(false)

  // Mock user data - in real app this would come from session/profile
  const mockUserData = {
    name: "Alex Johnson",
    title: "Frontend Developer",
    company: "Tech Innovations Inc",
    phone: "+1 (555) 123-4567",
    website: "https://alexjohnson.dev",
    profileLinks: [
      { url: "https://github.com/alexjohnson", label: "GitHub" },
      { url: "https://linkedin.com/in/alexjohnson", label: "LinkedIn" }
    ]
  }

  const handleSave = async () => {
    setIsSaving(true)
    // In a real implementation, we would save the email template to the database
    // For now, we'll simulate a save operation
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSaving(false)
    router.push("/onboarding/autopilot-rules")
  }

  const handleTestEmail = () => {
    // In a real implementation, this would send a test email
    alert("Test email sent! (In production, this would send a real test email to your connected mailbox)")
  }

  const steps = [
    { label: "Sign in", description: "Continue with Google or Microsoft", completed: true },
    { label: "Choose role", description: "Role selected", completed: true },
    { label: "Tell us about you", description: "Profile information added", completed: true },
    { label: "Set targeting", description: "Targeting preferences set", completed: true },
    { label: "Connect mailbox", description: "Mailbox connected", completed: true },
    { label: "Design email", description: "Create your email template", completed: false },
    { label: "Set rules", description: "Configure your autopilot preferences", completed: false },
    { label: "Review sample", description: "Preview a sample email", completed: false },
    { label: "Turn on autopilot", description: "Start automated outreach", completed: false },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <OnboardingStepper
          currentStep={5}
          totalSteps={steps.length}
          steps={steps}
          className="mb-8"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel - Controls */}
          <Card className="h-full">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-bold">
                Email Template Studio
              </CardTitle>
              <CardDescription>
                Design how your emails look - preview updates in real time
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Layout Selection */}
              <div className="space-y-4">
                <Label htmlFor="layout-select">Layout</Label>
                <RadioGroup
                  id="layout-select"
                  defaultValue="plain"
                  value={layout}
                  onValueChange={setLayout}
                  className="space-y-2"
                >
                  <RadioGroupItem value="plain" >
                    Plain
                  </RadioGroupItem>
                  <RadioGroupItem value="light">
                    Light
                  </RadioGroupItem>
                  <RadioGroupItem value="card">
                    Card
                  </RadioGroupItem>
                </RadioGroup>
                <p className="text-xs text-muted-foreground mt-1">
                  Plain emails are more likely to reach the inbox than heavily styled ones
                </p>
              </div>

              {/* Accent Color */}
              <Separator className="my-6" />
              <div className="space-y-4">
                <Label htmlFor="accent-color">Accent color</Label>
                <div className="flex items-center gap-3">
                  <Input
                    id="accent-color"
                    type="color"
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                    className="w-12 h-12 cursor-pointer"
                  />
                  <span className="flex-1">
                    <p className="text-sm font-medium">Primary brand color</p>
                    <p className="text-xs text-muted-foreground">
                      Must pass contrast check for accessibility
                    </p>
                  </span>
                </div>
              </div>

              {/* Font Selection */}
              <Separator className="my-6" />
              <div className="space-y-4">
                <Label htmlFor="font-select">Font</Label>
                <RadioGroup
                  id="font-select"
                  defaultValue="system"
                  value={font}
                  onValueChange={setFont}
                  className="space-y-2"
                >
                  <RadioGroupItem value="system">
                    System sans-serif
                  </RadioGroupItem>
                  <RadioGroupItem value="helvetica">
                    Helvetica, Arial, sans-serif
                  </RadioGroupItem>
                  <RadioGroupItem value="georgia">
                    Georgia, serif
                  </RadioGroupItem>
                </RadioGroup>
                <p className="text-xs text-muted-foreground mt-1">
                  Fonts must render correctly in Gmail and Outlook
                </p>
              </div>

              {/* Text Size and Spacing */}
              <Separator className="my-6" />
              <div className="space-y-4">
                <Label htmlFor="spacing-select">Text size and spacing</Label>
                <RadioGroup
                  id="spacing-select"
                  defaultValue="comfortable"
                  value={textSpacing}
                  onValueChange={setTextSpacing}
                  className="space-y-2"
                >
                  <RadioGroupItem value="compact">
                    Compact
                  </RadioGroupItem>
                  <RadioGroupItem value="comfortable">
                    Comfortable
                  </RadioGroupItem>
                </RadioGroup>
              </div>

              {/* Logo/Photo Upload */}
              <Separator className="my-6" />
              <div className="space-y-4">
                <Label htmlFor="logo-upload">Logo or photo</Label>
                <p className="text-sm text-muted-foreground mb-2">
                  One small image, sent inline with emails
                </p>
                <div className="flex items-center gap-3">
                  <Input
                    id="logo-upload"
                    placeholder="https://example.com/logo.png"
                    value={logoUrl || ""}
                    onChange={(e) => setLogoUrl(e.target.value)}
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      // In real app, this would open file upload dialog
                      alert("File upload would open here")
                    }}
                  >
                    Upload
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Max file size: 200KB • Recommended dimensions: 100x100px
                </p>
              </div>

              {/* Signature Configuration */}
              <Separator className="my-6" />
              <div className="space-y-4">
                <Label htmlFor="signature-editor">Signature</Label>
                <Textarea
                  id="signature-editor"
                  value={signature}
                  onChange={(e) => setSignature(e.target.value)}
                  placeholder="Name, title, company, phone, website, profile links"
                  rows={4}
                />
                <div className="mt-2 space-y-1">
                  <p className="text-sm font-medium">Available variables:</p>
                  <p className="text-xs text-muted-foreground">
                    {{name}}, {{title}}, {{company}}, {{phone}}, {{website}}, {{profileLinks}}
                  </p>
                </div>
              </div>

              {/* Button Configuration */}
              <Separator className="my-6" />
              <div className="space-y-4">
                <Label htmlFor="button-config">Call-to-action button (optional)</Label>
                <div className="space-y-2">
                  <Input
                    id="button-text"
                    placeholder="Button text (e.g., 'View my portfolio')"
                    value={buttonText}
                    onChange={(e) => setButtonText(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    id="button-url"
                    placeholder="Button URL (e.g., 'https://yourportfolio.com')"
                    value={buttonUrl}
                    onChange={(e) => setButtonUrl(e.target.value)}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Leave blank for no button
                </p>
              </div>

              {/* Follow-up Design */}
              <Separator className="my-6" />
              <div className="space-y-4">
                <Label htmlFor="followup-variant">Follow-up email design</Label>
                <RadioGroup
                  id="followup-variant"
                  defaultValue="same"
                  value={followupVariant}
                  onValueChange={setFollowupVariant}
                  className="space-y-2"
                >
                  <RadioGroupItem value="same">
                    Same as first email
                  </RadioGroupItem>
                  <RadioGroupItem value="lighter">
                    Lighter variant (less styling)
                  </RadioGroupItem>
                </RadioGroup>
              </div>
            </div>
            <CardFooter className="pt-6">
              <div className="space-y-3">
                <Button
                  variant="outline"
                  onClick={handleTestEmail}
                  disabled={isSaving}
                >
                  {isSaving ? "Saving..." : "Send Test Email"}
                </Button>
                <Button
                  onClick={handleSave}
                  className="w-full"
                  disabled={isSaving}
                >
                  {isSaving ? "Saving..." : "Continue to Autopilot Rules"}
                </Button>
              </div>
            </CardFooter>
          </Card>

          {/* Right Panel - Preview */}
          <Card className="h-full">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-bold">
                Preview
              </CardTitle>
              <CardDescription>
                See how your email will look in Gmail and Outlook
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Deliverability Hint */}
              <div className="border rounded p-4 bg-muted">
                <p className="text-sm font-medium flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" fill="currentColor"/>
                  </svg>
                  Plain emails have better deliverability
                </p>
              </div>

              {/* Email Preview */}
              <div className="border rounded p-6 bg-background">
                {/* This is a simplified preview - in reality, this would use the actual template renderer */}
                <div className="space-y-4">
                  <div className="text-left">
                    <p className="font-medium">
                      Hi {{firstName}},
                    </p>
                    <p>
                      I came across your recent job post for a Frontend Developer position and was impressed by your company's mission to revolutionize how teams collaborate remotely.
                    </p>
                    <p>
                      With 5 years of experience building responsive web applications using React and TypeScript, I've helped companies like {{company}} improve their user engagement by 40% through performance optimization and intuitive UI design.
                    </p>
                    <p>
                      I'd love to discuss how my expertise in modern frontend development could contribute to your team's goals. Are you available for a brief call next week?
                    </p>
                    <p>
                      Best regards,<br/>
                      <strong>{{name}}</strong><br/>
                      {{title}} • {{company}}<br/>
                      {{phone}} • {{website}}<br/>
                      {{#if profileLinks}}
                      {{#each profileLinks}}
                      {{label}}: {{url}}<br/>
                      {{/each}}
                      {{/if}}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}