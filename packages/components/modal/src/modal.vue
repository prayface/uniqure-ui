<template>
    <teleport to="#ui-modal-container">
        <transition name="modal">
            <div class="ui-modal ui-overlay" v-scroll="11">
                <div class="ui-modal-container">
                    <!-- 头部 -->
                    <div class="ui-modal-header">
                        <!-- 关闭按钮 -->
                        <div class="ui-modal-icon"></div>
                        <!-- 标题插槽 -->
                        <div class="ui-modal-header-container">
                            <template v-if="$slots.header"><slot name="header"></slot></template>
                            <template v-else>{{ title }}</template>
                        </div>
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
    import { defineComponent } from "vue"
    import { modalProps } from "./modal"
    import { VScroll } from "@uniqure-ui/directive"

    if (!document.body.querySelector("#ui-modal-container")) {
        const container = document.createElement("div")
        container.id = "ui-modal-container"
        document.body.append(container)
    }

    export default defineComponent({
        name: "ui-modal",
        props: modalProps,
        directives: { scroll: VScroll },
        setup() {}
    })
</script>
