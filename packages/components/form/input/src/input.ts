import { PropType, ExtractPropTypes } from "vue"
import { useSizeProp } from "@uniqure-ui/hooks"

export const inputTypes = ["text", "number"] as const
export const inputProps = {
    autocomplete: { type: String, values: ["off", "on"], default: "off" },
    placeholder: { type: String, default: "" } /**提示文本 */,
    modelValue: { type: [String, Number] as PropType<String | Number>, require: true },
    disabled: Boolean,
    loading: Boolean,
    width: { type: [String, Number] as PropType<String | Number>, default: "100%" },
    type: { type: String, values: inputTypes },
    size: useSizeProp
    /**自动补全 */
} as const

export const inputEmits = {
    keydown: (ev: KeyboardEvent) => ev instanceof KeyboardEvent,
    change: (ev: Event) => ev instanceof Event,
    input: (ev: Event) => ev instanceof Event,
    click: (ev: MouseEvent) => ev instanceof MouseEvent,
    focus: (ev: FocusEvent) => ev instanceof FocusEvent,
    blur: (ev: FocusEvent) => ev instanceof FocusEvent
}

export type InputProps = ExtractPropTypes<typeof inputProps>
export type InputEmits = typeof inputEmits
