import { AdminLayout } from "@/components/admin/admin-layout"
import { AnalyticsCharts } from "@/components/admin/analytics-charts"
import Blog from "@/components/admin/blog"
import CreateCity from "@/components/admin/createCity"

export default function AnalyticsPage() {
  return (
    <AdminLayout>
      <CreateCity />
    </AdminLayout>
  )
}
