import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { toast } from "sonner";
import { FileProcessingQueue } from "./processing/FileProcessingQueue";
import { LocationSuggestionPanel } from "./location/LocationSuggestionPanel";

interface FileStatus {
  id: string;
  name: string;
  status: 'queued' | 'processing' | 'success' | 'error';
  progress: number;
  errorMessage?: string;
}

export const IntelligentFilingZone = () => {
  const [files, setFiles] = useState<FileStatus[]>([]);
  const [suggestedLocation, setSuggestedLocation] = useState<string>("/documents/unprocessed");

  const onDrop = async (acceptedFiles: File[]) => {
    console.log("Files dropped:", acceptedFiles);
    const newFiles = acceptedFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      status: 'queued' as const,
      progress: 0
    }));
    setFiles(prev => [...prev, ...newFiles]);
    processFiles(newFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'image/*': ['.png', '.jpg', '.jpeg'],
      'text/*': ['.txt', '.md'],
    },
  });

  const processFiles = async (filesToProcess: FileStatus[]) => {
    for (const file of filesToProcess) {
      setFiles(prev => prev.map(f => 
        f.id === file.id ? { ...f, status: 'processing' as const } : f
      ));

      try {
        await simulateFileProcessing(file.id);
        setFiles(prev => prev.map(f => 
          f.id === file.id ? { ...f, status: 'success' as const, progress: 100 } : f
        ));
        toast.success(`Successfully processed ${file.name}`);
      } catch (error) {
        setFiles(prev => prev.map(f => 
          f.id === file.id ? { 
            ...f, 
            status: 'error' as const, 
            errorMessage: error instanceof Error ? error.message : 'Unknown error'
          } : f
        ));
        toast.error(`Failed to process ${file.name}`);
      }
    }
  };

  const simulateFileProcessing = async (fileId: string) => {
    return new Promise<void>((resolve, reject) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setFiles(prev => prev.map(f => 
          f.id === fileId ? { ...f, progress } : f
        ));
        
        if (progress >= 100) {
          clearInterval(interval);
          if (Math.random() > 0.2) {
            resolve();
          } else {
            reject(new Error("Processing failed"));
          }
        }
      }, 500);
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Intelligent Filing</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
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

        {files.length > 0 && (
          <div className="space-y-4">
            <FileProcessingQueue
              files={files}
              onRetry={(fileId) => {
                const fileToRetry = files.find(f => f.id === fileId);
                if (fileToRetry) {
                  processFiles([{ ...fileToRetry, status: 'queued', progress: 0 }]);
                }
              }}
              onRemove={(fileId) => {
                setFiles(prev => prev.filter(f => f.id !== fileId));
                toast.info("File removed from queue");
              }}
            />

            <LocationSuggestionPanel
              currentLocation={suggestedLocation}
              onLocationChange={setSuggestedLocation}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};