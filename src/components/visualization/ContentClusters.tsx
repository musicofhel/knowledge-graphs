import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Network } from "lucide-react";

interface ClusterItem {
  id: string;
  title: string;
  type: string;
  count: number;
}

const MOCK_CLUSTERS: ClusterItem[] = [
  { id: "1", title: "React Tutorials", type: "tutorial", count: 5 },
  { id: "2", title: "TypeScript Guides", type: "guide", count: 3 },
  { id: "3", title: "Development Tools", type: "tools", count: 4 },
];

export const ContentClusters = () => {
  return (
    <ScrollArea className="h-[500px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {MOCK_CLUSTERS.map((cluster) => (
          <Card key={cluster.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">{cluster.title}</h3>
                <Network className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="text-sm text-muted-foreground">
                {cluster.count} items • {cluster.type}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
};