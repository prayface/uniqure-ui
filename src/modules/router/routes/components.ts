export default [
    { name: "Icon", path: "icon", component: () => import("@/views/components/Icon.vue"), meta: { name: "图标" } },
    { name: "Button", path: "", component: () => import("@/views/components/Button.vue"), meta: { name: "按钮" } },
    { name: "Input", path: "input", component: () => import("@/views/components/Input.vue"), meta: { name: "输入框" } }
]
