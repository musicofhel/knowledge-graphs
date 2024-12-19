import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PathConfig } from "./config/PathConfig";
import { SyncSettings } from "./config/SyncSettings";
import { BackupPreferences } from "./config/BackupPreferences";
import { StorageManagement } from "./config/StorageManagement";
import { PermissionSettings } from "./config/PermissionSettings";
import { IntegrationOptions } from "./config/IntegrationOptions";
import { Settings } from "lucide-react";

export const SystemConfigPanel = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          System Configuration
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="paths" className="space-y-4">
          <TabsList className="grid grid-cols-2 lg:grid-cols-3 gap-2">
            <TabsTrigger value="paths">Paths</TabsTrigger>
            <TabsTrigger value="sync">Sync</TabsTrigger>
            <TabsTrigger value="backup">Backup</TabsTrigger>
            <TabsTrigger value="storage">Storage</TabsTrigger>
            <TabsTrigger value="permissions">Permissions</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
          </TabsList>
          <TabsContent value="paths">
            <PathConfig />
          </TabsContent>
          <TabsContent value="sync">
            <SyncSettings />
          </TabsContent>
          <TabsContent value="backup">
            <BackupPreferences />
          </TabsContent>
          <TabsContent value="storage">
            <StorageManagement />
          </TabsContent>
          <TabsContent value="permissions">
            <PermissionSettings />
          </TabsContent>
          <TabsContent value="integrations">
            <IntegrationOptions />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};