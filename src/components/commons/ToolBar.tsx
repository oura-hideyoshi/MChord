import { Box, IconButton, Paper, PaperProps, Stack } from '@mui/material'
import useDrag from '../../hooks/useDrag'

interface Props extends PaperProps {}

const ToolBar = ({ ...props }: Props) => {
  const { onDragStart } = useDrag()

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
