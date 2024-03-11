import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

const app = createApp(App)
// app.use(createPinia())
app.use(router)
app.use(PrimeVue)
// app.directive('tooltip', Tooltip)
// app.directive('badge', BadgeDirective)
app.mount('#app')
