import { createStyles } from '@mantine/core'

/**
 * Theming with emotion based css-in-js library
 * @see https://mantine.dev/theming/create-styles
 */
const useStyles = createStyles(() => ({
  title: { textAlign: 'center' },

  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
}))

export default useStyles
