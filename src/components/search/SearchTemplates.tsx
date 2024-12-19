import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileText, Image, Book, GraduationCap } from "lucide-react";

const TEMPLATES = [
  { id: "article", label: "Article", icon: FileText },
  { id: "image", label: "Image", icon: Image },
  { id: "tutorial", label: "Tutorial", icon: Book },
  { id: "research", label: "Research", icon: GraduationCap },
];

interface SearchTemplatesProps {
  selected: string | null;
  onSelect: (template: string) => void;
}

export const SearchTemplates = ({ selected, onSelect }: SearchTemplatesProps) => {
  return (
    <Select value={selected || undefined} onValueChange={onSelect}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="All templates" />
      </SelectTrigger>
      <SelectContent>
        {TEMPLATES.map(({ id, label, icon: Icon }) => (
          <SelectItem key={id} value={id}>
            <div className="flex items-center gap-2">
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};