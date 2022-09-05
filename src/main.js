import { createApp } from "vue"
import Router from "./modules/router"
import Uniqure from "./modules/uniqure"
import App from "./App.vue"

import "@uniqure-ui/assets/less/index.less"
import "@uniqure-ui/assets/iconfont/iconfont.js"

const app = createApp(App)

app.use(Uniqure)
app.use(Router())

app.mount("#app")
