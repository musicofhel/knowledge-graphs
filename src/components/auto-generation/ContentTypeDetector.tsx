import { Badge } from "@/components/ui/badge";
import { FileText, Link as LinkIcon } from "lucide-react";
import { useState, useEffect } from "react";

interface ContentTypeDetectorProps {
  url?: string;
  content?: string;
}

export const ContentTypeDetector = ({ url, content }: ContentTypeDetectorProps) => {
  const [contentType, setContentType] = useState<string>("Unknown");

  useEffect(() => {
    // Simple content type detection logic
    if (url?.includes("youtube.com")) {
      setContentType("Video");
    } else if (url?.endsWith(".pdf")) {
      setContentType("PDF Document");
    } else if (content?.includes("<article>")) {
      setContentType("Article");
    } else if (url) {
      setContentType("Web Page");
    }
  }, [url, content]);

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Content Type:</span>
      <Badge variant="secondary" className="flex items-center gap-1">
        {contentType === "Web Page" ? <LinkIcon className="h-3 w-3" /> : <FileText className="h-3 w-3" />}
        {contentType}
      </Badge>
    </div>
  );
};