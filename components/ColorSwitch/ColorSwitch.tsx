import React from 'react'
import useStyles from './ColorSwitch.styles'
import { Switch, Group, useMantineColorScheme } from '@mantine/core'
import { HiSun, HiMoon } from 'react-icons/hi'
const ColorSwitch = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const { classes, cx } = useStyles()

  return (
    <Group
      position="center"
      my={30}
    >
      <div className={classes.root}>
        <HiSun
          className={cx(classes.icon, classes.iconLight)}
          size={18}
        />
        <HiMoon
          className={cx(classes.icon, classes.iconDark)}
          size={18}
        />
        <Switch
          checked={colorScheme === 'dark'}
          onChange={() => toggleColorScheme()}
          size="md"
        />
      </div>
    </Group>
  )
}

export default ColorSwitch
