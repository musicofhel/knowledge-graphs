import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock, Activity } from "lucide-react";

interface TimeMetric {
  activity: string;
  duration: number;
  percentage: number;
}

const mockTimeMetrics: TimeMetric[] = [
  { activity: "Connection Creation", duration: 45, percentage: 85 },
  { activity: "Pattern Analysis", duration: 30, percentage: 65 },
  { activity: "Graph Navigation", duration: 25, percentage: 55 },
];

export const TimeInvestmentTracker = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-sm font-medium">Time Investment</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockTimeMetrics.map((metric, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4" />
                <span className="text-sm">{metric.activity}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{metric.duration}m</span>
              </div>
            </div>
            <Progress value={metric.percentage} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};