<template>
    <div class="components-container">
        <div class="container-title">
            <div class="container-title-content">ui-loading 内置</div>
            <div class="container-title-infos">
                <div class="container-title-info">网站视觉设计图出稿软件为: sktech</div>
                <div class="container-title-info">使用文字为: 思源黑体</div>
            </div>
        </div>

        <section class="section-container">
            <div class="section-title">手动激活Loading:</div>
            <ui-button @click="onClick">激活</ui-button>
            <div class="section-content" v-loading="promise">
                <p>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</p>
                <p>我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</p>
                <p>我是内容</p>
                <p>我是内容</p>
                <p>我是内容</p>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from "vue"

    export default defineComponent({
        setup() {
            const promise = ref<boolean>(false)

            const onClick = () => {
                promise.value = true
                setTimeout(() => {
                    promise.value = false
                }, 3000)
            }

            return { promise, onClick }
        }
    })
</script>

<style lang="less" scoped>
    @import url("@/assets/less/components/mixins.less");
</style>
