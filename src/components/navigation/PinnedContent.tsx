import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Pin } from "lucide-react";

const PINNED_ITEMS = [
  { id: 1, title: "Important Documentation", path: "/docs/1" },
  { id: 2, title: "Project Guidelines", path: "/docs/2" },
  { id: 3, title: "Team Resources", path: "/docs/3" },
];

export const PinnedContent = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Pin className="h-4 w-4" />
          <span className="sr-only">Pinned content</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Pinned Content</SheetTitle>
        </SheetHeader>
        <div className="mt-4 space-y-2">
          {PINNED_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.path}
              className="block p-2 hover:bg-accent rounded-md transition-colors"
            >
              {item.title}
            </a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};