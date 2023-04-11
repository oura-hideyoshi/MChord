import React from 'react'

import 'reactflow/dist/style.css'
import Header from '../../commons/Header'
import { Box, Stack } from '@mui/material'
import MainFlow from '../../commons/MainFlow'

type Props = {}

const ChordFlow = ({ ...props }: Props) => {
  return (
    <Stack height={'100%'}>
      <Box>
        <Header />
      </Box>
      <Box flex={1}>
        <MainFlow />
      </Box>
    </Stack>
  )
}

export default ChordFlow
