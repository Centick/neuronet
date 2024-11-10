import './assets/style/main.css'

// подключение основного css PriveVue
import 'primevue/resources/themes/saga-blue/theme.css'; // Выберите тему
import 'primevue/resources/primevue.min.css'; // Основные стили
import 'primeicons/primeicons.css'; // Иконки

import { createApp } from 'vue'

// плавные анимации
// import AOS from 'aos'
// import 'aos/dist/aos.css'


// import { createPinia } from 'pinia'  

import App from './App.vue'

// Подключаем primeVue
import PrimeVue from 'primevue/config';
// import router from './router'

const app = createApp(App)

app.use(PrimeVue);

// инициализация анимациийq
// AOS.init();

// app.use(createPinia())
// app.use(router)

app.mount('#app')
