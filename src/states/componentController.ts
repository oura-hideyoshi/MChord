import { atom, useRecoilState, useSetRecoilState } from 'recoil'

export const toolbarController = atom<{ command: 'add' | 'edit' }>({
  key: 'toolbarController',
  default: { command: 'add' },
})

export const drawerController = atom<{ opened: boolean }>({
  key: 'drawerController',
  default: { opened: false },
})

export const useDrawerHandler = () => {
  const [{ opened }] = useRecoilState(drawerController)
  const setOpened = useSetRecoilState(drawerController)

  const handler = {
    toggle: () => {
      setOpened((prevState) => ({ ...prevState, opened: !prevState.opened }))
    },
    open: () => {
      setOpened((prevState) => ({ ...prevState, opened: true }))
    },
    close: () => {
      setOpened((prevState) => ({ ...prevState, opened: false }))
    },
  }

  return { opened, handler }
}
