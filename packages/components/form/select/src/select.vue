<template>
    <div class="ui-select" :style="styles" :class="disabled ? 'ui-disabled' : ''">
        <div class="ui-select-overlay" v-if="show"></div>
        <div class="ui-form-container" ref="main" :class="className" @click.stop="input?.focus()">
            <ui-icon :name="icon" v-if="icon" />
            <input
                readonly
                ref="input"
                type="text"
                autocomplete="off"
                :value="value"
                :disabled="disabled"
                :placeholder="placeholder"
                @focus.stop="open"
                @blur.stop="close" />
        </div>

        <teleport to="#ui-select-popper">
            <transition name="popper">
                <div class="ui-popper-container" ref="popper" v-show="show">
                    <div
                        class="ui-select-item"
                        v-for="v in option"
                        @mousedown="onSelector(v.value || v.label, $event)"
                        :class="{ 'ui-active': modelValue == v.value || modelValue == v.label }">
                        {{ v.label || v.value }}
                    </div>
                </div>
            </transition>
        </teleport>
    </div>
</template>

<script lang="ts">
    import "@uniqure-ui/assets/less/components/select.less"
    import { defineComponent, ref, toRefs } from "vue"
    import { selectProps, selectEmits } from "./select"
    import { useComputed, useMethods } from "./useSelect"

    export default defineComponent({
        name: "ui-select",
        props: selectProps,
        emits: selectEmits,
        setup(props, context) {
            const show = ref(false)
            const main = ref<HTMLDivElement | null>(null)
            const input = ref<HTMLInputElement | null>(null)
            const popper = ref<HTMLDivElement | null>(null)

            const controls = { main, popper }

            const computeds = useComputed(props, show)
            const methods = useMethods(context, controls, { ...props, show })

            return {
                show,
                main,
                input,
                popper,
                ...toRefs(computeds),
                ...toRefs(methods)
            }
        }
    })
</script>
