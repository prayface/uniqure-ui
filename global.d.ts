// GlobalComponents for Volar
declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        UiIcon: typeof import("uniqure-ui")["UiIcon"]
        UiInput: typeof import("uniqure-ui")["UiInput"]
        UiButton: typeof import("uniqure-ui")["UiButton"]
        UiSelect: typeof import("uniqure-ui")["UiSelect"]
        UiPagination: typeof import("uniqure-ui")["UiPagination"]
    }

    interface ComponentCustomProperties {}
}

export {}

