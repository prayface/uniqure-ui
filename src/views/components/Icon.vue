<template>
    <div class="components-container">
        <div class="container-title">
            <div class="container-title-content">Icon 图标</div>
            <div class="container-title-infos">
                <div class="container-title-info">网站视觉设计图出稿软件为: sktech</div>
                <div class="container-title-info">使用文字为: 思源黑体</div>
            </div>
        </div>

        <section class="section-container">
            <div class="section-title">图标列表:</div>
            <div class="section-content">
                <div class="icon-container" v-for="v in data" @click.stop="copy(v)">
                    <ui-icon :name="v" />
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from "vue"

    export default defineComponent({
        setup() {
            const data = ref(["success", "error", "loading"])

            const copy = (name: string) => {
                navigator.clipboard.writeText(`<ui-icon name="${name}" />`).then(() => {
                    window.alert("文本复制成功")
                })
            }

            return { data, copy }
        }
    })
</script>

<style lang="less" scoped>
    @import url("@/assets/less/components/mixins.less");
    .components-container {
        .section-container {
            .section-content {
                margin: -4px;
                display: flex;
                flex-wrap: wrap;
                font-size: 20px;
                .icon-container {
                    transition: all 0.3s;
                    line-height: 1;
                    padding: 8px;
                    cursor: pointer;
                    margin: 0 4px;
                    border: 1px solid rgb(var(--ui-secondary-color-3));
                    &:hover {
                        color: rgb(var(--ui-color-4));
                        border-color: rgb(var(--ui-color-4));
                    }
                }
            }
        }
    }
</style>
