"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Settings,
  CreditCard,
  Mail,
  Shield,
  Palette,
  Code,
  Database,
  Save,
  Upload,
  Download,
  Key,
  Globe,
} from "lucide-react"

export function SettingsTabs() {
  const [isDirty, setIsDirty] = useState(false)

  const handleSave = () => {
    setIsDirty(false)
    // Save logic here
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl  font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">Manage your platform configuration and preferences</p>
        </div>
        {isDirty && (
          <Button onClick={handleSave} className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        )}
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="general" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            General
          </TabsTrigger>
          <TabsTrigger value="payments" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            Payments
          </TabsTrigger>
          <TabsTrigger value="email" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Email
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="appearance" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            Theme
          </TabsTrigger>
          <TabsTrigger value="api" className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            API
          </TabsTrigger>
          <TabsTrigger value="backup" className="flex items-center gap-2">
            <Database className="h-4 w-4" />
            Backup
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Site Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="siteName">Site Name</Label>
                <Input
                  id="siteName"
                  defaultValue="WeddingPlatform"
                  onChange={() => setIsDirty(true)}
                  placeholder="Enter site name"
                />
              </div>
              <div>
                <Label htmlFor="siteUrl">Site URL</Label>
                <Input
                  id="siteUrl"
                  defaultValue="https://weddingplatform.com"
                  onChange={() => setIsDirty(true)}
                  placeholder="Enter site URL"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="siteDescription">Site Description</Label>
                <Textarea
                  id="siteDescription"
                  defaultValue="Your premier wedding planning platform"
                  onChange={() => setIsDirty(true)}
                  placeholder="Enter site description"
                  rows={3}
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="contactEmail">Contact Email</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  defaultValue="contact@weddingplatform.com"
                  onChange={() => setIsDirty(true)}
                />
              </div>
              <div>
                <Label htmlFor="contactPhone">Contact Phone</Label>
                <Input id="contactPhone" defaultValue="+1 (555) 123-4567" onChange={() => setIsDirty(true)} />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  defaultValue="123 Wedding Street, Event City, EC 12345"
                  onChange={() => setIsDirty(true)}
                  rows={2}
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Platform Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="userRegistration">User Registration</Label>
                  <p className="text-sm text-muted-foreground">Allow new users to register</p>
                </div>
                <Switch id="userRegistration" defaultChecked onChange={() => setIsDirty(true)} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="vendorApproval">Vendor Approval</Label>
                  <p className="text-sm text-muted-foreground">Require admin approval for new vendors</p>
                </div>
                <Switch id="vendorApproval" defaultChecked onChange={() => setIsDirty(true)} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="maintenanceMode">Maintenance Mode</Label>
                  <p className="text-sm text-muted-foreground">Put site in maintenance mode</p>
                </div>
                <Switch id="maintenanceMode" onChange={() => setIsDirty(true)} />
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Payment Settings */}
        <TabsContent value="payments" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Payment Gateways</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Stripe</p>
                    <p className="text-sm text-muted-foreground">Credit cards, digital wallets</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="default" className="bg-green-100 text-green-800">
                    Active
                  </Badge>
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Razorpay</p>
                    <p className="text-sm text-muted-foreground">UPI, cards, net banking</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Inactive</Badge>
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Commission & Fees</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="platformFee">Platform Fee (%)</Label>
                <Input
                  id="platformFee"
                  type="number"
                  defaultValue="5"
                  onChange={() => setIsDirty(true)}
                  placeholder="Enter percentage"
                />
              </div>
              <div>
                <Label htmlFor="processingFee">Processing Fee (%)</Label>
                <Input
                  id="processingFee"
                  type="number"
                  defaultValue="2.9"
                  onChange={() => setIsDirty(true)}
                  placeholder="Enter percentage"
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Email Settings */}
        <TabsContent value="email" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">SMTP Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="smtpHost">SMTP Host</Label>
                <Input
                  id="smtpHost"
                  defaultValue="smtp.gmail.com"
                  onChange={() => setIsDirty(true)}
                  placeholder="Enter SMTP host"
                />
              </div>
              <div>
                <Label htmlFor="smtpPort">SMTP Port</Label>
                <Input
                  id="smtpPort"
                  type="number"
                  defaultValue="587"
                  onChange={() => setIsDirty(true)}
                  placeholder="Enter port"
                />
              </div>
              <div>
                <Label htmlFor="smtpUsername">Username</Label>
                <Input
                  id="smtpUsername"
                  defaultValue="noreply@weddingplatform.com"
                  onChange={() => setIsDirty(true)}
                  placeholder="Enter username"
                />
              </div>
              <div>
                <Label htmlFor="smtpPassword">Password</Label>
                <Input
                  id="smtpPassword"
                  type="password"
                  onChange={() => setIsDirty(true)}
                  placeholder="Enter password"
                />
              </div>
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm">
                Test Connection
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Email Templates</h3>
            <div className="space-y-3">
              {["Welcome Email", "Booking Confirmation", "Payment Receipt", "Password Reset", "Vendor Approval"].map(
                (template, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="font-medium text-foreground">{template}</span>
                    <Button variant="outline" size="sm">
                      Edit Template
                    </Button>
                  </div>
                ),
              )}
            </div>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Password Policy</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="minLength">Minimum Length</Label>
                <Input
                  id="minLength"
                  type="number"
                  defaultValue="8"
                  onChange={() => setIsDirty(true)}
                  className="w-32"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="requireUppercase" defaultChecked onChange={() => setIsDirty(true)} />
                  <Label htmlFor="requireUppercase">Require uppercase letters</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="requireNumbers" defaultChecked onChange={() => setIsDirty(true)} />
                  <Label htmlFor="requireNumbers">Require numbers</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="requireSpecial" defaultChecked onChange={() => setIsDirty(true)} />
                  <Label htmlFor="requireSpecial">Require special characters</Label>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Two-Factor Authentication</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="enable2fa">Enable 2FA</Label>
                  <p className="text-sm text-muted-foreground">Require 2FA for admin accounts</p>
                </div>
                <Switch id="enable2fa" onChange={() => setIsDirty(true)} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="force2fa">Force 2FA</Label>
                  <p className="text-sm text-muted-foreground">Force all users to enable 2FA</p>
                </div>
                <Switch id="force2fa" onChange={() => setIsDirty(true)} />
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Theme Settings */}
        <TabsContent value="appearance" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Theme Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="primaryColor">Primary Color</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="primaryColor"
                    type="color"
                    defaultValue="#ff6b6b"
                    onChange={() => setIsDirty(true)}
                    className="w-16 h-10"
                  />
                  <Input defaultValue="#ff6b6b" onChange={() => setIsDirty(true)} placeholder="Hex color" />
                </div>
              </div>
              <div>
                <Label htmlFor="accentColor">Accent Color</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="accentColor"
                    type="color"
                    defaultValue="#ffb74d"
                    onChange={() => setIsDirty(true)}
                    className="w-16 h-10"
                  />
                  <Input defaultValue="#ffb74d" onChange={() => setIsDirty(true)} placeholder="Hex color" />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Logo & Branding</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="logo">Site Logo</Label>
                <div className="flex items-center gap-4 mt-2">
                  <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                    <Globe className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Logo
                  </Button>
                </div>
              </div>
              <div>
                <Label htmlFor="favicon">Favicon</Label>
                <div className="flex items-center gap-4 mt-2">
                  <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Favicon
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* API Settings */}
        <TabsContent value="api" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">API Keys</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div>
                  <p className="font-medium text-foreground">Production API Key</p>
                  <p className="text-sm text-muted-foreground font-mono">pk_live_••••••••••••••••</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Key className="h-4 w-4 mr-2" />
                    Regenerate
                  </Button>
                  <Button variant="outline" size="sm">
                    Copy
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div>
                  <p className="font-medium text-foreground">Test API Key</p>
                  <p className="text-sm text-muted-foreground font-mono">pk_test_••••••••••••••••</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Key className="h-4 w-4 mr-2" />
                    Regenerate
                  </Button>
                  <Button variant="outline" size="sm">
                    Copy
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Rate Limiting</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="rateLimit">Requests per minute</Label>
                <Input id="rateLimit" type="number" defaultValue="100" onChange={() => setIsDirty(true)} />
              </div>
              <div>
                <Label htmlFor="burstLimit">Burst limit</Label>
                <Input id="burstLimit" type="number" defaultValue="200" onChange={() => setIsDirty(true)} />
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Backup Settings */}
        <TabsContent value="backup" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Automated Backups</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="autoBackup">Enable Automatic Backups</Label>
                  <p className="text-sm text-muted-foreground">Create daily backups automatically</p>
                </div>
                <Switch id="autoBackup" defaultChecked onChange={() => setIsDirty(true)} />
              </div>
              <div>
                <Label htmlFor="backupFrequency">Backup Frequency</Label>
                <Select defaultValue="daily" onValueChange={() => setIsDirty(true)}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hourly">Hourly</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="retentionDays">Retention Period (days)</Label>
                <Input
                  id="retentionDays"
                  type="number"
                  defaultValue="30"
                  onChange={() => setIsDirty(true)}
                  className="w-32"
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Manual Backup</h3>
            <div className="flex items-center gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Download className="h-4 w-4 mr-2" />
                Create Backup Now
              </Button>
              <Button variant="outline">
                <Upload className="h-4 w-4 mr-2" />
                Restore from Backup
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Recent Backups</h3>
            <div className="space-y-3">
              {[
                { name: "backup-2024-01-20.sql", date: "2024-01-20 02:00 AM", size: "45.2 MB" },
                { name: "backup-2024-01-19.sql", date: "2024-01-19 02:00 AM", size: "44.8 MB" },
                { name: "backup-2024-01-18.sql", date: "2024-01-18 02:00 AM", size: "44.1 MB" },
              ].map((backup, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">{backup.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {backup.date} • {backup.size}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm">
                      Restore
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
