import { chordColorMap } from '@/type/ChordColorMap'
import { standardRomanNumerals } from '@/type/standardIntervals'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

export const defaultChordColorMap: chordColorMap = {
  I: '#fa5252',
  ii: '#e64980',
  II: '#be4bdb',
  iii: '#7950f2',
  III: '#4c6ef5',
  IV: '#228be6',
  'IV#': '#15aabf',
  V: '#12b886',
  vi: '#40c057',
  VI: '#82c91e',
  vii: '#fab005',
  VII: '#fd7e14',
}

export const chordColorMapAtom = atom<chordColorMap>({
  key: 'chordColorMapAtom',
  default: defaultChordColorMap,
})

export const useChordColorMap = () => {
  const colors = useRecoilValue(chordColorMapAtom)
  const setColors = useSetRecoilState(chordColorMapAtom)

  const setColor = (roman: standardRomanNumerals, color: string) => {
    setColors({ ...colors, [roman]: color })
  }

  const setAll = (color: string) => {
    const newColors: chordColorMap = { ...colors }
    for (const roman of Object.keys(colors) as standardRomanNumerals[]) {
      newColors[roman] = color
    }
    setColors(newColors)
  }

  return { colors, setColor, setAll }
}
