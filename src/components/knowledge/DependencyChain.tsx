import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, ArrowRight } from "lucide-react";

export const DependencyChain = () => {
  const dependencies = [
    {
      id: 1,
      chain: [
        { name: "Data Structures", status: "completed" },
        { name: "Algorithms", status: "completed" },
        { name: "System Design", status: "in-progress" },
        { name: "Architecture Patterns", status: "pending" }
      ]
    },
    {
      id: 2,
      chain: [
        { name: "HTML", status: "completed" },
        { name: "CSS", status: "completed" },
        { name: "JavaScript", status: "completed" },
        { name: "React", status: "in-progress" }
      ]
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium flex items-center gap-2">
        <Book className="h-4 w-4" />
        Dependency Chains
      </h3>
      
      <div className="space-y-3">
        {dependencies.map(dep => (
          <Card key={dep.id}>
            <CardContent className="pt-4">
              <div className="flex flex-wrap items-center gap-2">
                {dep.chain.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Badge 
                      variant={
                        item.status === "completed" ? "default" : 
                        item.status === "in-progress" ? "secondary" : 
                        "outline"
                      }
                    >
                      {item.name}
                    </Badge>
                    {index < dep.chain.length - 1 && (
                      <ArrowRight className="h-4 w-4 mx-2 text-muted-foreground" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};