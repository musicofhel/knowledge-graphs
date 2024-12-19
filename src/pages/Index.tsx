import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SystemStatusPanel } from "@/components/system/SystemStatusPanel";
import { FileSystemMonitor } from "@/components/monitoring/FileSystemMonitor";
import { FileHandlingRules } from "@/components/rules/FileHandlingRules";
import { SystemConfigPanel } from "@/components/system/SystemConfigPanel";
import { ProcessingControls } from "@/components/processing/ProcessingControls";

const Index = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid gap-6">
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
          <FileHandlingRules />
        </div>

        <SystemConfigPanel />
      </div>
    </div>
  );
};

export default Index;