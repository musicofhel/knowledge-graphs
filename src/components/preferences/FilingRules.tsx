import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";

export const FilingRules = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">Filing Rules</h3>
        <Button variant="outline" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Rule
        </Button>
      </div>
      <ScrollArea className="h-40">
        <div className="space-y-3">
          {["PDF files → /documents/pdf", "Images → /media/images", "Work files → /work"].map((rule) => (
            <Card key={rule} className="p-3 flex items-center justify-between">
              <span className="text-sm">{rule}</span>
              <Button variant="ghost" size="icon">
                <X className="h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};