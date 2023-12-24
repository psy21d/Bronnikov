import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

import './style.css';

import Button from 'primevue/button'
import TabMenu from 'primevue/tabmenu';
import Dropdown from 'primevue/dropdown';


import CardModuleProjectant from './modules/CardModuleProjectant.vue';
import CardModuleExpert from './modules/CardModuleExpert.vue';
import CardBodyModuleExpert from './modules/CardBodyModuleExpert.vue';
import UserPicture from './components/UserPicture.vue';
import TextCard from './components/TextCard.vue';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

import Tailwind from 'primevue/passthrough/tailwind';

createApp(App)
    .use(router)
    .use(PrimeVue, { unstyled: true, pt: Tailwind })
    .component('Button', Button)
    .component('TabMenu', TabMenu)
    .component('Dropdown', Dropdown)
    .component('Accordion', Accordion)
    .component('AccordionTab', AccordionTab)
    .component('CardModuleProjectant', CardModuleProjectant)
    .component('CardBodyModuleExpert', CardBodyModuleExpert)
    .component('CardModuleExpert', CardModuleExpert)
    .component('UserPicture', UserPicture)
    .component('TextCard', TextCard)
    .mount('#app')
