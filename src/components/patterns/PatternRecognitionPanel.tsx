import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  Clock, 
  Activity, 
  Route, 
  Timer, 
  CheckSquare, 
  AlertTriangle,
  Repeat,
  Link,
  ArrowRightLeft,
  Search,
  LogIn,
  LogOut
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

export const PatternRecognitionPanel = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Access Patterns Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100vh-20rem)] pr-4">
          <div className="space-y-6">
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