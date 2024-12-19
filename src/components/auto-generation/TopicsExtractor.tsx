import { Badge } from "@/components/ui/badge";

interface TopicsExtractorProps {
  content?: string;
}

export const TopicsExtractor = ({ content }: TopicsExtractorProps) => {
  const extractTopics = (text?: string) => {
    if (!text) return [];
    // Simple topic extraction (would be replaced with more sophisticated logic)
    const words = text.toLowerCase().split(/\W+/);
    const commonWords = new Set(['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to']);
    return [...new Set(words)]
      .filter(word => word.length > 3 && !commonWords.has(word))
      .slice(0, 5);
  };

  const topics = extractTopics(content);

  return (
    <div className="space-y-2">
      <span className="text-sm text-muted-foreground">Key Topics:</span>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <Badge key={topic} variant="outline">
            {topic}
          </Badge>
        ))}
      </div>
    </div>
  );
};