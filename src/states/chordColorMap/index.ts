import { chordColorMap } from '@/type/ChordColorMap'
import { standardRomanNumerals } from '@/type/standardIntervals'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

export const defaultChordColorMap: chordColorMap = {
  I: '#222222',
  ii: '#222222',
  II: '#222222',
  iii: '#222222',
  III: '#222222',
  IV: '#222222',
  'IV#': '#222222',
  V: '#222222',
  vi: '#222222',
  VI: '#222222',
  vii: '#222222',
  VII: '#222222',
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
