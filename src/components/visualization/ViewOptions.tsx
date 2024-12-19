import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Grid, List, Network, ArrowDown, Group } from "lucide-react";
import { toast } from "sonner";

interface ViewOptionsProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export const ViewOptions = ({ currentView, onViewChange }: ViewOptionsProps) => {
  const handleViewChange = (view: string) => {
    onViewChange(view);
    toast.success(`Switched to ${view} view`);
  };

  return (
    <Tabs value={currentView} onValueChange={handleViewChange} className="w-full">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="grid" className="flex items-center gap-2">
          <Grid className="h-4 w-4" />
          Grid
        </TabsTrigger>
        <TabsTrigger value="list" className="flex items-center gap-2">
          <List className="h-4 w-4" />
          List
        </TabsTrigger>
        <TabsTrigger value="clusters" className="flex items-center gap-2">
          <Group className="h-4 w-4" />
          Clusters
        </TabsTrigger>
        <TabsTrigger value="relationships" className="flex items-center gap-2">
          <Network className="h-4 w-4" />
          Relations
        </TabsTrigger>
        <TabsTrigger value="timeline" className="flex items-center gap-2">
          <ArrowDown className="h-4 w-4" />
          Timeline
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};