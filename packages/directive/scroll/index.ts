import { dirInstall } from "@uniqure-ui/utils"

export const VScroll = dirInstall({
    name: "scroll",
    mounted: (el: HTMLElement) => {
        const scroll = document.createElement("div")
        scroll.className = "ui-scroll"
        scroll.innerHTML = `<div class='ui-scroll-block'></div>`
        el.appendChild(scroll)
    },
    unmounted(el: HTMLElement) {
        const dom = el.querySelector(".ui-scroll")
        if (dom) {
            el.removeChild(dom)
        }
    }
})
