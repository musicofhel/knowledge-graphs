import { UserPreferencesPanel } from "@/components/preferences/UserPreferencesPanel";

const Index = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">User Preferences</h1>
        <UserPreferencesPanel />
      </div>
    </div>
  );
};

export default Index;