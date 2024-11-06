import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";

export default {
    input: 'src/joke.ts',
    output: { file: 'dist/bundle.js'},
    plugins: [commonjs(), typescript(), nodeResolve({ browser: true }), terser()],
};