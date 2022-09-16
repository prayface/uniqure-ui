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
    import { defineComponent, toRefs } from "vue"
    import { buttonProps, buttonEmits } from "./button"
    import { useComputed } from "./useButton"

    export default defineComponent({
        name: "ui-button",
        props: buttonProps,
        emits: buttonEmits,
        setup(props, context) {
            const computeds = useComputed(props)

            const onClick = (ev: MouseEvent) => {
                context.emit("click", ev)
            }

            return {
                ...toRefs(computeds),
                onClick
            }
        }
    })
</script>
