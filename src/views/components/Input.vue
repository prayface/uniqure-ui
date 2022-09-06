<template>
    <div class="components-container">
        <div class="container-title">
            <div class="container-title-content">Input 图标</div>
            <div class="container-title-infos">
                <div class="container-title-info">网站视觉设计图出稿软件为: sktech</div>
                <div class="container-title-info">使用文字为: 思源黑体</div>
            </div>
        </div>

        <section class="section-container">
            <div class="section-title">默认输入框:</div>
            <div class="section-content">
                <ui-input width="264" v-model="input1" />
            </div>
        </section>

        <section class="section-container">
            <div class="section-title">提示文本:</div>
            <div class="section-content">
                <ui-input width="264" v-model="input2" placeholder="提示文本" @input="onInput" />
            </div>
        </section>

        <section class="section-container">
            <div class="section-title">只读输入框:</div>
            <div class="section-content">
                <ui-input width="264" v-model="input3" placeholder="提示文本" :disabled="true" />
            </div>
        </section>

        <section class="section-container">
            <div class="section-title">存在内容的只读输入框:</div>
            <div class="section-content">
                <ui-input width="264" v-model="input4" placeholder="提示文本" :disabled="true" />
            </div>
        </section>

        <section class="section-container">
            <div class="section-title">带loading的输入框:</div>
            <div class="section-content">
                <ui-input width="264" v-model="input5" placeholder="提示文本" :loading="true" />
            </div>
        </section>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from "vue"

    export default defineComponent({
        setup() {
            const input1 = ref("")
            const input2 = ref("")
            const input3 = ref("")
            const input4 = ref("我是有内容滴")
            const input5 = ref("")

            const onInput = (ev: any) => {
                console.log(ev, input2.value)
            }

            return {
                input1,
                input2,
                input3,
                input4,
                input5,
                onInput
            }
        }
    })
</script>

<style lang="less" scoped>
    @import url("@/assets/less/components/mixins.less");
</style>
