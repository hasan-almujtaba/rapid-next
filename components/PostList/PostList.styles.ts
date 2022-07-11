import { createStyles } from '@mantine/core'

/**
 * Theming with emotion based css-in-js library
 * @see https://mantine.dev/theming/create-styles
 */
const useStyles = createStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '10px',
  },
}))

export default useStyles
