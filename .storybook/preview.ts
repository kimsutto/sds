import type { Preview } from '@storybook/react-vite'
import '../src/tokens/tokens.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#F7F7F9' },
        { name: 'white', value: '#FFFFFF' },
        { name: 'dark', value: '#1E1F24' },
      ],
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo'
    }
  },
};

export default preview;