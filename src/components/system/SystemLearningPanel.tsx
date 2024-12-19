import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Brain, GitBranch, Settings, Users, Activity, Lightbulb } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

interface LearningMetrics {
  patternConfidence: number;
  adaptationScore: number;
  userPreferences: {
    category: string;
    strength: number;
  }[];
  behaviorModels: {
    type: string;
    accuracy: number;
  }[];
  interactionPatterns: {
    pattern: string;
    frequency: number;
  }[];
  optimizationSuggestions: {
    suggestion: string;
    impact: 'high' | 'medium' | 'low';
  }[];
}

// Simulated API call
const fetchLearningMetrics = async (): Promise<LearningMetrics> => {
  console.log("Fetching system learning metrics...");
  // Mock data for demonstration
  return {
    patternConfidence: 87,
    adaptationScore: 92,
    userPreferences: [
      { category: "Dark Mode", strength: 85 },
      { category: "Compact View", strength: 65 },
      { category: "Auto-Save", strength: 95 },
    ],
    behaviorModels: [
      { type: "Navigation", accuracy: 88 },
      { type: "Search", accuracy: 92 },
      { type: "Content Creation", accuracy: 78 },
    ],
    interactionPatterns: [
      { pattern: "Quick Search", frequency: 75 },
      { pattern: "Batch Processing", frequency: 45 },
      { pattern: "Advanced Filters", frequency: 60 },
    ],
    optimizationSuggestions: [
      { suggestion: "Enable keyboard shortcuts", impact: "high" },
      { suggestion: "Customize dashboard layout", impact: "medium" },
      { suggestion: "Set up auto-categorization", impact: "high" },
    ],
  };
};

export const SystemLearningPanel = () => {
  const { data: metrics, isLoading, error } = useQuery({
    queryKey: ['learningMetrics'],
    queryFn: fetchLearningMetrics,
    refetchInterval: 60000, // Refresh every minute
  });

  if (error) {
    console.error("Error fetching learning metrics:", error);
    toast.error("Failed to load learning metrics");
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Brain className="h-5 w-5" />
          System Learning
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {isLoading ? (
          <div className="flex items-center justify-center h-[200px]">
            <Activity className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : metrics ? (
          <>
            {/* Pattern Recognition & Adaptation */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Pattern Confidence</span>
                  <span>{metrics.patternConfidence}%</span>
                </div>
                <Progress value={metrics.patternConfidence} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Adaptation Score</span>
                  <span>{metrics.adaptationScore}%</span>
                </div>
                <Progress value={metrics.adaptationScore} className="h-2" />
              </div>
            </div>

            {/* User Preferences */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <Users className="h-4 w-4" />
                Learned Preferences
              </h3>
              <div className="space-y-2">
                {metrics.userPreferences.map((pref) => (
                  <div key={pref.category} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{pref.category}</span>
                      <span>{pref.strength}%</span>
                    </div>
                    <Progress value={pref.strength} className="h-1" />
                  </div>
                ))}
              </div>
            </div>

            {/* Behavior Models */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <GitBranch className="h-4 w-4" />
                Behavior Models
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {metrics.behaviorModels.map((model) => (
                  <div key={model.type} className="flex items-center justify-between p-2 bg-secondary/50 rounded-md">
                    <span className="text-sm">{model.type}</span>
                    <Badge variant="secondary">{model.accuracy}%</Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Interaction Patterns */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Usage Patterns
              </h3>
              <div className="space-y-2">
                {metrics.interactionPatterns.map((pattern) => (
                  <div key={pattern.pattern} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{pattern.pattern}</span>
                      <span>{pattern.frequency}%</span>
                    </div>
                    <Progress value={pattern.frequency} className="h-1" />
                  </div>
                ))}
              </div>
            </div>

            {/* Optimization Suggestions */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <Lightbulb className="h-4 w-4" />
                Optimization Suggestions
              </h3>
              <div className="space-y-2">
                {metrics.optimizationSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 bg-secondary/50 rounded-md"
                  >
                    <span className="text-sm">{suggestion.suggestion}</span>
                    <Badge className={getImpactColor(suggestion.impact)}>
                      {suggestion.impact}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : null}
      </CardContent>
    </Card>
  );
};