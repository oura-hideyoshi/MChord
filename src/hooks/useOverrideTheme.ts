import overridedTheme from '@/styles/overrideTheme'
import { MantineThemeOverride } from '@mantine/core'
import { useSetState } from '@mantine/hooks'

const useOverrideTheme = () => {
  const [theme, setTheme] = useSetState<MantineThemeOverride>(overridedTheme)
}
