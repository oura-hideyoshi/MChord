import React from 'react'

import 'reactflow/dist/style.css'
import Header from '../../commons/Header'
import { Box } from '@mui/material'
import MainFlow from '../../commons/MainFlow'
import ToolBar from '../../commons/ToolBar'
import { ReactFlowProvider } from 'reactflow'

type Props = {}

const ChordFlow = ({ ...props }: Props) => {
  return (
    <div className="flex h-full flex-col">
      <Header />

      <Box flex={1} position={'relative'}>
        <ReactFlowProvider>
          <MainFlow />
          <ToolBar sx={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translate(-50%, 0%)' }} />
        </ReactFlowProvider>
      </Box>
    </div>
  )
}

export default ChordFlow
