import { App } from "vue"
import { UiButton, UiIcon, UiInput } from "@uniqure-ui/uniqure-ui/index"

export default (app: App) => {
    app.use(UiIcon)
    app.use(UiInput)
    app.use(UiButton)
}
