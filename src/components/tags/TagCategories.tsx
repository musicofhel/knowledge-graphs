import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight } from "lucide-react";

interface TagCategory {
  name: string;
  tags: string[];
  color?: string;
}

interface TagCategoriesProps {
  categories: TagCategory[];
  onSelectTag: (tag: string) => void;
}

export const TagCategories = ({ categories, onSelectTag }: TagCategoriesProps) => {
  const getCategoryColor = (color?: string) => {
    switch (color) {
      case 'red':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'blue':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'green':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="font-medium">Tag Categories</h3>
      <ScrollArea className="h-[300px]">
        {categories.map((category) => (
          <div key={category.name} className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <ChevronRight className="h-4 w-4" />
              <span className="font-medium">{category.name}</span>
            </div>
            <div className="flex flex-wrap gap-2 pl-6">
              {category.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className={`cursor-pointer ${getCategoryColor(category.color)}`}
                  onClick={() => onSelectTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};