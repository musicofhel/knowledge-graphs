import { Button } from "@/components/ui/button";
import { History, X } from "lucide-react";

// In a real app, this would come from localStorage or a backend
const RECENT_SEARCHES = [
  "React hooks",
  "TypeScript patterns",
  "CSS Grid tutorials",
];

interface RecentSearchesProps {
  onSelect: (query: string) => void;
}

export const RecentSearches = ({ onSelect }: RecentSearchesProps) => {
  if (!RECENT_SEARCHES.length) return null;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <History className="h-4 w-4" />
        <span>Recent Searches</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {RECENT_SEARCHES.map((query) => (
          <Button
            key={query}
            variant="outline"
            size="sm"
            className="group"
            onClick={() => onSelect(query)}
          >
            {query}
            <X className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        ))}
      </div>
    </div>
  );
};