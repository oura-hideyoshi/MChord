import useDrag from '../../hooks/useDrag'
import { Chord } from '@tonaljs/tonal'
import { Box, Center, Paper, Tabs, TextInput, createStyles, rem } from '@mantine/core'
import { Icon } from '@iconify/react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { nodeSelector } from '@/states/nodeSelector'
import { Node, useReactFlow } from 'reactflow'
import { ChordNodeData } from '@/type/NodeData'
import { useInputState, useShallowEffect } from '@mantine/hooks'
import { toolbarController } from '@/states/componentController'
import { TabsProviderProps } from '@mantine/core/lib/Tabs/TabsProvider'
import { ChangeEventHandler } from 'react'

const useStyle = createStyles((theme) => ({
  node: {
    backgroundColor: theme.colors.white,
    padding: 2,
    width: 'fit-content',
    border: '1px dashed black',
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& span': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: 80,
      height: 40,
    },
  },
  validNode: {
    backgroundColor: theme.colors.smoke,
    boxShadow: `0px 4px 6px ${theme.colors.gray[5]}`,
    border: 'none',
    cursor: 'grab',
    ':hover': {
      transition: '100ms',
      transform: `translateY(${rem(-8)})`,
    },
  },
  tabPanelContainer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    padding: 8,
    fontWeight: 'bold',
  },
}))

const ToolBar = () => {
  const { classes } = useStyle()
  const [state, setState] = useRecoilState(toolbarController)

  const onTabChange: TabsProviderProps['onTabChange'] = (v) => {
    setState({ command: v as 'add' | 'edit' })
  }

  return (
    <Paper shadow="md">
      <Tabs orientation="vertical" value={state.command} w={400} onTabChange={onTabChange}>
        <Tabs.List>
          <Tabs.Tab value="add" icon={<Icon icon={'zondicons:add-outline'} />} />
          <Tabs.Tab value="edit" icon={<Icon icon={'uil:edit'} />} />
        </Tabs.List>
        <Tabs.Panel value="add" className={classes.tabPanelContainer}>
          <AddNode />
        </Tabs.Panel>
        <Tabs.Panel value="edit" className={classes.tabPanelContainer}>
          <EditNode />
        </Tabs.Panel>
      </Tabs>
    </Paper>
  )
}

const AddNode = () => {
  const [chordName, setChordName] = useInputState('')
  const [key, setKey] = useInputState('')
  let isValidChordName = !Chord.get(chordName).empty
  const { createDragChordNodeStartFnc } = useDrag()
  const onDragStart = createDragChordNodeStartFnc(chordName, key)

  const { classes } = useStyle()

  return (
    <>
      <Box miw={100}>
        <Center>
          <div
            className={`${classes.node} ${isValidChordName && classes.validNode}`}
            onDragStart={onDragStart}
            draggable={isValidChordName}
          >
            <span>{isValidChordName ? Chord.get(chordName).symbol : '?'}</span>
          </div>
        </Center>
      </Box>
      <TextInput size="md" value={chordName} onChange={setChordName} />
    </>
  )
}

const EditNode = () => {
  const selectedNodeId = useRecoilValue(nodeSelector)
  const { getNode } = useReactFlow()
  const { classes } = useStyle()

  const [chordName, setChordName] = useInputState('')
  const { setNodes } = useReactFlow()

  let isValidChordName = !Chord.get(chordName).empty

  const node = getNode(selectedNodeId) as Node<ChordNodeData> | undefined

  useShallowEffect(() => {
    setChordName(node?.data.chordName || '')
  }, [selectedNodeId])

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value
    isValidChordName = !Chord.get(value).empty
    if (isValidChordName && node) {
      console.log('value', value)
      setNodes((nds) => {
        node.data.chordName = value
        return nds.map((nd) => (nd.id == selectedNodeId ? node : nd))
      })
    }
    setChordName(value)
  }

  const isDisabled = selectedNodeId == ''
  return (
    <>
      <Box miw={100}>
        <Center>
          <div className={`${classes.node} `}>
            <span>{isValidChordName ? Chord.get(chordName).symbol : '?'}</span>
          </div>
        </Center>
      </Box>
      <TextInput disabled={isDisabled} size="md" value={chordName} onChange={onChange} />
    </>
  )
}

export default ToolBar
