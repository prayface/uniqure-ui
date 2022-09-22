import components from "./routes/components"
import directives from "./routes/directives"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    { name: "Home", path: "/", component: () => import("@/views/Home.vue") },
    { name: "Components", path: "/components", component: () => import("@/views/Home.vue"), children: components },
    { name: "Directives", path: "/directives", component: () => import("@/views/Home.vue"), children: directives },
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
