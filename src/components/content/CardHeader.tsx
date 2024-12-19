import { CardHeader as UICardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CardHeaderProps {
  title: string;
  template: string;
}

export const CardHeader = ({ title, template }: CardHeaderProps) => {
  const getTemplateColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'article':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'tutorial':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'research':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <UICardHeader>
      <div className="flex justify-between items-start gap-4">
        <CardTitle className="text-lg">{title}</CardTitle>
        <Badge 
          variant="outline" 
          className={getTemplateColor(template)}
        >
          {template}
        </Badge>
      </div>
    </UICardHeader>
  );
};