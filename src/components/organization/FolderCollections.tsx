import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FolderOpen } from "lucide-react";

export const FolderCollections = () => {
  return (
    <Select defaultValue="all">
      <SelectTrigger className="w-[200px]">
        <FolderOpen className="mr-2 h-4 w-4" />
        <SelectValue placeholder="Select Collection" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Content</SelectItem>
        <SelectItem value="tutorials">Tutorials</SelectItem>
        <SelectItem value="articles">Articles</SelectItem>
        <SelectItem value="research">Research</SelectItem>
      </SelectContent>
    </Select>
  );
};