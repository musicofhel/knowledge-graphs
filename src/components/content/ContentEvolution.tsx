import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { History, GitCompare, RefreshCw, Workflow, Timer, GitPullRequest } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface ContentEvolutionProps {
  contentId?: string;
}

export const ContentEvolution = ({ contentId }: ContentEvolutionProps) => {
  // Mock data for demonstration
  const evolutionData = {
    versions: [
      { version: "1.0", changes: 12, date: "2024-01-01" },
      { version: "1.1", changes: 8, date: "2024-02-01" },
      { version: "1.2", changes: 15, date: "2024-03-01" },
    ],
    changeMagnitude: 85, // percentage
    updateFrequency: 2.5, // updates per week
    conceptDrift: 15, // percentage
    knowledgeDecay: 8, // percentage per month
    revisionImpact: 92, // percentage
  };

  const historyData = [
    { date: '2024-01', value: 65 },
    { date: '2024-02', value: 72 },
    { date: '2024-03', value: 68 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <History className="h-5 w-5" />
          Content Evolution
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          <div className="space-y-6">
            {/* Version Comparison */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium flex items-center gap-2">
                  <GitCompare className="h-4 w-4" />
                  Version History
                </span>
                <Badge variant="secondary">
                  Latest: v{evolutionData.versions[evolutionData.versions.length - 1].version}
                </Badge>
              </div>
              <div className="space-y-1">
                {evolutionData.versions.map((version) => (
                  <div key={version.version} className="flex items-center justify-between text-sm">
                    <span>v{version.version}</span>
                    <span className="text-muted-foreground">{version.changes} changes</span>
                    <span className="text-muted-foreground">{version.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Change Magnitude */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-2">
                  <GitPullRequest className="h-4 w-4" />
                  Change Magnitude
                </span>
                <span>{evolutionData.changeMagnitude}%</span>
              </div>
              <Progress value={evolutionData.changeMagnitude} className="h-2" />
            </div>

            {/* Update Frequency */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Update Frequency
                </span>
                <span>{evolutionData.updateFrequency}/week</span>
              </div>
              <Progress 
                value={(evolutionData.updateFrequency / 5) * 100} 
                className="h-2" 
              />
            </div>

            {/* Concept Drift */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-2">
                  <Workflow className="h-4 w-4" />
                  Concept Drift
                </span>
                <span>{evolutionData.conceptDrift}%</span>
              </div>
              <Progress 
                value={evolutionData.conceptDrift} 
                className="h-2"
                indicatorClassName="bg-yellow-500"
              />
            </div>

            {/* Knowledge Decay */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-2">
                  <Timer className="h-4 w-4" />
                  Knowledge Decay Rate
                </span>
                <span>{evolutionData.knowledgeDecay}%/month</span>
              </div>
              <Progress 
                value={evolutionData.knowledgeDecay} 
                className="h-2"
                indicatorClassName="bg-red-500"
              />
            </div>

            {/* Evolution Trend */}
            <div className="space-y-2">
              <span className="text-sm font-medium">Evolution Trend</span>
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={historyData}>
                    <XAxis 
                      dataKey="date" 
                      tick={{ fontSize: 12 }} 
                      stroke="currentColor" 
                      strokeOpacity={0.5}
                    />
                    <YAxis 
                      tick={{ fontSize: 12 }} 
                      stroke="currentColor" 
                      strokeOpacity={0.5}
                    />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="currentColor" 
                      strokeWidth={2} 
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};