import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface RulePrioritySettingsProps {
  priority: number;
  onChange: (priority: number) => void;
}

export const RulePrioritySettings = ({
  priority,
  onChange,
}: RulePrioritySettingsProps) => {
  return (
    <div className="space-y-4">
      <Label>Priority Level: {priority}</Label>
      <Slider
        value={[priority]}
        onValueChange={([value]) => onChange(value)}
        min={1}
        max={10}
        step={1}
        className="w-full"
      />
      <p className="text-sm text-muted-foreground">
        Higher priority rules are processed first
      </p>
    </div>
  );
};