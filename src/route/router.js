import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/pages/HomePage.vue';
import SinglePage from '@/pages/SinglePage.vue';
import ErrorPage from '@/pages/ErrorPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "Home",
            component: HomePage,
        },
        {
            path: '/single/:id',
            name: "Single",
            component: SinglePage,
            props: true
        },
        {
            path: '/:pathMatch(.*)*',
            name: "Error",
            component: ErrorPage,
        },
    ]
})


export default router