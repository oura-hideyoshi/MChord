import { useReactFlow } from 'reactflow'
import dagre from 'dagre'

export const useReactflowLayout = (direction = 'LR') => {
  const { getNodes, getEdges, setNodes, setEdges } = useReactFlow()

  const dagreGraph = new dagre.graphlib.Graph()
  dagreGraph.setDefaultEdgeLabel(() => ({}))

  const nodeWidth = 100
  const nodeHeight = 20

  function cleanLayout() {
    const nodes = getNodes()
    const edges = getEdges()
    dagreGraph.setGraph({ rankdir: direction })

    nodes.forEach((node) => {
      dagreGraph.setNode(node.id, { width: node.width || nodeWidth, height: node.height || nodeHeight })
    })

    edges.forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target)
    })

    dagre.layout(dagreGraph)

    nodes.forEach((node) => {
      const nodeWithPosition = dagreGraph.node(node.id)

      node.position = {
        x: nodeWithPosition.x - (node.width || nodeWidth) / 2,
        y: nodeWithPosition.y - (node.height || nodeHeight) / 2,
      }

      return node
    })

    setNodes(nodes)
    setEdges(edges)
    // return { nodes, edges }
  }

  return { cleanLayout }
}
