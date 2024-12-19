import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { QuickTagSelector } from "@/components/submission/QuickTagSelector";
import { TagStrengthIndicator } from "./TagStrengthIndicator";
import { RelatedTags } from "./RelatedTags";
import { TagCategories } from "./TagCategories";

// Mock data - in a real app this would come from your backend
const MOCK_TAG_STRENGTHS = [
  { tag: "react", strength: 85 },
  { tag: "typescript", strength: 92 },
  { tag: "frontend", strength: 78 },
];

const MOCK_RELATED_TAGS = [
  { name: "javascript", relevance: 90 },
  { name: "web-development", relevance: 85 },
  { name: "programming", relevance: 80 },
];

const MOCK_CATEGORIES = [
  {
    name: "Technology",
    color: "blue",
    tags: ["javascript", "typescript", "react", "vue", "angular"],
  },
  {
    name: "Design",
    color: "red",
    tags: ["ui", "ux", "figma", "sketch", "adobe"],
  },
  {
    name: "Development",
    color: "green",
    tags: ["frontend", "backend", "fullstack", "devops", "testing"],
  },
];

export const EnhancedTagManager = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tag Management</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Input
            placeholder="Search tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <QuickTagSelector
          selectedTags={selectedTags}
          onChange={setSelectedTags}
        />

        <div className="space-y-4">
          <h3 className="font-medium">Tag Strengths</h3>
          {MOCK_TAG_STRENGTHS.map((item) => (
            <TagStrengthIndicator
              key={item.tag}
              tag={item.tag}
              strength={item.strength}
            />
          ))}
        </div>

        <RelatedTags tags={MOCK_RELATED_TAGS} />

        <TagCategories
          categories={MOCK_CATEGORIES}
          onSelectTag={(tag) => {
            if (!selectedTags.includes(tag)) {
              setSelectedTags([...selectedTags, tag]);
            }
          }}
        />
      </CardContent>
    </Card>
  );
};