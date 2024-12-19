import { useCallback } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";

// Initial nodes showing different knowledge domains
const initialNodes: Node[] = [
  {
    id: "domain-1",
    type: "group",
    data: { label: "Core Concepts" },
    position: { x: 250, y: 100 },
    style: { backgroundColor: "rgba(240, 240, 255, 0.7)" },
  },
  {
    id: "expert-1",
    data: { label: "Expert Path A", citations: 15 },
    position: { x: 300, y: 150 },
    parentNode: "domain-1",
  },
  {
    id: "gap-1",
    data: { label: "Knowledge Gap", type: "gap" },
    position: { x: 450, y: 200 },
    style: { borderColor: "#ff6b6b", borderStyle: "dashed" },
  },
  {
    id: "influence-1",
    data: { label: "Major Influence", impact: 0.85 },
    position: { x: 600, y: 150 },
    style: { backgroundColor: "rgba(255, 220, 200, 0.7)" },
  },
];

// Initial edges showing relationships and citations
const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "expert-1",
    target: "gap-1",
    animated: true,
    style: { stroke: "#ff6b6b" },
  },
  {
    id: "e1-3",
    source: "expert-1",
    target: "influence-1",
    type: "smoothstep",
    label: "Influences",
  },
];

interface KnowledgeGraphProps {
  onNodeSelect?: (node: Node) => void;
}

export const KnowledgeGraph = ({ onNodeSelect }: KnowledgeGraphProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const handleNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      onNodeSelect?.(node);
      console.log("Selected node:", node);
    },
    [onNodeSelect]
  );

  return (
    <div className="h-[600px] w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={handleNodeClick}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap
          nodeColor={(node) => {
            switch (node.type) {
              case "group":
                return "#e6e6ff";
              default:
                return "#ffffff";
            }
          }}
        />
      </ReactFlow>
    </div>
  );
};