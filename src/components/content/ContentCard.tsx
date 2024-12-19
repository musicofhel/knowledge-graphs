import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CalendarDays, Link as LinkIcon } from "lucide-react";

interface ContentCardProps {
  title: string;
  url?: string;
  tags: string[];
  strength: number;
  template: string;
  updatedAt: string;
  imageUrl?: string;
}

export const ContentCard = ({
  title,
  url,
  tags,
  strength,
  template,
  updatedAt,
  imageUrl,
}: ContentCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge variant="outline">{template}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {imageUrl && (
          <div className="aspect-video rounded-md overflow-hidden bg-muted">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            <LinkIcon className="h-4 w-4" />
            {url}
          </a>
        )}
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Connection Strength</span>
            <span>{strength}%</span>
          </div>
          <Progress value={strength} />
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4" />
          <span>Updated {updatedAt}</span>
        </div>
      </CardContent>
    </Card>
  );
};