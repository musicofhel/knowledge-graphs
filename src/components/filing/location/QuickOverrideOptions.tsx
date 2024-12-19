import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface QuickOverrideOptionsProps {
  onSelect: (location: string) => void;
}

export const QuickOverrideOptions = ({ onSelect }: QuickOverrideOptionsProps) => {
  const handleOverride = (location: string, message: string) => {
    onSelect(location);
    toast.info(message);
  };

  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleOverride("/documents/important", "Marked as important")}
      >
        Mark Important
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleOverride("/documents/archive", "Moved to archive")}
      >
        Move to Archive
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleOverride("/documents/review", "Marked for review")}
      >
        Need Review
      </Button>
    </div>
  );
};