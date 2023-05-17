import { NodeChange } from 'reactflow'

let isMoving = false

const onNodeUpdate = (changes: NodeChange[], callback: (chg: NodeChange[]) => void) => {
  if (isOnlyDraggingStart(changes)) isMoving = true

  if (isNodeUpdate(changes)) {
    callback(changes)
    isMoving = false
  }
}

function isOnlyDraggingStart(changes: NodeChange[]) {
  return changes.find((i) => isNodeDragStart(i))
}

function isNodeUpdate(changes: NodeChange[]) {
  return changes.find((i) => isNodeDragEnd(i) || isAddingNode(i) || isRemovalNode(i))
}

function isNodeDragStart(chg: NodeChange) {
  return chg.type == 'position' && chg.dragging == true
}

function isNodeDragEnd(chg: NodeChange) {
  return chg.type == 'position' && chg.dragging == false && isMoving
}

function isAddingNode(chg: NodeChange) {
  return chg.type == 'add'
}

function isRemovalNode(chg: NodeChange) {
  return chg.type == 'remove'
}

export default onNodeUpdate
