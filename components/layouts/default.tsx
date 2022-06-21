import React, { useState } from 'react'
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  useMantineColorScheme,
  Button,
} from '@mantine/core'
import { DefaultLayout } from '../../types/layout'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'

const DefaultLayout = ({ children }: DefaultLayout) => {
  /**
   * Use mantine theme and color scheme
   */
  const { colors } = useMantineTheme()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  /**
   * Toggle Navbar visibility
   */
  const [opened, setOpened] = useState(false)

  return (
    <AppShell
      styles={{
        main: {
          background: colorScheme === 'dark' ? colors.dark[8] : colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="xl"
      fixed
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="xl"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Text>Application navbar</Text>
        </Navbar>
      }
      footer={
        <Footer
          height={60}
          p="md"
        >
          Application footer
        </Footer>
      }
      header={
        <Header
          height={70}
          p="md"
        >
          <div
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <MediaQuery
              largerThan="md"
              styles={{ display: 'none' }}
            >
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Application header</Text>

            <div style={{ flexGrow: 1 }}></div>

            <Button
              variant="subtle"
              color={colorScheme === 'dark' ? 'yellow' : 'dark'}
            >
              {colorScheme === 'dark' ? (
                <BsSunFill
                  size="24"
                  onClick={() => toggleColorScheme()}
                />
              ) : (
                <BsMoonFill
                  size="24"
                  onClick={() => toggleColorScheme()}
                />
              )}
            </Button>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  )
}

export default DefaultLayout
