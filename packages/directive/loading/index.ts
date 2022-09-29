import { dirInstall } from "@uniqure-ui/utils"

export const VLoading = dirInstall({
    name: "loading",
    data() {},
    mounted: (el: any, res: any) => {
        append(el, res.value)
    },
    updated(el: any, res: any) {
        append(el, res.value)
    },
    unmounted(el: any) {
        append(el, false)
    }
})

const append = (el: any, isShow: boolean) => {
    if (isShow) {
        if (!el.querySelector(".ui-overlay")) {
            const dom = document.createElement("div")
            dom.className = "ui-overlay ui-overlay-local ui-overlay-loading"
            dom.innerHTML = `
                <svg class="ui-overlay-icon ui-icon">
                    <use xlink:href="#icon-loading"></use>
                </svg>
            `

            el.style.position = "relative"
            el.append(dom)
        }
    } else {
        const dom = el.querySelector(".ui-overlay")
        dom && el.removeChild(dom)
    }
}
