import { romanNumerals } from '@/const/interval'
import { useDrawerHandler } from '@/states/componentController'
import { convertToRoman } from '@/utils/converter'
import { Box, ColorInput, ColorPicker, Drawer as MantineDrawer, Popover, Table } from '@mantine/core'

type Props = {}

const Drawer = ({ ...props }: Props) => {
  const { opened, handler } = useDrawerHandler()

  return (
    <MantineDrawer size={'lg'} position="right" opened={opened} onClose={handler.close} withOverlay={false}>
      <MantineDrawer.Header>
        <MantineDrawer.Title>title</MantineDrawer.Title>
      </MantineDrawer.Header>
      <MantineDrawer.Body>
        <Table>
          <thead>
            {romanNumerals.map((r) => (
              <th key={r}>{convertToRoman(r)}</th>
            ))}
          </thead>
          <tbody>
            <tr>
              <td>
                <ColorSelectorCell value="#222222" target={{ alias: '', roman: '' }} />
              </td>
              <td>
                <ColorSelectorCell value="#222222" target={{ alias: '', roman: '' }} />
              </td>
              <td>
                <ColorSelectorCell value="#222222" target={{ alias: '', roman: '' }} />
              </td>
              <td>
                <ColorSelectorCell value="#222222" target={{ alias: '', roman: '' }} />
              </td>
              <td>
                <ColorSelectorCell value="#222222" target={{ alias: '', roman: '' }} />
              </td>
              <td>
                <ColorSelectorCell value="#222222" target={{ alias: '', roman: '' }} />
              </td>
              <td>
                <ColorSelectorCell value="#222222" target={{ alias: '', roman: '' }} />
              </td>
            </tr>
          </tbody>
        </Table>
      </MantineDrawer.Body>
    </MantineDrawer>
  )
}

interface ColorSelectorCellProps {
  value: string
  target: {
    roman: string
    alias: string
  }
  onChange?: (target: { roman: string; alias: string }, value: string) => void
}
const ColorSelectorCell = (props: ColorSelectorCellProps) => {
  const handleChange = (value: string) => {
    props.onChange && props.onChange({ roman: props.target.roman, alias: props.target.alias }, value)
  }
  return (
    <Popover>
      <Popover.Target>
        <Box h={20} w={20} sx={(theme) => ({ backgroundColor: 'black', borderRadius: theme.radius.sm })} />
      </Popover.Target>
      <Popover.Dropdown>
        <ColorPicker
          format="hex"
          value={props.value}
          swatches={[
            '#25262b',
            '#868e96',
            '#fa5252',
            '#e64980',
            '#be4bdb',
            '#7950f2',
            '#4c6ef5',
            '#228be6',
            '#15aabf',
            '#12b886',
            '#40c057',
            '#82c91e',
            '#fab005',
            '#fd7e14',
          ]}
          onChange={handleChange}
        />
        <ColorInput w={200} value={props.value} withPicker={false} onChange={handleChange} />
      </Popover.Dropdown>
    </Popover>
  )
}

export default Drawer
