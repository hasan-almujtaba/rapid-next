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
import { BsSunFill, BsMoonFill, BsGithub } from 'react-icons/bs'
import Link from 'next/link'

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
          <MediaQuery
            largerThan="md"
            styles={{ display: 'none' }}
          >
            <Button<'a'>
              component="a"
              target="_blank"
              href="https://github.com/hasan-almujtaba/next-starter"
              leftIcon={<BsGithub />}
            >
              View on Github
            </Button>
          </MediaQuery>
        </Navbar>
      }
      footer={
        <Footer
          height={60}
          p="md"
        >
          Footer
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

            <Link href="/">
              <Text sx={() => ({ cursor: 'pointer' })}>Next Starter</Text>
            </Link>

            <div style={{ flexGrow: 1 }}></div>

            <MediaQuery
              smallerThan="lg"
              styles={{ display: 'none' }}
            >
              <Button<'a'>
                component="a"
                href="https://github.com/hasan-almujtaba/next-starter"
                variant="subtle"
                leftIcon={<BsGithub />}
                sx={() => ({
                  marginRight: '10px',
                })}
                target="_blank"
              >
                View on Github
              </Button>
            </MediaQuery>

            <Button
              variant="subtle"
              color={colorScheme === 'dark' ? 'yellow' : 'dark'}
              onClick={() => toggleColorScheme()}
            >
              {colorScheme === 'dark' ? (
                <BsSunFill size="24" />
              ) : (
                <BsMoonFill size="24" />
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
