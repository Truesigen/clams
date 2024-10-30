import { createApp } from 'vue'
import router from '@/router/router'

import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import AnimateOnScroll from 'primevue/animateonscroll';

import Wind from '@/presets/wind'
import './style.css'
import App from './App.vue'

createApp(App)
    .use(router)
    .use(PrimeVue, { unstyled: true, pt: Wind })
    .use(ToastService)
    .directive('animateonscroll', AnimateOnScroll)
    .mount('#app')
