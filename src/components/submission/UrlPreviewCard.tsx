import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";

interface UrlPreviewCardProps {
  url: string;
}

export const UrlPreviewCard = ({ url }: UrlPreviewCardProps) => {
  const [loading, setLoading] = useState(true);

  // Simulate metadata loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [url]);

  if (loading) {
    return (
      <Card>
        <CardContent className="p-4 space-y-3">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-20 w-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-4 space-y-3">
        <h3 className="font-medium">Preview Title</h3>
        <p className="text-sm text-muted-foreground">
          This is a preview description of the URL content...
        </p>
        <div className="aspect-video bg-muted rounded-md" />
      </CardContent>
    </Card>
  );
};