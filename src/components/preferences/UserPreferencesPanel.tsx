import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DefaultLocations } from "./DefaultLocations";
import { AutoTagSettings } from "./AutoTagSettings";
import { TemplatePriorities } from "./TemplatePriorities";
import { FilingRules } from "./FilingRules";
import { OverridePreferences } from "./OverridePreferences";
import { ProcessingOptions } from "./ProcessingOptions";

export const UserPreferencesPanel = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>User Preferences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <DefaultLocations />
        <AutoTagSettings />
        <TemplatePriorities />
        <FilingRules />
        <OverridePreferences />
        <ProcessingOptions />
      </CardContent>
    </Card>
  );
};