import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useEffect, useState } from "react";

const QUICK_ACTIONS = [
  { id: 1, title: "Go to Dashboard", action: () => console.log("Navigate to Dashboard") },
  { id: 2, title: "Create New Content", action: () => console.log("Open creation form") },
  { id: 3, title: "Search Tags", action: () => console.log("Open tag search") },
];

export const QuickSwitcher = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Quick Actions">
          {QUICK_ACTIONS.map((action) => (
            <CommandItem key={action.id} onSelect={action.action}>
              {action.title}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};