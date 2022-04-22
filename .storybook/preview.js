import React from 'react'
import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/core'
import { withConsole} from '@storybook/addon-console'
import { withA11y } from '@storybook/addon-a11y'
import { addDecorator } from '@storybook/react'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(withA11y)

export const decorators = [(Story) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Box m='4'>
      <Story />
    </Box>
  </ThemeProvider>
)]