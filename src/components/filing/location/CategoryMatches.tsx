import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tag } from "lucide-react";

interface CategoryMatchesProps {
  onSelect: (location: string) => void;
}

export const CategoryMatches = ({ onSelect }: CategoryMatchesProps) => {
  const categories = [
    { name: "Documents", path: "/documents/general", tags: ["work", "docs"] },
    { name: "Images", path: "/media/images", tags: ["media", "visual"] },
    { name: "Archives", path: "/archives/2024", tags: ["old", "backup"] },
  ];

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium">Category Matches</h3>
      <ScrollArea className="h-32">
        <div className="space-y-2">
          {categories.map((category) => (
            <Card
              key={category.path}
              className="p-2 cursor-pointer hover:bg-accent"
              onClick={() => onSelect(category.path)}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{category.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {category.path}
                  </span>
                </div>
                <div className="flex gap-1">
                  {category.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};