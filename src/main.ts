import { createApp } from 'vue';
import '@/style.css';
import App from '@/App.vue';
import components from '@components/index';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

components.forEach((comp: any) => app.component(comp.name, comp));

app.use(pinia);
app.mount('#app');
