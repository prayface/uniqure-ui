<template>
    <svg class="ui-icon" aria-hidden="true">
        <use :xlink:href="icon"></use>
    </svg>
</template>

<script lang="ts">
    import { iconEmits, iconProps } from "./icon"
    import { defineComponent, computed } from "vue"

    export default defineComponent({
        name: "ui-icon",
        props: iconProps,
        emits: iconEmits,
        setup(props) {
            const icon = computed(() => {
                return `#icon-${props.name}`
            })

            return {
                icon
            }
        }
    })
</script>

<style lang="less" scoped>
    .ui-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
