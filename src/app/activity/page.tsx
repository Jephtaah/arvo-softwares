import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Sonner, toast } from "sonner"
import { useState } from "react"

export default function ActivityPage() {
  const [activities, setActivities] = useState([
    {
      id: 1,
      type: "sent",
      title: "Email sent to InnovateTech",
      description: "Frontend Developer role application",
      time: "Today at 10:30 AM",
      status: "sent",
      company: "InnovateTech",
      role: "Frontend Developer"
    },
    {
      id: 2,
      type: "followup_scheduled",
      title: "Follow-up scheduled for DevShop",
      description: "Product Designer role",
      time: "Today at 9:15 AM",
      status: "pending",
      company: "DevShop",
      role: "Product Designer"
    },
    {
      id: 3,
      type: "reply",
      title: "Reply received from WebFlow",
      description: "UI/UX Designer inquiry",
      time: "Yesterday at 3:15 PM",
      status: "replied",
      company: "WebFlow",
      role: "UI/UX Designer"
    },
    {
      id: 4,
      type: "matched",
      title: "New lead matched: TechStart Inc",
      description: "Backend Engineer position",
      time: "Yesterday at 1:45 PM",
      status: "matched",
      company: "TechStart Inc",
      role: "Backend Engineer"
    },
    {
      id: 5,
      type: "failed_check",
      title: "Email failed fact check",
      description: "Claim about years of experience could not be verified",
      time: "Yesterday at 12:20 PM",
      status: "failed",
      company: "DataCorp",
      role: "Data Analyst"
    }
  ])

  const handleRetry = (id: number) => {
    // In a real implementation, we would retry the failed action
    toast.success("Retry initiated")
  }

  const handleCancel = (id: number) => {
    // In a real implementation, we would cancel the action
    toast.info("Action cancelled")
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">
            Activity Log
          </h1>
          <p className="text-muted-foreground">
            Detailed view of all Arvo Reach actions
          </p>
        </div>

        <div className="space-y-4">
          {activities.map((activity) => (
            <Card key={activity.id} className="border-l-4">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-shrink-0">
                    {/* Activity Type Icon */}
                    <div className={`h-8 w-8 flex items-center justify-center rounded-full
                      ${activity.type === "sent" ? "bg-success/20 text-success" :
                        activity.type === "reply" ? "bg-primary/20 text-primary" :
                        activity.type === "followup_scheduled" ? "bg-warning/20 text-warning" :
                        activity.type === "failed_check" ? "bg-destructive/20 text-destructive" :
                        "bg-muted/20 text-muted-foreground`}">
                      {activity.type === "sent" && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {activity.type === "reply" && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 8v4m0 4h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      )}
                      {activity.type === "followup_scheduled" && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 8h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      )}
                      {activity.type === "failed_check" && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {(!["sent", "reply", "followup_scheduled", "failed_check"].includes(activity.type)) && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-medium">{activity.title}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded
                        ${activity.status === "sent" ? "bg-success/20 text-success" :
                          activity.status === "replied" ? "bg-primary/20 text-primary" :
                          activity.status === "pending" ? "bg-warning/20 text-warning" :
                          activity.status === "failed" ? "bg-destructive/20 text-destructive" :
                          "bg-muted/20 text-muted-foreground`}">
                        {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{activity.description}</p>
                    <div className="flex items-baseline gap-3 text-sm">
                      <p className="text-muted-foreground">{activity.time}</p>
                      {activity.company && (
                        <>
                          <p className="text-muted-foreground mx-2">•</p>
                          <p className="text-muted-foreground">{activity.company}</p>
                        </>
                      )}
                      {activity.role && (
                        <>
                          <p className="text-muted-foreground mx-2">•</p>
                          <p className="text-muted-foreground">{activity.role}</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {activity.type === "failed_check" && (
                <CardFooter className="pt-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleRetry(activity.id)}
                  >
                    Retry
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCancel(activity.id)}
                  >
                    Cancel
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-6">
          <Button variant="outline" onClick={() => toast.success("Export initiated")} className="w-full">
            Export Activity Log
          </Button>
        </div>
      </div>
    </main>
  )
}