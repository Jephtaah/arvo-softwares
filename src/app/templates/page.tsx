import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sonner, toast } from "sonner"

export default function TemplatesPage() {
  const router = useRouter()

  const [templates, setTemplates] = useState([
    {
      id: 1,
      name: "Professional Default",
      layout: "light",
      accentColor: "#ff7c40",
      isDefault: true,
      lastUsed: "Today at 9:15 AM"
    },
    {
      id: 2,
      name: "Creative Portfolio",
      layout: "card",
      accentColor: "#6366f1",
      isDefault: false,
      lastUsed: "Yesterday at 3:30 PM"
    }
  ])

  const handleNewTemplate = () => {
    router.push("/onboarding/email-design")
  }

  const handleEditTemplate = (id: number) => {
    // In a real implementation, we would load the template for editing
    alert(`Editing template ${id}...`)
    router.push(`/onboarding/email-design?edit=${id}`)
  }

  const handleSetAsDefault = (id: number) => {
    // In a real implementation, we would set this as the default template
    toast.success(`Template "${templates.find(t => t.id === id)?.name}" set as default`)
    // Update local state for demo
    setTemplates(prev =>
      prev.map(t =>
        t.id === id ? { ...t, isDefault: true } : { ...t, isDefault: false }
      )
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">
            Email Templates
          </h1>
          <p className="text-muted-foreground">
            Manage your saved email designs
          </p>
        </div>

        <div className="mb-6">
          <Button onClick={handleNewTemplate} className="w-full">
            Create New Template
          </Button>
        </div>

        <div className="space-y-4">
          {templates.map((template) => (
            <Card key={template.id}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="font-medium">{template.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {template.layout} layout • {template.accentColor} accent
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {template.isDefault && (
                      <span className="px-2 py-0.5 rounded-full text-xs bg-success/20 text-success">
                        Default
                      </span>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEditTemplate(template.id)}
                    >
                      Edit
                    </Button>
                    {!template.isDefault && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSetAsDefault(template.id)}
                      >
                        Set as Default
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-baseline gap-3 text-sm">
                  <p className="text-muted-foreground">Last used:</p>
                  <p className="font-medium">{template.lastUsed}</p>
                </div>
              </div>
              <CardFooter className="pt-4">
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => {
                    if (window.alert(`Delete template "${template.name}"?`)) {
                      // In real implementation, delete from DB
                      toast.success(`Template "${template.name}" deleted`)
                      setTemplates(prev => prev.filter(t => t.id !== template.id))
                    }
                  }}
                >
                  Delete Template
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}