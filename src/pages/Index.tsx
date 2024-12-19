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

const mockHistoryData = [
  { date: '2024-01', strength: 65 },
  { date: '2024-02', strength: 72 },
  { date: '2024-03', strength: 68 },
  { date: '2024-04', strength: 85 },
];

const Index = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid gap-6">
        <div className="grid gap-6 md:grid-cols-2">
          <ContentInteractionPanel 
            contentId="mock-content-1"
            title="Sample Content"
          />
          <KnowledgeFlowPanel />
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <TaskQueueInterface />
          <ProcessingControls />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <LanguageProcessingDisplay />
          <ContentEvolution />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <SystemLearningPanel />
          <OriginTracker />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <FileSystemMonitor />
          <FileHandlingRules />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <SystemConfigPanel />
          <Card>
            <CardHeader>
              <CardTitle>Connection Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
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
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
