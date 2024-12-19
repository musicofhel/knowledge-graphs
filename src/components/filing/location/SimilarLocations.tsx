import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { FolderOpen } from "lucide-react";

interface SimilarLocationsProps {
  onSelect: (location: string) => void;
}

export const SimilarLocations = ({ onSelect }: SimilarLocationsProps) => {
  const similarLocations = [
    { path: "/documents/similar1", relevance: "95%" },
    { path: "/documents/similar2", relevance: "85%" },
    { path: "/documents/similar3", relevance: "75%" },
  ];

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium">Similar Locations</h3>
      <ScrollArea className="h-32">
        <div className="space-y-2">
          {similarLocations.map((location) => (
            <Card
              key={location.path}
              className="p-2 cursor-pointer hover:bg-accent"
              onClick={() => onSelect(location.path)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FolderOpen className="h-4 w-4" />
                  <span className="text-sm">{location.path}</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {location.relevance}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};