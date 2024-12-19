import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FolderOpen, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { QuickOverrideOptions } from "./QuickOverrideOptions";
import { SimilarLocations } from "./SimilarLocations";
import { CategoryMatches } from "./CategoryMatches";
import { CustomRules } from "./CustomRules";

interface LocationSuggestionPanelProps {
  currentLocation: string;
  onLocationChange: (location: string) => void;
}

export const LocationSuggestionPanel = ({
  currentLocation,
  onLocationChange,
}: LocationSuggestionPanelProps) => {
  const handleLocationUpdate = () => {
    onLocationChange("/documents/manual");
    toast.info("Location updated");
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Target Location:</label>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="flex items-center gap-1">
            <FolderOpen className="h-3 w-3" />
            {currentLocation}
          </Badge>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleLocationUpdate}
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <SimilarLocations onSelect={onLocationChange} />
      <CategoryMatches onSelect={onLocationChange} />
      <CustomRules onSelect={onLocationChange} />
      <QuickOverrideOptions onSelect={onLocationChange} />
    </div>
  );
};