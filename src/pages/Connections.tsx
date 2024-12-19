import { useState } from "react";
import { Card } from "@/components/ui/card";
import { GraphDisplay } from "@/components/connections/GraphDisplay";
import { GraphControls } from "@/components/connections/GraphControls";
import { NodePanel } from "@/components/connections/NodePanel";
import { ConnectionDisplay } from "@/components/connections/ConnectionDisplay";
import { PatternRecognitionPanel } from "@/components/patterns/PatternRecognitionPanel";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const MOCK_CONNECTIONS = [
  {
    id: 1,
    sourceTitle: "React Basics",
    targetTitle: "Advanced React Patterns",
    connectionType: "reference",
    strength: 85,
    createdAt: "2 days ago",
    usageContext: {
      device: "desktop",
      timeContext: "Working hours",
      location: "Office",
      purpose: "Learning",
      project: "Frontend Training",
      workflow: "Documentation",
    },
  },
  {
    id: 2,
    sourceTitle: "TypeScript Guide",
    targetTitle: "React with TypeScript",
    connectionType: "related",
    strength: 92,
    createdAt: "1 week ago",
    usageContext: {
      device: "mobile",
      timeContext: "Evening",
      location: "Remote",
      purpose: "Reference",
      project: "Code Review",
      workflow: "Development",
    },
  },
];

const Connections = () => {
  const [selectedNode, setSelectedNode] = useState<any>(null);
  const [isLoading] = useState(false);
  const [showPatterns, setShowPatterns] = useState(false);

  const handleConnectionToggle = (id: number, enabled: boolean) => {
    console.log(`Connection ${id} ${enabled ? 'enabled' : 'disabled'}`);
  };

  return (
    <div className="h-screen flex">
      {/* Main Graph Area */}
      <div className="flex-1 p-4">
        <Tabs defaultValue="graph">
          <TabsList>
            <TabsTrigger value="graph">Graph View</TabsTrigger>
            <TabsTrigger value="manage">Manage Connections</TabsTrigger>
            <TabsTrigger value="patterns" onClick={() => setShowPatterns(true)}>
              Patterns
            </TabsTrigger>
          </TabsList>
          <TabsContent value="graph">
            <Card className="h-[calc(100vh-8rem)]">
              {isLoading ? (
                <Skeleton className="w-full h-full" />
              ) : (
                <GraphDisplay onNodeSelect={setSelectedNode} />
              )}
            </Card>
          </TabsContent>
          <TabsContent value="manage">
            <Card className="h-[calc(100vh-8rem)] overflow-auto">
              {MOCK_CONNECTIONS.map((connection) => (
                <ConnectionDisplay
                  key={connection.id}
                  {...connection}
                  onToggle={(enabled) => handleConnectionToggle(connection.id, enabled)}
                />
              ))}
            </Card>
          </TabsContent>
          <TabsContent value="patterns">
            <Card className="h-[calc(100vh-8rem)] overflow-auto">
              <PatternRecognitionPanel />
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Controls and Details Panel */}
      <div className="w-80 border-l">
        <div className="p-4 border-b">
          <GraphControls />
        </div>
        <div className="p-4">
          <NodePanel selectedNode={selectedNode} />
        </div>
        
        {/* Connections List */}
        <div className="p-4 border-t space-y-4">
          {MOCK_CONNECTIONS.map((connection) => (
            <ConnectionDisplay
              key={connection.id}
              {...connection}
              onToggle={(enabled) => handleConnectionToggle(connection.id, enabled)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Connections;