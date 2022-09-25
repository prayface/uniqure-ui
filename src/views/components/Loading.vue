<template>
    <div class="components-container">
        <div class="container-title">
            <div class="container-title-content">Loading</div>
            <div class="container-title-infos">
                <div class="container-title-info">网站视觉设计图出稿软件为: sktech</div>
                <div class="container-title-info">使用文字为: 思源黑体</div>
            </div>
        </div>

        <section class="section-container">
            <div class="section-title">Loading:</div>
            <div class="section-content">
                <ui-button @click="open">启动按钮</ui-button>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue"
    import { $loading } from "@uniqure-ui/uniqure-ui/index"

    export default defineComponent({
        setup() {
            const open = () => {
                $loading.open({ context: "测试文本" })

                setTimeout(() => {
                    $loading.clone()
                }, 2000)
            }

            return { open }
        }
    })
</script>

<style lang="less" scoped>
    @import url("@/assets/less/components/mixins.less");
</style>
