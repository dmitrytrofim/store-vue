import { createApp } from 'vue';
import '@/style.css';
import '../node_modules/primevue/resources/themes/aura-light-noir/theme.css';
import '../node_modules/primeicons/primeicons.css';
import 'vue-slider-component/theme/antd.css';
import App from '@/App.vue';
import components from '@components/index';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';

const app = createApp(App);
const pinia = createPinia();

components.forEach((comp: any) => app.component(comp.name, comp));

app.use(pinia);
app.use(PrimeVue);
app.mount('#app');
