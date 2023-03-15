import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './style.css'
import AOS from 'aos'
import { onMounted } from 'vue';
import 'aos/dist/aos.css'
import {store} from './stores/index.js'


const app = createApp(App)
app.use(AOS.init())

app.use(store)

app.use(router)

app.mount('#app')
