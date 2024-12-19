import { useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";

// Placeholder data
const initialNodes: Node[] = [
  {
    id: "1",
    data: { label: "React Basics", type: "Tutorial" },
    position: { x: 250, y: 100 },
  },
  {
    id: "2",
    data: { label: "Advanced TypeScript", type: "Article" },
    position: { x: 450, y: 200 },
  },
  {
    id: "3",
    data: { label: "CSS Grid Research", type: "Research" },
    position: { x: 250, y: 300 },
  },
];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3" },
];

interface GraphDisplayProps {
  onNodeSelect: (node: Node | null) => void;
}

export const GraphDisplay = ({ onNodeSelect }: GraphDisplayProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      onNodeSelect(node);
    },
    [onNodeSelect]
  );

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};