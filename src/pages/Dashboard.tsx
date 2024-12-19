import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ContentGrid } from "@/components/content/ContentGrid";
import { ViewToggle } from "@/components/content/ViewToggle";
import { OrganizationTools } from "@/components/organization/OrganizationTools";
import { SearchPanel } from "@/components/search/SearchPanel";
import { AutoGenerationPanel } from "@/components/auto-generation/AutoGenerationPanel";
import { FolderStructure } from "@/components/organization/FolderStructure";
import { SmartCollections } from "@/components/organization/SmartCollections";
import { useState } from "react";

const Dashboard = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex-1 max-w-3xl">
          <SearchPanel />
        </div>
        <div className="flex items-center gap-4 ml-4">
          <ViewToggle onViewChange={setViewMode} />
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4">
        <div className="lg:col-span-3 space-y-4">
          <div className="space-y-2">
            <h3 className="font-medium ml-2">Folders</h3>
            <FolderStructure />
          </div>
          <div className="space-y-2">
            <h3 className="font-medium ml-2">Smart Collections</h3>
            <SmartCollections />
          </div>
        </div>
        <div className="lg:col-span-6">
          <OrganizationTools />
          <div className="mt-4">
            <ContentGrid viewMode={viewMode} />
          </div>
        </div>
        <div className="lg:col-span-3">
          <AutoGenerationPanel />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;