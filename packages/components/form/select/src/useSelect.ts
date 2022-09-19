import { SelectProps, SelectEmits } from "./select"
import { computed, Ref, SetupContext } from "vue"
import { GetBoundingClientRect } from "@uniqure-ui/utils"

interface MethodsControls {
    popper: Ref<HTMLDivElement | null>
    main: Ref<HTMLDivElement | null>
}

interface ExtraData {
    show: Ref<boolean>
}

export const useComputed = (data: SelectProps, show: Ref<Boolean>) => {
    const className = computed(() => {
        const result: string[] = []

        show.value && result.push("ui-active")
        data.icon && result.push("ui-form-icon-container")

        return result.join(" ")
    })

    const styles = computed(() => {
        if (data.width) {
            if (Number(data.width)) return `width: ${data.width}px`

            return `width: ${data.width}`
        }

        return ""
    })

    const value = computed(() => {
        if (!data.modelValue) return ""
        else {
            const res = data.option.find((v) => v.value == data.modelValue || v.label == data.modelValue)
            return res?.label || res?.value || ""
        }
    })

    return { value, styles, className }
}

export const useMethods = (context: SetupContext<SelectEmits>, controls: MethodsControls, data: SelectProps, extra: ExtraData) => {
    const open = () => {
        if (extra.show.value) return (extra.show.value = false)
        if (controls.main.value && controls.popper.value) {
            const rect = GetBoundingClientRect(controls.main.value)
            if (data.alias === "right") {
                controls.popper.value.style.right = `${rect.right}px`
            } else {
                controls.popper.value.style.left = `${rect.left}px`
            }

            extra.show.value = true
            controls.popper.value.style.top = `${rect.bottom + 4}px`
            controls.popper.value.style.minWidth = `${rect.width}px`
        }
    }

    const close = () => {
        extra.show.value = false
    }

    const onSelector = (data: string, ev: MouseEvent) => {
        context.emit("update:modelValue", data || "")
        context.emit("change", ev)
    }

    return { open, close, onSelector }
}
