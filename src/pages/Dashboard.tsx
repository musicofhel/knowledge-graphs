import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ContentGrid } from "@/components/content/ContentGrid";
import { OrganizationTools } from "@/components/organization/OrganizationTools";
import { SearchPanel } from "@/components/search/SearchPanel";
import { AutoGenerationPanel } from "@/components/auto-generation/AutoGenerationPanel";
import { FolderStructure } from "@/components/organization/FolderStructure";
import { SmartCollections } from "@/components/organization/SmartCollections";
import { ViewOptions } from "@/components/visualization/ViewOptions";
import { ContentClusters } from "@/components/visualization/ContentClusters";
import { SystemStatusPanel } from "@/components/system/SystemStatusPanel";
import { FileSystemStructure } from "@/components/filesystem/FileSystemStructure";
import { FileOperations } from "@/components/filing/operations/FileOperations";
import { useState } from "react";

const Dashboard = () => {
  const [viewMode, setViewMode] = useState<string>("grid");

  const renderContent = () => {
    switch (viewMode) {
      case "grid":
      case "list":
        return <ContentGrid viewMode={viewMode as "grid" | "list"} />;
      case "clusters":
        return <ContentClusters />;
      case "relationships":
      case "timeline":
        return (
          <div className="flex items-center justify-center h-[500px] text-muted-foreground">
            {viewMode.charAt(0).toUpperCase() + viewMode.slice(1)} view coming soon
          </div>
        );
      default:
        return <ContentGrid viewMode="grid" />;
    }
  };

  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex-1 max-w-3xl">
          <SearchPanel />
        </div>
        <div className="flex items-center gap-4 ml-4">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4">
        <div className="lg:col-span-3 space-y-4">
          <FileSystemStructure />
          <SystemStatusPanel />
          <FileOperations />
        </div>
        <div className="lg:col-span-6">
          <div className="mb-4">
            <ViewOptions currentView={viewMode} onViewChange={setViewMode} />
          </div>
          <OrganizationTools />
          <div className="mt-4">{renderContent()}</div>
        </div>
        <div className="lg:col-span-3">
          <AutoGenerationPanel />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;