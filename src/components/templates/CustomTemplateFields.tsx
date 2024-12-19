import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FIELD_TYPES = [
  { id: "text", label: "Text" },
  { id: "number", label: "Number" },
  { id: "date", label: "Date" },
  { id: "boolean", label: "Boolean" },
  { id: "url", label: "URL" },
];

interface CustomField {
  id: string;
  name: string;
  type: string;
}

export const CustomTemplateFields = () => {
  const [fields, setFields] = useState<CustomField[]>([]);

  const addField = () => {
    const newField: CustomField = {
      id: `field-${Date.now()}`,
      name: "",
      type: "text",
    };
    setFields([...fields, newField]);
  };

  const removeField = (id: string) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const updateField = (id: string, updates: Partial<CustomField>) => {
    setFields(
      fields.map((field) =>
        field.id === id ? { ...field, ...updates } : field
      )
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Custom Fields</h3>
        <Button onClick={addField} variant="outline" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Field
        </Button>
      </div>

      <div className="space-y-3">
        {fields.map((field) => (
          <div key={field.id} className="flex items-center gap-3">
            <Input
              placeholder="Field name"
              value={field.name}
              onChange={(e) =>
                updateField(field.id, { name: e.target.value })
              }
              className="flex-1"
            />
            <Select
              value={field.type}
              onValueChange={(value) =>
                updateField(field.id, { type: value })
              }
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Field type" />
              </SelectTrigger>
              <SelectContent>
                {FIELD_TYPES.map((type) => (
                  <SelectItem key={type.id} value={type.id}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeField(field.id)}
              className="hover:text-destructive"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}

        {fields.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-4">
            No custom fields added yet. Click "Add Field" to create one.
          </p>
        )}
      </div>
    </div>
  );
};