import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, Hash, Link as LinkIcon } from "lucide-react";
import { ContentTypeDetector } from "./ContentTypeDetector";
import { MetaDescription } from "./MetaDescription";
import { TopicsExtractor } from "./TopicsExtractor";
import { CategorySuggestion } from "./CategorySuggestion";
import { RelatedContent } from "./RelatedContent";
import { TagSuggestions } from "./TagSuggestions";
import { MetadataExtractor } from "./MetadataExtractor";

interface AutoGenerationPanelProps {
  url?: string;
  content?: string;
}

export const AutoGenerationPanel = ({ url, content }: AutoGenerationPanelProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Content Analysis</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <MetadataExtractor url={url} content={content} />
        <ContentTypeDetector url={url} content={content} />
        <MetaDescription content={content} />
        <TopicsExtractor content={content} />
        <CategorySuggestion content={content} />
        <RelatedContent url={url} content={content} />
        <TagSuggestions content={content} />
      </CardContent>
    </Card>
  );
};