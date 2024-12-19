import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Hash, ChevronRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface TagSuggestionsProps {
  content?: string;
}

interface TagWithRelevance {
  tag: string;
  relevance: number;
  category?: string;
  isKeyConcept?: boolean;
}

export const TagSuggestions = ({ content }: TagSuggestionsProps) => {
  const suggestTags = (text?: string): TagWithRelevance[] => {
    if (!text) return [];
    
    console.log("Generating tag suggestions for content:", text?.substring(0, 100));
    
    // Simple tag suggestion logic (would be replaced with more sophisticated logic)
    return [
      { tag: "javascript", relevance: 95, category: "Programming", isKeyConcept: true },
      { tag: "react", relevance: 88, category: "Programming", isKeyConcept: true },
      { tag: "tutorial", relevance: 75, category: "Content Type" },
      { tag: "web-development", relevance: 82, category: "Domain", isKeyConcept: true },
      { tag: "frontend", relevance: 78, category: "Domain" },
      { tag: "coding", relevance: 70, category: "General" },
    ];
  };

  const suggestedTags = suggestTags(content);
  const categories = [...new Set(suggestedTags.map(tag => tag.category))];

  console.log("Generated tag suggestions:", suggestedTags);

  return (
    <div className="space-y-4">
      <span className="text-sm text-muted-foreground">Suggested Tags:</span>
      <ScrollArea className="h-[300px] pr-4">
        {categories.map((category) => (
          <div key={category} className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">{category}</span>
            </div>
            <div className="space-y-3 pl-6">
              {suggestedTags
                .filter(tag => tag.category === category)
                .map((tag) => (
                  <div key={tag.tag} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <Badge
                        variant={tag.isKeyConcept ? "default" : "outline"}
                        className={`flex items-center gap-1 cursor-pointer hover:bg-secondary ${
                          tag.isKeyConcept ? "border-2 border-primary" : ""
                        }`}
                      >
                        <Hash className="h-3 w-3" />
                        {tag.tag}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {tag.relevance}%
                      </span>
                    </div>
                    <Progress value={tag.relevance} className="h-1" />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};