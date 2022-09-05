import Icon from "./src/icon.vue"
import { App } from "vue"

export const UiIcon = (app: App) => {
    app && app.component && app.component(Icon.name, Icon)

    return Icon
}

export default UiIcon
export * from "./src/icon"
