import { createApp } from 'vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { initializeApp } from "firebase/app";
import './assets/tailwind.css'
import App from './App.vue'
const firebaseConfig = {
    apiKey: "AIzaSyBuHT-EnDP8BhUuFDQoa0T17RYJ4tp3b-g",
    authDomain: "cool-bay-282923.firebaseapp.com",
    projectId: "cool-bay-282923",
    storageBucket: "cool-bay-282923.appspot.com",
    messagingSenderId: "595352685864",
    appId: "1:595352685864:web:3bbdc21d2b4e1fe34cd41d",
    measurementId: "G-LFXLQ77ZY0"
};

initializeApp(firebaseConfig);
createApp(App).use(store).use(router).mount('#app')
