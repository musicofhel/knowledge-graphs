import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitMerge, CheckCircle2, XCircle } from "lucide-react";

export const PrerequisiteMap = () => {
  const prerequisites = [
    {
      id: 1,
      topic: "Advanced TypeScript",
      requires: [
        { name: "JavaScript Basics", completed: true },
        { name: "TypeScript Fundamentals", completed: true },
        { name: "OOP Concepts", completed: false }
      ]
    },
    {
      id: 2,
      topic: "React State Management",
      requires: [
        { name: "React Basics", completed: true },
        { name: "JavaScript ES6+", completed: true },
        { name: "Component Lifecycle", completed: true }
      ]
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium flex items-center gap-2">
        <GitMerge className="h-4 w-4" />
        Prerequisites Map
      </h3>
      
      <div className="space-y-3">
        {prerequisites.map(prereq => (
          <Card key={prereq.id}>
            <CardContent className="pt-4">
              <div className="space-y-3">
                <span className="font-medium">{prereq.topic}</span>
                <div className="grid grid-cols-1 gap-2">
                  {prereq.requires.map((req, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {req.completed ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        ) : (
                          <XCircle className="h-4 w-4 text-red-500" />
                        )}
                        <span className="text-sm">{req.name}</span>
                      </div>
                      <Badge variant={req.completed ? "default" : "secondary"}>
                        {req.completed ? "Complete" : "Required"}
                      </Badge>
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