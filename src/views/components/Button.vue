<template>
    <div class="components-container">
        <div class="container-title">
            <div class="container-title-content">按钮</div>
            <div class="container-title-infos">
                <div class="container-title-info">网站视觉设计图出稿软件为: sktech</div>
                <div class="container-title-info">使用文字为: 思源黑体</div>
            </div>
        </div>

        <section class="section-container">
            <div class="section-title">按钮风格:</div>
            <div class="section-content">
                <ui-button>默认按钮</ui-button>
                <ui-button type="danger">警告按钮</ui-button>
                <ui-button type="cancel">取消按钮</ui-button>
                <ui-button type="ghost">幽灵按钮</ui-button>
            </div>
        </section>

        <section class="section-container">
            <div class="section-title">禁用按钮:</div>
            <div class="section-content">
                <ui-button :disabled="true">默认按钮</ui-button>
                <ui-button type="danger" :disabled="true">警告按钮</ui-button>
                <ui-button type="cancel" :disabled="true">取消按钮</ui-button>
                <ui-button type="ghost" :disabled="true">幽灵按钮</ui-button>
            </div>
        </section>

        <section class="section-container">
            <div class="section-title">按钮尺寸:</div>
            <div class="section-content">
                <ui-button size="small">默认按钮</ui-button>
                <ui-button type="danger">警告按钮</ui-button>
                <ui-button type="cancel" size="large">取消按钮</ui-button>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue"

    export default defineComponent({
        setup() {}
    })
</script>

<style lang="less" scoped>
    @import url("@/assets/less/components/mixins.less");
    .components-container {
        .ui-button {
            margin: 0 8px;
        }
    }
</style>
