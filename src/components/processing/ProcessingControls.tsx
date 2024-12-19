import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  Activity, 
  Gauge, 
  ListOrdered, 
  Zap,
  Settings2,
  Play
} from "lucide-react";
import { toast } from "sonner";

export const ProcessingControls = () => {
  const [apiStatus, setApiStatus] = useState<'online' | 'degraded' | 'offline'>('online');
  const [rateLimit, setRateLimit] = useState({ used: 75, total: 100 });
  const [queuePosition, setQueuePosition] = useState(3);
  const [priority, setPriority] = useState('normal');
  const [mode, setMode] = useState('automatic');

  const handleManualTrigger = () => {
    console.log("Manual processing triggered");
    toast.success("Processing started");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'degraded':
        return 'bg-yellow-500';
      case 'offline':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Settings2 className="h-5 w-5" />
          Processing Controls
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* API Status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">API Status</span>
          </div>
          <Badge className={`${getStatusColor(apiStatus)} text-white`}>
            {apiStatus}
          </Badge>
        </div>

        {/* Rate Limit */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Gauge className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Rate Limit</span>
          </div>
          <div className="space-y-1">
            <Progress value={(rateLimit.used / rateLimit.total) * 100} />
            <p className="text-xs text-muted-foreground text-right">
              {rateLimit.used}/{rateLimit.total} requests
            </p>
          </div>
        </div>

        {/* Queue Position */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ListOrdered className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Queue Position</span>
          </div>
          <Badge variant="secondary">{queuePosition}</Badge>
        </div>

        {/* Priority Settings */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-muted-foreground" />
            <Label htmlFor="priority">Priority</Label>
          </div>
          <Select value={priority} onValueChange={setPriority}>
            <SelectTrigger id="priority">
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="normal">Normal</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Mode Selection */}
        <div className="flex items-center justify-between">
          <Label htmlFor="mode">Automatic Mode</Label>
          <Switch
            id="mode"
            checked={mode === 'automatic'}
            onCheckedChange={(checked) => setMode(checked ? 'automatic' : 'manual')}
          />
        </div>

        {/* Manual Trigger */}
        <Button 
          onClick={handleManualTrigger} 
          className="w-full"
          disabled={mode === 'automatic'}
        >
          <Play className="h-4 w-4 mr-2" />
          Trigger Processing
        </Button>
      </CardContent>
    </Card>
  );
};