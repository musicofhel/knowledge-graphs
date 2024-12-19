import { Eye } from "lucide-react";

interface ViewsCounterProps {
  views: number;
}

export const ViewsCounter = ({ views }: ViewsCounterProps) => {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Eye className="h-4 w-4" />
      <span>{views} views</span>
    </div>
  );
};