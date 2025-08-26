import { AdminLayout } from "@/components/admin/admin-layout"
import { CompaignTable } from "@/components/admin/compaign-table"

export default function ReportsPage() {
  return (
    <AdminLayout>
    <div className="space-y-6">
        <div>
          <h1 className="text-3xl  font-bold text-foreground">Compaign Management</h1>
          
        </div>
      <CompaignTable />
      </div>
    </AdminLayout>
  )
}
