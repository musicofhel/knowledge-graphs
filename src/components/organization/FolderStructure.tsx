import { ChevronRight, Folder, FolderOpen } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface FolderItem {
  id: string;
  name: string;
  children?: FolderItem[];
}

const MOCK_FOLDERS: FolderItem[] = [
  {
    id: "1",
    name: "Articles",
    children: [
      { id: "1-1", name: "Technical" },
      { id: "1-2", name: "Research" },
    ],
  },
  {
    id: "2",
    name: "Tutorials",
    children: [
      { id: "2-1", name: "Beginner" },
      { id: "2-2", name: "Advanced" },
    ],
  },
  {
    id: "3",
    name: "Resources",
    children: [
      { id: "3-1", name: "Tools" },
      { id: "3-2", name: "Libraries" },
    ],
  },
];

interface FolderNodeProps {
  folder: FolderItem;
  level: number;
  onSelect: (folderId: string) => void;
}

const FolderNode = ({ folder, level, onSelect }: FolderNodeProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-1">
      <Button
        variant="ghost"
        className="w-full justify-start"
        style={{ paddingLeft: `${level * 12}px` }}
        onClick={() => {
          setIsOpen(!isOpen);
          onSelect(folder.id);
        }}
      >
        <ChevronRight
          className={`h-4 w-4 shrink-0 transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
        />
        {isOpen ? (
          <FolderOpen className="h-4 w-4 shrink-0 ml-1" />
        ) : (
          <Folder className="h-4 w-4 shrink-0 ml-1" />
        )}
        <span className="ml-2">{folder.name}</span>
      </Button>
      {isOpen && folder.children && (
        <div className="space-y-1">
          {folder.children.map((child) => (
            <FolderNode
              key={child.id}
              folder={child}
              level={level + 1}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const FolderStructure = () => {
  const handleFolderSelect = (folderId: string) => {
    console.log("Selected folder:", folderId);
  };

  return (
    <ScrollArea className="h-[300px] w-full rounded-md border p-4">
      <div className="space-y-2">
        {MOCK_FOLDERS.map((folder) => (
          <FolderNode
            key={folder.id}
            folder={folder}
            level={0}
            onSelect={handleFolderSelect}
          />
        ))}
      </div>
    </ScrollArea>
  );
};