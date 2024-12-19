import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Brain, Gauge, AlertCircle, DollarSign, Zap, BarChart2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const SystemIntegrationPanel = () => {
  const [selectedModel, setSelectedModel] = useState("gpt-4o");
  const [temperature, setTemperature] = useState([0.7]);
  const [tokenUsage, setTokenUsage] = useState({ used: 15420, limit: 100000 });
  const [estimatedCost, setEstimatedCost] = useState(0.42);
  const [errorRate, setErrorRate] = useState(0.5);

  console.log("SystemIntegrationPanel rendered with:", { selectedModel, temperature, tokenUsage });

  // Mock performance metrics
  const performanceMetrics = {
    latency: 245, // ms
    throughput: 32, // requests/sec
    successRate: 99.5, // percentage
  };

  const handleModelChange = (model: string) => {
    setSelectedModel(model);
    toast.success(`Model changed to ${model}`);
    console.log("Model changed to:", model);
  };

  const handleTemperatureChange = (value: number[]) => {
    setTemperature(value);
    console.log("Temperature changed to:", value[0]);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5" />
          System Integration
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Model Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Model Selection</label>
          <Select value={selectedModel} onValueChange={handleModelChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gpt-4o">GPT-4 Optimized</SelectItem>
              <SelectItem value="gpt-4o-mini">GPT-4 Mini</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Temperature Control */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Temperature</label>
            <span className="text-sm text-muted-foreground">{temperature[0]}</span>
          </div>
          <Slider
            value={temperature}
            onValueChange={handleTemperatureChange}
            max={1}
            step={0.1}
            className="w-full"
          />
        </div>

        {/* Token Usage */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Gauge className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Token Usage</span>
          </div>
          <div className="space-y-1">
            <Progress value={(tokenUsage.used / tokenUsage.limit) * 100} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{tokenUsage.used.toLocaleString()} used</span>
              <span>{tokenUsage.limit.toLocaleString()} limit</span>
            </div>
          </div>
        </div>

        {/* Cost Estimation */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Estimated Cost</span>
            </div>
            <Badge variant="secondary">${estimatedCost.toFixed(2)}</Badge>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Performance Metrics</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground">Latency</span>
              <p className="text-sm font-medium">{performanceMetrics.latency}ms</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground">Throughput</span>
              <p className="text-sm font-medium">{performanceMetrics.throughput}/s</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground">Success Rate</span>
              <p className="text-sm font-medium">{performanceMetrics.successRate}%</p>
            </div>
          </div>
        </div>

        {/* Error Handling */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Error Rate</span>
            </div>
            <Badge 
              variant={errorRate < 1 ? "outline" : "destructive"}
              className="flex items-center gap-1"
            >
              {errorRate}%
            </Badge>
          </div>
          {errorRate >= 1 && (
            <p className="text-xs text-muted-foreground">
              Error rate above threshold. Check system logs for details.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};