import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Settings } from "lucide-react";

interface CustomRulesProps {
  onSelect: (location: string) => void;
}

export const CustomRules = ({ onSelect }: CustomRulesProps) => {
  const rules = [
    {
      name: "PDF Documents",
      condition: "File type is PDF",
      location: "/documents/pdfs",
    },
    {
      name: "Images",
      condition: "File type is image",
      location: "/media/images",
    },
    {
      name: "Work Files",
      condition: "Contains 'work' in name",
      location: "/work/documents",
    },
  ];

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium">Custom Rules</h3>
      <ScrollArea className="h-32">
        <div className="space-y-2">
          {rules.map((rule) => (
            <Card
              key={rule.name}
              className="p-2 cursor-pointer hover:bg-accent"
              onClick={() => onSelect(rule.location)}
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{rule.name}</span>
                  <Settings className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-xs text-muted-foreground">
                  {rule.condition}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};