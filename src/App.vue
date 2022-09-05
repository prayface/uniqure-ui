<template>
    <div class="app-container">
        <header></header>
        <main>
            <router-view />
        </main>
    </div>
</template>

<style lang="less" scoped>
    .app-container {
        header {
            width: 100%;
            height: 60px;
            border-bottom: 1px solid rgb(var(--ui-secondary-color-3));
        }

        main {
            width: 80%;
            margin: 0 auto;
            padding: 40px 0;
        }
    }
</style>
