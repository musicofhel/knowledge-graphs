import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

export const TemplatePriorities = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Template Priorities</h3>
      <ScrollArea className="h-40">
        <div className="space-y-3">
          {["Document", "Image", "Article", "Research"].map((template) => (
            <div key={template} className="flex items-center justify-between">
              <Badge variant="outline">{template}</Badge>
              <Select defaultValue="high">
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};