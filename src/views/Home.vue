<template>
    <div class="home">
        <aside>
            <template v-for="v in data" :key="v.name">
                <router-link
                    class="aside-item"
                    :to="`/components/${v.path}`"
                    :class="{ active: $route.name === v.name }">
                    {{ v.name }} {{ v.meta.name }}
                </router-link>
            </template>
        </aside>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script lang="ts">
    import routes from "@/modules/router/routes/components"
    import { defineComponent, ref } from "vue"

    export default defineComponent({
        setup() {
            const data = ref(routes)

            return {
                data
            }
        }
    })
</script>

<style lang="less">
    .home {
        display: flex;
        aside {
            width: 240px;
            height: 100%;
            margin: 0 40px 0 0;
            display: flex;
            flex-direction: column;
            .aside-item {
                width: 100%;
                margin: 0 0 8px;
                padding: 8px 12px;
                position: relative;
                border-radius: 4px;
                &::before {
                    top: 50%;
                    right: 0;
                    content: "";
                    position: absolute;
                    transform: translateY(-8px);
                    transition: all 0.2s;
                    border-style: solid;
                    border-width: 8px 0 8px 12px;
                    border-color: transparent transparent transparent transparent;
                }
            }

            .aside-item.active {
                color: rgb(var(--ui-secondary-color-1));
                background: rgb(var(--ui-color-7));
                &::before {
                    right: -12px;
                    border-color: transparent transparent transparent rgb(var(--ui-color-7));
                }
            }
        }

        main {
            flex: 1;
            padding: 0 0 0 40px;
            border-left: 1px solid rgb(var(--ui-secondary-color-3));
        }
    }
</style>
