import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { useState } from "react";

interface QuickTagSelectorProps {
  selectedTags: string[];
  onChange: (tags: string[]) => void;
}

const SUGGESTED_TAGS = [
  "javascript",
  "react",
  "typescript",
  "tutorial",
  "guide",
  "tool",
  "resource",
  "article",
];

export const QuickTagSelector = ({
  selectedTags,
  onChange,
}: QuickTagSelectorProps) => {
  const [newTag, setNewTag] = useState("");

  const addTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      onChange([...selectedTags, tag]);
    }
    setNewTag("");
  };

  const removeTag = (tagToRemove: string) => {
    onChange(selectedTags.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && newTag.trim()) {
      e.preventDefault();
      addTag(newTag.trim().toLowerCase());
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Tags</label>
        <Input
          placeholder="Add a tag..."
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {selectedTags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="flex items-center gap-1"
          >
            {tag}
            <Button
              variant="ghost"
              size="icon"
              className="h-4 w-4 p-0 hover:bg-transparent"
              onClick={() => removeTag(tag)}
            >
              <X className="h-3 w-3" />
            </Button>
          </Badge>
        ))}
      </div>

      <div className="space-y-2">
        <label className="text-xs text-muted-foreground">Suggested Tags</label>
        <div className="flex flex-wrap gap-2">
          {SUGGESTED_TAGS.filter((tag) => !selectedTags.includes(tag)).map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="cursor-pointer hover:bg-secondary"
              onClick={() => addTag(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};