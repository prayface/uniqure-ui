<template>
    <button type="button" :class="className" :disabled="disabled" :style="styles" @click.stop="onClick">
        <slot></slot>
        <transition name="fade">
            <div :class="classOverlay" v-if="disabled">
                <ui-icon name="loading" class="ui-overlay-icon" v-if="loading"></ui-icon>
            </div>
        </transition>
    </button>
</template>

<script lang="ts">
    import "@uniqure-ui/assets/less/components/button.less"
    import { defineComponent, computed } from "vue"
    import { buttonProps, buttonEmits } from "./button"

    export default defineComponent({
        name: "ui-button",
        props: buttonProps,
        emits: buttonEmits,
        setup(props, context) {
            const styles = computed(() => {
                if (props.width) {
                    if (Number(props.width)) return `min-width: ${props.width}px`

                    return `min-width: ${props.width}`
                }

                return ""
            })

            const disabled = computed(() => {
                return props.disabled || props.loading
            })

            const className = computed(() => {
                const result = ["ui-button"]

                props.type && result.push(`ui-type__${props.type}`)
                props.size && result.push(`ui-size__${props.size}`)

                return result.join(" ")
            })

            const classOverlay = computed(() => {
                if (props.loading) return "ui-overlay ui-overlay-local ui-overlay-loading"
                else return "ui-overlay ui-overlay-local"
            })

            const onClick = (ev: MouseEvent) => {
                context.emit("click", ev)
            }

            return {
                styles,
                disabled,
                className,
                classOverlay,

                onClick
            }
        }
    })
</script>
