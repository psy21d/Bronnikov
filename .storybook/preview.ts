import PrimeVue from 'primevue/config'

import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

import Tailwind from 'primevue/passthrough/tailwind';
import '../src/style.css';

import type { Preview } from "@storybook/vue3";
import { setup } from "@storybook/vue3"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

setup((app) => {
  app
    .use(PrimeVue, { unstyled: true, pt: Tailwind })
    .component('Button', Button)
    .component('InputText', InputText)
})

export default preview;
