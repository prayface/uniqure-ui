import { PropType, ExtractPropTypes } from "vue"
import { useSizeProp } from "@uniqure-ui/hooks"

export const selectProps = {
    placeholder: { type: String, default: "" } /**提示文本 */,
    modelValue: { type: [String, Number] as PropType<String | Number>, require: true },
    disabled: Boolean,
    option: { type: Array<{ label: string; value: any }>, default: () => new Array() },
    width: { type: [String, Number] as PropType<String | Number>, default: "100%" },
    alias: { type: String, values: ["left", "right"], default: "left" },
    icon: { type: String, default: "arrow" },
    size: useSizeProp
} as const

export const selectEmits = {
    "update:modelValue": (v: String) => v instanceof String,
    "change": (ev: MouseEvent) => ev instanceof MouseEvent
}

export type SelectProps = ExtractPropTypes<typeof selectProps>
export type SelectEmits = typeof selectEmits
