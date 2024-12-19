import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TEMPLATE_CATEGORIES = [
  { id: "content", label: "Content", count: 4 },
  { id: "research", label: "Research", count: 2 },
  { id: "media", label: "Media", count: 3 },
  { id: "notes", label: "Notes", count: 5 },
];

export const TemplateCategories = () => {
  return (
    <ScrollArea className="w-full">
      <div className="flex gap-2 pb-4">
        {TEMPLATE_CATEGORIES.map((category) => (
          <Button
            key={category.id}
            variant="outline"
            className={cn(
              "flex items-center gap-2 whitespace-nowrap",
              "hover:bg-secondary/80"
            )}
          >
            {category.label}
            <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">
              {category.count}
            </span>
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
};