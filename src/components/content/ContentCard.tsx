import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  CalendarDays, 
  Link as LinkIcon, 
  Edit, 
  Trash, 
  Share, 
  Bookmark,
  Eye,
  BookmarkPlus,
  MoreHorizontal
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
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

  const handleBookmark = () => {
    toast.success("Content saved to bookmarks");
  };

  const handleShare = () => {
    toast.success("Share link copied to clipboard");
  };

  const handleDelete = () => {
    toast.error("Content deleted");
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge 
            variant="outline" 
            className={cn("transition-colors", getTemplateColor(template))}
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
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Connection Strength</span>
            <span>{strength}%</span>
          </div>
          <Progress value={strength} />
        </div>
        {readProgress > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Eye className="h-4 w-4" />
              <span>Read Progress</span>
              <span className="ml-auto">{readProgress}%</span>
            </div>
            <Progress value={readProgress} className="bg-secondary" />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4" />
          <span>Updated {updatedAt}</span>
        </div>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toast.success("Edit mode enabled")}>
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleShare}>
            <Share className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleBookmark}>
            <BookmarkPlus className="h-4 w-4" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleBookmark}>
                <Bookmark className="mr-2 h-4 w-4" />
                Save to Collection
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleShare}>
                <Share className="mr-2 h-4 w-4" />
                Share Link
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDelete} className="text-destructive">
                <Trash className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardFooter>
    </Card>
  );
};