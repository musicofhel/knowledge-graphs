import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import { ContentGrid } from "@/components/content/ContentGrid";
import { ViewToggle } from "@/components/content/ViewToggle";
import { SortSelect } from "@/components/content/SortSelect";

const Dashboard = () => {
  return (
    <div className="h-full w-full">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-4 flex-1 max-w-xl">
          <Search className="w-5 h-5 text-muted-foreground" />
          <Input type="text" placeholder="Search content..." className="flex-1" />
        </div>
        <div className="flex items-center gap-4">
          <ViewToggle />
          <SortSelect />
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4">
        <ContentGrid />
      </div>
    </div>
  );
};

export default Dashboard;