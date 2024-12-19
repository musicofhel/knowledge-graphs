import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Book, GitBranch, GitMerge, Workflow, CheckCircle2 } from "lucide-react";
import { KnowledgePathway } from "./KnowledgePathway";
import { PrerequisiteMap } from "./PrerequisiteMap";
import { DependencyChain } from "./DependencyChain";

export const KnowledgeFlowPanel = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Workflow className="h-5 w-5" />
          Knowledge Flow Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px]">
          <div className="space-y-6">
            {/* Learning Progress Overview */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Current Learning Path</span>
                <Badge variant="secondary">Advanced TypeScript</Badge>
              </div>
              <Progress value={65} className="h-2" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>65% Complete</span>
                <span>3/5 Milestones</span>
              </div>
            </div>

            {/* Knowledge Pathways */}
            <KnowledgePathway />

            {/* Prerequisites Map */}
            <PrerequisiteMap />

            {/* Dependency Chains */}
            <DependencyChain />
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};