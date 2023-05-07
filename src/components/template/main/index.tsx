import React from 'react'

import 'reactflow/dist/style.css'
import Header from '../../commons/Header'
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import MainFlow from '../../commons/MainFlow'
import ToolBar from '../../commons/ToolBar'
import { Panel, ReactFlowProvider } from 'reactflow'

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
            <SpeedDial
              onClick={() => window.open('https://docs.google.com/forms/d/1ZpW7FyyuEaaBYgFh206N-dUXkNw8QnpO7mxkhM6q5Zs/edit')}
              ariaLabel={'speed dial'}
              icon={<SpeedDialIcon />}
            >
              <SpeedDialAction className="hover:text-black" tooltipTitle={'機能要望フォーム(外部リンク)'} icon={'?'} />
            </SpeedDial>
          </Panel>
        </ReactFlowProvider>
      </Box>
    </div>
  )
}

export default ChordFlow
