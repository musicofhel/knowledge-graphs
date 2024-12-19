import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const timelineData = [
  { time: "00:00", usage: 10 },
  { time: "04:00", usage: 5 },
  { time: "08:00", usage: 45 },
  { time: "12:00", usage: 80 },
  { time: "16:00", usage: 65 },
  { time: "20:00", usage: 30 },
];

export const UsageTimeline = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Usage Timeline
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={timelineData}>
              <XAxis dataKey="time" stroke="currentColor" strokeOpacity={0.5} />
              <YAxis stroke="currentColor" strokeOpacity={0.5} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="usage"
                stroke="currentColor"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};