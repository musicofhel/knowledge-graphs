import { Button } from "@/components/ui/button";
import { LayoutGrid, List } from "lucide-react";
import { useState } from "react";

export const ViewToggle = () => {
  const [isGrid, setIsGrid] = useState(true);

  return (
    <div className="flex gap-1 border rounded-md">
      <Button
        variant={isGrid ? "secondary" : "ghost"}
        size="icon"
        onClick={() => setIsGrid(true)}
      >
        <LayoutGrid className="h-4 w-4" />
      </Button>
      <Button
        variant={!isGrid ? "secondary" : "ghost"}
        size="icon"
        onClick={() => setIsGrid(false)}
      >
        <List className="h-4 w-4" />
      </Button>
    </div>
  );
};