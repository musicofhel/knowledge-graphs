import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CalendarDays, Link as LinkIcon } from "lucide-react";
import { Switch } from "@/components/ui/switch";

interface ConnectionDisplayProps {
  id: number;  // Added this line to fix the TypeScript error
  sourceTitle: string;
  targetTitle: string;
  connectionType: string;
  strength: number;
  createdAt: string;
  enabled?: boolean;
  onToggle?: (enabled: boolean) => void;
}

export const ConnectionDisplay = ({
  id,  // Added this to the destructuring
  sourceTitle,
  targetTitle,
  connectionType,
  strength,
  createdAt,
  enabled = true,
  onToggle,
}: ConnectionDisplayProps) => {
  const getConnectionTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'reference':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'related':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'similar':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Connection Details
        </CardTitle>
        <Switch
          checked={enabled}
          onCheckedChange={onToggle}
          aria-label="Toggle connection"
        />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{sourceTitle}</span>
            <LinkIcon className="h-4 w-4" />
            <span className="text-sm font-medium">{targetTitle}</span>
          </div>

          <div className="flex items-center justify-between">
            <Badge 
              variant="outline" 
              className={getConnectionTypeColor(connectionType)}
            >
              {connectionType}
            </Badge>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarDays className="h-4 w-4" />
              <span>{createdAt}</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Connection Strength</span>
              <span>{strength}%</span>
            </div>
            <Progress value={strength} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};