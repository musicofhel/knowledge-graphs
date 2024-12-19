import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, CornerDownRight } from "lucide-react";

interface PathStep {
  from: string;
  to: string;
  frequency: number;
}

const mockPaths: PathStep[] = [
  { from: "Dashboard", to: "Connections", frequency: 85 },
  { from: "Tags", to: "Connections", frequency: 65 },
  { from: "Connections", to: "Submit", frequency: 45 },
];

export const NavigationTracker = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-sm font-medium">Navigation Paths</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockPaths.map((path, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <span>{path.from}</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
              <span>{path.to}</span>
            </div>
            <Progress value={path.frequency} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};