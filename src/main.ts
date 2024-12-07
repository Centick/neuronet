import './assets/style/main.css'

import { createApp } from 'vue'

// плавные анимации
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'aos/dist/aos.css'


// import { createPinia } from 'pinia'
import { ImportsNotUsedAsValues } from 'typescript'
// import router from './router'

const app = createApp(App)
app.use(PrimeVue);

// инициализация анимациий
// AOS.init();

// app.use(createPinia())
// app.use(router)

app.mount('#app')

