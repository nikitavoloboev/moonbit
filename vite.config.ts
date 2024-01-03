import { defineConfig } from "@solidjs/start/config"
// mdx code taken from https://github.com/solidjs/solid-start/tree/main/examples/with-mdx
/* @ts-ignore */
import pkg from "@vinxi/plugin-mdx"

const { default: mdx } = pkg

// https://nitro.unjs.io/deploy/providers/cloudflare deploy on cloudflare pages
// using https://ryanjc.com/blog/solidstart-cloudflare-pages/ to deploy solid start 2

// TODO: add ssr to the website
// add https://github.com/cyco130/vite-plugin-mdx (open issue https://discord.com/channels/722131463138705510/910635844119982080/1190950777880060037)
export default defineConfig({
  start: {
    ssr: false,
    extensions: ["mdx", "md"],
    server: {
      preset: "cloudflare_pages",
      // enable CF Pages node compatiblity https://developers.cloudflare.com/workers/runtime-apis/nodejs/asynclocalstorage/
      rollupConfig: {
        external: ["__STATIC_CONTENT_MANIFEST", "node:async_hooks"],
      },
    },
  },
  plugins: [
    mdx.withImports({})({
      jsx: true,
      jsxImportSource: "solid-js",
      providerImportSource: "solid-mdx",
    }),
  ],
})
