import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Filter, SortAsc } from "lucide-react";

export const SortFilterOptions = () => {
  return (
    <div className="flex items-center gap-2">
      <Select defaultValue="modified">
        <SelectTrigger className="w-[180px]">
          <SortAsc className="mr-2 h-4 w-4" />
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="modified">Last Modified</SelectItem>
          <SelectItem value="strength">Connection Strength</SelectItem>
          <SelectItem value="type">Template Type</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="outline" size="icon">
        <Filter className="h-4 w-4" />
      </Button>
    </div>
  );
};