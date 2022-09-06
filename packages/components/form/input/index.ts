import Input from "./src/input.vue"
import { App } from "vue"

export const UiInput = (app: App) => {
    app && app.component && app.component(Input.name, Input)

    return Input
}

export default UiInput
// export * from "./src/input"
