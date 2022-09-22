import { createApp } from "vue"
import Router from "./modules/router"
import uniqure from "./modules/uniqure"
import App from "./App.vue"

import "@uniqure-ui/assets/less/index.less"
import "@uniqure-ui/assets/iconfont/iconfont.js"
// import uniqure from "uniqure-ui"

const app = createApp(App)

app.use(uniqure)
app.use(Router())

app.mount("#app")
