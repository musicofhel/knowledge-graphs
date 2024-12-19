import { Button } from "@/components/ui/button";
import { History } from "lucide-react";
import { useState } from "react";

export const HistoryToggle = () => {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <Button
      variant={showHistory ? "secondary" : "ghost"}
      size="icon"
      onClick={() => setShowHistory(!showHistory)}
    >
      <History className="h-4 w-4" />
      <span className="sr-only">Toggle history view</span>
    </Button>
  );
};