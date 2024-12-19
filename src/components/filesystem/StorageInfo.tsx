import { Progress } from "@/components/ui/progress";
import { HardDrive } from "lucide-react";

export const StorageInfo = () => {
  const usedStorage = 75; // GB
  const totalStorage = 100; // GB
  const usagePercentage = (usedStorage / totalStorage) * 100;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <HardDrive className="h-4 w-4" />
          <span>Storage Usage</span>
        </div>
        <span className="text-muted-foreground">
          {usedStorage}GB / {totalStorage}GB
        </span>
      </div>
      <Progress value={usagePercentage} />
    </div>
  );
};