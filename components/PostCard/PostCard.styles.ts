import { createStyles } from '@mantine/core'

/**
 * Theming with emotion based css-in-js library
 * @see https://mantine.dev/theming/create-styles
 */
const useStyles = createStyles(() => ({
  card: {
    borderRadius: '8px',
    width: '300px',
    flexGrow: 1,
  },
}))

export default useStyles
