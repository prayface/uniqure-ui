<template>
    <div class="components-container">
        <div class="container-title">
            <div class="container-title-content">Modal 模态框</div>
            <div class="container-title-infos">
                <div class="container-title-info">网站视觉设计图出稿软件为: sktech</div>
                <div class="container-title-info">使用文字为: 思源黑体</div>
            </div>
        </div>

        <section class="section-container">
            <div class="section-title">模态框:</div>
            <div class="section-content">
                <ui-modal> 我是一段内容 </ui-modal>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue"
    import { UiModal } from "@uniqure-ui/uniqure-ui/index"
    export default defineComponent({
        components: { UiModal }
    })
</script>

<style lang="less" scoped>
    @import url("@/assets/less/components/mixins.less");
</style>
