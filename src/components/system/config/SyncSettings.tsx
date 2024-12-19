import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";

export const SyncSettings = () => {
  const handleSave = () => {
    toast.success("Sync settings saved");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Label htmlFor="auto-sync">Auto Sync</Label>
        <Switch id="auto-sync" defaultChecked />
      </div>
      <div className="space-y-2">
        <Label>Sync Interval (minutes)</Label>
        <Slider defaultValue={[30]} max={120} step={5} />
      </div>
      <Button onClick={handleSave}>Save Sync Settings</Button>
    </div>
  );
};