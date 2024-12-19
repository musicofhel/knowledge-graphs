import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IntelligentFilingZone } from "@/components/filing/IntelligentFilingZone";
import { TemplateSelector } from "@/components/submission/TemplateSelector";
import { QuickTagSelector } from "@/components/submission/QuickTagSelector";
import { TemplateCategories } from "@/components/templates/TemplateCategories";
import { DefaultTemplates } from "@/components/templates/DefaultTemplates";
import { CustomTemplateFields } from "@/components/templates/CustomTemplateFields";
import { useState } from "react";

const Submit = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("article");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  return (
    <div className="p-4 max-w-6xl mx-auto space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Template Selection Section */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Template Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <TemplateCategories />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Custom Fields</CardTitle>
            </CardHeader>
            <CardContent>
              <CustomTemplateFields />
            </CardContent>
          </Card>
        </div>

        {/* Content Form Section */}
        <div className="lg:col-span-2 space-y-6">
          <IntelligentFilingZone />

          <Card>
            <CardHeader>
              <CardTitle>Content Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <TemplateSelector
                value={selectedTemplate}
                onChange={setSelectedTemplate}
              />

              <QuickTagSelector
                selectedTags={selectedTags}
                onChange={setSelectedTags}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Default Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <DefaultTemplates />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Submit;