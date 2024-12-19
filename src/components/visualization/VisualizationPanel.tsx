import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ViewOptions } from "@/components/visualization/ViewOptions";
import { ContentClusters } from "@/components/visualization/ContentClusters";
import { GraphDisplay } from "@/components/connections/GraphDisplay";
import { KnowledgeGraph } from "@/components/visualization/KnowledgeGraph";
import { KnowledgeMetrics } from "@/components/visualization/KnowledgeMetrics";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Node } from "reactflow";

export const VisualizationPanel = () => {
  const [currentView, setCurrentView] = useState("network");
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  const renderVisualization = () => {
    switch (currentView) {
      case "network":
        return (
          <div className="space-y-4">
            <KnowledgeGraph onNodeSelect={setSelectedNode} />
            <KnowledgeMetrics />
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
        <CardTitle>Knowledge Graph Analysis</CardTitle>
        <ViewOptions currentView={currentView} onViewChange={setCurrentView} />
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[800px]">
          {renderVisualization()}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};