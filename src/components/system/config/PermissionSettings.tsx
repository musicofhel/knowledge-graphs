import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const PermissionSettings = () => {
  const handleSave = () => {
    toast.success("Permission settings saved");
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="read-only">Read-only Mode</Label>
          <Switch id="read-only" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="require-auth">Require Authentication</Label>
          <Switch id="require-auth" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="auto-lock">Auto-lock System</Label>
          <Switch id="auto-lock" defaultChecked />
        </div>
      </div>
      <Button onClick={handleSave}>Save Permission Settings</Button>
    </div>
  );
};