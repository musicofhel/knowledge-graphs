import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Submit = () => {
  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Add New Content</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Content submission form will go here</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Submit;