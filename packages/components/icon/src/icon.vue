<template>
    <svg class="ui-icon" aria-hidden="true" @click="$emit('click', $event)">
        <use :xlink:href="icon"></use>
    </svg>
</template>

<script lang="ts">
    import "@uniqure-ui/assets/less/components/icon.less"
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
