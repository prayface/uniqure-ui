import { ButtonProps } from "./button"
import { computed } from "vue"

export const useComputed = (data: ButtonProps) => {
    const styles = computed(() => {
        if (data.width) {
            if (Number(data.width)) return `min-width: ${data.width}px`

            return `min-width: ${data.width}`
        }

        return ""
    })

    const disabled = computed(() => {
        return data.disabled || data.loading
    })

    const className = computed(() => {
        const result = ["ui-button"]

        data.type && result.push(`ui-type__${data.type}`)
        data.size && result.push(`ui-size__${data.size}`)

        return result.join(" ")
    })

    const classOverlay = computed(() => {
        if (data.loading) return "ui-overlay ui-overlay-local ui-overlay-loading"
        else return "ui-overlay ui-overlay-local"
    })

    return {
        styles,
        disabled,
        className,
        classOverlay
    }
}
