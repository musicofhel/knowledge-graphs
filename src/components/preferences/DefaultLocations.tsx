import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, FolderOpen } from "lucide-react";
import { toast } from "sonner";

export const DefaultLocations = () => {
  const handleSave = () => {
    toast.success("Default locations updated");
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">Default Locations</h3>
        <Button variant="outline" size="sm" onClick={handleSave}>Save</Button>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Documents</Label>
          <div className="flex gap-2">
            <Input defaultValue="/documents" />
            <Button variant="ghost" size="icon">
              <FolderOpen className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="space-y-2">
          <Label>Media</Label>
          <div className="flex gap-2">
            <Input defaultValue="/media" />
            <Button variant="ghost" size="icon">
              <FolderOpen className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Add Location
        </Button>
      </div>
    </div>
  );
};