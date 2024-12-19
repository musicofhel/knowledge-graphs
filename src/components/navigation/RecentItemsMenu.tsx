import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { History } from "lucide-react";

const RECENT_ITEMS = [
  { id: 1, title: "Getting Started with React", path: "/content/1" },
  { id: 2, title: "Advanced TypeScript Patterns", path: "/content/2" },
  { id: 3, title: "CSS Grid Layout Guide", path: "/content/3" },
];

export const RecentItemsMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <History className="h-4 w-4" />
          <span className="sr-only">Recent items</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        {RECENT_ITEMS.map((item) => (
          <DropdownMenuItem key={item.id}>
            <a href={item.path} className="w-full">
              {item.title}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};