import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { FileText, Hash, Link as LinkIcon, Brain, AlertCircle } from "lucide-react";
import { useState } from "react";
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
  const [processingMode, setProcessingMode] = useState("balanced");
  const [selectedModel, setSelectedModel] = useState("gpt-4o");
  const [isProcessing, setIsProcessing] = useState(false);
  const [confidence, setConfidence] = useState(85);

  console.log("AutoGenerationPanel rendered with:", { url, content, processingMode, selectedModel });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Brain className="h-5 w-5" />
          Content Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* AI Processing Status */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Processing Status</span>
            <Badge variant={isProcessing ? "secondary" : "outline"}>
              {isProcessing ? "Processing..." : "Ready"}
            </Badge>
          </div>
          {isProcessing && <Progress value={45} className="h-2" />}
        </div>

        {/* Confidence Score */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Confidence Score</span>
            <span className="text-sm text-muted-foreground">{confidence}%</span>
          </div>
          <Progress value={confidence} className="h-2" />
        </div>

        {/* Model Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Model Selection</label>
          <Select value={selectedModel} onValueChange={setSelectedModel}>
            <SelectTrigger>
              <SelectValue placeholder="Select model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gpt-4o">GPT-4 Optimized</SelectItem>
              <SelectItem value="gpt-4o-mini">GPT-4 Mini</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Processing Mode Toggle */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Processing Mode</label>
          <Select value={processingMode} onValueChange={setProcessingMode}>
            <SelectTrigger>
              <SelectValue placeholder="Select mode" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="speed">Speed Priority</SelectItem>
              <SelectItem value="balanced">Balanced</SelectItem>
              <SelectItem value="quality">Quality Priority</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Analysis Summary */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Analysis Summary</span>
            {confidence < 70 && (
              <Badge variant="destructive" className="flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                Low Confidence
              </Badge>
            )}
          </div>
          <ScrollArea className="h-24 rounded-md border p-2">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Content analysis complete with {confidence}% confidence. 
                {confidence < 70 ? " Manual review recommended." : " Results appear reliable."}
              </p>
            </div>
          </ScrollArea>
        </div>

        {/* Override Suggestions */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Override Suggestions</span>
            <Switch />
          </div>
          <div className="text-sm text-muted-foreground">
            Enable to receive alternative processing suggestions
          </div>
        </div>

        {/* Existing Components */}
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
