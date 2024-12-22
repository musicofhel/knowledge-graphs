import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SystemStatusPanel } from "@/components/system/SystemStatusPanel";
import { FileSystemMonitor } from "@/components/monitoring/FileSystemMonitor";
import { FileHandlingRules } from "@/components/rules/FileHandlingRules";
import { SystemConfigPanel } from "@/components/system/SystemConfigPanel";
import { ProcessingControls } from "@/components/processing/ProcessingControls";
import { SystemIntegrationPanel } from "@/components/system/SystemIntegrationPanel";
import { ConnectionStrengthVisual } from "@/components/connections/ConnectionStrengthVisual";
import { VisualizationPanel } from "@/components/visualization/VisualizationPanel";
import { TaskQueueInterface } from "@/components/queue/TaskQueueInterface";
import { LanguageProcessingDisplay } from "@/components/analysis/LanguageProcessingDisplay";
import { ContentEvolution } from "@/components/content/ContentEvolution";
import { SystemLearningPanel } from "@/components/system/SystemLearningPanel";
import { ContentInteractionPanel } from "@/components/content/ContentInteractionPanel";
import { OriginTracker } from "@/components/tracking/OriginTracker";
import { KnowledgeFlowPanel } from "@/components/knowledge/KnowledgeFlowPanel";
import { UsageAnalytics } from "@/components/analytics/UsageAnalytics";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const mockHistoryData = [
  { date: '2024-01', strength: 65 },
  { date: '2024-02', strength: 72 },
  { date: '2024-03', strength: 68 },
  { date: '2024-04', strength: 85 },
];

const CompactCard = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="transition-all duration-200">
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="h-8 w-8 p-0"
          >
            {isExpanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardHeader>
      {isExpanded && <CardContent className="p-4 pt-0">{children}</CardContent>}
    </Card>
  );
};

const Index = () => {
  return (
    <div className="container mx-auto py-4">
      <div className="grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <CompactCard title="Content Interaction">
            <ContentInteractionPanel 
              contentId="mock-content-1"
              title="Sample Content"
            />
          </CompactCard>
          <CompactCard title="Usage Analytics">
            <UsageAnalytics />
          </CompactCard>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          <CompactCard title="Task Queue">
            <TaskQueueInterface />
          </CompactCard>
          <CompactCard title="Processing Controls">
            <ProcessingControls />
          </CompactCard>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <CompactCard title="Language Processing">
            <LanguageProcessingDisplay />
          </CompactCard>
          <CompactCard title="Content Evolution">
            <ContentEvolution />
          </CompactCard>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <CompactCard title="System Learning">
            <SystemLearningPanel />
          </CompactCard>
          <CompactCard title="Origin Tracking">
            <OriginTracker />
          </CompactCard>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <CompactCard title="File System Monitor">
            <FileSystemMonitor />
          </CompactCard>
          <CompactCard title="File Handling Rules">
            <FileHandlingRules />
          </CompactCard>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <CompactCard title="System Configuration">
            <SystemConfigPanel />
          </CompactCard>
          <CompactCard title="Connection Analysis">
            <div className="grid gap-4 md:grid-cols-2">
              <ConnectionStrengthVisual
                connectionType="reference"
                strength={85}
                createdAt="2024-03-01"
                updateFrequency={5}
                historyData={mockHistoryData}
              />
              <ConnectionStrengthVisual
                connectionType="related"
                strength={62}
                createdAt="2024-02-15"
                updateFrequency={3}
                historyData={mockHistoryData}
              />
            </div>
          </CompactCard>
        </div>
      </div>
    </div>
  );
};

export default Index;