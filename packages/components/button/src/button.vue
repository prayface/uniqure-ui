<template>
    <button type="button" :class="className" :disabled="disabled">
        <slot></slot>
        <transition name="fade">
            <div class="ui-overlay ui-overlay-local" v-if="disabled"></div>
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
        setup(props) {
            const disabled = computed(() => {
                return props.disabled || props.loading
            })

            const className = computed(() => {
                const result = ["ui-button"]

                props.type && result.push(`ui-type__${props.type}`)
                props.size && result.push(`ui-size__${props.size}`)

                return result.join(" ")
            })

            return {
                disabled,
                className
            }
        }
    })
</script>
