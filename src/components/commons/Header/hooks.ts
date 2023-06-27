import { useReactFlow } from 'reactflow'
import dagre from 'dagre'

export const useReactflowLayout = (direction = 'LR') => {
  const { getNodes, getEdges, setNodes, setEdges, fitView } = useReactFlow()

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
    setTimeout(() => {
      fitView({ duration: 1000 })
    }, 1)
  }

  return { cleanLayout }
}

export const useStorage = () => {
  const { getNodes, getEdges, setNodes, setEdges } = useReactFlow()

  function save() {
    const nodes = getNodes()
    const edges = getEdges()
    localStorage.setItem('nodes', JSON.stringify(nodes))
    localStorage.setItem('edges', JSON.stringify(edges))
    console.log(`saved ${nodes.length} nodes and ${edges.length} edges successfully!`)
  }

  function load() {
    const nodes = JSON.parse(localStorage.getItem('nodes') || '[]')
    const edges = JSON.parse(localStorage.getItem('edges') || '[]')
    setNodes(nodes)
    setEdges(edges)
    console.log(`loaded ${nodes.length} nodes and ${edges.length} edges successfully!`)
  }

  return { save, load }
}
