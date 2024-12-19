import { Badge } from "@/components/ui/badge";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from "@/components/ui/tooltip";
import {
  Laptop,
  Smartphone,
  Clock,
  MapPin,
  Briefcase,
  Tags,
  GitBranch,
} from "lucide-react";

interface UsageContextProps {
  device: "mobile" | "desktop" | "tablet";
  timeContext: string;
  location?: string;
  purpose?: string;
  project?: string;
  workflow?: string;
}

export const UsageContext = ({
  device,
  timeContext,
  location,
  purpose,
  project,
  workflow,
}: UsageContextProps) => {
  const getDeviceIcon = () => {
    switch (device) {
      case "mobile":
        return <Smartphone className="h-4 w-4" />;
      case "desktop":
        return <Laptop className="h-4 w-4" />;
      default:
        return <Laptop className="h-4 w-4" />;
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Badge variant="outline" className="flex items-center gap-1">
              {getDeviceIcon()}
              <span className="capitalize">{device}</span>
            </Badge>
          </TooltipTrigger>
          <TooltipContent>Accessed via {device}</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {timeContext}
            </Badge>
          </TooltipTrigger>
          <TooltipContent>Time context</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {location && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Badge variant="outline" className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {location}
              </Badge>
            </TooltipTrigger>
            <TooltipContent>Access location</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      {purpose && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Badge variant="outline" className="flex items-center gap-1">
                <Tags className="h-4 w-4" />
                {purpose}
              </Badge>
            </TooltipTrigger>
            <TooltipContent>Session purpose</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      {project && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Badge variant="outline" className="flex items-center gap-1">
                <Briefcase className="h-4 w-4" />
                {project}
              </Badge>
            </TooltipTrigger>
            <TooltipContent>Associated project</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      {workflow && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Badge variant="outline" className="flex items-center gap-1">
                <GitBranch className="h-4 w-4" />
                {workflow}
              </Badge>
            </TooltipTrigger>
            <TooltipContent>Workflow context</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
};