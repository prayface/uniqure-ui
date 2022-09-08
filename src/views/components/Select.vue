<template>
    <div class="components-container">
        <div class="container-title">
            <div class="container-title-content">Select 选择器</div>
            <div class="container-title-infos">
                <div class="container-title-info">网站视觉设计图出稿软件为: sktech</div>
                <div class="container-title-info">使用文字为: 思源黑体</div>
            </div>
        </div>

        <section class="section-container">
            <div class="section-title">默认选择器:</div>
            <div class="section-content">
                <ui-select :option="option" v-model="value" width="264" placeholder="提示语" />
            </div>
        </section>

        <section class="section-container">
            <div class="section-title">禁用状态的选择器:</div>
            <div class="section-content">
                <ui-select :option="option" v-model="value" width="264" placeholder="提示语" :disabled="true" />
            </div>
        </section>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from "vue"

    export default defineComponent({
        setup() {
            const value = ref("")
            const option = ref([
                { label: "Disease", value: "disease" },
                { label: "Gene", value: "gene" },
                { label: "BioModel", value: "model" }
            ])

            return { option, value }
        }
    })
</script>

<style lang="less" scoped>
    @import url("@/assets/less/components/mixins.less");
</style>
