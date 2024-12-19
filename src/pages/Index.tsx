import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SystemStatusPanel } from "@/components/system/SystemStatusPanel";
import { FileSystemMonitor } from "@/components/monitoring/FileSystemMonitor";
import { FileHandlingRules } from "@/components/rules/FileHandlingRules";
import { SystemConfigPanel } from "@/components/system/SystemConfigPanel";
import { ProcessingControls } from "@/components/processing/ProcessingControls";
import { SystemIntegrationPanel } from "@/components/system/SystemIntegrationPanel";
import { ConnectionStrengthVisual } from "@/components/connections/ConnectionStrengthVisual";
import { VisualizationPanel } from "@/components/visualization/VisualizationPanel";

// Mock data for demonstration
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
        {/* Add Visualization Panel at the top */}
        <VisualizationPanel />

        <Card>
          <CardHeader>
            <CardTitle>System Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <SystemStatusPanel />
              <ProcessingControls />
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <FileSystemMonitor />
          <SystemIntegrationPanel />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <FileHandlingRules />
          <SystemConfigPanel />
        </div>

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
  );
};

export default Index;