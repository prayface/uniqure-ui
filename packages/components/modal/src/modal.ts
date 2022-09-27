import { ExtractPropTypes, PropType } from "vue"

export const modalProps = {
    title: String,
    width: { type: [String, Number] as PropType<string | number>, required: true },
    height: { type: [String, Number] as PropType<string | number>, required: true }
} as const

export type ModalProps = ExtractPropTypes<typeof modalProps>
