import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Move } from "lucide-react";

interface MovePreviewProps {
  selectedFile: string | null;
}

export const MovePreview = ({ selectedFile }: MovePreviewProps) => {
  return (
    <Card className="border border-dashed">
      <CardHeader className="py-3">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <Move className="h-4 w-4" />
          Move Preview
        </CardTitle>
      </CardHeader>
      <CardContent>
        {selectedFile ? (
          <div className="space-y-2">
            <div className="text-sm">
              Moving: <span className="font-medium">{selectedFile}</span>
            </div>
            <Progress value={66} className="h-1" />
            <div className="text-xs text-muted-foreground">
              Target: /documents/archived/2024/
            </div>
          </div>
        ) : (
          <div className="text-sm text-muted-foreground">
            Select a file to preview move operation
          </div>
        )}
      </CardContent>
    </Card>
  );
};