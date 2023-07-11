import { romanNumerals } from '@/const/interval'
import { useSetState } from '@mantine/hooks'

const draftChordType = ['maj', 'min'] as const
type draftChordType = (typeof draftChordType)[number]

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

const useChordColorMap = () => {
  const [colors, setColors] = useSetState<chordColorMap>(defaultChordColorMap)
}
