import Pagination from "./src/pagination.vue"
import { App } from "vue"

export const UiPagination = (app: App) => {
    app && app.component && app.component(Pagination.name, Pagination)

    return Pagination
}

export default UiPagination
export * from "./src/pagination"
