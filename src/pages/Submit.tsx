import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileUploadZone } from "@/components/submission/FileUploadZone";
import { UrlPreviewCard } from "@/components/submission/UrlPreviewCard";
import { TemplateSelector } from "@/components/submission/TemplateSelector";
import { QuickTagSelector } from "@/components/submission/QuickTagSelector";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link2 } from "lucide-react";
import { toast } from "sonner";
import { TemplateCategories } from "@/components/templates/TemplateCategories";
import { DefaultTemplates } from "@/components/templates/DefaultTemplates";
import { CustomTemplateFields } from "@/components/templates/CustomTemplateFields";

const Submit = () => {
  const [url, setUrl] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("article");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Content submitted successfully!");
  };

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
          <Card>
            <CardHeader>
              <CardTitle>Add New Content</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <FileUploadZone />
                
                <div className="space-y-2">
                  <label htmlFor="url" className="text-sm font-medium">
                    URL
                  </label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Link2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="url"
                        type="url"
                        placeholder="https://"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="pl-9"
                      />
                    </div>
                    <Button type="button" variant="secondary" onClick={() => setUrl("")}>
                      Clear
                    </Button>
                  </div>
                </div>

                {url && <UrlPreviewCard url={url} />}

                <TemplateSelector
                  value={selectedTemplate}
                  onChange={setSelectedTemplate}
                />

                <QuickTagSelector
                  selectedTags={selectedTags}
                  onChange={setSelectedTags}
                />

                <Button type="submit" className="w-full">
                  Submit Content
                </Button>
              </form>
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