export default [
    { name: "Icon", path: "icon", component: () => import("@/views/components/Icon.vue"), meta: { name: "图标" } },
    { name: "Button", path: "", component: () => import("@/views/components/Button.vue"), meta: { name: "按钮" } },
    { name: "Input", path: "input", component: () => import("@/views/components/Input.vue"), meta: { name: "输入框" } },
    {
        name: "Select",
        path: "select",
        component: () => import("@/views/components/Select.vue"),
        meta: { name: "选择器" }
    },
    {
        name: "Loading",
        path: "loading",
        component: () => import("@/views/components/Loading.vue"),
        meta: { name: "加载" }
    },
    {
        name: "Pagination",
        path: "pagination",
        component: () => import("@/views/components/Pagination.vue"),
        meta: { name: "分页器" }
    },
    {
        name: "Modal",
        path: "modal",
        component: () => import("@/views/components/Modal.vue"),
        meta: { name: "模态框" }
    }
]
