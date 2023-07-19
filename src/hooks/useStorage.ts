import { useLocalStorage } from '@mantine/hooks'
import { useEffect } from 'react'
import { Edge, Node, useReactFlow } from 'reactflow'

export const useStorage = () => {
  const { getNodes, getEdges, setNodes, setEdges } = useReactFlow()
  const [localNodes, setLocalNodes] = useLocalStorage<Node[]>({ key: 'nodes', defaultValue: [] })
  const [localEdges, setLocalEdges] = useLocalStorage<Edge[]>({ key: 'edges', defaultValue: [] })

  function save() {
    const nodes = getNodes()
    const edges = getEdges()
    setLocalNodes(nodes)
    setLocalEdges(edges)
    console.log(`saved ${nodes.length} nodes and ${edges.length} edges successfully!`)
  }

  function loadAndSet() {
    if (localNodes.length == 0 || localEdges.length == 0) return false

    setNodes(localNodes)
    setEdges(localEdges)
    console.log(`loaded ${localNodes.length} nodes and ${localEdges.length} edges successfully!`)

    return true
  }

  function load() {
    return { nodes: localNodes, edges: localEdges }
  }

  function useInitialLoad() {
    useEffect(() => {
      loadAndSet()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localNodes])
  }

  return { save, load, loadAndSet, useInitialLoad }
}
