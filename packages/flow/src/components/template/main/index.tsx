import React from 'react'

import 'reactflow/dist/style.css'
import Topbar from '../../commons/Header/Header'
import MainFlow from '../../commons/MainFlow/MainFlow'
import ToolBar from '../../commons/ToolBar'
import { Panel, ReactFlowProvider } from 'reactflow'
import { Stack } from '@mantine/core'
import Drawer from '@/components/commons/Drawer'

type Props = {}

const Main = ({ ...props }: Props) => {
  return (
    <Stack h={'100vh'}>
      <ReactFlowProvider>
        <Topbar />
        <MainFlow />
        <Panel position="bottom-center">
          <ToolBar />
        </Panel>
      </ReactFlowProvider>
      <Drawer />
    </Stack>
  )
}

export default Main
