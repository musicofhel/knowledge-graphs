import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface RelatedTag {
  name: string;
  relevance: number;
}

interface RelatedTagsProps {
  tags: RelatedTag[];
}

export const RelatedTags = ({ tags }: RelatedTagsProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Related Tags</label>
      <ScrollArea className="h-24">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag.name}
              variant="outline"
              className="flex items-center gap-2"
            >
              {tag.name}
              <span className="text-xs text-muted-foreground">
                {tag.relevance}%
              </span>
            </Badge>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};