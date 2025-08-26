"use client"

import { useState } from "react"
import {
  Building2,
  MessageSquare,
  Settings,
  Bell,
  Plus,
  Eye,
  Edit,
  Info,
  FolderOpen,
  CreditCard,
  Globe,
  Upload,
  Facebook,
  Camera,
  X,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

const sidebarItems = [
  { id: "information", label: "Information", icon: Info, active: true },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "membership", label: "Membership Plans", icon: CreditCard },
  { id: "reviews", label: "Reviews", icon: MessageSquare },
  { id: "google-business", label: "Google My Business", icon: Globe },
]

const profileTasks = [
  { id: 1, task: "Answering your FAQs", completed: false },
  { id: 2, task: "Linking your profile to your Facebook page/website", completed: false },
  { id: 3, task: "Adding images to your portfolio", completed: false },
  { id: 4, task: "Get featured in a Real Wedding. Email your work to submissions@wedmegood.com", completed: false },
  {
    id: 5,
    task: "Upload your first album to get visibility on our inspiration gallery and social media handles",
    completed: false,
  },
  { id: 6, task: "Invite clients to review your work", completed: false },
]

export default function VendorDashboard() {
  const [activeTab, setActiveTab] = useState("information")
  const [sidebarOpen, setSidebarOpen] = useState(false) // Added state for mobile sidebar toggle
  const [profileData, setProfileData] = useState({
    loginEmail: "raza@gmail.com",
    brandName: "raza",
    businessType: "Wedding Planners",
    contactPerson: "",
    additionalEmail: "",
    contactNumber: "+91 82078 86398",
    whatsappNumber: "+91",
    websiteLink: "",
    facebookUrl: "",
    instagramUrl: "",
    youtubeUrl: "",
    additionalInfo: "",
    city: "Rajasthan",
  })
  const [projects, setProjects] = useState([])
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    images: [],
  })
  const [showAddProject, setShowAddProject] = useState(false)

  const handleAddProject = () => {
    if (newProject.title && newProject.description) {
      setProjects([...projects, { ...newProject, id: Date.now() }])
      setNewProject({ title: "", description: "", images: [] })
      setShowAddProject(false)
    }
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    const imageUrls = files.map((file) => URL.createObjectURL(file))
    setNewProject({ ...newProject, images: [...newProject.images, ...imageUrls] })
  }

  const removeImage = (index) => {
    const updatedImages = newProject.images.filter((_, i) => i !== index)
    setNewProject({ ...newProject, images: updatedImages })
  }

  const renderContent = () => {
    switch (activeTab) {
      case "information":
        return (
          <div className="space-y-6">
            {/* Profile Analytics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Profile Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">0</div>
                    <div className="text-sm text-gray-600">Leads</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">0</div>
                    <div className="text-sm text-gray-600">Love count</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">0</div>
                    <div className="text-sm text-gray-600">Page views</div>
                  </div>
                </div>
                <div className="mb-4">
                  <Progress value={10} className="h-3" />
                  <p className="text-sm text-gray-600 mt-2">10% Complete</p>
                </div>
              </CardContent>
            </Card>

            {/* Profile Completion */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Complete your profile by:</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {profileTasks.map((task) => (
                    <div key={task.id} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">{task.task}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* WedMeGood Profile Card */}
          

            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {" "}
                  {/* Changed from md to lg for better mobile experience */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Login email ID</label>
                    <Input
                      value={profileData.loginEmail}
                      onChange={(e) => setProfileData({ ...profileData, loginEmail: e.target.value })}
                      className="bg-gray-50"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Brand Name*</label>
                    <Input
                      value={profileData.brandName}
                      onChange={(e) => setProfileData({ ...profileData, brandName: e.target.value })}
                    />
                    <Input
                      value={profileData.businessType}
                      onChange={(e) => setProfileData({ ...profileData, businessType: e.target.value })}
                      className="mt-2"
                      placeholder="Business Type"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {" "}
                  {/* Changed from md to lg for better mobile experience */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact person name</label>
                    <Input
                      value={profileData.contactPerson}
                      onChange={(e) => setProfileData({ ...profileData, contactPerson: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional email ID</label>
                    <Input
                      value={profileData.additionalEmail}
                      onChange={(e) => setProfileData({ ...profileData, additionalEmail: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {" "}
                  {/* Changed from md to lg for better mobile experience */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact number*</label>
                    <div className="flex flex-wrap gap-2">
                      <Select defaultValue="in">
                        <SelectTrigger className="w-16 sm:w-20">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="in">🇮🇳</SelectItem>
                          <SelectItem value="us">🇺🇸</SelectItem>
                          <SelectItem value="uk">🇬🇧</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        value={profileData.contactNumber}
                        onChange={(e) => setProfileData({ ...profileData, contactNumber: e.target.value })}
                        className="flex-1 min-w-0"
                      />
                      <Select defaultValue="mobile">
                        <SelectTrigger className="w-20 sm:w-24">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mobile">Mobile</SelectItem>
                          <SelectItem value="landline">Landline</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-primary border-primary bg-transparent text-xs sm:text-sm"
                      >
                        ADD MORE
                      </Button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
                    <div className="flex gap-2">
                      <Select defaultValue="in">
                        <SelectTrigger className="w-16 sm:w-20">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="in">🇮🇳</SelectItem>
                          <SelectItem value="us">🇺🇸</SelectItem>
                          <SelectItem value="uk">🇬🇧</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        value={profileData.whatsappNumber}
                        onChange={(e) => setProfileData({ ...profileData, whatsappNumber: e.target.value })}
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Website link</label>
                    <Input
                      value={profileData.websiteLink}
                      onChange={(e) => setProfileData({ ...profileData, websiteLink: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Facebook url</label>
                    <Input
                      value={profileData.facebookUrl}
                      onChange={(e) => setProfileData({ ...profileData, facebookUrl: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Instagram url</label>
                    <Input
                      value={profileData.instagramUrl}
                      onChange={(e) => setProfileData({ ...profileData, instagramUrl: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">YouTube/Vimeo url</label>
                    <Input
                      value={profileData.youtubeUrl}
                      onChange={(e) => setProfileData({ ...profileData, youtubeUrl: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                  <Textarea
                    value={profileData.additionalInfo}
                    onChange={(e) => setProfileData({ ...profileData, additionalInfo: e.target.value })}
                    placeholder="Enter your message"
                    rows={4}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    (To update your description, please send a mail to vendors@wedmegood.com)
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City*(Choose your base city here)
                  </label>
                  <Input
                    value={profileData.city}
                    onChange={(e) => setProfileData({ ...profileData, city: e.target.value })}
                    placeholder="Rajasthan"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case "projects":
        return (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              {" "}
              {/* Made header responsive */}
              <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
              <Button
                onClick={() => setShowAddProject(true)}
                className="bg-primary hover:bg-primary w-full sm:w-auto"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Project
              </Button>
            </div>

            {/* Add Project Modal */}
            {showAddProject && (
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Add New Project</CardTitle>
                  <Button variant="ghost" size="sm" onClick={() => setShowAddProject(false)}>
                    <X className="w-4 h-4" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
                    <Input
                      value={newProject.title}
                      onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                      placeholder="Enter project title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <Textarea
                      value={newProject.description}
                      onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                      placeholder="Describe your project"
                      rows={3}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Images</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label htmlFor="image-upload" className="cursor-pointer">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Click to upload images</p>
                      </label>
                    </div>
                    {newProject.images.length > 0 && (
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        {newProject.images.map((image, index) => (
                          <div key={index} className="relative">
                            <img
                              src={image || "/placeholder.svg"}
                              alt={`Upload ${index}`}
                              className="w-full h-20 object-cover rounded mb-3"
                            />
                            <Button
                              variant="destructive"
                              size="sm"
                              className="absolute top-1 right-1 w-6 h-6 p-0"
                              onClick={() => removeImage(index)}
                            >
                              <X className="w-3 h-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleAddProject} className="bg-primary hover:bg-primary">
                      Add Project
                    </Button>
                    <Button variant="outline" onClick={() => setShowAddProject(false)}>
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {projects.map((project) => (
                <Card key={project.id}>
                  <CardContent className="p-4">
                    {project.images.length > 0 && (
                      <img
                        src={project.images[0] || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-40 object-cover rounded mb-3"
                      />
                    )}
                    <h3 className="font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 sm:flex-none bg-transparent">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 sm:flex-none bg-transparent">
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {projects.length === 0 && !showAddProject && (
              <div className="text-center py-12">
                <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No projects yet</h3>
                <p className="text-gray-600 mb-4">Start showcasing your work by adding your first project</p>
                <Button onClick={() => setShowAddProject(true)} className="bg-primary hover:bg-primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Your First Project
                </Button>
              </div>
            )}
          </div>
        )

      default:
        return (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Coming Soon</h3>
            <p className="text-gray-600">This section is under development</p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-sm border-r transform transition-transform duration-300 ease-in-out lg:transform-none
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Building2 className="w-8 h-8 text-primary" />
              <h1 className="text-lg font-bold text-gray-900">Vendor Panel</h1>
            </div>
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setActiveTab(item.id)
                    setSidebarOpen(false) // Close sidebar on mobile when item is selected
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === item.id
                      ? "bg-pink-50 text-primary border-l-4 border-primary"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {" "}
        {/* Removed margin on mobile */}
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="px-4 sm:px-6 py-4">
            {" "}
            {/* Responsive padding */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
                  <Menu className="w-5 h-5" />
                </Button>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 capitalize">
                  {activeTab.replace("-", " ")}
                </h2>
              </div>
              <div className="flex items-center gap-2 sm:gap-4">
                {" "}
                {/* Responsive gap */}
                <Button variant="ghost" size="sm" className="hidden sm:flex">
                  {" "}
                  {/* Hide on mobile */}
                  <Bell className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="hidden sm:flex">
                  {" "}
                  {/* Hide on mobile */}
                  <Settings className="w-5 h-5" />
                </Button>
                <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
                  {" "}
                  {/* Responsive avatar size */}
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>VS</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </header>
        {/* Content */}
        <div className="p-4 sm:p-6">{renderContent()}</div> {/* Responsive padding */}
        {/* Back Link */}
        <div className="p-4 sm:p-6 border-t bg-white">
          {" "}
          {/* Responsive padding */}
          <Link href="/" className="text-primary hover:text-pink-700 font-medium text-sm sm:text-base">
            ← Back to Business Directory
          </Link>
        </div>
      </div>
    </div>
  )
}
