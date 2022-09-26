export const PopperObserver = new IntersectionObserver((entries) => {
    entries.forEach((entrie) => {
        // Target对象
        const target = entrie.target as HTMLElement
        // 对上对下位置
        const rect = Number(target.getAttribute("ui-rect") || 0)
        const offsetY = Number(target.getAttribute("ui-offset-y") || 0)
        // 判断是否显示
        if (entrie.isIntersecting && entrie.intersectionRatio === 1) {
            target.style.top = `${offsetY + rect + 4}px`
        } else {
            target.style.top = `${offsetY - entrie.boundingClientRect.height - 4}px`
        }
    })
})
