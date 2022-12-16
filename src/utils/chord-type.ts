import { Chord, ChordType } from '@tonaljs/tonal'
import { ChordType as ChordTypeType } from '@tonaljs/chord-type'

function filterChordType(filter: string[]): ChordTypeType[] {
  const all = ChordType.all().map((item) => item.aliases[0])

  let ans = all
  filter.forEach((item) => {
    const cts = Chord.extended(item)
    ans = ans.filter((item) => cts.includes(item))
  })
  return Array.from(ans).map(ChordType.get)
}

export default filterChordType
