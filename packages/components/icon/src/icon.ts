import type { ExtractPropTypes } from "vue"

export const iconProps = {
    name: String
} as const

export const iconEmits = {
    click: (ev: MouseEvent) => ev instanceof MouseEvent
}

export type IconProps = ExtractPropTypes<typeof iconProps>
export type IconEmits = typeof iconEmits
