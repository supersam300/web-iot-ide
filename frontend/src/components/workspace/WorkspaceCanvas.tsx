import ReactFlow, {
  Background, Controls, MiniMap,
  useNodesState, useEdgesState, addEdge,
  Connection
} from 'reactflow';
import 'reactflow/dist/style.css';
import { useCallback } from 'react';
import { nodeTypes } from '../../lib/reactFlow/nodeTypes';
import { useDiagramStore } from '../../lib/reactFlow/useDiagramStore';

export default function WorkspaceCanvas() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useDiagramStore();

  return (
    <div className="workspace-canvas">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}
