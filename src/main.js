import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css';
import toast from 'vue-toastification'
import "vue-toastification/dist/index.css"
import './assets/style/style.scss'
import i18n from "./plugins/i18n.js";
import dayjs from "dayjs"; //import dayjs in your main.js


import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyA8ZiZ5YFD18QhHpCEX81pvT7y_AVLzGK4",
  authDomain: "vue-metsenat.firebaseapp.com",
  projectId: "vue-metsenat",
  storageBucket: "vue-metsenat.appspot.com",
  messagingSenderId: "576088611938",
  appId: "1:576088611938:web:ae4ed787622924c669c53b",
  measurementId: "G-357BRHPTZQ"
};

// Initialize Firebase
 initializeApp(firebaseConfig);



createApp(App)
  // .use(VueI18n)
  .use(i18n)
  .use(store)
  .use(router)
  .use(toast)
  .mount('#app')
  AOS.init();
  // app.config.globalProperties.$dayjs = dayjs;
  //  app.provide("dayJS", dayjs);
  


// import VueI18n from 'vue-i18n'





