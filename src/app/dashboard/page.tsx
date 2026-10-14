import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Sonner, toast } from "sonner"
import { useState } from "react"

export default function Dashboard() {
  const [isAutopilotRunning, setIsAutopilotRunning] = useState(false)
  const [senderHealth, setSenderHealth] = useState({
    dailyUsage: 3,
    dailyLimit: 5,
    bounceRate: 0.8,
    unsubscribeRate: 0.2
  })

  const toggleAutopilot = () => {
    setIsAutopilotRunning(!isAutopilotRunning)
    if (!isAutopilotRunning) {
      toast.success("Autopilot started")
    } else {
      toast.info("Autopilot paused")
    }
  }

  const handleReset = () => {
    // Reset daily usage for demo
    setSenderHealth(prev => ({ ...prev, dailyUsage: 0 }))
    toast.info("Daily counter reset")
  }

  return (
    <main className="min-h-screen bg-background">
      <Sonner />
      <div className="p-6">
        {/* Header */}
        <div className="mb-6 flex justify-between items-wrap">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">
              Dashboard
            </h1>
            <p className="text-muted-foreground">
              Your Arvo Reach overview
            </p>
          </div>
          <Button
            variant="outline"
            onClick={handleReset}
            className="text-sm"
          >
            Reset Daily Counter
          </Button>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {/* Autopilot Status Card */}
          <Card className="h-full">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  Autopilot Status
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleAutopilot}
                  className={`p-2 ${isAutopilotRunning ? "text-destructive" : "text-muted-foreground hover:text-muted-foreground/80"}`}
                >
                  {isAutopilotRunning ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className={`text-2xl font-bold ${isAutopilotRunning ? "text-success" : "text-muted-foreground"}`}>
                {isAutopilotRunning ? "RUNNING" : "PAUSED"}
              </p>
              <p className="text-sm">
                Arvo Reach is currently {isAutopilotRunning ? "sending emails" : "not sending emails"}
              </p>
            </CardContent>
            <CardFooter className="pt-4">
              <Button
                onClick={toggleAutopilot}
                className={`w-full ${isAutopilotRunning ? "bg-destructive/20 hover:bg-destructive/30" : ""}`}
              >
                {isAutopilotRunning ? "Pause Autopilot" : "Start Autopilot"}
              </Button>
            </CardFooter>
          </Card>

          {/* This Week Stats Card */}
          <Card className="h-full">
            <CardHeader className="pb-4">
              <h2 className="text-lg font-semibold">
                This Week
              </h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 text-center">
                <div>
                  <p className="text-sm font-medium">Companies Found</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Emails Sent</p>
                  <p className="text-2xl font-bold">{senderHealth.dailyUsage} / {senderHealth.dailyLimit}</p>
                </div>
                <div>
                  <p className="text-sm font-md">Follow-ups Pending</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Replies Received</p>
                  <p className="text-2xl font-bold">5</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sender Health Card */}
          <Card className="h-full">
            <CardHeader className="pb-4">
              <h2 className="text-lg font-semibold">
                Sender Health
              </h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <p className="text-sm font-medium">Daily Usage</p>
                  <p className="text-xl font-bold tracking-tight">
                    {senderHealth.dailyUsage} / {senderHealth.dailyLimit}
                  </p>
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-sm font-medium">Bounce Rate</p>
                  <p className="text-xl font-bold tracking-tight">
                    {senderHealth.bounceRate}%
                  </p>
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-sm font-medium">Unsubscribe Rate</p>
                  <p className="text-xl font-bold tracking-tight">
                    {senderHealth.unsubscribeRate}%
                  </p>
                </div>
              </div>

              {/* Health Indicator */}
              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  <p className="text-sm font-medium text-success">
                    Good standing
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Your sender health affects your daily sending limit
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity Card */}
          <Card className="h-full">
            <CardHeader className="pb-4">
              <h2 className="text-lg font-semibold">
                Recent Activity
              </h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {/* Activity Item 1 */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" fill="currentColor" opacity="0.2"/>
                    </svg>
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="font-medium">Email sent to: Alex at InnovateTech</p>
                    <p className="text-xs text-muted-foreground">
                      Today at 10:30 AM • Frontend Developer role
                    </p>
                  </div>
                </div>

                {/* Activity Item 2 */}
                <div className="flex items-start gap-3 mt-3">
                  <div className="flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" fill="currentColor" opacity="0.2"/>
                    </svg>
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="font-medium">Follow-up scheduled: Sam at DevShop</p>
                    <p className="text-xs text-muted-foreground">
                      In 2 days • Product Designer role
                    </p>
                  </div>
                </div>

                {/* Activity Item 3 */}
                <div className="flex items-start gap-3 mt-3">
                  <div className="flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
                      <path d="M12 8v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="font-medium">Reply received from: Taylor at WebFlow</p>
                    <p className="text-xs text-muted-foreground">
                      Yesterday at 3:15 PM • UI/UX Designer inquiry
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t">
                <Button variant="outline" size="sm" className="w-full">
                  View Full Activity Log
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions Card - spans full width on lg+ */}
          <Card className="lg:col-span-4 h-full">
            <CardHeader className="pb-4">
              <h2 className="text-lg font-semibold">
                Quick Actions
              </h2>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Button
                variant="outline"
                className="h-full flex flex-col items-center justify-center gap-2"
              >
                <div className="flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Update Profile</p>
                  <p className="text-xs text-muted-foreground">
                    Edit your information and preferences
                  </p>
                </div>
              </Button>

              <Button
                variant="outline"
                className="h-full flex flex-col items-center justify-center gap-2"
              >
                <div className="flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Email Templates</p>
                  <p className="text-xs text-muted-foreground">
                    Manage your saved email designs
                  </p>
                </div>
              </Button>

              <Button
                variant="outline"
                className="h-full flex flex-col items-center justify-center gap-2"
              >
                <div className="flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 17l5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M9 12l5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Autopilot Rules</p>
                  <p className="text-xs text-muted-foreground">
                    Adjust your sending preferences
                  </p>
                </div>
              </Button>

              <Button
                variant="outline"
                className="h-full flex flex-col items-center justify-center gap-2"
              >
                <div className="flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Account Settings</p>
                  <p className="text-xs text-muted-foreground">
                    Manage subscription, data, and security
                  </p>
                </div>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}