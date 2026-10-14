import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox, CheckboxItem } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function SettingsPage() {
  const router = useRouter()

  const handleSave = () => {
    // In a real implementation, we would save the settings
    alert("Settings saved!")
  }

  const handleDeleteAccount = () => {
    if (window.alert("Are you sure you want to delete your account? This action cannot be undone.")) {
      // In a real implementation, we would delete the account
      alert("Account deletion initiated...")
      router.push("/")
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">
            Settings
          </h1>
          <p className="text-muted-foreground">
            Manage your Arvo Reach account and preferences
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Account Information Card */}
          <Card className="h-full">
            <CardHeader className="pb-4">
              <h2 className="text-lg font-semibold">
                Account Information
              </h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Label htmlFor="account-name">Name</Label>
                <Input
                  id="account-name"
                  defaultValue="Alex Johnson"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="account-email">Email</Label>
                <Input
                  id="account-email"
                  defaultValue="alex.johnson@example.com"
                  readOnly
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="account-role">Role</Label>
                <Input
                  id="account-role"
                  defaultValue="Job Seeker"
                  readOnly
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="account-member-since">Member Since</Label>
                <Input
                  id="account-member-since"
                  defaultValue="October 2026"
                  readOnly
                />
              </div>
            </CardContent>
            <CardFooter className="pt-4">
              <Button onClick={handleSave} className="w-full">
                Save Changes
              </Button>
            </CardFooter>
          </Card>

          {/* Privacy & Security Card */}
          <Card className="h-full">
            <CardHeader className="pb-4">
              <h2 className="text-lg font-semibold">
                Privacy & Security
              </h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Label htmlFor="data-sharing">Data Sharing</Label>
                <ToggleGroup
                  id="data-sharing"
                  type="radio"
                  defaultValue="private"
                  value="private"
                >
                  <ToggleGroupItem value="private">
                    Keep data private (default)
                  </ToggleGroupItem>
                  <ToggleGroupItem value="anonymous">
                    Allow anonymous data usage for product improvement
                  </ToggleGroupItem>
                </ToggleGroup>
                <p className="text-xs text-muted-foreground mt-1">
                  We never sell your personal data to third parties
                </p>
              </div>

              <Separator className="my-6" />

              <div className="space-y-3">
                <Label htmlFor="activity-log">Activity Log Retention</Label>
                <ToggleGroup
                  id="activity-log"
                  type="radio"
                  defaultValue="12months"
                  value="12months"
                >
                  <ToggleGroupItem value="3months">
                    3 months
                  </ToggleGroupItem>
                  <ToggleGroupItem value="6months">
                    6 months
                  </ToggleGroupItem>
                  <ToggleGroupItem value="12months">
                    12 months (default)
                  </ToggleGroupItem>
                  <ToggleGroupItem value="indefinite">
                    Indefinite
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              <Separator className="my-6" />

              <div className="space-y-3">
                <Label htmlFor="email-notifications">Email Notifications</Label>
                <CheckboxItem
                  id="reply-notifications"
                  label="Notify me when I receive a reply"
                  defaultChecked={true}
                />
                <CheckboxItem
                  id="weekly-summary"
                  label="Send weekly activity summary"
                  defaultChecked={false}
                />
                <CheckboxItem
                  id="product-updates"
                  label="Receive product updates and tips"
                  defaultChecked={true}
                />
              </div>
            </CardContent>
            <CardFooter className="pt-4">
              <Button onClick={handleSave} className="w-full">
                Save Privacy Settings
              </Button>
            </CardFooter>
          </Card>

          {/* Data Management Card - spans full width */}
          <Card className="lg:col-span-2 h-full">
            <CardHeader className="pb-4">
              <h2 className="text-lg font-semibold">
                Data Management
              </h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Label htmlFor="export-data">Export Your Data</Label>
                <p className="text-sm text-muted-foreground mb-2">
                  Download a copy of your profile, email templates, and activity history
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    // In a real implementation, this would trigger a data export
                    alert("Data export initiated... (In production, this would download a JSON file)")
                  }}
                >
                  Export Data
                </Button>
              </div>

              <Separator className="my-6" />

              <div className="space-y-3">
                <Label htmlFor="delete-account">Delete Account</Label>
                <p className="text-sm text-muted-foreground mb-2">
                  Permanently delete your account and all associated data
                </p>
                <p className="text-xs text-muted-foreground">
                  This action cannot be undone. Your CV, parsed profile, mailbox tokens, templates, and message content will be permanently removed.
                </p>
                <Button
                  variant="destructive"
                  onClick={handleDeleteAccount}
                >
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}