// GlobalComponents for Volar
declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        UiIcon: typeof import("uniqure-ui")["UiIcon"]
        UiButton: typeof import("uniqure-ui")["UiButton"]
    }

    interface ComponentCustomProperties {}
}

export {}

