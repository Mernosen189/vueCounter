import { createRouter,createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import counter from '../views/counter.vue'
import Error from '../views/404.vue'
const router = createRouter({
    history:createWebHistory(),
    routes: [
        {
            path: '/', name: 'Home', component: Home
        },
        {
            path: '/counter', name: 'Counter', component: counter
        },
        {
            path: '/:pathMatch(.*)*', name: '404 page', component: Error
        }
    ]
})

export default router