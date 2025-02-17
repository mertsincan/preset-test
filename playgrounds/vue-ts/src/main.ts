import PrimeVue from "primevue/config";
import { createApp } from "vue";
import App from './App.vue';
import './style.css';

import Preset from '@presets/ts';

const app = createApp(App);

app.use(PrimeVue, { 
    theme: {
        preset: Preset
    }
});

app.mount('#app');