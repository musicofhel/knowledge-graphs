import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  Activity,
  AlertTriangle,
  ArrowRightLeft,
  CheckSquare,
  Clock,
  Link,
  LogIn,
  LogOut,
  Repeat,
  Route,
  Search,
  Timer,
  ThumbsUp,
  AlertCircle,
  XCircle,
  RefreshCcw,
  Gauge
} from "lucide-react";

const mockTimeData = [
  { hour: '00:00', activity: 10 },
  { hour: '04:00', activity: 5 },
  { hour: '08:00', activity: 45 },
  { hour: '12:00', activity: 80 },
  { hour: '16:00', activity: 65 },
  { hour: '20:00', activity: 30 },
];

const mockRevisitData = [
  { day: 'Mon', revisits: 15 },
  { day: 'Tue', revisits: 22 },
  { day: 'Wed', revisits: 18 },
  { day: 'Thu', revisits: 25 },
  { day: 'Fri', revisits: 20 },
];

const mockEngagementData = [
  { day: 'Mon', depth: 4.2 },
  { day: 'Tue', depth: 3.8 },
  { day: 'Wed', depth: 5.1 },
  { day: 'Thu', depth: 4.7 },
  { day: 'Fri', depth: 4.9 },
];

export const PatternRecognitionPanel = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Access Patterns & Metrics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100vh-20rem)] pr-4">
          <div className="space-y-6">
            {/* Success Indicators */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <ThumbsUp className="h-4 w-4" />
                Success Metrics
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <div className="text-sm text-muted-foreground">Task Success</div>
                  <div className="text-2xl font-bold text-green-500">87%</div>
                </div>
                <div className="p-3 bg-secondary rounded-lg">
                  <div className="text-sm text-muted-foreground">Goal Completion</div>
                  <div className="text-2xl font-bold text-green-500">92%</div>
                </div>
              </div>
            </div>

            {/* Friction Points */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                Friction Analysis
              </h3>
              <div className="space-y-2">
                {['Navigation Delays', 'Search Refinements', 'Error Encounters'].map((point) => (
                  <div key={point} className="flex items-center justify-between">
                    <span className="text-sm">{point}</span>
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                      {Math.floor(Math.random() * 10 + 1)} points
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Abandonment Markers */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <XCircle className="h-4 w-4" />
                Abandonment Analysis
              </h3>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Exit Rate</span>
                  <span className="text-red-500">15%</span>
                </div>
                <Progress value={15} className="h-2" />
                <div className="flex justify-between text-sm mt-2">
                  <span>Task Abandonment</span>
                  <span className="text-red-500">8%</span>
                </div>
                <Progress value={8} className="h-2" />
              </div>
            </div>

            {/* Completion Rates */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <CheckSquare className="h-4 w-4" />
                Completion Analysis
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <div className="text-sm text-muted-foreground">Flow Complete</div>
                  <div className="text-2xl font-bold">85%</div>
                </div>
                <div className="p-3 bg-secondary rounded-lg">
                  <div className="text-sm text-muted-foreground">Path Success</div>
                  <div className="text-2xl font-bold">78%</div>
                </div>
              </div>
            </div>

            {/* Return Triggers */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <RefreshCcw className="h-4 w-4" />
                Return Patterns
              </h3>
              <div className="space-y-2">
                {[
                  { trigger: 'Content Updates', rate: '45%' },
                  { trigger: 'Related Items', rate: '32%' },
                  { trigger: 'Notifications', rate: '23%' }
                ].map((item) => (
                  <div key={item.trigger} className="flex items-center justify-between">
                    <span className="text-sm">{item.trigger}</span>
                    <Badge variant="secondary">{item.rate}</Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Engagement Depth */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <Gauge className="h-4 w-4" />
                Engagement Depth
              </h3>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockEngagementData}>
                    <XAxis dataKey="day" stroke="currentColor" strokeOpacity={0.5} />
                    <YAxis stroke="currentColor" strokeOpacity={0.5} />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="depth" 
                      stroke="currentColor" 
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                Average interaction depth: 4.5 levels
              </div>
            </div>

            {/* Keep existing sections */}
            {/* Content Revisit Cycles */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <Repeat className="h-4 w-4" />
                Content Revisit Cycles
              </h3>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockRevisitData}>
                    <XAxis dataKey="day" stroke="currentColor" strokeOpacity={0.5} />
                    <YAxis stroke="currentColor" strokeOpacity={0.5} />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="revisits" 
                      stroke="currentColor" 
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Reference Chaining */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <Link className="h-4 w-4" />
                Reference Chains
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Average Chain Length</span>
                  <Badge variant="secondary">4.2 steps</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Max Chain Depth</span>
                  <Badge variant="secondary">8 steps</Badge>
                </div>
                <Progress value={75} className="h-2" />
              </div>
            </div>

            {/* Cross-content Jumps */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <ArrowRightLeft className="h-4 w-4" />
                Cross-content Navigation
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <div className="text-sm text-muted-foreground">Jump Rate</div>
                  <div className="text-2xl font-bold">3.8/min</div>
                </div>
                <div className="p-3 bg-secondary rounded-lg">
                  <div className="text-sm text-muted-foreground">Avg Distance</div>
                  <div className="text-2xl font-bold">2.4 hops</div>
                </div>
              </div>
            </div>

            {/* Search-to-Content Paths */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <Search className="h-4 w-4" />
                Search-to-Content Flow
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Search Success Rate</span>
                  <Badge variant="secondary">85%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Avg. Steps to Content</span>
                  <Badge variant="secondary">2.1 steps</Badge>
                </div>
                <Progress value={85} className="h-2" />
              </div>
            </div>

            {/* Entry Points */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <LogIn className="h-4 w-4" />
                Entry Point Analysis
              </h3>
              <div className="space-y-2">
                {['Search', 'Direct Link', 'Related Content'].map((entry) => (
                  <div key={entry} className="flex items-center justify-between">
                    <span className="text-sm">{entry}</span>
                    <Badge variant="secondary">
                      {Math.floor(Math.random() * 40 + 10)}%
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Exit Points */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <LogOut className="h-4 w-4" />
                Exit Point Tracking
              </h3>
              <div className="space-y-2">
                {['Content Complete', 'Search New', 'Time Limit'].map((exit) => (
                  <div key={exit} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{exit}</span>
                      <span>{Math.floor(Math.random() * 40 + 10)}%</span>
                    </div>
                    <Progress 
                      value={Math.random() * 100} 
                      className="h-2" 
                    />
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
