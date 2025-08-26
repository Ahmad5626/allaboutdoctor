import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function DashboardStatsCard({ title, value, change, changeType, icon: Icon, className }) {
  return (
    <Card className={cn("p-6", className)}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold text-foreground mt-2">{value}</p>
          {/* {change && (
            <p className={cn("text-sm mt-1", changeType === "positive" ? "text-green-600" : "text-red-600")}>
              {changeType === "positive" ? "+" : ""}
              {change}
            </p>
          )} */}
        </div>
        {Icon && (
          <div className="p-3 bg-primary/10 rounded-lg">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        )}
      </div>
    </Card>
  )
}
