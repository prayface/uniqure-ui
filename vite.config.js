import { defineConfig, loadEnv } from "vite"

import VuePlugin from "@vitejs/plugin-vue"

import path from "path"

export default ({ mode }) => {
    const env = loadEnv(mode, process.cwd())
    return defineConfig({
        base: env.VITE_ASSET_URL || "/",
        server: {
            strictPort: true,
            host: env.VITE_HOST || "8080",
            port: env.VITE_PORT || "127.0.0.1",
            cors: env.VITE_CORS || false
        },
        plugins: [VuePlugin()],
        resolve: {
            alias: {
                "@": path.join(__dirname, "src"),
                "@uniqure-ui": path.join(__dirname, "packages")
            }
        },
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                    modifyVars: {
                        hack: `true; @import (reference) "${path.resolve(__dirname, "src/assets/less/common.less")}"`
                    }
                }
            }
        }
    })
}
