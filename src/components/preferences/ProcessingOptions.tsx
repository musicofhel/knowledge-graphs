import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const ProcessingOptions = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Processing Options</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="parallel-processing">Parallel Processing</Label>
          <Switch id="parallel-processing" defaultChecked />
        </div>
        <div className="space-y-2">
          <Label>Concurrent Tasks</Label>
          <Slider
            defaultValue={[3]}
            max={10}
            step={1}
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <Label>Processing Priority</Label>
          <Select defaultValue="balanced">
            <SelectTrigger>
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="speed">Speed</SelectItem>
              <SelectItem value="balanced">Balanced</SelectItem>
              <SelectItem value="quality">Quality</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};