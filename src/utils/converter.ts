import { Roman, RomanKey } from '@/const/charCode'

export function convertToRoman(input: string): string {
  // キーを長さの降順でソート（長いものから順に前方一致をチェック）
  const keys = (Object.keys(Roman) as RomanKey[]).sort((a, b) => b.length - a.length)

  for (const key of keys) {
    if (input.startsWith(key)) {
      return Roman[key] + convertToRoman(input.slice(key.length))
    }
  }

  return input
}
