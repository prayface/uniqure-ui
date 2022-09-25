import Loading from "./loading.vue"
import { createApp, ref, Ref, App } from "vue"

export interface LoadingOption {
    icon?: string
    context?: string
}

export interface Loading {
    icon: Ref<string>
    show: Ref<boolean>
    context: Ref<string>
    control: App<Element> | null
    container: HTMLDivElement | null
    open: (option: LoadingOption) => void
    clone: () => void
    install: () => void
}

export const $loading: Loading = {
    icon: ref<string>("loading"),
    show: ref<boolean>(false),
    context: ref<string>("加载中..."),
    control: null,
    container: null,

    open(option: LoadingOption) {
        this.install()
        this.show.value = true
        this.icon.value = option.icon || this.icon.value
        this.context.value = option.context || this.context.value
        document.body.style.overflow = "hidden"
    },

    clone() {
        this.show.value = false
        document.body.style.overflow = "auto"
    },

    install() {
        if (!this.container) {
            this.container = document.createElement("div")
            this.container.id = "ui-loading-container"

            this.control = createApp(Loading)
            this.control.provide("icon", this.icon)
            this.control.provide("show", this.show)
            this.control.provide("context", this.context)

            document.body.appendChild(this.container)
            this.control.mount(this.container)
        }
    }
}
