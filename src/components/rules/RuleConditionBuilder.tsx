import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Minus } from "lucide-react";

interface RuleCondition {
  type: string;
  operator: string;
  value: string;
}

interface RuleConditionBuilderProps {
  conditions: RuleCondition[];
  onChange: (conditions: RuleCondition[]) => void;
}

export const RuleConditionBuilder = ({
  conditions,
  onChange,
}: RuleConditionBuilderProps) => {
  const addCondition = () => {
    onChange([...conditions, { type: "name", operator: "contains", value: "" }]);
  };

  const removeCondition = (index: number) => {
    onChange(conditions.filter((_, i) => i !== index));
  };

  const updateCondition = (index: number, updates: Partial<RuleCondition>) => {
    onChange(
      conditions.map((condition, i) =>
        i === index ? { ...condition, ...updates } : condition
      )
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label>Conditions</Label>
        <Button onClick={addCondition} variant="outline" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Condition
        </Button>
      </div>

      <div className="space-y-2">
        {conditions.map((condition, index) => (
          <div key={index} className="flex items-center gap-2">
            <Select
              value={condition.type}
              onValueChange={(value) =>
                updateCondition(index, { type: value })
              }
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="size">Size</SelectItem>
                <SelectItem value="type">Type</SelectItem>
                <SelectItem value="date">Date</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={condition.operator}
              onValueChange={(value) =>
                updateCondition(index, { operator: value })
              }
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Operator" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="contains">Contains</SelectItem>
                <SelectItem value="equals">Equals</SelectItem>
                <SelectItem value="startsWith">Starts with</SelectItem>
                <SelectItem value="endsWith">Ends with</SelectItem>
              </SelectContent>
            </Select>

            <Input
              value={condition.value}
              onChange={(e) =>
                updateCondition(index, { value: e.target.value })
              }
              placeholder="Value"
              className="flex-1"
            />

            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeCondition(index)}
            >
              <Minus className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};