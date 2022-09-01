// GlobalComponents for Volar
declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        UiButton: typeof import("uniqure-ui")["UiButton"]
    }

    interface ComponentCustomProperties {}
}

export {}

