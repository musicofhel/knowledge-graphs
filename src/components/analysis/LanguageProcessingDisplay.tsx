import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Brain, Book, MessageSquare, Sparkles, BarChart3, Hash } from "lucide-react";

interface Entity {
  text: string;
  type: string;
  confidence: number;
}

interface KeyPhrase {
  phrase: string;
  relevance: number;
}

interface Topic {
  name: string;
  confidence: number;
  keywords: string[];
}

interface LanguageProcessingDisplayProps {
  content?: string;
}

export const LanguageProcessingDisplay = ({ content }: LanguageProcessingDisplayProps) => {
  console.log("Rendering LanguageProcessingDisplay with content:", content?.substring(0, 100));

  // Mock data for demonstration - would be replaced with actual NLP processing
  const entities: Entity[] = [
    { text: "React", type: "TECHNOLOGY", confidence: 0.95 },
    { text: "JavaScript", type: "LANGUAGE", confidence: 0.92 },
    { text: "Web Development", type: "CONCEPT", confidence: 0.88 }
  ];

  const keyPhrases: KeyPhrase[] = [
    { phrase: "modern web development", relevance: 0.89 },
    { phrase: "user interface design", relevance: 0.85 },
    { phrase: "component architecture", relevance: 0.82 }
  ];

  const sentiment = {
    score: 0.75, // Range: -1 to 1
    label: "Positive"
  };

  const complexityMetrics = {
    readabilityScore: 82, // 0-100
    averageSentenceLength: 15,
    technicalTermDensity: 0.25,
    vocabularyDiversity: 0.78
  };

  const topics: Topic[] = [
    {
      name: "Web Development",
      confidence: 0.92,
      keywords: ["frontend", "React", "components"]
    },
    {
      name: "User Interface",
      confidence: 0.85,
      keywords: ["design", "interaction", "layout"]
    }
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5" />
          Language Processing Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Entity Recognition */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Named Entities
          </div>
          <ScrollArea className="h-24">
            <div className="flex flex-wrap gap-2">
              {entities.map((entity, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="flex items-center gap-1"
                >
                  <span>{entity.text}</span>
                  <span className="text-xs text-muted-foreground">
                    ({Math.round(entity.confidence * 100)}%)
                  </span>
                </Badge>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Key Phrases */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium">
            <MessageSquare className="h-4 w-4" />
            Key Phrases
          </div>
          <div className="space-y-2">
            {keyPhrases.map((phrase, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{phrase.phrase}</span>
                  <span className="text-muted-foreground">
                    {Math.round(phrase.relevance * 100)}%
                  </span>
                </div>
                <Progress value={phrase.relevance * 100} className="h-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Sentiment Analysis */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium">
            <BarChart3 className="h-4 w-4" />
            Sentiment Analysis
          </div>
          <div className="flex items-center gap-4">
            <Badge variant={sentiment.score > 0 ? "default" : "destructive"}>
              {sentiment.label}
            </Badge>
            <Progress
              value={(sentiment.score + 1) * 50}
              className="h-2"
            />
          </div>
        </div>

        {/* Complexity & Readability */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Book className="h-4 w-4" />
            Content Metrics
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <span className="text-sm">Readability</span>
              <Progress value={complexityMetrics.readabilityScore} className="h-1" />
            </div>
            <div className="space-y-1">
              <span className="text-sm">Technical Density</span>
              <Progress value={complexityMetrics.technicalTermDensity * 100} className="h-1" />
            </div>
          </div>
        </div>

        {/* Topic Modeling */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Hash className="h-4 w-4" />
            Topics
          </div>
          <ScrollArea className="h-32">
            <div className="space-y-4">
              {topics.map((topic, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{topic.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {Math.round(topic.confidence * 100)}%
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {topic.keywords.map((keyword, kidx) => (
                      <Badge key={kidx} variant="secondary" className="text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  );
};