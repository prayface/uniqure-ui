import { DirectiveBinding } from "vue"
import { dirInstall } from "@uniqure-ui/utils"

export const VLoading = dirInstall({
    name: "loading",
    mounted: (el: any, data: DirectiveBinding<any>) => {
        append(el, data)
    },
    updated(el: any, data: DirectiveBinding<any>) {
        append(el, data)
    },
    unmounted(el: any) {
        const dom = el.querySelector(".ui-overlay")
        dom && el.removeChild(dom)
    }
})

const append = (el: any, data: DirectiveBinding<any>) => {
    if (data.value && data.value.finally) {
        const dom = document.createElement("div")
        dom.className = "ui-overlay ui-overlay-local ui-overlay-loading"
        dom.innerHTML = `
                <svg class="ui-overlay-icon ui-icon">
                    <use xlink:href="#icon-loading"></use>
                </svg>
            `

        el.style.position = "relative"
        el.append(dom)

        data.value.finally(() => {
            el.removeChild(dom)
        })
    }
}
