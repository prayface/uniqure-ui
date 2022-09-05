import Button from "./src/button.vue"
import { App } from "vue"

export const UiButton = (app: App) => {
    app && app.component && app.component(Button.name, Button)

    return Button
}

export default UiButton
export * from "./src/button"
