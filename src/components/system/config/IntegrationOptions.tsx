import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const IntegrationOptions = () => {
  const handleSave = () => {
    toast.success("Integration settings saved");
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="cloud-sync">Cloud Sync</Label>
            <Switch id="cloud-sync" defaultChecked />
          </div>
          <Input placeholder="Cloud Storage URL" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="api-integration">API Integration</Label>
            <Switch id="api-integration" />
          </div>
          <Input placeholder="API Endpoint" />
        </div>
      </div>
      <Button onClick={handleSave}>Save Integration Settings</Button>
    </div>
  );
};