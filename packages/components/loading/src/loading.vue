<template>
    <transition name="fade">
        <div class="ui-loading ui-overlay" v-show="show">
            <div class="ui-loading-container">
                <ui-icon class="ui-loading-icon" :name="icon" />
                <div class="ui-loading-context">{{ context }}</div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
    import { defineComponent, inject } from "vue"
    import { UiIcon } from "@uniqure-ui/components/icon"
    import "@uniqure-ui/assets/less/components/loading.less"

    export default defineComponent({
        components: { UiIcon },
        setup() {
            const icon = inject("icon")
            const show = inject("show")
            const context = inject("context")

            return { icon, show, context }
        }
    })
</script>
