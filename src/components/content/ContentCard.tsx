import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  CalendarDays, 
  Link as LinkIcon,
  Edit,
  FileText,
  Share,
  Trash,
  Network,
  Clock
} from "lucide-react";
import { toast } from "sonner";

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
}: ContentCardProps) => {
  const getTemplateColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'article':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'tutorial':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'research':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const handleEditTags = () => {
    toast.success("Edit tags mode enabled");
  };

  const handleChangeTemplate = () => {
    toast.success("Template selection opened");
  };

  const handleShare = () => {
    toast.success("Share link copied to clipboard");
  };

  const handleDelete = () => {
    toast.error("Content deleted");
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-200">
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge 
            variant="outline" 
            className={getTemplateColor(template)}
          >
            {template}
          </Badge>
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
        
        {/* Metadata Preview */}
        {metadata && (
          <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {metadata.author && (
              <div>Author: {metadata.author}</div>
            )}
            {metadata.publishDate && (
              <div>Published: {metadata.publishDate}</div>
            )}
            {metadata.readTime && (
              <div>Read time: {metadata.readTime}</div>
            )}
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

        {/* Connection Strength */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Connection Strength</span>
            <span>{strength}%</span>
          </div>
          <Progress value={strength} className="h-2" />
        </div>

        {/* Related Content Count */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Network className="h-4 w-4" />
          <span>{relatedCount} related items</span>
        </div>

        {/* Last Accessed */}
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
        
        {/* Quick Action Buttons */}
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={handleEditTags}
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={handleChangeTemplate}
          >
            <FileText className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={handleShare}
          >
            <Share className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 hover:text-destructive"
            onClick={handleDelete}
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};