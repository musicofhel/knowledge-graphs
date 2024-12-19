import { Button } from "@/components/ui/button";
import { Edit, FileText, Share, Trash } from "lucide-react";
import { toast } from "sonner";

export const CardActions = () => {
  const handleEditTags = () => {
    toast.success("Edit tags mode enabled");
  };

  const handleChangeTemplate = () => {
    toast.success("Template selection opened");
  };

  const handleShare = () => {
    toast.success("Share link copied to clipboard");
  };

  const handleDelete = () => {
    toast.error("Content deleted");
  };

  return (
    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        onClick={handleEditTags}
      >
        <Edit className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        onClick={handleChangeTemplate}
      >
        <FileText className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        onClick={handleShare}
      >
        <Share className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 hover:text-destructive"
        onClick={handleDelete}
      >
        <Trash className="h-4 w-4" />
      </Button>
    </div>
  );
};