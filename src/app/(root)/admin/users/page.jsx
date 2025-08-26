"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin/admin-layout"
import { UsersTable } from "@/components/admin/users-table"
import { UserDetailsModal } from "@/components/admin/user-details-modal"

export default function UsersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl  font-bold text-foreground">User Management</h1>
          <p className="text-muted-foreground">Manage users, roles, and permissions</p>
        </div>

        <UsersTable />

        <UserDetailsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </AdminLayout>
  )
}
