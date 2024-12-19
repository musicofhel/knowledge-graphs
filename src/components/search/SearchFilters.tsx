import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

interface SearchFiltersProps {
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
}

export const SearchFilters = ({
  selectedTags,
  onTagsChange,
}: SearchFiltersProps) => {
  const [tagInput, setTagInput] = useState("");

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim()) {
      onTagsChange([...selectedTags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    onTagsChange(selectedTags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="space-y-4 p-4 border rounded-lg bg-card">
      <div className="space-y-2">
        <Label>Tags</Label>
        <Input
          placeholder="Add tags..."
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleAddTag}
        />
        <div className="flex flex-wrap gap-2 mt-2">
          {selectedTags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="cursor-pointer"
              onClick={() => handleRemoveTag(tag)}
            >
              {tag} ×
            </Badge>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-2">
        <Label>Date Range</Label>
        <div className="flex gap-2">
          <Input type="date" className="flex-1" />
          <Input type="date" className="flex-1" />
        </div>
      </div>

      <Separator />

      <div className="space-y-2">
        <Label>Connection Strength</Label>
        <div className="flex gap-2">
          <Input
            type="number"
            min="0"
            max="100"
            placeholder="Min"
            className="flex-1"
          />
          <Input
            type="number"
            min="0"
            max="100"
            placeholder="Max"
            className="flex-1"
          />
        </div>
      </div>
    </div>
  );
};