import { ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PathNavigatorProps {
  path: string[];
  onNavigate: (index: number) => void;
}

export const PathNavigator = ({ path, onNavigate }: PathNavigatorProps) => {
  return (
    <div className="flex items-center gap-1 text-sm text-muted-foreground overflow-x-auto">
      <Button
        variant="ghost"
        size="sm"
        className="h-8 px-2"
        onClick={() => onNavigate(0)}
      >
        <Home className="h-4 w-4" />
      </Button>
      {path.map((segment, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight className="h-4 w-4 mx-1" />
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-2"
            onClick={() => onNavigate(index)}
          >
            {segment}
          </Button>
        </div>
      ))}
    </div>
  );
};