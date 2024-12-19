import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, User, FileType, Scale, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

interface MetadataExtractorProps {
  url?: string;
  content?: string;
}

interface Metadata {
  timestamp: string;
  source: string;
  author: string;
  contentType: string;
  length: string;
  format: string;
}

export const MetadataExtractor = ({ url, content }: MetadataExtractorProps) => {
  const [metadata, setMetadata] = useState<Metadata>({
    timestamp: new Date().toISOString(),
    source: "Unknown Source",
    author: "Unknown Author",
    contentType: "Text",
    length: "0",
    format: "Plain Text",
  });

  useEffect(() => {
    if (url || content) {
      console.log("Extracting metadata from:", { url, content });
      extractMetadata();
    }
  }, [url, content]);

  const extractMetadata = () => {
    // Simple metadata extraction logic (would be replaced with more sophisticated logic)
    const newMetadata: Metadata = {
      timestamp: new Date().toISOString(),
      source: url ? new URL(url).hostname : "Direct Input",
      author: extractAuthor(),
      contentType: detectContentType(),
      length: calculateLength(),
      format: detectFormat(),
    };
    
    console.log("Extracted metadata:", newMetadata);
    setMetadata(newMetadata);
  };

  const extractAuthor = () => {
    if (!content) return "Unknown Author";
    // Simple author detection (would be enhanced with better logic)
    const authorPatterns = [
      /by\s+([A-Za-z\s]+)/i,
      /author:\s*([A-Za-z\s]+)/i,
    ];

    for (const pattern of authorPatterns) {
      const match = content.match(pattern);
      if (match) return match[1].trim();
    }
    return "Unknown Author";
  };

  const detectContentType = () => {
    if (!content && !url) return "Unknown";
    if (url?.includes("youtube.com")) return "Video";
    if (url?.endsWith(".pdf")) return "PDF Document";
    if (content?.includes("<article>")) return "Article";
    return "Web Page";
  };

  const calculateLength = () => {
    if (!content) return "0 characters";
    const wordCount = content.split(/\s+/).length;
    const charCount = content.length;
    return `${wordCount} words (${charCount} characters)`;
  };

  const detectFormat = () => {
    if (!content && !url) return "Unknown";
    if (url?.endsWith(".pdf")) return "PDF";
    if (content?.includes("<!DOCTYPE html>")) return "HTML";
    if (content?.includes("<article>")) return "HTML Article";
    return "Plain Text";
  };

  return (
    <div className="space-y-4">
      <span className="text-sm text-muted-foreground">Extracted Metadata:</span>
      <ScrollArea className="h-[200px]">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Created: {new Date(metadata.timestamp).toLocaleString()}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Author: {metadata.author}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <FileType className="h-4 w-4 text-muted-foreground" />
            <div className="flex gap-2">
              <Badge variant="outline">{metadata.contentType}</Badge>
              <Badge variant="outline">{metadata.format}</Badge>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Scale className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Size: {metadata.length}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Source: {metadata.source}</span>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};