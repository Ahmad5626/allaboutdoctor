"use client"

import { AdminSidebar } from "./admin-sidebar"
import { AdminHeader } from "./admin-header"

export function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-background">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  )
}
