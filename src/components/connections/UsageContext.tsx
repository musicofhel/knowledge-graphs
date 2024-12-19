import { Badge } from "@/components/ui/badge";
import { Tooltip } from "@/components/ui/tooltip";
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
      <Tooltip content={`Accessed via ${device}`}>
        <Badge variant="outline" className="flex items-center gap-1">
          {getDeviceIcon()}
          <span className="capitalize">{device}</span>
        </Badge>
      </Tooltip>

      <Tooltip content="Time context">
        <Badge variant="outline" className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          {timeContext}
        </Badge>
      </Tooltip>

      {location && (
        <Tooltip content="Access location">
          <Badge variant="outline" className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {location}
          </Badge>
        </Tooltip>
      )}

      {purpose && (
        <Tooltip content="Session purpose">
          <Badge variant="outline" className="flex items-center gap-1">
            <Tags className="h-4 w-4" />
            {purpose}
          </Badge>
        </Tooltip>
      )}

      {project && (
        <Tooltip content="Associated project">
          <Badge variant="outline" className="flex items-center gap-1">
            <Briefcase className="h-4 w-4" />
            {project}
          </Badge>
        </Tooltip>
      )}

      {workflow && (
        <Tooltip content="Workflow context">
          <Badge variant="outline" className="flex items-center gap-1">
            <GitBranch className="h-4 w-4" />
            {workflow}
          </Badge>
        </Tooltip>
      )}
    </div>
  );
};