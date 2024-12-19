import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export const BackupPreferences = () => {
  const handleSave = () => {
    toast.success("Backup preferences saved");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Label htmlFor="auto-backup">Automatic Backups</Label>
        <Switch id="auto-backup" defaultChecked />
      </div>
      <div className="space-y-2">
        <Label>Backup Frequency</Label>
        <Select defaultValue="daily">
          <SelectTrigger>
            <SelectValue placeholder="Select frequency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hourly">Hourly</SelectItem>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button onClick={handleSave}>Save Backup Settings</Button>
    </div>
  );
};