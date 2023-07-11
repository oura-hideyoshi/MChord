// 1からM7までの度数
export const degrees = ['1P', '2m', '2M', '3m', '3M', '4P', '4A', '5P', '6m', '6M', '7m', '7M'] as const
export type degrees = (typeof degrees)[number]

export const romanNumerals = ['I', 'ii', 'II', 'iii', 'III', 'IV', 'IV#', 'V', 'vi', 'VI', 'vii', 'VII'] as const
export type romanNumerals = (typeof romanNumerals)[number]
