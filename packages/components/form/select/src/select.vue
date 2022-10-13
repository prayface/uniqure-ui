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
                    <template v-for="v in option">
                        <div
                            class="ui-select-item"
                            @mousedown="onSelector(v.value || v.label, $event)"
                            :class="{ 'ui-active': modelValue == v.value || modelValue == v.label }">
                            {{ v.label || v.value }}
                        </div>
                    </template>
                </div>
            </transition>
        </teleport>
    </div>
</template>

<script lang="ts">
    // import "@uniqure-ui/assets/less/components/select.less"
    import { defineComponent, ref } from "vue"
    import { selectProps, selectEmits } from "./select"
    import { useComputed, useMethods } from "./useSelect"
    import { UiIcon } from "@uniqure-ui/components/icon"

    if (!document.body.querySelector("#ui-select-popper")) {
        const container = document.createElement("div")
        container.id = "ui-select-popper"
        document.body.append(container)
    }

    export default defineComponent({
        name: "ui-select",
        props: selectProps,
        emits: selectEmits,
        components: { UiIcon },
        setup(props, context) {
            const show = ref(false)
            const main = ref<HTMLDivElement | null>(null)
            const input = ref<HTMLInputElement | null>(null)
            const popper = ref<HTMLDivElement | null>(null)

            const controls = { main, popper }

            const computeds = useComputed(props, show)
            const methods = useMethods(context, controls, props, { show })

            return {
                show,
                main,
                input,
                popper,
                ...computeds,
                ...methods
            }
        }
    })
</script>
