import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css';
import toast from 'vue-toastification'
import "vue-toastification/dist/index.css"
import './assets/style/style.scss'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  .use(store)
  .use(router)
  .use(toast)
  .mount('#app')
  AOS.init();


// import VueI18n from 'vue-i18n'





