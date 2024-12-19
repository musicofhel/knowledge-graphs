import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitBranch } from "lucide-react";

export const VersionControl = () => {
  return (
    <Card className="border border-dashed">
      <CardHeader className="py-3">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <GitBranch className="h-4 w-4" />
          Version Control
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">Current Version:</span>
            <Badge>v1.2.3</Badge>
          </div>
          <div className="text-xs text-muted-foreground">
            Last commit: 2 hours ago
          </div>
        </div>
      </CardContent>
    </Card>
  );
};