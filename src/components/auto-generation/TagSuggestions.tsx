import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Hash } from "lucide-react";

interface TagSuggestionsProps {
  content?: string;
}

export const TagSuggestions = ({ content }: TagSuggestionsProps) => {
  const suggestTags = (text?: string) => {
    if (!text) return [];
    // Simple tag suggestion logic (would be replaced with more sophisticated logic)
    const commonTags = [
      "javascript", "react", "tutorial", "guide",
      "programming", "web-development", "technology",
      "software", "coding", "development"
    ];
    return commonTags.slice(0, 6);
  };

  const suggestedTags = suggestTags(content);

  return (
    <div className="space-y-2">
      <span className="text-sm text-muted-foreground">Suggested Tags:</span>
      <ScrollArea className="h-20">
        <div className="flex flex-wrap gap-2">
          {suggestedTags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="flex items-center gap-1 cursor-pointer hover:bg-secondary"
            >
              <Hash className="h-3 w-3" />
              {tag}
            </Badge>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};