import { defineConfig } from "@rsbuild/core"
import { pluginVue2 } from "@rsbuild/plugin-vue2"
import { pluginSass } from "@rsbuild/plugin-sass"
 

export default defineConfig({
    plugins: [
        pluginVue2(),
        pluginSass({
            sassLoaderOptions: {
                additionalData: `@import "b-project/index.scss";`,
            },
        }),
    ],
    html: {
        template: "./src/index.html" 
    },
    source: {
        entry: {
            index: "./src/index.js",
        },
    },
})
