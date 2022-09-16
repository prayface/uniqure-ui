<template>
    <div class="components-container">
        <div class="container-title">
            <div class="container-title-content">Pagination 分页器</div>
            <div class="container-title-infos">
                <div class="container-title-info">网站视觉设计图出稿软件为: sktech</div>
                <div class="container-title-info">使用文字为: 思源黑体</div>
            </div>
        </div>

        <section class="section-container">
            <div class="section-title">图标列表:</div>
            <div class="section-content">
                <ui-pagination v-for="v in paginations" v-model:page="v.page" v-model:count="v.count" @change="onChange" />
            </div>
        </section>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from "vue"

    export default defineComponent({
        setup() {
            const paginations = ref([
                { page: 1, count: 5 },
                { page: 1, count: 15 },
                { page: 1, count: 25 },
                { page: 1, count: 35 },
                { page: 1, count: 45 },
                { page: 1, count: 55 },
                { page: 1, count: 65 },
                { page: 1, count: 75 },
                { page: 1, count: 85 },
                { page: 1, count: 200 },
                { page: 2, count: 200 },
                { page: 3, count: 200 },
                { page: 4, count: 200 },
                { page: 5, count: 200 },
                { page: 6, count: 200 },
                { page: 15, count: 200 },
                { page: 16, count: 200 },
                { page: 17, count: 200 },
                { page: 18, count: 200 },
                { page: 19, count: 200 },
                { page: 20, count: 200 }
            ])

            const onChange = () => {
                console.log("change")
            }

            return {
                onChange,
                paginations
            }
        }
    })
</script>

<style lang="less" scoped>
    @import url("@/assets/less/components/mixins.less");
    .components-container {
        .section-content {
            margin: -8px 0;
            .ui-pagination {
                margin: 8px 0;
            }
        }
    }
</style>
