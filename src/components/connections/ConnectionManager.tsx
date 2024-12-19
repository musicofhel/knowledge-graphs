import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Edit2,
  Link,
  Eye,
  EyeOff,
  Settings2,
  ListPlus,
  Save,
} from "lucide-react";
import { toast } from "sonner";

interface Connection {
  id: string;
  sourceId: string;
  targetId: string;
  type: string;
  strength: number;
  label: string;
  priority: number;
  visible: boolean;
}

export const ConnectionManager = () => {
  const [selectedConnections, setSelectedConnections] = useState<string[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [showHidden, setShowHidden] = useState(false);

  // Mock connections data
  const [connections, setConnections] = useState<Connection[]>([
    {
      id: "1",
      sourceId: "node1",
      targetId: "node2",
      type: "reference",
      strength: 75,
      label: "Cites",
      priority: 1,
      visible: true,
    },
    // Add more mock connections as needed
  ]);

  const handleStrengthOverride = (connectionId: string, newStrength: number) => {
    setConnections(prev =>
      prev.map(conn =>
        conn.id === connectionId ? { ...conn, strength: newStrength } : conn
      )
    );
    toast.success("Connection strength updated");
  };

  const handleTypeChange = (connectionId: string, newType: string) => {
    setConnections(prev =>
      prev.map(conn =>
        conn.id === connectionId ? { ...conn, type: newType } : conn
      )
    );
    toast.success("Connection type updated");
  };

  const handleVisibilityToggle = (connectionId: string) => {
    setConnections(prev =>
      prev.map(conn =>
        conn.id === connectionId ? { ...conn, visible: !conn.visible } : conn
      )
    );
    toast.success("Connection visibility toggled");
  };

  const handleBulkEdit = () => {
    if (selectedConnections.length === 0) {
      toast.error("No connections selected");
      return;
    }
    setIsEditing(true);
  };

  const handleSaveBulkEdit = () => {
    setIsEditing(false);
    toast.success("Bulk changes saved");
  };

  return (
    <div className="space-y-6 p-4">
      {/* Bulk Actions */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Connection Management</h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowHidden(!showHidden)}
          >
            {showHidden ? (
              <EyeOff className="h-4 w-4 mr-2" />
            ) : (
              <Eye className="h-4 w-4 mr-2" />
            )}
            {showHidden ? "Hide Inactive" : "Show Hidden"}
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={handleBulkEdit}
            disabled={selectedConnections.length === 0}
          >
            <ListPlus className="h-4 w-4 mr-2" />
            Bulk Edit
          </Button>
        </div>
      </div>

      {/* Connection List */}
      <div className="space-y-4">
        {connections
          .filter(conn => showHidden || conn.visible)
          .map(connection => (
            <div
              key={connection.id}
              className="border rounded-lg p-4 space-y-4 hover:bg-accent/50 transition-colors"
            >
              {/* Connection Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedConnections.includes(connection.id)}
                    onChange={e => {
                      if (e.target.checked) {
                        setSelectedConnections(prev => [...prev, connection.id]);
                      } else {
                        setSelectedConnections(prev =>
                          prev.filter(id => id !== connection.id)
                        );
                      }
                    }}
                    className="rounded border-gray-300"
                  />
                  <Link className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{connection.label}</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleVisibilityToggle(connection.id)}
                >
                  {connection.visible ? (
                    <Eye className="h-4 w-4" />
                  ) : (
                    <EyeOff className="h-4 w-4" />
                  )}
                </Button>
              </div>

              {/* Connection Details */}
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label>Connection Type</Label>
                  <Select
                    value={connection.type}
                    onValueChange={value => handleTypeChange(connection.id, value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="reference">Reference</SelectItem>
                      <SelectItem value="related">Related</SelectItem>
                      <SelectItem value="similar">Similar</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Strength Override</Label>
                    <span className="text-sm text-muted-foreground">
                      {connection.strength}%
                    </span>
                  </div>
                  <Slider
                    value={[connection.strength]}
                    onValueChange={([value]) =>
                      handleStrengthOverride(connection.id, value)
                    }
                    max={100}
                    step={1}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Priority Level</Label>
                  <Select
                    value={connection.priority.toString()}
                    onValueChange={value =>
                      setConnections(prev =>
                        prev.map(conn =>
                          conn.id === connection.id
                            ? { ...conn, priority: parseInt(value) }
                            : conn
                        )
                      )
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">High</SelectItem>
                      <SelectItem value="2">Medium</SelectItem>
                      <SelectItem value="3">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Relationship Label</Label>
                  <Input
                    value={connection.label}
                    onChange={e =>
                      setConnections(prev =>
                        prev.map(conn =>
                          conn.id === connection.id
                            ? { ...conn, label: e.target.value }
                            : conn
                        )
                      )
                    }
                    placeholder="Enter relationship label"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Bulk Edit Modal or Panel could be added here */}
      {isEditing && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm">
          <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg">
            <h2 className="text-lg font-semibold">Bulk Edit Connections</h2>
            <div className="space-y-4">
              {/* Bulk edit controls */}
              <Button onClick={handleSaveBulkEdit}>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};