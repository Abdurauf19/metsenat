import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css';
import toast from 'vue-toastification'
import "vue-toastification/dist/index.css"
import './assets/style/style.scss'

// import VueI18n from 'vue-i18n'

createApp(App)
// .use(VueI18n)
.use(store)
.use(router)
.use(toast)
.mount('#app')
AOS.init();
