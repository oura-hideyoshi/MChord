import { useDisplayController } from '../../../store'
import Link from 'next/link'
import URL from '../../../const/URL'
import { useReactflowLayout } from './hooks'
import { useStorage } from '@/hooks/useStorage'
import { useReactFlow } from 'reactflow'
import { Burger, Button, Flex, Header, Switch, Text, Tooltip, createStyles, rem } from '@mantine/core'
import { useRecoilValue } from 'recoil'
import { nodeSelector } from '@/states/nodeSelector'
import { useDrawerHandler } from '@/states/componentController'

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.brand,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  },
  appIcon: {
    backgroundColor: theme.white,
    display: 'flex',
    width: 'fit-content',
    borderRadius: rem(16 * 1),
    textDecoration: 'none',
    color: theme.colors.brand,
  },
}))

type Props = {}

const Topbar = ({ ...props }: Props) => {
  const { isRoman, toggleIsRoman } = useDisplayController()
  const { cleanLayout } = useReactflowLayout()
  const { save, loadAndSet } = useStorage()
  const { getNodes, getEdges } = useReactFlow()
  const selectedNodeId = useRecoilValue(nodeSelector)
  const { opened, handler } = useDrawerHandler()

  const { classes } = useStyles()

  return (
    <Header p={8} className={classes.header} height={'fit-content'}>
      <Link href={URL.homepage} style={{ textDecoration: 'none' }}>
        <Tooltip label={'HPを開きます'}>
          <Text p={16} py={8} className={classes.appIcon} weight={'bold'} size={'xl'}>
            MChord
          </Text>
        </Tooltip>
      </Link>
      <Flex gap={'xs'} align={'center'}>
        dev:
        <Button color="teal" onClick={() => console.log(getNodes())}>
          nodes
        </Button>
        <Button color="teal" onClick={() => console.log(getEdges())}>
          edges
        </Button>
        <Text>{selectedNodeId}</Text>
      </Flex>
      <Flex align={'center'} gap={'xs'}>
        <Button color="teal" onClick={save}>
          save
        </Button>
        <Button color="teal" onClick={loadAndSet}>
          load
        </Button>
        <Button color="teal" onClick={cleanLayout}>
          layout
        </Button>
        <Flex align={'center'}>
          <Switch
            size="lg"
            color="teal"
            checked={isRoman}
            onChange={toggleIsRoman}
            onLabel={<Text>I#</Text>}
            offLabel={<Text>C#</Text>}
          />
        </Flex>
      </Flex>
      <Burger color="white" opened={opened} onClick={handler.toggle} />
    </Header>
  )
}

export default Topbar
