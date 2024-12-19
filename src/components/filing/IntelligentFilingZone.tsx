import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, FolderOpen, RefreshCw, X } from "lucide-react";
import { toast } from "sonner";

export const IntelligentFilingZone = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [processingStatus, setProcessingStatus] = useState<number>(0);
  const [suggestedLocation, setSuggestedLocation] = useState<string>("/documents/unprocessed");

  const onDrop = async (acceptedFiles: File[]) => {
    console.log("Files dropped:", acceptedFiles);
    setFiles(acceptedFiles);
    simulateProcessing();
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'image/*': ['.png', '.jpg', '.jpeg'],
      'text/*': ['.txt', '.md'],
    },
  });

  const simulateProcessing = () => {
    setProcessingStatus(0);
    const interval = setInterval(() => {
      setProcessingStatus((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          toast.success("Files processed successfully!");
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    toast.info("File removed from queue");
  };

  const overrideLocation = (newLocation: string) => {
    setSuggestedLocation(newLocation);
    toast.info(`Location updated to: ${newLocation}`);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Intelligent Filing</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Drop Zone */}
        <div
          {...getRootProps()}
          className={`
            border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
            ${isDragActive ? "border-primary bg-primary/5" : "border-muted"}
          `}
        >
          <input {...getInputProps()} />
          <FileText className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
          {isDragActive ? (
            <p className="text-primary">Drop files here...</p>
          ) : (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Drop files here or click to select
              </p>
              <p className="text-xs text-muted-foreground">
                Supports: PDF, Images, Text files
              </p>
            </div>
          )}
        </div>

        {/* Processing Status */}
        {files.length > 0 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Processing Status</span>
                <span>{processingStatus}%</span>
              </div>
              <Progress value={processingStatus} className="h-2" />
            </div>

            {/* File Preview */}
            <ScrollArea className="h-[200px] w-full rounded-md border p-4">
              <div className="space-y-2">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 bg-muted rounded-md"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span className="text-sm truncate max-w-[200px]">
                        {file.name}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFile(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Suggested Location */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Suggested Location:</label>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <FolderOpen className="h-3 w-3" />
                  {suggestedLocation}
                </Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => overrideLocation("/documents/manual")}
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Override Options */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => overrideLocation("/documents/important")}
              >
                Mark Important
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => overrideLocation("/documents/archive")}
              >
                Move to Archive
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => overrideLocation("/documents/review")}
              >
                Need Review
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};