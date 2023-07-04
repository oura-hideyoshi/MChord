import useDrag from '../../hooks/useDrag'
import { useState } from 'react'
import { Chord } from '@tonaljs/tonal'
import { Button, Flex, Input, Paper, createStyles } from '@mantine/core'

const useStyle = createStyles((theme) => ({
  node: {
    backgroundColor: theme.colors.smoke,
  },
}))

const ToolBar = () => {
  const [chordName, setChordName] = useState('')
  const [key, setKey] = useState('')
  let isValidChordName = !Chord.get(chordName).empty
  const { createDragChordNodeStartFnc } = useDrag()
  const onDragStart = createDragChordNodeStartFnc(chordName, key)

  const { classes } = useStyle()

  return (
    <Paper shadow="md">
      <Flex bg={'white'} align={'center'} gap={8}>
        {/* TODO btn */}
        {/* FIXME これではdimでもいけてしまう*/}
        <Button.Group orientation="vertical">
          <Button variant="outline">F</Button>
          <Button variant="outline">F</Button>
          <Button variant="outline">F</Button>
        </Button.Group>
        <Flex align={'center'} gap={8} p={16}>
          <div className={classes.node}>
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
          <Input size="md" value={chordName} onChange={(e) => setChordName(e.target.value)} />
        </Flex>
      </Flex>
    </Paper>
  )
}

export default ToolBar
