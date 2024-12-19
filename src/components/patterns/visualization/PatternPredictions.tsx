import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, AlertTriangle } from "lucide-react";

interface Prediction {
  pattern: string;
  likelihood: number;
  impact: "high" | "medium" | "low";
  timeframe: string;
}

const predictions: Prediction[] = [
  {
    pattern: "Navigation Loop",
    likelihood: 85,
    impact: "high",
    timeframe: "Next 24h",
  },
  {
    pattern: "Feature Discovery",
    likelihood: 65,
    impact: "medium",
    timeframe: "Next Week",
  },
  {
    pattern: "Tool Adoption",
    likelihood: 92,
    impact: "high",
    timeframe: "Next Month",
  },
];

export const PatternPredictions = () => {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "low":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      default:
        return "";
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5" />
          Pattern Predictions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {predictions.map((prediction, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0"
            >
              <div className="space-y-1">
                <div className="font-medium">{prediction.pattern}</div>
                <div className="text-sm text-muted-foreground">
                  {prediction.timeframe}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className={getImpactColor(prediction.impact)}
                >
                  {prediction.impact}
                </Badge>
                <Badge variant="secondary">{prediction.likelihood}%</Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};