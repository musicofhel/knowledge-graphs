import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

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
  return (
    <div className="space-y-4">
      <Label>Conditions</Label>
      <div className="space-y-2">
        {conditions.map((condition, index) => (
          <div key={index} className="flex items-center gap-2">
            <Select
              value={condition.type}
              onValueChange={(value) =>
                onChange(
                  conditions.map((c, i) =>
                    i === index ? { ...c, type: value } : c
                  )
                )
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
                onChange(
                  conditions.map((c, i) =>
                    i === index ? { ...c, operator: value } : c
                  )
                )
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
                onChange(
                  conditions.map((c, i) =>
                    i === index ? { ...c, value: e.target.value } : c
                  )
                )
              }
              placeholder="Value"
              className="flex-1"
            />
          </div>
        ))}
      </div>
    </div>
  );
};