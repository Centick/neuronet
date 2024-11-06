import './assets/style/main.css'

import { createApp } from 'vue'

// плавные анимации
// import AOS from 'aos'
// import 'aos/dist/aos.css'


// import { createPinia } from 'pinia'

import App from './App.vue'
import { ImportsNotUsedAsValues } from 'typescript'
// import router from './router'

const app = createApp(App)

// инициализация анимациий
// AOS.init();

// app.use(createPinia())
// app.use(router)

app.mount('#app')



// const wrapper = document.querySelector('#Banner_parallax-inner')
//     const layers = document.querySelector("#paralaxTopGlow");

//     wrapper.addEventListener('mousemove', initParallax);
//     const initParallax = (e) => {
//         paralaxTopGlow
//     }
