/**@name 获取dom到window左上角的距离与dom尺寸 */
export const GetBoundingClientRect = (dom: HTMLElement) => {
    const rect = dom.getBoundingClientRect()
    return {
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        right: rect.right + window.scrollX,
        bottom: rect.bottom + window.scrollY,
        height: rect.height,
        width: rect.width
    }
}
