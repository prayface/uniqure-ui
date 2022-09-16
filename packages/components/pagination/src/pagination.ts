import { ExtractPropTypes } from "vue"

export const paginationProps = {
    items: { type: Boolean, default: true },
    level: { type: Number, default: 2 },
    limit: { type: Number, default: 10 },
    count: { type: Number, required: true },
    page: { type: Number, required: true }
} as const

export const paginationEmits = {
    "update:page": (v: Number | String) => v,
    "change": (v: Number | String) => v
}

export type PaginationEmits = typeof paginationEmits
export type PaginationProps = ExtractPropTypes<typeof paginationProps>
