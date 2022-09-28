import { createRouter, createWebHistory } from "vue-router";

const HomeComponent = () => import("../components/HomeComponent.vue");
const AboutComponent = () => import("../components/AboutComponent.vue");

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeComponent
    },
    {
        path: '/about',
        name: 'about',
        component: AboutComponent
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
