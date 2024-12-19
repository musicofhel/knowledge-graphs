import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Eye, Share, Bookmark, Clock, Network } from "lucide-react";
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

          {/* Related Content */}
          <div>
            <h4 className="font-medium mb-2">Related Content</h4>
            <div className="space-y-2">
              {["React Hooks Guide", "State Management", "Component Patterns"].map((content) => (
                <div
                  key={content}
                  className="p-2 bg-secondary rounded-md text-sm flex items-center justify-between"
                >
                  <span>{content}</span>
                  <Network className="h-4 w-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </div>

          {/* Time-based Connections */}
          <div>
            <h4 className="font-medium mb-2">Recent Connections</h4>
            <div className="space-y-2">
              {[
                { node: "TypeScript Basics", time: "2 hours ago" },
                { node: "React Router", time: "1 day ago" },
                { node: "Redux Tutorial", time: "3 days ago" },
              ].map((connection) => (
                <div
                  key={connection.node}
                  className="flex items-center justify-between text-sm"
                >
                  <span>{connection.node}</span>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="mr-1 h-4 w-4" />
                    <span>{connection.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Connection Strengths */}
          <div>
            <h4 className="font-medium mb-2">Connection Strengths</h4>
            <div className="space-y-2">
              {[
                { node: "React Basics", strength: 85 },
                { node: "JavaScript", strength: 72 },
                { node: "Web Development", strength: 91 },
              ].map((connection) => (
                <div key={connection.node} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{connection.node}</span>
                    <span>{connection.strength}%</span>
                  </div>
                  <Progress value={connection.strength} className="h-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};