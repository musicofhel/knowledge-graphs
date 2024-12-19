import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, Share, Bookmark } from "lucide-react";
import { Node } from "reactflow";

interface NodePanelProps {
  selectedNode: Node | null;
}

export const NodePanel = ({ selectedNode }: NodePanelProps) => {
  if (!selectedNode) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No Node Selected</CardTitle>
          <CardDescription>
            Click on a node to view its details and connections
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{selectedNode.data.label}</CardTitle>
        <CardDescription>{selectedNode.data.type}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Quick Actions */}
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Eye className="mr-2 h-4 w-4" />
              View
            </Button>
            <Button variant="outline" size="sm">
              <Share className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Bookmark className="mr-2 h-4 w-4" />
              Save
            </Button>
          </div>

          {/* Connected Nodes */}
          <div>
            <h4 className="font-medium mb-2">Connected Content</h4>
            <div className="space-y-2">
              {["Node 1", "Node 2", "Node 3"].map((node) => (
                <div
                  key={node}
                  className="p-2 bg-secondary rounded-md text-sm"
                >
                  {node}
                </div>
              ))}
            </div>
          </div>

          {/* Connection Strengths */}
          <div>
            <h4 className="font-medium mb-2">Connection Strengths</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Node 1</span>
                <span>85%</span>
              </div>
              <div className="flex justify-between">
                <span>Node 2</span>
                <span>72%</span>
              </div>
              <div className="flex justify-between">
                <span>Node 3</span>
                <span>91%</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};