import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Settings, FileText, FolderOpen } from "lucide-react";
import { toast } from "sonner";
import { RuleConditionBuilder } from "./RuleConditionBuilder";
import { RuleActionSelector } from "./RuleActionSelector";
import { RulePrioritySettings } from "./RulePrioritySettings";
import { RuleTestingPanel } from "./RuleTestingPanel";

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

export const FileHandlingRules = () => {
  const [rules, setRules] = useState<Rule[]>([]);
  const [currentRule, setCurrentRule] = useState<Rule | null>(null);

  const handleCreateRule = () => {
    const newRule: Rule = {
      id: Math.random().toString(36).substr(2, 9),
      name: "New Rule",
      conditions: [],
      action: { type: "move", target: "" },
      priority: rules.length + 1,
      isActive: true,
    };
    setRules([...rules, newRule]);
    setCurrentRule(newRule);
    toast.success("New rule created");
  };

  const handleSaveRule = (rule: Rule) => {
    setRules(rules.map((r) => (r.id === rule.id ? rule : r)));
    toast.success("Rule saved successfully");
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium">File Handling Rules</CardTitle>
        <Button onClick={handleCreateRule} variant="outline" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Rule
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <Label>Active Rules</Label>
            <ScrollArea className="h-[400px] border rounded-md p-4">
              {rules.map((rule) => (
                <div
                  key={rule.id}
                  className="flex items-center justify-between p-2 hover:bg-accent rounded-md cursor-pointer"
                  onClick={() => setCurrentRule(rule)}
                >
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span>{rule.name}</span>
                  </div>
                  <Settings className="h-4 w-4 text-muted-foreground" />
                </div>
              ))}
              {rules.length === 0 && (
                <div className="text-center text-muted-foreground py-8">
                  <FolderOpen className="h-8 w-8 mx-auto mb-2" />
                  <p>No rules created yet</p>
                </div>
              )}
            </ScrollArea>
          </div>

          {currentRule && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Rule Name</Label>
                <Input
                  value={currentRule.name}
                  onChange={(e) =>
                    setCurrentRule({ ...currentRule, name: e.target.value })
                  }
                />
              </div>

              <RuleConditionBuilder
                conditions={currentRule.conditions}
                onChange={(conditions) =>
                  setCurrentRule({ ...currentRule, conditions })
                }
              />

              <RuleActionSelector
                action={currentRule.action}
                onChange={(action) => setCurrentRule({ ...currentRule, action })}
              />

              <RulePrioritySettings
                priority={currentRule.priority}
                onChange={(priority) =>
                  setCurrentRule({ ...currentRule, priority })
                }
              />

              <Button
                className="w-full"
                onClick={() => handleSaveRule(currentRule)}
              >
                Save Rule
              </Button>

              <RuleTestingPanel rule={currentRule} />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};