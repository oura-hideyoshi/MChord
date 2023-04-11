import { Box, IconButton, Paper, PaperProps, Stack } from '@mui/material'

interface Props extends PaperProps {}

const ToolBar = ({ ...props }: Props) => {
  return (
    <Paper component={'aside'} {...props}>
      <Stack direction={'row'}>
        <Stack>
          <IconButton>a</IconButton>
          <IconButton>b</IconButton>
          <IconButton>c</IconButton>
        </Stack>
        <Box>toolが入る予定</Box>
      </Stack>
    </Paper>
  )
}

export default ToolBar
