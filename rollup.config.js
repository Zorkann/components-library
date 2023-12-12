import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import styles from "rollup-plugin-styles";
import dts from "rollup-plugin-dts";
import babel from "rollup-plugin-babel";

//NEW
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const cssExportMap = {};
const packageJson = require("./package.json");

export default [
  {
    input: ["./src/index.ts"],
    external: ["react", "react-dom", "@emotion/react", "@emotion/styled"],
    output: {
      dir: "dist",
      format: "esm",
      preserveModules: true,
      preserveModulesRoot: "src",
      sourcemap: true,
    },

    plugins: [
      // NEW
      peerDepsExternal(),

      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      styles({
        modules: true,
        mode: [
          "inject",
          {
            treeshakeable: true,
          },
        ],
      }),
      babel({
        exclude: "node_modules/**",
      }),

      // NEW
      terser(),
    ],
  },
  {
    input: "dist/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
