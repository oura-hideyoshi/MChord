import { DragEventHandler, useCallback } from 'react'
import { Chord } from '@tonaljs/chord'

function useDrag() {
  const createDragChordNodeStartFnc = (chordName: Chord['symbol']): DragEventHandler<HTMLDivElement> => {
    return (e) => onDragChordNodeStart(e, chordName)
  }
  const onDragChordNodeStart = (event: React.DragEvent, chordName: Chord['symbol']) => {
    event.dataTransfer.setData('application/reactflow', String(chordName))
    event.dataTransfer.effectAllowed = 'move'
  }

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }, [])

  return { createDragChordNodeStartFnc, onDragChordNodeStart, onDragOver }
}

export default useDrag
