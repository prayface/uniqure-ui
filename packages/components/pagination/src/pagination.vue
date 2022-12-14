<template>
    <div class="ui-pagination" v-if="total">
        <div class="ui-pagination-items">{{ info }}</div>
        <div class="ui-pagination-controls">
            <div class="ui-pagination-control" :class="nextClass" @click.stop="onChange(Number(page) - 1, nextDisabled)">
                <ui-icon name="arrow" class="ui-pagination-next"></ui-icon>
            </div>
            <template v-for="(val, key) in controls">
                <div class="ui-pagination-control" :class="{ 'ui-active': val.value == page }">
                    <div v-if="val.type === 'item'" class="ui-pagination-item-control" @click.stop="onChange(val.value)" :key="key">
                        {{ val.value }}
                    </div>
                    <div v-if="val.type === 'input'" class="ui-pagination-input-control" :key="key">
                        <span v-show="omitHidden !== key">...</span>
                        <input type="number" @focus="omitHidden = key" @blur.stop="onJump" @keydown.enter="onEnter" @change.stop />
                    </div>
                </div>
            </template>
            <div class="ui-pagination-control" :class="backClass" @click.stop="onChange(Number(page) + 1, backDisabled)">
                <ui-icon name="arrow" class="ui-pagination-back"></ui-icon>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from "vue"
    import { paginationProps, paginationEmits } from "./pagination"
    import { useComputed, useMethods } from "./usePagination"
    import { UiIcon } from "@uniqure-ui/components/icon"

    export default defineComponent({
        name: "ui-pagination",
        emits: paginationEmits,
        props: paginationProps,
        components: { UiIcon },
        setup(props, context) {
            const omitHidden = ref(-1)
            const computeds = useComputed(props)
            const methods = useMethods(context, props, { total: computeds.total, omitHidden: omitHidden })

            return {
                ...computeds,
                ...methods,
                omitHidden
            }
        }
    })
</script>
