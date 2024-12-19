import { ScrollArea } from "@/components/ui/scroll-area";
import { FlowDiagram } from "./FlowDiagram";
import { UsageTimeline } from "./UsageTimeline";
import { TrendIndicators } from "./TrendIndicators";
import { PatternPredictions } from "./PatternPredictions";

export const PatternVisualization = () => {
  return (
    <ScrollArea className="h-[calc(100vh-10rem)]">
      <div className="space-y-4 p-4">
        <FlowDiagram />
        <UsageTimeline />
        <TrendIndicators />
        <PatternPredictions />
      </div>
    </ScrollArea>
  );
};