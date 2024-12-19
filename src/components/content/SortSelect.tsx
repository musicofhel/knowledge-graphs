import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SortSelect = () => {
  return (
    <Select defaultValue="date">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="date">Date Added</SelectItem>
        <SelectItem value="strength">Connection Strength</SelectItem>
        <SelectItem value="type">Template Type</SelectItem>
      </SelectContent>
    </Select>
  );
};