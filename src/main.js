import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Agrega esta línea para importar el router
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: 'TU_API_KEY',
    authDomain: 'TU_AUTH_DOMAIN',
    projectId: 'TU_PROJECT_ID',
    storageBucket: 'TU_STORAGE_BUCKET',
    messagingSenderId: 'TU_MESSAGING_SENDER_ID',
    appId: 'TU_APP_ID',
    measurementId: 'TU_MEASUREMENT_ID'
  };

const app = createApp(App)
app.use(router)
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
app.mount('#app')