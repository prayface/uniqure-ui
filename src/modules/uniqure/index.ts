import { App } from "vue"
import { UiButton, UiIcon } from "@uniqure-ui/uniqure-ui/index"

export default (app: App) => {
    app.use(UiIcon)
    app.use(UiButton)
}
