import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const OverridePreferences = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Override Preferences</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="manual-override">Allow Manual Override</Label>
          <Switch id="manual-override" defaultChecked />
        </div>
        <div className="space-y-2">
          <Label>Override Behavior</Label>
          <RadioGroup defaultValue="prompt">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="prompt" id="prompt" />
              <Label htmlFor="prompt">Prompt for confirmation</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="auto" id="auto" />
              <Label htmlFor="auto">Auto-apply changes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="reject" id="reject" />
              <Label htmlFor="reject">Reject all overrides</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};