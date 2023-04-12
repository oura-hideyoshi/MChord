import { Box, IconButton, Paper, PaperProps, Stack } from '@mui/material'
import { NodeTypes } from 'reactflow'

interface Props extends PaperProps {}

const ToolBar = ({ ...props }: Props) => {
  const onDragStart = (event: React.DragEvent, nodeType: keyof NodeTypes) => {
    event.dataTransfer.setData('application/reactflow', String(nodeType))
    event.dataTransfer.effectAllowed = 'move'
  }

  return (
    <Paper component={'aside'} {...props}>
      <Stack direction={'row'}>
        <Stack>
          <IconButton>a</IconButton>
          <IconButton>b</IconButton>
          <IconButton>c</IconButton>
        </Stack>
        <Box>
          <div onDragStart={(e) => onDragStart(e, 'default')} draggable style={{ padding: 40 }}>
            C
          </div>
        </Box>
      </Stack>
    </Paper>
  )
}

export default ToolBar
