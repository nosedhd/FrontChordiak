import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import axios from 'axios';
import router from './router/index';


const app = createApp(App)
app.config.globalProperties.$axios = axios;

app.use(createPinia())
app.use(router);

app.mount('#app')
