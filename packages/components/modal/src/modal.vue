<template>
    <teleport to="#ui-modal-container">
        <transition name="fade">
            <div class="ui-modal ui-overlay" v-if="isOpen">
                <div class="ui-modal-container" :style="styles" ref="main">
                    <!-- 关闭按钮 -->
                    <div class="ui-modal-icon" v-if="isClose">
                        <ui-icon name="error" @click.stop="close" />
                    </div>

                    <!-- 头部 -->
                    <div class="ui-modal-header">
                        <!-- 标题插槽 -->
                        <template v-if="$slots.header"><slot name="header"></slot></template>
                        <template v-else>{{ title }}</template>
                    </div>

                    <!-- 内容 -->
                    <div class="ui-modal-main">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script lang="ts">
    import { defineComponent, computed, ref, nextTick } from "vue"
    import { modalProps } from "./modal"
    import { UiIcon } from "@uniqure-ui/components/icon"

    if (!document.body.querySelector("#ui-modal-container")) {
        const container = document.createElement("div")
        container.id = "ui-modal-container"
        document.body.append(container)
    }

    export default defineComponent({
        name: "ui-modal",
        props: modalProps,
        components: { UiIcon },
        setup({ width, height, isMagnify, innerWidth, innerHeight }) {
            const isOpen = ref<boolean>(false)
            const main = ref<HTMLDivElement | null>(null)

            const styles = computed(() => {
                const result: { [name: string]: any } = {
                    width: Number(width) ? `${Number(width)}px` : width,
                    padding: `${innerHeight}px ${innerWidth}px`
                }

                if (isMagnify) {
                    result["min-height"] = Number(height) ? `${Number(height)}px` : height
                } else {
                    result["height"] = Number(height) ? `${Number(height)}px` : height
                }

                return result
            })

            const handler = () => {
                if (!main.value) return
                const offset = window.innerHeight - main.value.offsetHeight
                main.value.style.top = offset <= 120 ? "60px" : `${offset / 2}px`
            }

            const open = () => {
                isOpen.value = true
                window.addEventListener("resize", handler)
                nextTick(() => handler())
            }

            const close = () => {
                isOpen.value = false
                window.removeEventListener("resize", handler)
            }

            return { isOpen, styles, close, open, main }
        }
    })
</script>
