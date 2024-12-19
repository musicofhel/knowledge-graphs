import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy } from "lucide-react";

export const CopyPasteStatus = () => {
  return (
    <Card className="border border-dashed">
      <CardHeader className="py-3">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <Copy className="h-4 w-4" />
          Copy/Paste Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-sm">Clipboard:</span>
          <Badge variant="secondary">2 items</Badge>
        </div>
        <div className="mt-2 text-xs text-muted-foreground">
          Ready to paste in: /documents/new/
        </div>
      </CardContent>
    </Card>
  );
};