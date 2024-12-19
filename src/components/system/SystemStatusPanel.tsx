import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Activity, AlertCircle, CheckCircle2, Clock, Database } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

interface SystemMetrics {
  processingCapacity: number;
  queueLength: number;
  successRate: number;
  errorCount: number;
  systemHealth: 'healthy' | 'degraded' | 'critical';
  performance: {
    responseTime: number;
    throughput: number;
  };
}

// Simulated API call - replace with actual API endpoint
const fetchSystemMetrics = async (): Promise<SystemMetrics> => {
  console.log("Fetching system metrics...");
  // Simulated API response
  return {
    processingCapacity: 85,
    queueLength: 12,
    successRate: 98.5,
    errorCount: 3,
    systemHealth: 'healthy',
    performance: {
      responseTime: 250,
      throughput: 450,
    },
  };
};

export const SystemStatusPanel = () => {
  const { data: metrics, isLoading, error } = useQuery({
    queryKey: ['systemMetrics'],
    queryFn: fetchSystemMetrics,
    refetchInterval: 30000, // Refresh every 30 seconds
  });

  if (error) {
    console.error("Error fetching system metrics:", error);
    toast.error("Failed to load system metrics");
  }

  const getHealthColor = (health: string) => {
    switch (health) {
      case 'healthy':
        return 'bg-green-100 text-green-800';
      case 'degraded':
        return 'bg-yellow-100 text-yellow-800';
      case 'critical':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Activity className="h-5 w-5" />
          System Status
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {isLoading ? (
          <div className="flex items-center justify-center h-[200px]">
            <Clock className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : metrics ? (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Processing Capacity</span>
                  <span>{metrics.processingCapacity}%</span>
                </div>
                <Progress value={metrics.processingCapacity} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Success Rate</span>
                  <span>{metrics.successRate}%</span>
                </div>
                <Progress value={metrics.successRate} className="h-2" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Database className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Queue Length:</span>
                <Badge variant="secondary">{metrics.queueLength}</Badge>
              </div>
              
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Errors:</span>
                <Badge variant="secondary">{metrics.errorCount}</Badge>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">System Health</span>
                <Badge className={getHealthColor(metrics.systemHealth)}>
                  {metrics.systemHealth}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Response Time:</span>
                  <Badge variant="outline" className="ml-2">
                    {metrics.performance.responseTime}ms
                  </Badge>
                </div>
                <div>
                  <span className="text-muted-foreground">Throughput:</span>
                  <Badge variant="outline" className="ml-2">
                    {metrics.performance.throughput}/min
                  </Badge>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </CardContent>
    </Card>
  );
};