import { chordColorMap, chordColorMapAtom, defaultChordColorMap } from '@/states/chordColorMap'
import { useLocalStorage, useLogger } from '@mantine/hooks'
import { useEffect } from 'react'
import { Edge, Node, useReactFlow } from 'reactflow'
import { useRecoilState } from 'recoil'

export const useStorage = () => {
  const { getNodes, getEdges, setNodes, setEdges } = useReactFlow()
  const [chordColorMap, setChordColorMap] = useRecoilState(chordColorMapAtom)
  const [localNodes, setLocalNodes] = useLocalStorage<Node[]>({ key: 'nodes', defaultValue: [] })
  const [localEdges, setLocalEdges] = useLocalStorage<Edge[]>({ key: 'edges', defaultValue: [] })
  const [localChordColorMap, setLocalChordColorMap] = useLocalStorage<chordColorMap>({
    key: 'chordColorMap',
    defaultValue: defaultChordColorMap,
  })
  useLogger('a', [localChordColorMap])

  function save() {
    const nodes = getNodes()
    const edges = getEdges()
    setLocalNodes(nodes)
    setLocalEdges(edges)
    setLocalChordColorMap(chordColorMap)
    console.log(`saved ${nodes.length} nodes and ${edges.length} edges and color map successfully!`)
  }

  function isValidStorage() {
    if (localNodes.length == 0 || localEdges.length == 0 || Object.keys(localChordColorMap).length == 0) return false
    else return true
  }

  function loadAndSet() {
    if (isValidStorage()) {
      setNodes(localNodes)
      setEdges(localEdges)

      setChordColorMap(localChordColorMap)
      console.log(`loaded ${localNodes.length} nodes and ${localEdges.length} edges and color map successfully!`)
    } else {
      return true
    }
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

  return { save, load, isValidStorage, loadAndSet, useInitialLoad }
}
