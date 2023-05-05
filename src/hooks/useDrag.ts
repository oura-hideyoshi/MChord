import { useCallback } from 'react'
import { NodeTypes } from 'reactflow'

function useDrag() {
  const onDragChordNodeStart = (event: React.DragEvent, nodeType: keyof NodeTypes) => {
    event.dataTransfer.setData('application/reactflow', String(nodeType))
    event.dataTransfer.effectAllowed = 'move'
  }

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }, [])

  return { onDragStart: onDragChordNodeStart, onDragOver }
}

export default useDrag
