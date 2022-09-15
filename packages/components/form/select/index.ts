import Select from "./src/select.vue"
import { App } from "vue"

export const UiSelect = (app: App) => {
    app && app.component && app.component(Select.name, Select)

    if (!document.body.querySelector("#ui-select-popper")) {
        const container = document.createElement("div")
        container.id = "ui-select-popper"
        document.body.append(container)
    }

    return Select
}

export default UiSelect
export * from "./src/select"
