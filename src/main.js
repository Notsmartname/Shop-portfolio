import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import router from "@/route/router.js";
import '@/assets/styles/main.scss';
import Loader from '@/components/Loader.vue';
// import './index.css'

const app = createApp(App);

const pinia = createPinia();

app.use(router);
app.use(pinia);
app.component('Loader', Loader);
app.use(autoAnimatePlugin);
app.mount('#app');
