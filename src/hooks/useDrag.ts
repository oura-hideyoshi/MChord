import { DragEventHandler, useCallback } from 'react'
import { Chord } from '@tonaljs/chord'
import { ReactFlowInstance } from 'reactflow'
import { Node } from 'reactflow'
import { format } from '../const/dataTransfer'
import { createChordNode } from '../function/createNode'
import { nodeTypeNames } from '../const/nodeTypes'

function useDrag() {
  const createDragChordNodeStartFnc = (chordName: Chord['symbol']): DragEventHandler<HTMLDivElement> => {
    return (e) => onDragChordNodeStart(e, chordName)
  }
  const onDragChordNodeStart = (event: React.DragEvent, chordName: Chord['symbol']) => {
    event.dataTransfer.setData(format.chordData, String(chordName))
    event.dataTransfer.setData(format.nodeType, nodeTypeNames.ChordNode)
    event.dataTransfer.effectAllowed = 'move'
  }

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }, [])

  const createDropFnc = useCallback(
    (reactFlowInstance: ReactFlowInstance | null, callback: (newNode: Node) => void): React.DragEventHandler<HTMLDivElement> => {
      return (event: React.DragEvent) => {
        event.preventDefault()

        // 1. add chord info to new node
        const nodeType = event.dataTransfer.getData(format.nodeType)
        let newChordNode: Node | null = null
        switch (nodeType) {
          case nodeTypeNames.ChordNode:
            const chordName = event.dataTransfer.getData(format.chordData)
            newChordNode = createChordNode(chordName)
            break

          case nodeTypeNames.KeyTransNode:
            // TODO
            break

          default:
            return
        }

        // 2. add reactflow position info to new node
        const { offsetX, offsetY } = event.nativeEvent
        const position = reactFlowInstance!.project({
          x: offsetX,
          y: offsetY,
        })
        newChordNode!.position = position

        callback(newChordNode!)
      }
    },
    []
  )

  return { createDragChordNodeStartFnc, onDragChordNodeStart, onDragOver, createDropFnc }
}

export default useDrag
