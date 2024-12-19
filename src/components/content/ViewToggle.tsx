import { Button } from "@/components/ui/button";
import { LayoutGrid, List } from "lucide-react";
import { useState } from "react";

interface ViewToggleProps {
  onViewChange: (view: "grid" | "list") => void;
}

export const ViewToggle = ({ onViewChange }: ViewToggleProps) => {
  const [isGrid, setIsGrid] = useState(true);

  const handleViewChange = (isGridView: boolean) => {
    setIsGrid(isGridView);
    onViewChange(isGridView ? "grid" : "list");
  };

  return (
    <div className="flex gap-1 border rounded-md">
      <Button
        variant={isGrid ? "secondary" : "ghost"}
        size="icon"
        onClick={() => handleViewChange(true)}
      >
        <LayoutGrid className="h-4 w-4" />
      </Button>
      <Button
        variant={!isGrid ? "secondary" : "ghost"}
        size="icon"
        onClick={() => handleViewChange(false)}
      >
        <List className="h-4 w-4" />
      </Button>
    </div>
  );
};