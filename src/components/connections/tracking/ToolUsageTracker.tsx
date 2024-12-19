import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tool, Settings, Search, Link } from "lucide-react";

interface ToolUsage {
  name: string;
  frequency: number;
  lastUsed: string;
}

const mockTools: ToolUsage[] = [
  { name: "Quick Connect", frequency: 92, lastUsed: "2 mins ago" },
  { name: "Batch Edit", frequency: 78, lastUsed: "15 mins ago" },
  { name: "Search", frequency: 65, lastUsed: "1 hour ago" },
];

export const ToolUsageTracker = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-sm font-medium">Tool Selection Patterns</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockTools.map((tool, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Tool className="h-4 w-4" />
                <span className="text-sm font-medium">{tool.name}</span>
              </div>
              <Badge variant="secondary">{tool.lastUsed}</Badge>
            </div>
            <Progress value={tool.frequency} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};