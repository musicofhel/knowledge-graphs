import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FolderTree, FolderPlus, Home } from "lucide-react";
import { toast } from "sonner";
import { FolderTreeView } from "./FolderTreeView";
import { PathNavigator } from "./PathNavigator";
import { StorageInfo } from "./StorageInfo";

interface FileSystemNode {
  id: string;
  name: string;
  type: 'folder' | 'file';
  children?: FileSystemNode[];
}

const MOCK_FILESYSTEM: FileSystemNode = {
  id: 'root',
  name: 'Root',
  type: 'folder',
  children: [
    {
      id: 'documents',
      name: 'Documents',
      type: 'folder',
      children: [
        { id: 'work', name: 'Work', type: 'folder' },
        { id: 'personal', name: 'Personal', type: 'folder' },
      ],
    },
    {
      id: 'media',
      name: 'Media',
      type: 'folder',
      children: [
        { id: 'images', name: 'Images', type: 'folder' },
        { id: 'videos', name: 'Videos', type: 'folder' },
      ],
    },
  ],
};

export const FileSystemStructure = () => {
  const [currentPath, setCurrentPath] = useState<string[]>(['Root']);
  const [newFolderName, setNewFolderName] = useState("");

  const handleCreateFolder = () => {
    if (newFolderName.trim()) {
      toast.success(`Created folder: ${newFolderName}`);
      setNewFolderName("");
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FolderTree className="h-5 w-5" />
          File System Structure
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <PathNavigator
          path={currentPath}
          onNavigate={(index) => {
            setCurrentPath(currentPath.slice(0, index + 1));
          }}
        />

        <div className="flex items-center gap-2">
          <Input
            placeholder="New folder name"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
          />
          <Button
            variant="outline"
            size="icon"
            onClick={handleCreateFolder}
          >
            <FolderPlus className="h-4 w-4" />
          </Button>
        </div>

        <ScrollArea className="h-[400px] border rounded-md p-4">
          <FolderTreeView
            filesystem={MOCK_FILESYSTEM}
            onNavigate={(path) => setCurrentPath(path)}
          />
        </ScrollArea>

        <StorageInfo />
      </CardContent>
    </Card>
  );
};