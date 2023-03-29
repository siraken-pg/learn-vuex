import { createApp } from 'vue';
import App from './App.vue';
import { store, key } from './lib/store';
import './style.css';

const app = createApp(App).use(store, key).mount('#app');
