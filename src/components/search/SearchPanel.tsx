import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Save, History, Filter } from "lucide-react";
import { SearchTemplates } from "./SearchTemplates";
import { SearchFilters } from "./SearchFilters";
import { RecentSearches } from "./RecentSearches";
import { toast } from "sonner";

export const SearchPanel = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleSearch = () => {
    console.log("Searching with:", { searchQuery, selectedTemplate, selectedTags });
    // Implement actual search logic here
  };

  const handleSaveSearch = () => {
    if (!searchQuery) {
      toast.error("Please enter a search query first");
      return;
    }
    
    // Save search implementation would go here
    toast.success("Search saved successfully");
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="flex-1 flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <SearchTemplates
            selected={selectedTemplate}
            onSelect={setSelectedTemplate}
          />
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleSaveSearch}
        >
          <Save className="h-4 w-4" />
        </Button>
      </div>

      {showFilters && (
        <SearchFilters
          selectedTags={selectedTags}
          onTagsChange={setSelectedTags}
        />
      )}

      <RecentSearches onSelect={(query) => setSearchQuery(query)} />
    </div>
  );
};