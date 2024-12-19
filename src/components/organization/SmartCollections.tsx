import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Brain, Clock, Star, Zap } from "lucide-react";

interface SmartCollection {
  id: string;
  name: string;
  description: string;
  count: number;
  icon: React.ReactNode;
}

const SMART_COLLECTIONS: SmartCollection[] = [
  {
    id: "recent",
    name: "Recently Added",
    description: "Content added in the last 7 days",
    count: 12,
    icon: <Clock className="h-4 w-4" />,
  },
  {
    id: "auto",
    name: "Auto-Categorized",
    description: "Content organized by AI",
    count: 45,
    icon: <Brain className="h-4 w-4" />,
  },
  {
    id: "favorites",
    name: "Favorites",
    description: "Your starred content",
    count: 8,
    icon: <Star className="h-4 w-4" />,
  },
  {
    id: "suggested",
    name: "Suggested",
    description: "Recommended organization",
    count: 15,
    icon: <Zap className="h-4 w-4" />,
  },
];

export const SmartCollections = () => {
  return (
    <ScrollArea className="h-[300px]">
      <div className="space-y-2 p-1">
        {SMART_COLLECTIONS.map((collection) => (
          <Card
            key={collection.id}
            className="p-4 cursor-pointer hover:bg-accent transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {collection.icon}
                <div>
                  <h4 className="font-medium">{collection.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {collection.description}
                  </p>
                </div>
              </div>
              <Badge variant="secondary">{collection.count}</Badge>
            </div>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
};