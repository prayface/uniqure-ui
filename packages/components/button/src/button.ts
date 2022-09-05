import { useSizeProp } from "@uniqure-ui/hooks"
import type { ExtractPropTypes, PropType } from "vue"

export const buttonTypes = ["", "danger", "cancel", "ghost"] as const
export const buttonProps = {
    size: useSizeProp,
    width: [String, Number] as PropType<String | Number>,
    loading: Boolean,
    disabled: Boolean,
    type: {
        type: String,
        values: buttonTypes
    }
} as const

export const buttonEmits = {
    click: (ev: MouseEvent) => ev instanceof MouseEvent
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits
