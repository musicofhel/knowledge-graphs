import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { 
  Link, 
  FileCheck, 
  GitFork, 
  Upload, 
  History,
  ArrowRight
} from "lucide-react";

interface OriginData {
  source: string;
  context: string;
  referenceChain: string[];
  importMethod: string;
  creationDate: string;
  verificationStatus: "verified" | "pending" | "unverified";
  entryPoint: string;
}

const mockOriginData: OriginData = {
  source: "External Repository",
  context: "Research Documentation",
  referenceChain: [
    "Original Paper",
    "Research Notes",
    "Knowledge Base",
    "Current System"
  ],
  importMethod: "Git Import",
  creationDate: "2024-03-15",
  verificationStatus: "verified",
  entryPoint: "/api/content/import"
};

export const OriginTracker = () => {
  const getVerificationColor = (status: string) => {
    switch (status) {
      case "verified":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      default:
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <History className="h-5 w-5" />
          Origin Tracking
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Source Verification */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Source</span>
            <Badge 
              variant="secondary"
              className={getVerificationColor(mockOriginData.verificationStatus)}
            >
              {mockOriginData.verificationStatus}
            </Badge>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FileCheck className="h-4 w-4" />
            {mockOriginData.source}
          </div>
        </div>

        {/* Original Context */}
        <div className="space-y-2">
          <span className="text-sm font-medium">Original Context</span>
          <div className="text-sm text-muted-foreground">
            {mockOriginData.context}
          </div>
        </div>

        {/* Reference Chain */}
        <div className="space-y-2">
          <span className="text-sm font-medium">Reference Chain</span>
          <ScrollArea className="h-24">
            <div className="space-y-2">
              {mockOriginData.referenceChain.map((ref, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2"
                >
                  <Link className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{ref}</span>
                  {index < mockOriginData.referenceChain.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Import Method */}
        <div className="space-y-2">
          <span className="text-sm font-medium">Import Method</span>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <GitFork className="h-4 w-4" />
            {mockOriginData.importMethod}
          </div>
        </div>

        {/* Creation Pathway */}
        <div className="space-y-2">
          <span className="text-sm font-medium">Creation Pathway</span>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Upload className="h-4 w-4" />
            Created on {new Date(mockOriginData.creationDate).toLocaleDateString()}
          </div>
        </div>

        {/* Entry Point */}
        <div className="space-y-2">
          <span className="text-sm font-medium">Entry Point</span>
          <code className="block p-2 bg-muted rounded-md text-sm">
            {mockOriginData.entryPoint}
          </code>
        </div>
      </CardContent>
    </Card>
  );
};