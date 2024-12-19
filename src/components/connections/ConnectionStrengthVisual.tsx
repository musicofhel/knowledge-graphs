import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  SignalHigh, 
  SignalMedium, 
  SignalLow, 
  Clock, 
  Link2 
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface ConnectionStrengthVisualProps {
  connectionType: string;
  strength: number;
  createdAt: string;
  updateFrequency: number; // updates per week
  historyData: Array<{ date: string; strength: number }>;
}

export const ConnectionStrengthVisual = ({
  connectionType,
  strength,
  createdAt,
  updateFrequency,
  historyData,
}: ConnectionStrengthVisualProps) => {
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

  const getStrengthIcon = (strength: number) => {
    if (strength >= 70) return <SignalHigh className="h-5 w-5 text-green-500" />;
    if (strength >= 40) return <SignalMedium className="h-5 w-5 text-yellow-500" />;
    return <SignalLow className="h-5 w-5 text-red-500" />;
  };

  // Calculate time-based decay (30 days until full decay)
  const daysSinceCreation = Math.floor(
    (Date.now() - new Date(createdAt).getTime()) / (1000 * 60 * 60 * 24)
  );
  const decayPercentage = Math.max(0, 100 - (daysSinceCreation / 30) * 100);

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Connection Analysis</CardTitle>
        <Link2 className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Connection Type and Strength */}
        <div className="flex items-center justify-between">
          <Badge 
            variant="outline" 
            className={getConnectionTypeColor(connectionType)}
          >
            {connectionType}
          </Badge>
          <div className="flex items-center gap-2">
            {getStrengthIcon(strength)}
            <span className="text-sm font-medium">{strength}%</span>
          </div>
        </div>

        {/* Strength Progress */}
        <Progress value={strength} className="h-2" />

        {/* Time Decay */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Time Decay
            </span>
            <span>{Math.round(decayPercentage)}%</span>
          </div>
          <Progress 
            value={decayPercentage} 
            className="h-2"
            indicatorClassName={`${
              decayPercentage > 70 
                ? 'bg-green-500' 
                : decayPercentage > 30 
                  ? 'bg-yellow-500' 
                  : 'bg-red-500'
            }`}
          />
        </div>

        {/* Update Frequency */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Update Frequency</span>
            <span>{updateFrequency}/week</span>
          </div>
          <Progress 
            value={Math.min((updateFrequency / 7) * 100, 100)} 
            className="h-2" 
          />
        </div>

        {/* Connection History Graph */}
        <div className="h-32 mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={historyData}>
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12 }} 
                stroke="currentColor" 
                strokeOpacity={0.5}
              />
              <YAxis 
                tick={{ fontSize: 12 }} 
                stroke="currentColor" 
                strokeOpacity={0.5}
              />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="strength" 
                stroke="currentColor" 
                strokeWidth={2} 
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};