import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { History } from "lucide-react";

interface FileHistoryProps {
  selectedFile: string | null;
}

export const FileHistory = ({ selectedFile }: FileHistoryProps) => {
  const historyItems = [
    { date: "2024-03-10", action: "Modified", user: "John" },
    { date: "2024-03-09", action: "Moved", user: "Sarah" },
    { date: "2024-03-08", action: "Created", user: "Mike" },
  ];

  return (
    <Card className="border border-dashed">
      <CardHeader className="py-3">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <History className="h-4 w-4" />
          File History
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[100px]">
          {selectedFile ? (
            <div className="space-y-2">
              {historyItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between text-xs"
                >
                  <span>{item.date}</span>
                  <span className="text-muted-foreground">{item.action}</span>
                  <span>{item.user}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-sm text-muted-foreground">
              Select a file to view history
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};