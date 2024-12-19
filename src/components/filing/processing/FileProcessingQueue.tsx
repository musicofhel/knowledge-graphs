import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  RefreshCw, 
  X, 
  AlertCircle,
  CheckCircle2,
  Clock,
  RotateCcw 
} from "lucide-react";

interface FileStatus {
  id: string;
  name: string;
  status: 'queued' | 'processing' | 'success' | 'error';
  progress: number;
  errorMessage?: string;
}

interface FileProcessingQueueProps {
  files: FileStatus[];
  onRetry: (fileId: string) => void;
  onRemove: (fileId: string) => void;
}

export const FileProcessingQueue = ({
  files,
  onRetry,
  onRemove,
}: FileProcessingQueueProps) => {
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
                    onClick={() => onRetry(file.id)}
                    className="h-8 w-8"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                )}
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onRemove(file.id)}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};