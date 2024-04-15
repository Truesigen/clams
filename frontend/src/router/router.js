import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/pages/HomeView.vue'
import MissionView from '@/pages/MissionView.vue'


const routes = [
    {
        path: '/',
        name: 'main',
        component: HomeView
    },
    {
        path: '/mission',
        name: 'mission',
        component: MissionView
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})



export default router