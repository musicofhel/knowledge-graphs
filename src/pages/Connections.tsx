import { useState } from "react";
import { Card } from "@/components/ui/card";
import { GraphDisplay } from "@/components/connections/GraphDisplay";
import { GraphControls } from "@/components/connections/GraphControls";
import { NodePanel } from "@/components/connections/NodePanel";
import { Skeleton } from "@/components/ui/skeleton";

const Connections = () => {
  const [selectedNode, setSelectedNode] = useState<any>(null);
  const [isLoading] = useState(false);

  return (
    <div className="h-screen flex">
      {/* Main Graph Area */}
      <div className="flex-1 p-4">
        <Card className="h-full">
          {isLoading ? (
            <Skeleton className="w-full h-full" />
          ) : (
            <GraphDisplay onNodeSelect={setSelectedNode} />
          )}
        </Card>
      </div>

      {/* Controls and Details Panel */}
      <div className="w-80 border-l">
        <div className="p-4 border-b">
          <GraphControls />
        </div>
        <div className="p-4">
          <NodePanel selectedNode={selectedNode} />
        </div>
      </div>
    </div>
  );
};

export default Connections;