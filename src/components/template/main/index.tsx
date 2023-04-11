import React from 'react'

import 'reactflow/dist/style.css'
import Header from '../../commons/Header'
import { Box, Stack } from '@mui/material'
import MainFlow from '../../commons/MainFlow'
import ToolBar from '../../commons/ToolBar'

type Props = {}

const ChordFlow = ({ ...props }: Props) => {
  return (
    <Stack height={'100%'}>
      <Box>
        <Header />
      </Box>
      <Box flex={1} position={'relative'}>
        <MainFlow />
        <ToolBar sx={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translate(-50%, 0%)' }} />
      </Box>
    </Stack>
  )
}

export default ChordFlow
