import { Badge } from "@/components/ui/badge";

interface CategorySuggestionProps {
  content?: string;
}

export const CategorySuggestion = ({ content }: CategorySuggestionProps) => {
  const suggestCategory = (text?: string) => {
    if (!text) return "Uncategorized";
    // Simple category suggestion logic (would be replaced with more sophisticated logic)
    const categories = ["Article", "Tutorial", "Research", "Tool", "Resource"];
    return categories[Math.floor(Math.random() * categories.length)];
  };

  return (
    <div className="space-y-2">
      <span className="text-sm text-muted-foreground">Suggested Category:</span>
      <Badge variant="secondary" className="text-sm">
        {suggestCategory(content)}
      </Badge>
    </div>
  );
};