import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip } from "@/components/ui/tooltip";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Command } from "@/components/ui/command";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Sidebar } from "@/components/ui/sidebar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { ScrollArea, ScrollAreaViewport, ScrollAreaScrollbar, ScrollAreaThumb } from "@/components/ui/scroll-area";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbEllipsis, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Progress } from "@/components/ui/progress";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Chart } from "@/components/ui/chart";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { SonnerToast, SonnerProvider, SonnerToaster } from "@/components/ui/sonner";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription } from "@/components/ui/alert-dialog";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { OnboardingStepper } from "@/components/ui/onboarding-stepper";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { ChoiceCard } from "@/components/ui/choice-card";
import { ColorPicker } from "@/components/ui/color-picker";
import { LeadCard } from "@/components/ui/lead-card";
import { HealthMeter } from "@/components/ui/health-meter";
import { RuleSummary } from "@/components/ui/rule-summary";
import { EmailPreviewFrame } from "@/components/ui/email-preview-frame";
import { EmptyState } from "@/components/ui/empty-state";

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold mb-8">Arvo Reach Design System</h1>
      
      <div className="space-y-12">
        {/* Foundations */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Foundations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Button</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="default">Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Badge</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Separator</h3>
              <Separator className="h-0.5 w-full bg-muted" />
            </div>
          </div>
        </section>
        
        {/* Forms */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Forms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Form</h3>
              <Form>
                <Label htmlFor="email-input">Email Address</Label>
                <Input id="email-input" type="email" placeholder="you@example.com" />
                <Label htmlFor="message-textarea">Message</Label>
                <Textarea id="message-textarea" placeholder="Type your message here..." rows={4} />
                <Label htmlFor="country-select">Country</Label>
                <Select id="country-select" defaultValue="us">
                  <SelectTrigger>
                    <SelectValue>United States</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center gap-3">
                  <Checkbox id="newsletter" defaultChecked>
                    <span className="text-sm">Subscribe to newsletter</span>
                  </Checkbox>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroup defaultValue="option1" className="flex gap-4">
                    <RadioGroupItem value="option1">Option 1</RadioGroupItem>
                    <RadioGroupItem value="option2">Option 2</RadioGroupItem>
                  </RadioGroup>
                </div>
                <div className="flex items-center gap-3">
                  <Switch id="notifications" defaultChecked>
                    <span className="text-sm">Enable notifications</span>
                  </Switch>
                </div>
                <Label htmlFor="volume-slider">Volume</Label>
                <Slider id="volume-slider" defaultValue={50} />
                <div className="flex items-center gap-3">
                  <ToggleGroup type="single" defaultValue="view">
                    <ToggleGroupItem value="view">View</ToggleGroupItem>
                    <ToggleGroupItem value="edit">Edit</ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </Form>
            </div>
          </div>
        </section>
        
        {/* Layout */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Layout</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Card</h3>
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>This is the content of the card.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">Action</Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Tabs</h3>
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                  <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                  <p>Content for tab 1</p>
                </TabsContent>
                <TabsContent value="tab2">
                  <p>Content for tab 2</p>
                </TabsContent>
                <TabsContent value="tab3">
                  <p>Content for tab 3</p>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Accordion</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item1">
                  <AccordionTrigger>Accordion Item 1</AccordionTrigger>
                  <AccordionContent>
                    <p>This is the content of accordion item 1.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item2">
                  <AccordionTrigger>Accordion Item 2</AccordionTrigger>
                  <AccordionContent>
                    <p>This is the content of accordion item 2.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
        
        {/* Data */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Data</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Table</h3>
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Email</TableHeader>
                    <TableHeader>Role</TableHeader>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>john@example.com</TableCell>
                    <TableCell>Designer</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>jane@example.com</TableCell>
                    <TableCell>Developer</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Progress</h3>
              <Progress value={75} className="w-full" />
              <Progress value={40} className="w-full mt-4" />
              <Progress value={90} className="w-full mt-4" />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Chart</h3>
              <Chart
                type="bar"
                data={[
                  { name: "Jan", value: 20 },
                  { name: "Feb", value: 30 },
                  { name: "Mar", value: 15 },
                  { name: "Apr", value: 25 },
                  { name: "May", value: 40 },
                  { name: "Jun", value: 35 },
                ]}
                height={200}
              />
            </div>
          </div>
        </section>
        
        {/* Feedback */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Feedback</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Alert</h3>
              <div className="space-y-3">
                <Alert>
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription>Your changes have been saved successfully.</AlertDescription>
                </Alert>
                <Alert>
                  <AlertTitle>Warning!</AlertTitle>
                  <AlertDescription>Please review your inputs before submitting.</AlertDescription>
                </Alert>
                <Alert>
                  <AlertTitle>Error!</AlertTitle>
                  <AlertDescription>Something went wrong. Please try again later.</AlertDescription>
                </Alert>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Button Actions</h3>
              <div className="flex flex-wrap gap-2">
                <Button onClick={() => alert("Button clicked!")}>
                  Click Me
                </Button>
                <SonnerToaster
                  position="top-right"
                  className="pointer-events-none"
                >
                  <Button
                    onClick={() => {
                      SonnerToast.show("This is a toast notification!", {
                        action: {
                          label: "Undo",
                          onClick: () => alert("Toast undone!"),
                        },
                      });
                    }}
                  >
                    Show Toast
                  </Button>
                </SonnerToaster>
              </div>
            </div>
          </div>
        </section>
        
        {/* Navigation */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Dropdown Menu</h3>
              <div className="relative inline-block text-left">
                <DropdownMenu>
                  <DropdownMenuTrigger className="btn btn-secondary">
                    Actions
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48">
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Breadcrumb</h3>
              <Breadcrumb>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbPage>Design System</BreadcrumbPage>
                </BreadcrumbItem>
              </Breadcrumb>
            </div>
          </div>
        </section>
        
        {/* Composed Components */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Composed Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Onboarding Stepper</h3>
              <OnboardingStepper
                currentStep={2}
                totalSteps={5}
                steps={[
                  {
                    label: "Account Setup",
                    description: "Create your profile and set preferences",
                    completed: true,
                  },
                  {
                    label: "Targeting",
                    description: "Define your audience and signals to follow",
                    completed: true,
                  },
                  {
                    label: "Mailbox Connection",
                    description: "Connect your Gmail or Outlook account",
                    completed: false,
                  },
                  {
                    label: "Email Design",
                    description: "Create your email template and signature",
                    completed: false,
                  },
                  {
                    label: "Review & Launch",
                    description: "Review a sample and turn on autopilot",
                    completed: false,
                  },
                ]}
              />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Lead Card</h3>
              <LeadCard
                title="Acme Startup"
                description="Series A funding round - looking for frontend engineers"
                status="primary"
                metadata={[
                  { label: "Location", value: "San Francisco, CA" },
                  { label: "Funding", value: "$5M Series A" },
                  { label: "Team Size", value: "12 people" },
                ]}
              />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Health Meter</h3>
              <HealthMeter label="Sender Health" value={85} status="success" />
              <HealthMeter label="Sender Health" value={60} status="warning" />
              <HealthMeter label="Sender Health" value={30} status="error" />
            </div>
          </div>
        </section>
        
        {/* Design Tokens */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Design Tokens</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Color Palette</h3>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-primary-500 text-white text-xs text-center py-2 rounded">
                  Primary
                </div>
                <div className="bg-success-500 text-white text-xs text-center py-2 rounded">
                  Success
                </div>
                <div className="bg-warning-500 text-white text-xs text-center py-2 rounded">
                  Warning
                </div>
                <div className="bg-error-500 text-white text-xs text-center py-2 rounded">
                  Error
                </div>
                <div className="bg-surface-100 text-text-primary text-xs text-center py-2 rounded">
                  Surface
                </div>
                <div className="bg-surface-200 text-text-primary text-xs text-center py-2 rounded">
                  Surface
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Typography</h3>
              <div className="space-y-2">
                <p className="text-xs font-hairline">Hairline - The quick brown fox</p>
                <p className="text-xs font-thin">Thin - The quick brown fox</p>
                <p className="text-xs font-light">Light - The quick brown fox</p>
                <p className="text-xs font-normal">Normal - The quick brown fox</p>
                <p className="text-xs font-medium">Medium - The quick brown fox</p>
                <p className="text-xs font-semibold">Semi-bold - The quick brown fox</p>
                <p className="text-xs font-bold">Bold - The quick brown fox</p>
                <p className="text-xs font-extrabold">Extra-bold - The quick brown fox</p>
                <p className="text-xs font-black">Black - The quick brown fox</p>
              </div>
              <div className="space-y-4">
                <p className="text-[var(--font-size-xs)] text-text-primary">Extra small: The quick brown fox jumps over the lazy dog</p>
                <p className="text-[var(--font-size-sm)] text-text-primary">Small: The quick brown fox jumps over the lazy dog</p>
                <p className="text-[var(--font-size-base)] text-text-primary">Base: The quick brown fox jumps over the lazy dog</p>
                <p className="text-[var(--font-size-lg)] text-text-primary">Large: The quick brown fox jumps over the lazy dog</p>
                <p className="text-[var(--font-size-xl)] text-text-primary">Extra large: The quick brown fox jumps over the lazy dog</p>
                <p className="text-[var(--font-size-2xl)] text-text-primary">2XL: The quick brown fox jumps over the lazy dog</p>
                <p className="text-[var(--font-size-3xl)] text-text-primary">3XL: The quick brown fox jumps over the lazy dog</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
