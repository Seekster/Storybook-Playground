import { app } from '@storybook/vue3'
import { Quasar } from 'quasar'

app.use(Quasar, {})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
