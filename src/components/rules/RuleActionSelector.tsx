import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface RuleAction {
  type: string;
  target: string;
}

interface RuleActionSelectorProps {
  action: RuleAction;
  onChange: (action: RuleAction) => void;
}

export const RuleActionSelector = ({
  action,
  onChange,
}: RuleActionSelectorProps) => {
  return (
    <div className="space-y-4">
      <Label>Action</Label>
      <div className="flex items-center gap-2">
        <Select
          value={action.type}
          onValueChange={(type) => onChange({ ...action, type })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select action" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="move">Move</SelectItem>
            <SelectItem value="copy">Copy</SelectItem>
            <SelectItem value="delete">Delete</SelectItem>
            <SelectItem value="rename">Rename</SelectItem>
          </SelectContent>
        </Select>

        {action.type !== "delete" && (
          <Input
            value={action.target}
            onChange={(e) => onChange({ ...action, target: e.target.value })}
            placeholder={
              action.type === "rename" ? "New name" : "Destination path"
            }
            className="flex-1"
          />
        )}
      </div>
    </div>
  );
};