import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";

export const AutoTagSettings = () => {
  const handleTaggingChange = (checked: boolean) => {
    toast.success(`Auto-tagging ${checked ? 'enabled' : 'disabled'}`);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Auto-Tag Settings</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="auto-tagging">Enable Auto-Tagging</Label>
          <Switch
            id="auto-tagging"
            onCheckedChange={handleTaggingChange}
            defaultChecked
          />
        </div>
        <div className="space-y-2">
          <Label>Minimum Confidence Level</Label>
          <Slider
            defaultValue={[75]}
            max={100}
            step={1}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};