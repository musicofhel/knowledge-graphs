import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Calendar,
  SlidersHorizontal,
  Filter,
  ArrowRight,
  LineChart,
} from "lucide-react";
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for the strength trend graph
const trendData = [
  { date: 'Jan', strength: 45 },
  { date: 'Feb', strength: 52 },
  { date: 'Mar', strength: 65 },
  { date: 'Apr', strength: 58 },
  { date: 'May', strength: 72 },
];

const QUICK_PRESETS = [
  { label: "Strong Only (>80%)", value: 80 },
  { label: "Medium+ (>50%)", value: 50 },
  { label: "All Active (>30%)", value: 30 },
];

export const GraphControls = () => {
  return (
    <div className="space-y-6">
      {/* Strength Filter Slider */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label>Connection Strength</Label>
          <span className="text-sm text-muted-foreground">65%</span>
        </div>
        <Slider defaultValue={[65]} min={0} max={100} step={1} />
      </div>

      {/* Minimum Connection Toggle */}
      <div className="flex items-center justify-between">
        <Label htmlFor="min-connection">Minimum Connection Required</Label>
        <Switch id="min-connection" defaultChecked />
      </div>

      {/* Time Window Selector */}
      <div className="space-y-2">
        <Label>Time Window</Label>
        <Select defaultValue="30d">
          <SelectTrigger className="w-full">
            <Calendar className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="90d">Last 90 days</SelectItem>
            <SelectItem value="365d">Last year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Update Frequency Filter */}
      <div className="space-y-2">
        <Label>Update Frequency</Label>
        <Select defaultValue="any">
          <SelectTrigger>
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Select frequency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="any">Any</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Strength Trend Graph */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label>Strength Trend</Label>
          <LineChart className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="h-32 mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsLineChart data={trendData}>
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
            </RechartsLineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Filter Presets */}
      <div className="space-y-2">
        <Label>Quick Filters</Label>
        <div className="space-y-2">
          {QUICK_PRESETS.map((preset) => (
            <Button
              key={preset.value}
              variant="outline"
              className="w-full justify-between"
            >
              {preset.label}
              <ArrowRight className="h-4 w-4" />
            </Button>
          ))}
        </div>
      </div>

      {/* Layout Type - keeping existing functionality */}
      <div className="space-y-2">
        <Label>Layout</Label>
        <Select defaultValue="force">
          <SelectTrigger>
            <SelectValue placeholder="Select layout" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="force">Force-directed</SelectItem>
            <SelectItem value="hierarchical">Hierarchical</SelectItem>
            <SelectItem value="circular">Circular</SelectItem>
            <SelectItem value="grid">Grid</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Node Type Filters - keeping existing functionality */}
      <div className="space-y-2">
        <Label>Content Types</Label>
        <div className="space-y-1">
          {["Articles", "Tutorials", "Research", "Tools"].map((type) => (
            <Button
              key={type}
              variant="outline"
              size="sm"
              className="mr-2 mb-2"
            >
              {type}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
