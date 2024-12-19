import { Progress } from "@/components/ui/progress";

interface TimeDecayIndicatorProps {
  createdAt: string;
}

export const TimeDecayIndicator = ({ createdAt }: TimeDecayIndicatorProps) => {
  // Calculate decay percentage (100% - decay)
  // Assuming 30 days until full decay
  const daysSinceCreation = Math.floor(
    (Date.now() - new Date(createdAt).getTime()) / (1000 * 60 * 60 * 24)
  );
  const decayPercentage = Math.max(0, 100 - (daysSinceCreation / 30) * 100);

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Content Freshness</span>
        <span>{Math.round(decayPercentage)}%</span>
      </div>
      <Progress 
        value={decayPercentage} 
        className="h-2" 
        indicatorClassName={`${decayPercentage > 70 ? 'bg-green-500' : decayPercentage > 30 ? 'bg-yellow-500' : 'bg-red-500'}`}
      />
    </div>
  );
};