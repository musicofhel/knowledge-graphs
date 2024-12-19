import { useState, useEffect } from "react";

interface MetaDescriptionProps {
  content?: string;
}

export const MetaDescription = ({ content }: MetaDescriptionProps) => {
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    if (content) {
      // Simple meta description generation
      const summary = content.slice(0, 160) + "...";
      setDescription(summary);
    }
  }, [content]);

  return (
    <div className="space-y-2">
      <span className="text-sm text-muted-foreground">Generated Description:</span>
      <p className="text-sm">{description || "No content available for description generation."}</p>
    </div>
  );
};