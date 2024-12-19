import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Play } from "lucide-react";

interface Rule {
  id: string;
  name: string;
  conditions: RuleCondition[];
  action: RuleAction;
  priority: number;
  isActive: boolean;
}

interface RuleCondition {
  type: string;
  operator: string;
  value: string;
}

interface RuleAction {
  type: string;
  target: string;
}

interface RuleTestingPanelProps {
  rule: Rule;
}

export const RuleTestingPanel = ({ rule }: RuleTestingPanelProps) => {
  const [testFile, setTestFile] = useState("");

  const handleTest = () => {
    console.log("Testing rule:", rule.name, "with file:", testFile);
    // Simulate rule testing
    const success = Math.random() > 0.3;
    if (success) {
      toast.success("Rule test passed successfully");
    } else {
      toast.error("Rule test failed - Check conditions");
    }
  };

  return (
    <div className="space-y-4 border rounded-md p-4">
      <Label>Test Rule</Label>
      <div className="flex items-center gap-2">
        <Input
          value={testFile}
          onChange={(e) => setTestFile(e.target.value)}
          placeholder="Enter test file path"
          className="flex-1"
        />
        <Button onClick={handleTest} variant="outline">
          <Play className="h-4 w-4 mr-2" />
          Test
        </Button>
      </div>
    </div>
  );
};