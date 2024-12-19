import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface TagStrengthIndicatorProps {
  tag: string;
  strength: number;
}

export const TagStrengthIndicator = ({ tag, strength }: TagStrengthIndicatorProps) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <Badge variant="outline">{tag}</Badge>
        <span className="text-sm text-muted-foreground">{strength}%</span>
      </div>
      <Progress value={strength} className="h-2" />
    </div>
  );
};