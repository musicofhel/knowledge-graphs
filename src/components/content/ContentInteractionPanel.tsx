import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye, Activity, BarChart2, Calendar } from "lucide-react";
import { toast } from "sonner";

interface ContentInteractionProps {
  contentId: string;
  title: string;
}

export const ContentInteractionPanel = ({ contentId, title }: ContentInteractionProps) => {
  const [isRead, setIsRead] = useState(false);
  const [focusTime, setFocusTime] = useState(0);
  const [lastInteraction, setLastInteraction] = useState<Date | null>(null);
  const [engagementScore, setEngagementScore] = useState(0);
  const [accessCount, setAccessCount] = useState(0);

  useEffect(() => {
    // Simulate loading saved interaction data
    console.log("Loading interaction data for content:", contentId);
    const loadMockData = () => {
      setLastInteraction(new Date());
      setEngagementScore(75);
      setAccessCount(12);
    };
    loadMockData();
  }, [contentId]);

  const handleReadToggle = (checked: boolean) => {
    setIsRead(checked);
    console.log("Read status toggled:", checked);
    toast.success(`Marked as ${checked ? 'read' : 'unread'}`);
  };

  const formatLastInteraction = (date: Date | null) => {
    if (!date) return "Never";
    return new Intl.RelativeTimeFormat('en').format(
      Math.round((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24)),
      'day'
    ).replace('in ', '') + ' ago';
  };

  const getEngagementLevel = (score: number) => {
    if (score >= 80) return "High";
    if (score >= 50) return "Medium";
    return "Low";
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Content Interaction Metrics
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4 text-muted-foreground" />
            <span>Read Status</span>
          </div>
          <Switch
            checked={isRead}
            onCheckedChange={handleReadToggle}
            aria-label="Toggle read status"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>Last Interaction</span>
          </div>
          <span className="text-sm text-muted-foreground">
            {formatLastInteraction(lastInteraction)}
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
            <span>Engagement Level</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{getEngagementLevel(engagementScore)}</span>
              <span>{engagementScore}%</span>
            </div>
            <Progress value={engagementScore} className="h-2" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>Access Frequency</span>
          </div>
          <Badge variant="secondary">
            {accessCount} times
          </Badge>
        </div>

        {focusTime > 0 && (
          <div className="text-sm text-muted-foreground">
            Total focus time: {Math.round(focusTime / 60)} minutes
          </div>
        )}
      </CardContent>
    </Card>
  );
};