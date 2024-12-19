import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MOCK_ITEMS = [
  { id: 1, title: "Getting Started with React", tags: ["react", "tutorial"] },
  { id: 2, title: "Advanced TypeScript Patterns", tags: ["typescript", "advanced"] },
  { id: 3, title: "CSS Grid Layout Guide", tags: ["css", "layout"] },
];

export const ContentGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {MOCK_ITEMS.map((item) => (
        <Card key={item.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 flex-wrap">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};