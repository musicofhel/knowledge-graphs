import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MovePreview } from "./MovePreview";
import { CopyPasteStatus } from "./CopyPasteStatus";
import { LinkCreator } from "./LinkCreator";
import { FileHistory } from "./FileHistory";
import { VersionControl } from "./VersionControl";
import { BackupStatus } from "./BackupStatus";
import { Files } from "lucide-react";

export const FileOperations = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Files className="h-5 w-5" />
          File Operations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-4">
            <MovePreview selectedFile={selectedFile} />
            <CopyPasteStatus />
            <LinkCreator />
            <FileHistory selectedFile={selectedFile} />
            <VersionControl />
            <BackupStatus />
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};