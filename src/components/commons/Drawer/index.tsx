import { standardRomanNumerals } from '@/type/standardIntervals'
import { useChordColorMap } from '@/states/chordColorMap'
import { useDrawerHandler } from '@/states/componentController'
import { convertToRoman } from '@/utils/converter'
import { ActionIcon, Box, ColorInput, ColorPicker, Drawer as MantineDrawer, Popover, Table } from '@mantine/core'
import React, { useCallback } from 'react'

const swatches = [
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
]

type Props = {}

const Drawer = ({ ...props }: Props) => {
  const { opened, handler } = useDrawerHandler()
  const { colors, setColor, setAll } = useChordColorMap()

  const handleChangeAllColors = (v: string) => {
    setAll(v)
  }

  return (
    <MantineDrawer size={'lg'} position="right" opened={opened} onClose={handler.close} withOverlay={false}>
      <MantineDrawer.Header>
        <MantineDrawer.Title>title</MantineDrawer.Title>
      </MantineDrawer.Header>
      <MantineDrawer.Body>
        <Table>
          <thead>
            <th />
            {standardRomanNumerals.map((roman) => (
              <th key={roman}>
                <ActionIcon m={'auto'}>{convertToRoman(roman)}</ActionIcon>
              </th>
            ))}
          </thead>
          <tbody>
            <tr>
              <td>
                <Popover>
                  <Popover.Target>
                    <ActionIcon>全</ActionIcon>
                  </Popover.Target>
                  <Popover.Dropdown>
                    <ColorPicker swatches={swatches} onChange={handleChangeAllColors} />
                  </Popover.Dropdown>
                </Popover>
              </td>
              {standardRomanNumerals.map((roman) => (
                <td key={roman}>
                  <ColorSelectorCell value={colors[roman]} target={roman} onChange={setColor} />
                </td>
              ))}
            </tr>
          </tbody>
        </Table>
      </MantineDrawer.Body>
    </MantineDrawer>
  )
}

interface ColorSelectorCellProps {
  value: string
  target: standardRomanNumerals
  onChange?: (target: standardRomanNumerals, value: string) => void
}
const ColorSelectorCell = React.memo((props: ColorSelectorCellProps) => {
  const handleChange = useCallback(
    (value: string) => {
      props.onChange && props.onChange(props.target, value)
    },
    [props]
  )

  return (
    <Popover>
      <Popover.Target>
        <Box h={20} w={20} sx={(theme) => ({ backgroundColor: props.value, borderRadius: theme.radius.sm })} />
      </Popover.Target>
      <Popover.Dropdown>
        <ColorPicker format="hex" value={props.value} swatches={swatches} onChange={handleChange} />
        <ColorInput w={200} value={props.value} withPicker={false} onChange={handleChange} />
      </Popover.Dropdown>
    </Popover>
  )
})

ColorSelectorCell.displayName = 'ColorSelectorCell'

export default Drawer
