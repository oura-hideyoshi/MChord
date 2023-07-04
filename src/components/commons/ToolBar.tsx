import { TextField, ToggleButton, ToggleButtonGroup } from '@mui/material'
import useDrag from '../../hooks/useDrag'
import { useState } from 'react'
import { Chord } from '@tonaljs/tonal'
import { Icon } from '@iconify/react'

const ToolBar = () => {
  const [chordName, setChordName] = useState('')
  const [key, setKey] = useState('')
  let isValidChordName = !Chord.get(chordName).empty
  const { createDragChordNodeStartFnc } = useDrag()
  const onDragStart = createDragChordNodeStartFnc(chordName, key)

  return (
    <aside className="select-none rounded-xl bg-white shadow-xl shadow-gray-500">
      <div className="flex">
        <ToggleButtonGroup exclusive orientation="vertical" value={0}>
          <ToggleButton className="h-8" value={0}>
            <Icon icon={'zondicons:add-outline'} />
          </ToggleButton>
          <ToggleButton className="h-8" value={1}>
            <Icon icon={'uil:edit'} />
          </ToggleButton>
          <ToggleButton className="h-8" value={2}>
            2
          </ToggleButton>
        </ToggleButtonGroup>
        {/* FIXME これではdimでもいけてしまう*/}
        <div
          className={`grid w-24  transition
        ${isValidChordName && 'hover:-translate-y-4 hover:cursor-grab'}
        `}
        >
          <div
            className={`grid h-12 scale-100 place-self-center rounded-full
             ${
               isValidChordName
                 ? 'bg-primary-500 text-white shadow-md shadow-gray-500'
                 : 'border border-dashed border-primary-500'
             }`}
            onDragStart={onDragStart}
            draggable={isValidChordName}
          >
            <p className="place-self-center p-1 text-2xl">{isValidChordName ? Chord.get(chordName).symbol : '?'}</p>
          </div>
        </div>
        <div className="grid px-4">
          <TextField
            className="place-self-center"
            size="small"
            value={chordName}
            onChange={(e) => setChordName(e.target.value)}
          />
        </div>
      </div>
    </aside>
  )
}

export default ToolBar
