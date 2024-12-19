import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Database } from "lucide-react";

export const BackupStatus = () => {
  return (
    <Card className="border border-dashed">
      <CardHeader className="py-3">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <Database className="h-4 w-4" />
          Backup Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Last backup:</span>
            <span className="text-muted-foreground">30 minutes ago</span>
          </div>
          <Progress value={85} className="h-1" />
          <div className="text-xs text-muted-foreground">
            Next scheduled: 30 minutes
          </div>
        </div>
      </CardContent>
    </Card>
  );
};