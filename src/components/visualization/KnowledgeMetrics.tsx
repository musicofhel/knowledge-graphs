import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Brain, Network, Target, Lightbulb, BookOpen, GitFork } from "lucide-react";

export const KnowledgeMetrics = () => {
  const metrics = {
    citations: { count: 127, growth: "+12%" },
    influence: { score: 85, trend: "increasing" },
    gaps: { identified: 3, priority: "high" },
    domains: { count: 5, coverage: 78 },
    expertPaths: { active: 4, completed: 2 },
    progression: { current: 72, target: 100 },
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Citations Network</CardTitle>
          <Network className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{metrics.citations.count}</div>
          <Badge variant="secondary">{metrics.citations.growth} growth</Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Influence Score</CardTitle>
          <Brain className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <Progress value={metrics.influence.score} className="h-2" />
          <span className="text-sm text-muted-foreground mt-2">
            Trend: {metrics.influence.trend}
          </span>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Knowledge Gaps</CardTitle>
          <Target className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{metrics.gaps.identified}</div>
          <Badge variant="destructive">Priority: {metrics.gaps.priority}</Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Domain Clusters</CardTitle>
          <Lightbulb className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{metrics.domains.count}</div>
          <Progress value={metrics.domains.coverage} className="h-2" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Expert Paths</CardTitle>
          <GitFork className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Active: {metrics.expertPaths.active}</span>
            <span>Completed: {metrics.expertPaths.completed}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Learning Progress</CardTitle>
          <BookOpen className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <Progress value={metrics.progression.current} className="h-2" />
          <span className="text-sm text-muted-foreground">
            Target: {metrics.progression.target}%
          </span>
        </CardContent>
      </Card>
    </div>
  );
};