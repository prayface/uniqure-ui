import { App, DefineComponent } from "vue"

export const installList: DefineComponent[] = []

export const preInstall = (main: any) => {
    main.install = (app: App) => {
        app.component(main.name, main)
    }

    installList.push(main)
    return main
}

export const install = (app: App) => {
    installList.forEach((v) => {
        app.component(v.name, v)
    })
}
