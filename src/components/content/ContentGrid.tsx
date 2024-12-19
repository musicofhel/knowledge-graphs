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
    lastAccessed: "1 hour ago",
    relatedCount: 5,
    metadata: {
      author: "React Team",
      publishDate: "March 1, 2024",
      readTime: "15 min",
    },
    createdAt: "2024-03-01",
    views: 156,
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
    lastAccessed: "3 days ago",
    relatedCount: 8,
    metadata: {
      author: "TS Community",
      publishDate: "February 28, 2024",
      readTime: "25 min",
    },
    createdAt: "2024-02-28",
    views: 342,
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
    lastAccessed: "2 days ago",
    relatedCount: 3,
    metadata: {
      author: "CSS Working Group",
      publishDate: "March 5, 2024",
      readTime: "20 min",
    },
    createdAt: "2024-03-05",
    views: 89,
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
          {...item}
        />
      ))}
    </div>
  );
};