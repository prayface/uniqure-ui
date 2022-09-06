<template>
    <div class="ui-input" :class="className" :style="styles" @click.stop="onClick">
        <transition name="fade">
            <div class="ui-overlay ui-overlay-local" :class="classOverlay" v-if="disabled">
                <ui-icon name="loading" class="ui-overlay-icon" v-if="loading"></ui-icon>
            </div>
        </transition>

        <div class="ui-form-container" ref="main">
            <input
                ref="input"
                :type="type"
                :value="modelValue"
                :disabled="disabled"
                :placeholder="placeholder"
                :autocomplete="autocomplete"
                @keydown="onKeydown"
                @change="onChange"
                @input="onInput"
                @focus="onFocus"
                @blur="onBlur" />
        </div>

        <teleport to="#ui-popper">
            <div>测试文本</div>
        </teleport>
    </div>
</template>

<script lang="ts">
    import "@uniqure-ui/assets/less/components/input.less"
    import { inputProps } from "./input"
    import { useComputed, useMethods } from "./useInput"
    import { defineComponent, toRefs, ref } from "vue"

    export default defineComponent({
        props: inputProps,
        name: "ui-input",
        setup(props, context) {
            const main = ref<HTMLDivElement | null>(null)
            const input = ref<HTMLInputElement | null>(null)

            const computeds = useComputed(props)
            const methods = useMethods(context, { main, input }, { ...props, disabled: computeds.disabled })

            return {
                ...toRefs(computeds),
                ...toRefs(methods),
                input,
                main
            }
        }
    })
</script>
