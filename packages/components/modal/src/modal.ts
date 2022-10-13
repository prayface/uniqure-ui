import { ExtractPropTypes, PropType } from "vue"

export const modalProps = {
    title: String,
    width: { type: [String, Number] as PropType<string | number>, default: 800 },
    height: { type: [String, Number] as PropType<string | number>, default: 600 },
    innerWidth: { type: Number as PropType<number>, default: 112 },
    innerHeight: { type: Number as PropType<number>, default: 68 },
    isMagnify: { type: Boolean as PropType<boolean>, default: true },
    isClose: { type: Boolean as PropType<boolean>, default: true }
} as const

export type ModalProps = ExtractPropTypes<typeof modalProps>
