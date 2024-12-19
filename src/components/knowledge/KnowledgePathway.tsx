import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitBranch, ArrowRight } from "lucide-react";

export const KnowledgePathway = () => {
  const pathways = [
    {
      id: 1,
      title: "Frontend Development",
      steps: ["HTML/CSS", "JavaScript", "React", "TypeScript"],
      status: "in-progress"
    },
    {
      id: 2,
      title: "Backend Integration",
      steps: ["Node.js", "Express", "Database Design"],
      status: "pending"
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium flex items-center gap-2">
        <GitBranch className="h-4 w-4" />
        Learning Pathways
      </h3>
      
      <div className="space-y-3">
        {pathways.map(pathway => (
          <Card key={pathway.id}>
            <CardContent className="pt-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{pathway.title}</span>
                  <Badge variant={pathway.status === "in-progress" ? "default" : "secondary"}>
                    {pathway.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  {pathway.steps.map((step, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-sm">{step}</span>
                      {index < pathway.steps.length - 1 && (
                        <ArrowRight className="h-4 w-4 mx-2 text-muted-foreground" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};