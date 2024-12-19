import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FolderOpen } from "lucide-react";
import { toast } from "sonner";

export const PathConfig = () => {
  const handleSave = () => {
    toast.success("Path configuration saved");
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Default Storage Location</Label>
        <div className="flex gap-2">
          <Input defaultValue="/storage/default" />
          <Button variant="outline" size="icon">
            <FolderOpen className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="space-y-2">
        <Label>Backup Directory</Label>
        <div className="flex gap-2">
          <Input defaultValue="/storage/backups" />
          <Button variant="outline" size="icon">
            <FolderOpen className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Button onClick={handleSave}>Save Path Configuration</Button>
    </div>
  );
};