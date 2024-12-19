import { useState } from "react";
import { FolderCollections } from "./FolderCollections";
import { BatchActions } from "./BatchActions";
import { SortFilterOptions } from "./SortFilterOptions";
import { LocationBreadcrumbs } from "./LocationBreadcrumbs";

export const OrganizationTools = () => {
  const [isBatchMode, setIsBatchMode] = useState(false);

  return (
    <div className="space-y-4 p-4 border-b">
      <div className="flex items-center justify-between">
        <LocationBreadcrumbs />
        <FolderCollections />
      </div>
      <div className="flex items-center justify-between">
        <BatchActions isBatchMode={isBatchMode} setIsBatchMode={setIsBatchMode} />
        <SortFilterOptions />
      </div>
    </div>
  );
};