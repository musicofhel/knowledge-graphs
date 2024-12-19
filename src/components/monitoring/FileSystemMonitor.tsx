import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { 
  Eye, 
  RefreshCw, 
  Clock, 
  AlertTriangle,
  Bell,
  GitMerge
} from "lucide-react";

interface WatchFolder {
  path: string;
  status: 'active' | 'paused';
  lastSync: Date;
}

interface ConflictItem {
  path: string;
  type: 'modified' | 'deleted' | 'renamed';
  timestamp: Date;
}

export const FileSystemMonitor = () => {
  const [watchFolders, setWatchFolders] = useState<WatchFolder[]>([
    { path: '/documents', status: 'active', lastSync: new Date() },
    { path: '/media', status: 'active', lastSync: new Date() },
  ]);
  const [syncProgress, setSyncProgress] = useState(100);
  const [lastSyncTime, setLastSyncTime] = useState<Date>(new Date());
  const [conflicts, setConflicts] = useState<ConflictItem[]>([]);

  // Simulate file system monitoring
  useEffect(() => {
    console.log("Starting file system monitoring...");
    const interval = setInterval(() => {
      // Simulate sync progress changes
      setSyncProgress((prev) => {
        const newProgress = Math.min(100, prev + 10);
        if (newProgress === 100) {
          setLastSyncTime(new Date());
          console.log("Sync completed at:", new Date().toISOString());
        }
        return newProgress;
      });

      // Simulate random file changes
      if (Math.random() > 0.8) {
        const change = {
          path: '/documents/example.txt',
          type: 'modified' as const,
          timestamp: new Date(),
        };
        console.log("File change detected:", change);
        toast.info("File change detected", {
          description: `${change.path} was ${change.type}`,
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Eye className="h-5 w-5" />
          File System Monitor
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Watch Folders */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium flex items-center gap-2">
            <Eye className="h-4 w-4" />
            Active Watch Folders
          </h3>
          <div className="space-y-2">
            {watchFolders.map((folder) => (
              <div
                key={folder.path}
                className="flex items-center justify-between p-2 bg-secondary/50 rounded-md"
              >
                <span className="text-sm">{folder.path}</span>
                <Badge variant={folder.status === 'active' ? 'default' : 'secondary'}>
                  {folder.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Sync Status */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium flex items-center gap-2">
              <RefreshCw className="h-4 w-4" />
              Sync Status
            </h3>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Last: {lastSyncTime.toLocaleTimeString()}
            </Badge>
          </div>
          <Progress value={syncProgress} />
        </div>

        {/* Change Detection */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            Recent Changes
          </h3>
          <div className="text-sm text-muted-foreground">
            Monitoring active - {watchFolders.length} folders
          </div>
        </div>

        {/* Notifications */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Update Notifications
          </h3>
          <div className="text-sm text-muted-foreground">
            All notifications are enabled
          </div>
        </div>

        {/* Conflict Resolution */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium flex items-center gap-2">
            <GitMerge className="h-4 w-4" />
            Conflicts
          </h3>
          {conflicts.length > 0 ? (
            <div className="space-y-2">
              {conflicts.map((conflict, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 bg-destructive/10 text-destructive rounded-md"
                >
                  <span className="text-sm">{conflict.path}</span>
                  <Badge variant="outline" className="text-destructive">
                    {conflict.type}
                  </Badge>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-sm text-muted-foreground">
              No conflicts detected
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};