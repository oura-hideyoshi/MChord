import React from 'react'

import 'reactflow/dist/style.css'
import Header from '../../commons/Header'
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import MainFlow from '../../commons/MainFlow'
import ToolBar from '../../commons/ToolBar'
import { Panel, ReactFlowProvider } from 'reactflow'
import Link from 'next/link'

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
            <SpeedDial ariaLabel={'speed dial'} icon={<SpeedDialIcon />}>
              <SpeedDialAction
                tooltipTitle={'機能要望フォーム(外部リンク)'}
                icon={
                  <Link
                    target="_blank"
                    href={
                      'https://docs.google.com/forms/d/e/1FAIpQLSeVCxpy8Qf7fWcsJGzYwn7CUfe-j-YopakNRQKG6AAwVwcnEw/viewform?usp=sf_link'
                    }
                  >
                    ?
                  </Link>
                }
              />
            </SpeedDial>
          </Panel>
        </ReactFlowProvider>
      </Box>
    </div>
  )
}

export default ChordFlow
