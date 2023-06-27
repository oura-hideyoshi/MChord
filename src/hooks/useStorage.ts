import { useReactFlow } from 'reactflow'

export const useStorage = () => {
  const { getNodes, getEdges, setNodes, setEdges } = useReactFlow()

  function save() {
    const nodes = getNodes()
    const edges = getEdges()
    localStorage.setItem('nodes', JSON.stringify(nodes))
    localStorage.setItem('edges', JSON.stringify(edges))
    console.log(`saved ${nodes.length} nodes and ${edges.length} edges successfully!`)
  }

  function loadAndSet() {
    const nodesStr = localStorage.getItem('nodes')
    const edgesStr = localStorage.getItem('edges')
    if (nodesStr == null || edgesStr == null) return false

    const nodes = JSON.parse(nodesStr)
    const edges = JSON.parse(edgesStr)
    setNodes(nodes)
    setEdges(edges)
    console.log(`loaded ${nodes.length} nodes and ${edges.length} edges successfully!`)

    return true
  }

  function load() {
    const nodesStr = localStorage.getItem('nodes')
    const edgesStr = localStorage.getItem('edges')

    const nodes = JSON.parse(nodesStr || '[]')
    const edges = JSON.parse(edgesStr || '[]')

    return { nodes, edges }
  }

  function checkStorage() {
    const nodesStr = localStorage.getItem('nodes')
    const edgesStr = localStorage.getItem('edges')
    return nodesStr == null || edgesStr == null
  }

  return { save, load, loadAndSet, checkStorage }
}
