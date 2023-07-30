import { chordColorMap, draftChordType } from '@/type/ChordColorMap'
import { standardRomanNumerals } from '@/type/standardIntervals'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

export const defaultChordColorMap: chordColorMap = {
  I: { maj: '#000000', min: '#000000' },
  ii: { maj: '#000000', min: '#000000' },
  II: { maj: '#000000', min: '#000000' },
  iii: { maj: '#000000', min: '#000000' },
  III: { maj: '#000000', min: '#000000' },
  IV: { maj: '#000000', min: '#000000' },
  'IV#': { maj: '#000000', min: '#000000' },
  V: { maj: '#000000', min: '#000000' },
  vi: { maj: '#000000', min: '#000000' },
  VI: { maj: '#000000', min: '#000000' },
  vii: { maj: '#000000', min: '#000000' },
  VII: { maj: '#000000', min: '#000000' },
}

export const chordColorMapAtom = atom<chordColorMap>({
  key: 'chordColorMapAtom',
  default: defaultChordColorMap,
})

export const useChordColorMap = () => {
  const colors = useRecoilValue(chordColorMapAtom)
  const setColors = useSetRecoilState(chordColorMapAtom)

  const setColor = (roman: standardRomanNumerals, chordType: draftChordType, color: string) => {
    const newColors = JSON.parse(JSON.stringify(colors))
    newColors[roman][chordType] = color

    setColors(newColors)
  }

  const setRomanColor = (roman: standardRomanNumerals, color: string) => {
    const newColors = JSON.parse(JSON.stringify(colors))
    for (let chordType in newColors[roman]) {
      newColors[roman][chordType] = color
    }
    setColors(newColors)
  }

  const setChordTypeColor = (chordType: draftChordType, color: string) => {
    const newColors = JSON.parse(JSON.stringify(colors))
    for (let roman in newColors) {
      newColors[roman][chordType] = color
    }
    setColors(newColors)
  }

  return { colors, setColor, setRomanColor, setChordTypeColor }
}