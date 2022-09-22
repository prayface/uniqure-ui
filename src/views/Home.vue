<template>
    <div class="home">
        <aside>
            <div class="aside-title">组件</div>
            <template v-for="v in components" :key="v.name">
                <router-link class="aside-item" :to="`/components/${v.path}`" :class="{ active: $route.name === v.name }">
                    {{ v.name }} {{ v.meta.name }}
                </router-link>
            </template>

            <div class="aside-hr"></div>

            <div class="aside-title">指令</div>
            <template v-for="v in directives" :key="v.name">
                <router-link class="aside-item" :to="`/directives/${v.path}`" :class="{ active: $route.name === v.name }">
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
    import components from "@/modules/router/routes/components"
    import directives from "@/modules/router/routes/directives"
    import { defineComponent, ref } from "vue"

    export default defineComponent({
        setup() {
            return {
                components: ref(components),
                directives: ref(directives)
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
            .aside-hr {
                width: 100%;
                height: 1px;
                margin: 20px 0;
                background: rgb(var(--ui-secondary-color-3));
            }

            .aside-title {
                padding: 8px 12px;
                font-size: 20px;
                font-weight: bold;
            }

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
