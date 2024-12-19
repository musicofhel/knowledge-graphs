import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Brain, AlertCircle, Settings, RefreshCw } from "lucide-react";
import { useState } from "react";

interface ClassificationPanelProps {
  content?: string;
}

interface CategoryConfidence {
  category: string;
  confidence: number;
  alternatives: string[];
}

export const ClassificationPanel = ({ content }: ClassificationPanelProps) => {
  const [isLearningMode, setIsLearningMode] = useState(false);
  const [isBatchProcessing, setIsBatchProcessing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  console.log("ClassificationPanel rendered with content:", content?.substring(0, 100));

  // Mock classification data (would be replaced with actual AI processing)
  const classifications: CategoryConfidence[] = [
    {
      category: "Technical Documentation",
      confidence: 85,
      alternatives: ["Tutorial", "API Reference"]
    },
    {
      category: "Research Paper",
      confidence: 65,
      alternatives: ["Academic Article", "Case Study"]
    },
    {
      category: "Blog Post",
      confidence: 45,
      alternatives: ["News Article", "Opinion Piece"]
    }
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Brain className="h-5 w-5" />
          Content Classification
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Learning Mode Toggle */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Learning Mode</span>
          <Switch
            checked={isLearningMode}
            onCheckedChange={setIsLearningMode}
          />
        </div>

        {/* Batch Processing Status */}
        {isBatchProcessing && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <RefreshCw className="h-4 w-4 animate-spin" />
            <span>Processing batch...</span>
          </div>
        )}

        {/* Classification Results */}
        <div className="space-y-4">
          <span className="text-sm font-medium">Classification Results</span>
          {classifications.map((classification) => (
            <div key={classification.category} className="space-y-2">
              <div className="flex items-center justify-between">
                <Badge
                  variant={classification.confidence > 80 ? "default" : "secondary"}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(classification.category)}
                >
                  {classification.category}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {classification.confidence}% confident
                </span>
              </div>
              <Progress value={classification.confidence} className="h-2" />
              
              {/* Alternative Suggestions */}
              <div className="pl-4 space-y-1">
                <span className="text-xs text-muted-foreground">Alternatives:</span>
                <div className="flex gap-2">
                  {classification.alternatives.map((alt) => (
                    <Badge
                      key={alt}
                      variant="outline"
                      className="text-xs cursor-pointer hover:bg-secondary"
                    >
                      {alt}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Manual Override Panel */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Manual Override</span>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </div>
          <ScrollArea className="h-24 rounded-md border p-2">
            <div className="space-y-2">
              {selectedCategory ? (
                <div className="space-y-2">
                  <p className="text-sm">
                    Override classification for: <strong>{selectedCategory}</strong>
                  </p>
                  <div className="flex gap-2">
                    {["Research", "Documentation", "Tutorial", "Article"].map((category) => (
                      <Badge
                        key={category}
                        variant="outline"
                        className="cursor-pointer hover:bg-secondary"
                        onClick={() => {
                          console.log(`Overriding classification to: ${category}`);
                        }}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Select a classification to override
                </p>
              )}
            </div>
          </ScrollArea>
        </div>

        {/* Classification Rules */}
        <div className="space-y-2">
          <span className="text-sm font-medium">Active Rules</span>
          <div className="space-y-1">
            {classifications.some(c => c.confidence < 70) && (
              <div className="flex items-center gap-2 text-sm text-yellow-500">
                <AlertCircle className="h-4 w-4" />
                <span>Low confidence classifications require manual review</span>
              </div>
            )}
            {isLearningMode && (
              <div className="flex items-center gap-2 text-sm text-blue-500">
                <Brain className="h-4 w-4" />
                <span>Learning mode is adapting to your corrections</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};