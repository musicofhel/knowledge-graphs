import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

interface TrendData {
  label: string;
  current: number;
  previous: number;
  trend: "up" | "down";
}

const trendData: TrendData[] = [
  { label: "Navigation Patterns", current: 85, previous: 75, trend: "up" },
  { label: "Feature Usage", current: 62, previous: 70, trend: "down" },
  { label: "Engagement Score", current: 93, previous: 88, trend: "up" },
];

export const TrendIndicators = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Trend Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trendData.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{item.label}</span>
                <div className="flex items-center gap-2">
                  {item.trend === "up" ? (
                    <ArrowUpRight className="h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-500" />
                  )}
                  <Badge variant={item.trend === "up" ? "default" : "destructive"}>
                    {item.current}%
                  </Badge>
                </div>
              </div>
              <Progress value={item.current} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};