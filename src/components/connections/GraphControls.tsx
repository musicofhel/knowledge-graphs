import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "lucide-react";

export const GraphControls = () => {
  return (
    <div className="space-y-6">
      {/* Strength Filter */}
      <div className="space-y-2">
        <Label>Connection Strength</Label>
        <Slider defaultValue={[65]} min={0} max={100} step={1} />
      </div>

      {/* Time Range */}
      <div className="space-y-2">
        <Label>Time Range</Label>
        <Button variant="outline" className="w-full justify-start">
          <Calendar className="mr-2 h-4 w-4" />
          Select date range
        </Button>
      </div>

      {/* Layout Type */}
      <div className="space-y-2">
        <Label>Layout</Label>
        <Select defaultValue="force">
          <SelectTrigger>
            <SelectValue placeholder="Select layout" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="force">Force-directed</SelectItem>
            <SelectItem value="hierarchical">Hierarchical</SelectItem>
            <SelectItem value="circular">Circular</SelectItem>
            <SelectItem value="grid">Grid</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Node Type Filters */}
      <div className="space-y-2">
        <Label>Content Types</Label>
        <div className="space-y-1">
          {["Articles", "Tutorials", "Research", "Tools"].map((type) => (
            <Button
              key={type}
              variant="outline"
              size="sm"
              className="mr-2 mb-2"
            >
              {type}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};