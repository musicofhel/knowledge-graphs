import { NavigationTracker } from "./NavigationTracker";
import { ToolUsageTracker } from "./ToolUsageTracker";
import { TimeInvestmentTracker } from "./TimeInvestmentTracker";

export const BehaviorMetrics = () => {
  return (
    <div className="space-y-4">
      <NavigationTracker />
      <ToolUsageTracker />
      <TimeInvestmentTracker />
    </div>
  );
};