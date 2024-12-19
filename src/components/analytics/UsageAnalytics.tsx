import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Search, Share2, Download, BarChart2, Clock, Hash } from "lucide-react";

const mockUsageData = [
  { date: '2024-01', searches: 45, references: 23, shares: 12 },
  { date: '2024-02', searches: 52, references: 28, shares: 15 },
  { date: '2024-03', searches: 48, references: 31, shares: 18 },
  { date: '2024-04', searches: 60, references: 35, shares: 22 },
];

export const UsageAnalytics = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart2 className="h-5 w-5" />
          Usage Analytics
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Access Patterns */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Access Patterns
          </h3>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockUsageData}>
                <XAxis dataKey="date" stroke="currentColor" strokeOpacity={0.5} />
                <YAxis stroke="currentColor" strokeOpacity={0.5} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="searches" 
                  stroke="#3b82f6" 
                  strokeWidth={2} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Search Metrics */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium flex items-center gap-2">
            <Search className="h-4 w-4" />
            Search Activity
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Weekly Searches</span>
            <Badge variant="secondary">52 searches</Badge>
          </div>
          <Progress value={75} className="h-2" />
        </div>

        {/* Reference Tracking */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium flex items-center gap-2">
            <Hash className="h-4 w-4" />
            Reference Counts
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <span className="text-sm text-muted-foreground">Internal</span>
              <Progress value={85} className="h-2" />
            </div>
            <div className="space-y-1">
              <span className="text-sm text-muted-foreground">External</span>
              <Progress value={45} className="h-2" />
            </div>
          </div>
        </div>

        {/* Share Metrics */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium flex items-center gap-2">
            <Share2 className="h-4 w-4" />
            Share Activity
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Total Shares</span>
            <Badge variant="secondary">22 shares</Badge>
          </div>
          <Progress value={60} className="h-2" />
        </div>

        {/* Export Tracking */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export Analytics
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-2 rounded-md bg-secondary">
              <div className="text-sm font-medium">PDF Exports</div>
              <div className="text-2xl font-bold">28</div>
            </div>
            <div className="p-2 rounded-md bg-secondary">
              <div className="text-sm font-medium">Data Exports</div>
              <div className="text-2xl font-bold">15</div>
            </div>
          </div>
        </div>

        {/* Utility Score */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Content Utility Score</h3>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <Progress value={82} className="h-2" />
            </div>
            <Badge variant="outline">82/100</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Based on access patterns, references, and user engagement
          </p>
        </div>
      </CardContent>
    </Card>
  );
};