import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface RelatedContentProps {
  url?: string;
  content?: string;
}

export const RelatedContent = ({ url, content }: RelatedContentProps) => {
  // Mock related content (would be replaced with actual content matching logic)
  const mockRelated = [
    { title: "Similar Article 1", relevance: "95%" },
    { title: "Related Resource", relevance: "87%" },
    { title: "Connected Topic", relevance: "82%" },
  ];

  return (
    <div className="space-y-2">
      <span className="text-sm text-muted-foreground">Related Content:</span>
      <ScrollArea className="h-32">
        <div className="space-y-2">
          {mockRelated.map((item, index) => (
            <Card key={index} className="p-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">{item.title}</span>
                <span className="text-xs text-muted-foreground">{item.relevance}</span>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};