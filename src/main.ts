import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

import './style.css';

import Button from 'primevue/button'
import TabMenu from 'primevue/tabmenu';
import CardModule from './modules/CardModule.vue';
import UserPicture from './components/UserPicture.vue';

import Tailwind from 'primevue/passthrough/tailwind';

createApp(App)
    .use(router)
    .use(PrimeVue, { unstyled: true, pt: Tailwind })
    .component('Button', Button)
    .component('TabMenu', TabMenu)
    .component('CardModule', CardModule)
    .component('UserPicture', UserPicture)
    .mount('#app')
