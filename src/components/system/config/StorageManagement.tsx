import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const StorageManagement = () => {
  const handleCleanup = () => {
    toast.success("Storage cleanup initiated");
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <Label>Storage Usage</Label>
          <span className="text-muted-foreground">75.5 GB / 100 GB</span>
        </div>
        <Progress value={75.5} />
      </div>
      <div className="space-y-2">
        <Label>Storage Distribution</Label>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>Documents: 45%</div>
          <div>Media: 30%</div>
          <div>Backups: 15%</div>
          <div>Other: 10%</div>
        </div>
      </div>
      <Button onClick={handleCleanup}>Cleanup Storage</Button>
    </div>
  );
};