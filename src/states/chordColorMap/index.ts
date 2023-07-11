import { romanNumerals } from '@/const/interval'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

export const draftChordType = ['maj', 'min'] as const
export type draftChordType = (typeof draftChordType)[number]

type chordColorMap = { [key in romanNumerals]: { [key in draftChordType]: string } }
const defaultChordColorMap: chordColorMap = {
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
  key: 'toolbarController',
  default: defaultChordColorMap,
})

export const useChordColorMap = () => {
  const colors = useRecoilValue(chordColorMapAtom)
  const setColors = useSetRecoilState(chordColorMapAtom)

  const setColor = (roman: romanNumerals, chordType: draftChordType, color: string) => {
    const newColors = JSON.parse(JSON.stringify(colors))
    newColors[roman][chordType] = color

    setColors(newColors)
  }
  return { colors, setColor }
}
