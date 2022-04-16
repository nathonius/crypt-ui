import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import pkg from "./package.json";
import preprocess from "svelte-preprocess";
import typescript from "@rollup/plugin-typescript";
import sass from "rollup-plugin-scss";

const production = !process.env.ROLLUP_WATCH;

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, "$3")
  .replace(/^\w/, (m) => m.toUpperCase())
  .replace(/-\w/g, (m) => m[1].toUpperCase());

export default [
  {
    input: "src/index.ts",
    output: [
      { file: pkg.module, format: "es" },
      { file: pkg.main, format: "umd", name },
    ],
    plugins: [
      sass({ output: "dist/crypt.css" }),
      svelte({
        preprocess: preprocess({
          sourceMap: false,
        }),
        compilerOptions: {
          customElement: false,
          css: true,
        },
        emitCss: false,
      }),
      resolve(),
      typescript({
        sourceMap: !production,
        inlineSources: !production,
      }),
    ],
  },
];
