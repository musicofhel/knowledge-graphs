import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  FileText, 
  FolderOpen, 
  RefreshCw, 
  X, 
  AlertCircle,
  CheckCircle2,
  Clock,
  RotateCcw 
} from "lucide-react";
import { toast } from "sonner";

interface FileStatus {
  id: string;
  name: string;
  status: 'queued' | 'processing' | 'success' | 'error';
  progress: number;
  errorMessage?: string;
}

export const IntelligentFilingZone = () => {
  const [files, setFiles] = useState<FileStatus[]>([]);
  const [processingStatus, setProcessingStatus] = useState<number>(0);
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
      // Update status to processing
      setFiles(prev => prev.map(f => 
        f.id === file.id ? { ...f, status: 'processing' as const } : f
      ));

      try {
        // Simulate processing with progress updates
        await simulateFileProcessing(file.id);
        
        // Update status to success
        setFiles(prev => prev.map(f => 
          f.id === file.id ? { ...f, status: 'success' as const, progress: 100 } : f
        ));
        toast.success(`Successfully processed ${file.name}`);
      } catch (error) {
        // Update status to error
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
          // Simulate random success/failure
          if (Math.random() > 0.2) {
            resolve();
          } else {
            reject(new Error("Processing failed"));
          }
        }
      }, 500);
    });
  };

  const retryFile = (fileId: string) => {
    const fileToRetry = files.find(f => f.id === fileId);
    if (fileToRetry) {
      processFiles([{ ...fileToRetry, status: 'queued', progress: 0 }]);
    }
  };

  const removeFile = (fileId: string) => {
    setFiles(prev => prev.filter(f => f.id !== fileId));
    toast.info("File removed from queue");
  };

  const getStatusIcon = (status: FileStatus['status']) => {
    switch (status) {
      case 'queued':
        return <Clock className="h-4 w-4 text-muted-foreground" />;
      case 'processing':
        return <RefreshCw className="h-4 w-4 text-blue-500 animate-spin" />;
      case 'success':
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
    }
  };

  const getStatusBadge = (status: FileStatus['status']) => {
    const variants: Record<FileStatus['status'], string> = {
      queued: 'bg-gray-100 text-gray-800',
      processing: 'bg-blue-100 text-blue-800',
      success: 'bg-green-100 text-green-800',
      error: 'bg-red-100 text-red-800'
    };
    return variants[status];
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

        {/* Processing Queue */}
        {files.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Processing Queue</h3>
              <Badge variant="secondary">
                {files.filter(f => f.status === 'queued' || f.status === 'processing').length} pending
              </Badge>
            </div>

            <ScrollArea className="h-[300px] w-full rounded-md border p-4">
              <div className="space-y-3">
                {files.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-md"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      {getStatusIcon(file.status)}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{file.name}</p>
                        <div className="mt-1">
                          <Progress value={file.progress} className="h-1" />
                        </div>
                        {file.errorMessage && (
                          <p className="text-xs text-red-500 mt-1">{file.errorMessage}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 ml-4">
                      <Badge className={getStatusBadge(file.status)}>
                        {file.status}
                      </Badge>
                      
                      {file.status === 'error' && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => retryFile(file.id)}
                          className="h-8 w-8"
                        >
                          <RotateCcw className="h-4 w-4" />
                        </Button>
                      )}
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFile(file.id)}
                        className="h-8 w-8"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Suggested Location */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Target Location:</label>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <FolderOpen className="h-3 w-3" />
                  {suggestedLocation}
                </Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setSuggestedLocation("/documents/manual");
                    toast.info("Location updated");
                  }}
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
                onClick={() => {
                  setSuggestedLocation("/documents/important");
                  toast.info("Marked as important");
                }}
              >
                Mark Important
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSuggestedLocation("/documents/archive");
                  toast.info("Moved to archive");
                }}
              >
                Move to Archive
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSuggestedLocation("/documents/review");
                  toast.info("Marked for review");
                }}
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