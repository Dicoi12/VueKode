import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(PrimeVue)
app.use(pinia)
// app.directive('tooltip', Tooltip)
// app.directive('badge', BadgeDirective)
app.mount('#app')
