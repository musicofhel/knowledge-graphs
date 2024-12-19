import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Folder, FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileSystemNode {
  id: string;
  name: string;
  type: 'folder' | 'file';
  children?: FileSystemNode[];
}

interface FolderTreeViewProps {
  filesystem: FileSystemNode;
  onNavigate: (path: string[]) => void;
  level?: number;
  parentPath?: string[];
}

export const FolderTreeView = ({
  filesystem,
  onNavigate,
  level = 0,
  parentPath = [],
}: FolderTreeViewProps) => {
  const [expanded, setExpanded] = useState(level === 0);
  const currentPath = [...parentPath, filesystem.name];

  const handleToggle = () => {
    setExpanded(!expanded);
    onNavigate(currentPath);
  };

  return (
    <div className="space-y-1">
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start",
          level > 0 && "ml-4"
        )}
        onClick={handleToggle}
      >
        <ChevronRight
          className={cn(
            "h-4 w-4 shrink-0 transition-transform mr-1",
            expanded && "rotate-90"
          )}
        />
        {expanded ? (
          <FolderOpen className="h-4 w-4 shrink-0 mr-2" />
        ) : (
          <Folder className="h-4 w-4 shrink-0 mr-2" />
        )}
        <span className="truncate">{filesystem.name}</span>
      </Button>

      {expanded && filesystem.children && (
        <div className="pl-4 space-y-1">
          {filesystem.children.map((child) => (
            <FolderTreeView
              key={child.id}
              filesystem={child}
              onNavigate={onNavigate}
              level={level + 1}
              parentPath={currentPath}
            />
          ))}
        </div>
      )}
    </div>
  );
};