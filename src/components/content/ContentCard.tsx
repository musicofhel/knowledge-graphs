import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CalendarDays, Link as LinkIcon, Network, Clock } from "lucide-react";
import { CardHeader } from "./CardHeader";
import { CardActions } from "./CardActions";
import { TimeDecayIndicator } from "./pkm/TimeDecayIndicator";
import { ViewsCounter } from "./pkm/ViewsCounter";

interface ContentCardProps {
  title: string;
  url?: string;
  tags: string[];
  strength: number;
  template: string;
  updatedAt: string;
  imageUrl?: string;
  readProgress?: number;
  lastAccessed?: string;
  relatedCount?: number;
  metadata?: {
    author?: string;
    publishDate?: string;
    readTime?: string;
  };
  createdAt: string;
  views: number;
}

export const ContentCard = ({
  title,
  url,
  tags,
  strength,
  template,
  updatedAt,
  imageUrl,
  readProgress = 0,
  lastAccessed,
  relatedCount = 0,
  metadata,
  createdAt,
  views,
}: ContentCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-200">
      <CardHeader title={title} template={template} />
      
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
        
        {metadata && (
          <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {metadata.author && <div>Author: {metadata.author}</div>}
            {metadata.publishDate && <div>Published: {metadata.publishDate}</div>}
            {metadata.readTime && <div>Read time: {metadata.readTime}</div>}
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
            <Badge 
              key={tag} 
              variant="secondary"
              className="hover:bg-secondary/80 cursor-pointer transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <TimeDecayIndicator createdAt={createdAt} />
        <ViewsCounter views={views} />

        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Connection Strength</span>
            <span>{strength}%</span>
          </div>
          <Progress value={strength} className="h-2" />
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Network className="h-4 w-4" />
          <span>{relatedCount} related items</span>
        </div>

        {lastAccessed && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Last accessed: {lastAccessed}</span>
          </div>
        )}

        {readProgress > 0 && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Read Progress</span>
              <span>{readProgress}%</span>
            </div>
            <Progress value={readProgress} className="h-2" />
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-between items-center pt-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4" />
          <span>Updated {updatedAt}</span>
        </div>
        <CardActions />
      </CardFooter>
    </Card>
  );
};