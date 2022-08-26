import { createRouter, createWebHistory } from "vue-router"

const routes = [
    { name: "Home", path: "/", component: () => import("@/views/Home.vue") },
    { name: "Button", path: "/button", component: () => import("@/views/components/Button.vue") },
    {
        name: "Error",
        path: "/:catchAll(.*)*",
        component: () => import("@/views/404.vue"),
        meta: { title: "404 Not Found" }
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
    scrollBehavior: () => {
        return { top: 0 }
    }
})

export default () => {
    return router
}
