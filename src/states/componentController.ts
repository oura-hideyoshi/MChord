import { atom } from 'recoil'

export const componentController = atom<{ toolbar: 'add' | 'edit' }>({
  key: 'componentController',
  default: { toolbar: 'add' },
})
