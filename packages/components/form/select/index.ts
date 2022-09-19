import Select from "./src/select.vue"
import { preInstall } from "@uniqure-ui/utils"

if (!document.body.querySelector("#ui-select-popper")) {
    const container = document.createElement("div")
    container.id = "ui-select-popper"
    document.body.append(container)
}

export const UiSelect = preInstall(Select)
export default UiSelect
export * from "./src/select"
