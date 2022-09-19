import { InputProps, InputEmits } from "./input"
import { computed, ComputedRef, SetupContext, Ref } from "vue"

interface MethodsControls {
    input: Ref<HTMLInputElement | null>
    main: Ref<HTMLDivElement | null>
}

interface ExtraData {
    disabled: ComputedRef<boolean>
}

export const useComputed = (data: InputProps) => {
    const styles = computed(() => {
        if (data.width) {
            if (Number(data.width)) return `width: ${data.width}px`

            return `width: ${data.width}`
        }

        return ""
    })

    const disabled = computed(() => data.disabled || data.loading)

    const className = computed(() => {
        const result: string[] = []

        data.size && result.push(`ui-size__${data.size}`)
        disabled.value && result.push("ui-disabled")

        return result.join(" ")
    })

    const classOverlay = computed(() => (data.loading ? "ui-overlay-loading" : ""))

    return {
        classOverlay,
        className,
        disabled,
        styles
    }
}

export const useMethods = (context: SetupContext<InputEmits>, controls: MethodsControls, data: InputProps, extra: ExtraData) => {
    const onKeydown = (ev: KeyboardEvent) => {
        context.emit("keydown", ev)
    }

    const onChange = (ev: Event) => {
        context.emit("change", ev)
    }

    const onClick = (ev: MouseEvent) => {
        // 1. 点击后如果当前焦点在选择框之外并且不是禁用状态时, 则输入框获取焦点
        if (controls.input.value && controls.input.value !== document.activeElement && !extra.disabled.value) {
            controls.input.value.focus()
        }

        // 2. 当输入框处于loading状态时, 禁止响应点击事件
        if (data.loading) return

        context.emit("click", ev)
    }

    const onFocus = (ev: FocusEvent) => {
        controls.main.value && (controls.main.value.style.borderColor = "rgb(var(--ui-color-4))")
        context.emit("focus", ev)
    }

    const onInput = (ev: Event) => {
        const el = ev.target as HTMLInputElement
        context.emit("update:modelValue", el.value || "")
    }

    const onBlur = (ev: FocusEvent) => {
        controls.main.value && (controls.main.value.style.borderColor = "")
        context.emit("blur", ev)
    }

    return {
        onKeydown,
        onChange,
        onInput,
        onClick,
        onFocus,
        onBlur
    }
}
