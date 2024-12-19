import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Image, Book, GraduationCap, Plus } from "lucide-react";
import { toast } from "sonner";

const DEFAULT_TEMPLATES = [
  {
    id: "article",
    name: "Article",
    description: "For blog posts, articles, and written content",
    icon: FileText,
    fields: ["title", "content", "author", "publishDate"],
  },
  {
    id: "image",
    name: "Image",
    description: "For images, photos, and visual content",
    icon: Image,
    fields: ["title", "imageUrl", "caption", "altText"],
  },
  {
    id: "tutorial",
    name: "Tutorial",
    description: "For step-by-step guides and tutorials",
    icon: Book,
    fields: ["title", "steps", "difficulty", "prerequisites"],
  },
  {
    id: "research",
    name: "Research",
    description: "For academic papers and research notes",
    icon: GraduationCap,
    fields: ["title", "abstract", "methodology", "findings"],
  },
];

export const DefaultTemplates = () => {
  const handleUseTemplate = (templateId: string) => {
    toast.success(`Template "${templateId}" selected`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {DEFAULT_TEMPLATES.map((template) => (
        <Card key={template.id} className="group">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <template.icon className="h-5 w-5 text-muted-foreground" />
                <CardTitle className="text-lg">{template.name}</CardTitle>
              </div>
              <Button
                size="sm"
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => handleUseTemplate(template.id)}
              >
                <Plus className="h-4 w-4 mr-1" />
                Use
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              {template.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {template.fields.map((field) => (
                <Badge key={field} variant="secondary">
                  {field}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};