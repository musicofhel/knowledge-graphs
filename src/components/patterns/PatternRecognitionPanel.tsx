import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Clock, Activity, Route, Timer, CheckSquare, AlertTriangle } from "lucide-react";

const mockTimeData = [
  { hour: '00:00', activity: 10 },
  { hour: '04:00', activity: 5 },
  { hour: '08:00', activity: 45 },
  { hour: '12:00', activity: 80 },
  { hour: '16:00', activity: 65 },
  { hour: '20:00', activity: 30 },
];

const mockFlowData = [
  { name: 'Dashboard → Tags', frequency: 85 },
  { name: 'Tags → Connections', frequency: 72 },
  { name: 'Search → Submit', frequency: 45 },
];

const mockBottlenecks = [
  { point: 'Tag Selection', severity: 'high', impact: 85 },
  { point: 'Connection Creation', severity: 'medium', impact: 65 },
  { point: 'Search Refinement', severity: 'low', impact: 35 },
];

export const PatternRecognitionPanel = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Pattern Recognition
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100vh-20rem)] pr-4">
          <div className="space-y-6">
            {/* Time-of-day Activity Pattern */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Activity by Time of Day
              </h3>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockTimeData}>
                    <XAxis dataKey="hour" stroke="currentColor" strokeOpacity={0.5} />
                    <YAxis stroke="currentColor" strokeOpacity={0.5} />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="activity" 
                      stroke="currentColor" 
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Common Paths */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <Route className="h-4 w-4" />
                Common Navigation Paths
              </h3>
              <div className="space-y-3">
                {mockFlowData.map((flow) => (
                  <div key={flow.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{flow.name}</span>
                      <span>{flow.frequency}%</span>
                    </div>
                    <Progress value={flow.frequency} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            {/* Session Duration */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <Timer className="h-4 w-4" />
                Session Metrics
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <div className="text-sm text-muted-foreground">Avg. Duration</div>
                  <div className="text-2xl font-bold">24m</div>
                </div>
                <div className="p-3 bg-secondary rounded-lg">
                  <div className="text-sm text-muted-foreground">Completion Rate</div>
                  <div className="text-2xl font-bold">78%</div>
                </div>
              </div>
            </div>

            {/* Task Completion */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <CheckSquare className="h-4 w-4" />
                Task Completion Flows
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Connection Creation</span>
                  <Badge variant="secondary">92% success</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Tag Assignment</span>
                  <Badge variant="secondary">85% success</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Search & Navigate</span>
                  <Badge variant="secondary">78% success</Badge>
                </div>
              </div>
            </div>

            {/* Bottlenecks */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Interaction Bottlenecks
              </h3>
              <div className="space-y-3">
                {mockBottlenecks.map((bottleneck) => (
                  <div key={bottleneck.point} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{bottleneck.point}</span>
                      <Badge variant={
                        bottleneck.severity === 'high' ? 'destructive' :
                        bottleneck.severity === 'medium' ? 'secondary' :
                        'outline'
                      }>
                        {bottleneck.severity}
                      </Badge>
                    </div>
                    <Progress value={bottleneck.impact} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};