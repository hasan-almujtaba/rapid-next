import {
  AppShell,
  Header,
  Text,
  useMantineTheme,
  useMantineColorScheme,
} from '@mantine/core'
import { DefaultLayout } from '../../types/layout'
import ColorSwitch from '../ColorSwitch/ColorSwitch'

const DefaultLayout = ({ children }: DefaultLayout) => {
  /**
   * Use mantine theme and color scheme
   */
  const { colors } = useMantineTheme()
  const { colorScheme } = useMantineColorScheme()

  return (
    <AppShell
      styles={{
        main: {
          background: colorScheme === 'dark' ? colors.dark[8] : colors.gray[0],
        },
      }}
      fixed
      header={
        <Header
          height={70}
          p="md"
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              justifyContent: 'space-between',
            }}
          >
            <Text sx={() => ({ cursor: 'pointer' })}>Next Starter</Text>

            <ColorSwitch />
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  )
}

export default DefaultLayout
