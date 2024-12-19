import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "lucide-react";
import { toast } from "sonner";

export const LinkCreator = () => {
  const handleCreateLink = () => {
    toast.success("Link created successfully");
  };

  return (
    <Card className="border border-dashed">
      <CardHeader className="py-3">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <Link className="h-4 w-4" />
          Create Link
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Input placeholder="Enter link name" className="h-8" />
          <Input placeholder="Target path" className="h-8" />
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={handleCreateLink}
          >
            Create Symbolic Link
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};