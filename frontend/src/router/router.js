import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/pages/HomeView.vue'
import StationView from '@/pages/StationView.vue'
import Underwater from '@/pages/UnderwaterView.vue'
import StationInside from '@/pages/StationInside.vue'


const routes = [
    {
        path: '/',
        name: 'main',
        component: HomeView
    },
    {
        path: '/station',
        name: 'station',
        component: StationView
    },
    {
        path: '/incinerator',
        name: 'incinerator',
        component: Underwater
    },
    {
        path: '/station-inside',
        name: 'station-inside',
        component: StationInside
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

router.beforeEach((to) => {

    if (to.name == undefined) {
        return {
            name: 'main'
        }
    }
})

export default router