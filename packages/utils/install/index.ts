import { App, DefineComponent, ObjectDirective } from "vue"

export interface DirectiveOption extends ObjectDirective {
    name: string
}

export const installList: DefineComponent[] = []
export const installDirective: DirectiveOption[] = []

export const preInstall = (main: any) => {
    main.install = (app: App) => {
        app.component(main.name, main)
    }

    installList.push(main)
    return main
}

export const dirInstall = (main: any): DirectiveOption => {
    installDirective.push(main)
    return main
}

export const install = (app: App) => {
    installList.forEach((v) => {
        app.component(v.name, v)
    })

    installDirective.forEach((v) => {
        app.directive(v.name, v)
    })
}
