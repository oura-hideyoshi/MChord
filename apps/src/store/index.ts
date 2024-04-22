import { create } from 'zustand'

type DisplayController = {
  isRoman: boolean
  toggleIsRoman: () => void
}

export const useDisplayController = create<DisplayController>((set) => ({
  isRoman: false,
  toggleIsRoman: () => set((state) => ({ isRoman: !state.isRoman })),
}))
