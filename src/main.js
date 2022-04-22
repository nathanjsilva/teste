import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import Toaster from '@meforma/vue-toaster';
import Vmask from 'v-mask';



createApp(App).use(Toaster,Vmask).mount('#app')
import 'bootstrap/dist/js/bootstrap.js'
