import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileText, Image, Tool, GraduationCap } from "lucide-react";

interface TemplateSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const templates = [
  { id: "article", label: "Article", icon: FileText },
  { id: "research", label: "Research", icon: GraduationCap },
  { id: "tool", label: "Tool", icon: Tool },
  { id: "image", label: "Image", icon: Image },
];

export const TemplateSelector = ({ value, onChange }: TemplateSelectorProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Template</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select a template" />
        </SelectTrigger>
        <SelectContent>
          {templates.map(({ id, label, icon: Icon }) => (
            <SelectItem key={id} value={id}>
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};