import { ContentCard } from "./ContentCard";

const MOCK_ITEMS = [
  {
    id: 1,
    title: "Getting Started with React",
    url: "https://react.dev",
    tags: ["react", "tutorial", "frontend"],
    strength: 85,
    template: "Tutorial",
    updatedAt: "2 days ago",
    readProgress: 75,
  },
  {
    id: 2,
    title: "Advanced TypeScript Patterns",
    url: "https://typescript-patterns.dev",
    tags: ["typescript", "advanced", "patterns"],
    strength: 92,
    template: "Article",
    updatedAt: "1 week ago",
    readProgress: 30,
  },
  {
    id: 3,
    title: "CSS Grid Layout Guide",
    imageUrl: "/placeholder.svg",
    tags: ["css", "layout", "web"],
    strength: 78,
    template: "Research",
    updatedAt: "3 days ago",
    readProgress: 100,
  },
];

interface ContentGridProps {
  viewMode: "grid" | "list";
}

export const ContentGrid = ({ viewMode }: ContentGridProps) => {
  return (
    <div
      className={
        viewMode === "grid"
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          : "flex flex-col gap-4"
      }
    >
      {MOCK_ITEMS.map((item) => (
        <ContentCard
          key={item.id}
          title={item.title}
          url={item.url}
          imageUrl={item.imageUrl}
          tags={item.tags}
          strength={item.strength}
          template={item.template}
          updatedAt={item.updatedAt}
          readProgress={item.readProgress}
        />
      ))}
    </div>
  );
};