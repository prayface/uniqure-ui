import { PaginationProps, PaginationEmits } from "./pagination"
import { computed, ComputedRef, Ref, SetupContext } from "vue"

interface ExtraData {
    omitHidden: Ref<number>
    total: ComputedRef<number>
}

export interface PaginationOptionItem {
    type: string
    show?: boolean
    value: number | string
}

export const useComputed = (data: PaginationProps) => {
    const info = computed(() => {
        if (data.limit && data.count && data.page) {
            return `Items: ${(data.page - 1) * data.limit + 1} to ${data.page * data.limit} of ${data.count}`
        }

        return ""
    })

    const total = computed(() => {
        return Math.ceil(data.count / data.limit)
    })

    // 逻辑还待优化
    const controls = computed(() => {
        const page = Number(data.page)
        const level = Number(data.level)

        const last = total.value - level
        const result: PaginationOptionItem[] = []

        if (total.value <= level * 2 + 4 || level <= 0) {
            for (let i = 1; i <= total.value; i++) {
                result.push({ type: "item", value: i })
            }
        } else {
            if (page <= level + 2) {
                for (let i = 1; i <= level; i++) {
                    result.push({ type: "item", value: i })
                }
            } else if (page === level + 3) {
                for (let i = 1; i <= level + 1; i++) {
                    result.push({ type: "item", value: i })
                }
            } else {
                for (let i = 1; i <= level; i++) {
                    result.push({ type: "item", value: i })
                }

                result.push({ type: "input", value: "...", show: true })
            }

            if (page <= level + 1) {
                for (let i = level + 1; i <= level + 3; i++) {
                    result.push({ type: "item", value: i })
                }
            } else if (page >= last) {
                for (let i = last - 2; i <= last; i++) {
                    result.push({ type: "item", value: i })
                }
            } else {
                for (let i = page - 1; i <= page + 1; i++) {
                    result.push({ type: "item", value: i })
                }
            }

            if (page >= last - 1) {
                for (let i = last + 1; i <= total.value; i++) {
                    result.push({ type: "item", value: i })
                }
            } else if (page === last - 2) {
                for (let i = last; i <= total.value; i++) {
                    result.push({ type: "item", value: i })
                }
            } else {
                result.push({ type: "input", value: "...", show: true })
                for (let i = last + 1; i <= total.value; i++) {
                    result.push({ type: "item", value: i })
                }
            }
        }

        return result
    })

    const nextDisabled = computed(() => data.page == 1)
    const backDisabled = computed(() => data.page == total.value)

    const nextClass = computed(() => {
        if (nextDisabled.value) return "ui-disabled"
        else return ""
    })

    const backClass = computed(() => {
        if (backDisabled.value) return "ui-disabled"
        else return ""
    })

    return {
        info,
        total,
        controls,
        nextClass,
        backClass,
        nextDisabled,
        backDisabled
    }
}

export const useMethods = (context: SetupContext<PaginationEmits>, data: PaginationProps, extra: ExtraData) => {
    const onJump = (ev: Event) => {
        const target = ev.target as HTMLInputElement
        const value = Number(target.value)

        if (value && value <= extra.total.value && value >= 1 && value != data.page) {
            context.emit("update:page", value)
            context.emit("change", value)
        }

        target.value = ""
        extra.omitHidden.value = -1
    }

    const onEnter = (ev: Event) => {
        const target = ev.target as HTMLInputElement
        target.blur()
    }

    const onChange = (value: number | string, disabled?: boolean) => {
        console.log(data.page, value)
        if (data.page != value && !disabled) {
            context.emit("update:page", value)
            context.emit("change", value)
        }
    }

    return {
        onJump,
        onEnter,
        onChange
    }
}
