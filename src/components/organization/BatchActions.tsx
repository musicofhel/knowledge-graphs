import { Button } from "@/components/ui/button";
import { CheckSquare, Trash, FolderPlus, Share } from "lucide-react";

interface BatchActionsProps {
  isBatchMode: boolean;
  setIsBatchMode: (value: boolean) => void;
}

export const BatchActions = ({ isBatchMode, setIsBatchMode }: BatchActionsProps) => {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant={isBatchMode ? "secondary" : "outline"}
        size="sm"
        onClick={() => setIsBatchMode(!isBatchMode)}
      >
        <CheckSquare className="mr-2 h-4 w-4" />
        {isBatchMode ? "Exit Selection" : "Select Items"}
      </Button>
      
      {isBatchMode && (
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <FolderPlus className="mr-2 h-4 w-4" />
            Move to Folder
          </Button>
          <Button variant="outline" size="sm">
            <Share className="mr-2 h-4 w-4" />
            Share Selected
          </Button>
          <Button variant="outline" size="sm" className="text-destructive">
            <Trash className="mr-2 h-4 w-4" />
            Delete Selected
          </Button>
        </div>
      )}
    </div>
  );
};