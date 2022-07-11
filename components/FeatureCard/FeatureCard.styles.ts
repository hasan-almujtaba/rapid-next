import { createStyles } from '@mantine/core'

/**
 * Theming with emotion based css-in-js library
 * @see https://mantine.dev/theming/create-styles
 */
const useStyles = createStyles((theme) => ({
  container: {
    borderRadius: '4px',
    margin: 'auto',
    [theme.fn.largerThan('md')]: { width: '384px' },
    width: '100%',
    border: `1px solid ${theme.colorScheme === 'dark' ? '#8e9199' : '#74777f'}`,
    padding: '8px',
    textAlign: 'center',
  },
}))

export default useStyles
