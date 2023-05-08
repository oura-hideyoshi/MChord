import React from 'react'

import 'reactflow/dist/style.css'
import Header from '../../commons/Header'
import { Box } from '@mui/material'
import MainFlow from '../../commons/MainFlow'
import ToolBar from '../../commons/ToolBar'
import { Panel, ReactFlowProvider } from 'reactflow'
import SpeedDial from '../../commons/SpeedDial'

type Props = {}

const ChordFlow = ({ ...props }: Props) => {
  return (
    <div className="flex h-full flex-col">
      <Header />

      <Box flex={1} position={'relative'}>
        <ReactFlowProvider>
          <MainFlow />
          <Panel position="bottom-center">
            <ToolBar />
          </Panel>
          <Panel position="bottom-right">
            <SpeedDial />
          </Panel>
        </ReactFlowProvider>
      </Box>
    </div>
  )
}

export default ChordFlow
