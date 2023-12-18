import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

import './style.css';

import Button from 'primevue/button'
import TabMenu from 'primevue/tabmenu';
import CardModuleProjectant from './modules/CardModuleProjectant.vue';
import CardModuleExpert from './modules/CardModuleExpert.vue';
import UserPicture from './components/UserPicture.vue';

import Tailwind from 'primevue/passthrough/tailwind';

createApp(App)
    .use(router)
    .use(PrimeVue, { unstyled: true, pt: Tailwind })
    .component('Button', Button)
    .component('TabMenu', TabMenu)
    .component('CardModuleProjectant', CardModuleProjectant)
    .component('CardModuleExpert', CardModuleExpert)
    .component('UserPicture', UserPicture)
    .mount('#app')
