import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ViewOptions } from "@/components/visualization/ViewOptions";
import { ContentClusters } from "@/components/visualization/ContentClusters";
import { GraphDisplay } from "@/components/connections/GraphDisplay";
import { ScrollArea } from "@/components/ui/scroll-area";

export const VisualizationPanel = () => {
  const [currentView, setCurrentView] = useState("network");

  const renderVisualization = () => {
    switch (currentView) {
      case "network":
        return (
          <div className="h-[500px]">
            <GraphDisplay onNodeSelect={() => {}} />
          </div>
        );
      case "clusters":
        return <ContentClusters />;
      case "timeline":
        return (
          <div className="p-4 text-center text-muted-foreground">
            Timeline view coming soon
          </div>
        );
      default:
        return (
          <div className="p-4 text-center text-muted-foreground">
            Select a visualization type
          </div>
        );
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Relationships</CardTitle>
        <ViewOptions currentView={currentView} onViewChange={setCurrentView} />
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px]">
          {renderVisualization()}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};