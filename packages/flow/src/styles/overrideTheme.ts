import { DefaultMantineColor, MantineThemeOverride, Tuple } from '@mantine/core'

// ---------- ADDITIONAL COLOR PROPERTIES--------
// 追加のカラーのうち、可変なもの.
// 色の名前ではなく、色の`概念`や、色が使われる`場所`を記名する
type AdditionalCustomColors = 'I'

// 使う追加のカラーのうち、固定のもの.
// 色の名前ではなく、色の`概念`や、色が使われる`場所`を記名する
type AdditionalConstantColors = 'brand' | 'white' | 'smoke'

// 追加カラーのdefault値
const extendedDefaultColor: {
  [key in AdditionalCustomColors | AdditionalConstantColors]: string
} = {
  I: '#8CA5AC',
  brand: '#12404E',
  white: '#FFFFFF',
  smoke: '#E9ECEF',
}

// ----------------

const COLOR_VARIATION_NUM = 10

// 予測変換にて追加で定義した色を出すための定義
declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<
      DefaultMantineColor | AdditionalCustomColors | AdditionalConstantColors,
      Tuple<string, 10> // Mantine の default theme をextends する以上、colorの配列の長さは10にしないといけない
    >
  }
}

function convertObjectValuesToArray<T>(obj: { [key: string]: T }): {
  [key: string]: T[]
} {
  const result: { [key: string]: T[] } = {}
  for (const key in obj) {
    result[key] = Array(COLOR_VARIATION_NUM).fill(obj[key])
  }
  return result
}

const overridedTheme: MantineThemeOverride = {
  black: '#3F3F46', // default black color used for char color.
  colors: convertObjectValuesToArray(extendedDefaultColor) as any,
  primaryColor: 'brand',
  primaryShade: 7,
}

export default overridedTheme
