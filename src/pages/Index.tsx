import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPreferencesPanel } from "@/components/preferences/UserPreferencesPanel";
import { SystemStatusPanel } from "@/components/system/SystemStatusPanel";
import { FileSystemMonitor } from "@/components/monitoring/FileSystemMonitor";
import { FileHandlingRules } from "@/components/rules/FileHandlingRules";

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
              <FileSystemMonitor />
            </div>
          </CardContent>
        </Card>

        <FileHandlingRules />

        <Card>
          <CardHeader>
            <CardTitle>User Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <UserPreferencesPanel />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;