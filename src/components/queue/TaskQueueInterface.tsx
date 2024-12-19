import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  ListOrdered, 
  Timer, 
  Database,
  ServerCog,
  Clock
} from "lucide-react";
import { toast } from "sonner";

interface Task {
  id: string;
  type: 'import' | 'process' | 'analyze' | 'export';
  priority: 'low' | 'medium' | 'high';
  progress: number;
  estimatedTime: number;
  resourceUsage: number;
}

export const TaskQueueInterface = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      type: 'import',
      priority: 'high',
      progress: 75,
      estimatedTime: 120,
      resourceUsage: 30
    },
    {
      id: '2',
      type: 'process',
      priority: 'medium',
      progress: 45,
      estimatedTime: 300,
      resourceUsage: 60
    },
    {
      id: '3',
      type: 'analyze',
      priority: 'low',
      progress: 10,
      estimatedTime: 600,
      resourceUsage: 40
    }
  ]);

  const getPriorityColor = (priority: string) => {
    const colors = {
      low: 'bg-blue-100 text-blue-800',
      medium: 'bg-yellow-100 text-yellow-800',
      high: 'bg-red-100 text-red-800'
    };
    return colors[priority as keyof typeof colors];
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      import: Database,
      process: ServerCog,
      analyze: Timer,
      export: ListOrdered
    };
    const Icon = icons[type as keyof typeof icons];
    return <Icon className="h-4 w-4" />;
  };

  const handlePriorityChange = (taskId: string, newPriority: string) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === taskId 
          ? { ...task, priority: newPriority as Task['priority'] } 
          : task
      )
    );
    toast.success(`Task ${taskId} priority updated to ${newPriority}`);
  };

  const handleBatchOperation = () => {
    toast.success("Batch operation initiated");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <ListOrdered className="h-5 w-5" />
          Task Queue
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Badge variant="secondary">
              {tasks.length} Tasks
            </Badge>
            <Badge variant="outline">
              <Clock className="h-4 w-4 mr-1" />
              {Math.round(tasks.reduce((acc, task) => acc + task.estimatedTime, 0) / 60)}h Total
            </Badge>
          </div>
          <Button onClick={handleBatchOperation}>
            Start Batch Processing
          </Button>
        </div>

        <ScrollArea className="h-[400px]">
          <div className="space-y-4">
            {tasks.map(task => (
              <div 
                key={task.id}
                className="p-4 border rounded-lg space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getTypeIcon(task.type)}
                    <span className="font-medium">
                      {task.type.charAt(0).toUpperCase() + task.type.slice(1)} Task
                    </span>
                  </div>
                  <Select
                    defaultValue={task.priority}
                    onValueChange={(value) => handlePriorityChange(task.id, value)}
                  >
                    <SelectTrigger className="w-[100px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Progress</span>
                    <span>{task.progress}%</span>
                  </div>
                  <Progress value={task.progress} className="h-2" />
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Est. Time:</span>
                    <Badge variant="outline" className="ml-2">
                      {Math.round(task.estimatedTime / 60)}h {task.estimatedTime % 60}m
                    </Badge>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Resources:</span>
                    <Badge variant="outline" className="ml-2">
                      {task.resourceUsage}%
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};