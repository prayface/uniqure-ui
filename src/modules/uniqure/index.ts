import { App } from "vue"
import { UiPagination, UiButton, UiIcon, UiInput, UiSelect, VLoading } from "@uniqure-ui/uniqure-ui/index"

export default (app: App) => {
    app.use(UiIcon)
    app.use(UiInput)
    app.use(UiButton)
    app.use(UiSelect)
    app.use(UiPagination)

    app.directive(VLoading.name, VLoading)
}
