import { defineConfig } from "@solidjs/start/config"
// @ts-ignore
import pkg from "@vinxi/plugin-mdx"

const { default: mdx } = pkg

export default defineConfig({
  ssr: false,
  extensions: ["mdx", "md"],
  server: {
    preset: "cloudflare_pages",
    // enable CF Pages node compatiblity https://developers.cloudflare.com/workers/runtime-apis/nodejs/asynclocalstorage/
    rollupConfig: {
      external: ["__STATIC_CONTENT_MANIFEST", "node:async_hooks"],
    },
  },
  vite: {
    plugins: [
      mdx.withImports({})({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
      }),
    ],
  },
})
