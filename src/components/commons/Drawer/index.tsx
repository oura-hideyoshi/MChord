import { romanNumerals } from '@/type/interval'
import { useChordColorMap } from '@/states/chordColorMap'
import { useDrawerHandler } from '@/states/componentController'
import { convertToRoman } from '@/utils/converter'
import { ActionIcon, Box, ColorInput, ColorPicker, Drawer as MantineDrawer, Popover, Table } from '@mantine/core'
import React, { useCallback } from 'react'
import { draftChordType } from '@/type/ChordColorMap'

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
  const { colors, setColor, setRomanColor, setChordTypeColor } = useChordColorMap()

  const handleChangeColColors = (roman: romanNumerals, v: string) => {
    setRomanColor(roman, v)
  }
  const handleChangeRowColors = (chordType: draftChordType, v: string) => {
    setChordTypeColor(chordType, v)
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
            {romanNumerals.map((roman) => (
              <th key={roman}>
                <Popover>
                  <Popover.Target>
                    <ActionIcon m={'auto'}>{convertToRoman(roman)}</ActionIcon>
                  </Popover.Target>
                  <Popover.Dropdown>
                    <ColorPicker swatches={swatches} onChange={(color) => handleChangeColColors(roman, color)} />
                  </Popover.Dropdown>
                </Popover>
              </th>
            ))}
          </thead>
          <tbody>
            {draftChordType.map((chord) => (
              <tr key={chord}>
                <td>
                  <Popover>
                    <Popover.Target>
                      <ActionIcon>{chord}</ActionIcon>
                    </Popover.Target>
                    <Popover.Dropdown>
                      <ColorPicker swatches={swatches} onChange={(color) => handleChangeRowColors(chord, color)} />
                    </Popover.Dropdown>
                  </Popover>
                </td>
                {romanNumerals.map((roman) => (
                  <td key={roman}>
                    <ColorSelectorCell
                      value={colors[roman][chord]}
                      target={{ alias: chord, roman: roman }}
                      onChange={(target, color) => setColor(target.roman, target.alias, color)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </MantineDrawer.Body>
    </MantineDrawer>
  )
}

interface ColorSelectorCellProps {
  value: string
  target: {
    roman: romanNumerals
    alias: draftChordType
  }
  onChange?: (target: { roman: romanNumerals; alias: draftChordType }, value: string) => void
}
const ColorSelectorCell = React.memo((props: ColorSelectorCellProps) => {
  const handleChange = useCallback(
    (value: string) => {
      props.onChange && props.onChange({ roman: props.target.roman, alias: props.target.alias }, value)
    },
    [props.onChange, props.target]
  )

  return (
    <Popover>
      <Popover.Target>
        <Box h={20} w={20} sx={(theme) => ({ backgroundColor: props.value, borderRadius: theme.radius.sm })} />
      </Popover.Target>
      <Popover.Dropdown>
        <ColorPicker format="hex" value={'#fa5252'} swatches={swatches} onChange={handleChange} />
        <ColorInput w={200} value={props.value} withPicker={false} onChange={handleChange} />
      </Popover.Dropdown>
    </Popover>
  )
})

ColorSelectorCell.displayName = 'ColorSelectorCell'

export default Drawer
