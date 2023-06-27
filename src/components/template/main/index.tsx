import React from 'react'

import 'reactflow/dist/style.css'
import Header from '../../commons/Header/Header'
import { Box } from '@mui/material'
import MainFlow from '../../commons/MainFlow/MainFlow'
import ToolBar from '../../commons/ToolBar'
import { Panel, ReactFlowProvider } from 'reactflow'
import SpeedDial from '../../commons/SpeedDial'

type Props = {}

const ChordFlow = ({ ...props }: Props) => {
  return (
    <div className="flex h-full flex-col">
      <ReactFlowProvider>
        <Header />

        <Box flex={1} position={'relative'}>
          <MainFlow />
          <Panel position="bottom-center">
            <ToolBar />
          </Panel>
          <Panel position="bottom-right">
            <SpeedDial />
          </Panel>
        </Box>
      </ReactFlowProvider>
    </div>
  )
}

export default ChordFlow
