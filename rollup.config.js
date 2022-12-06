// @ts-check

/**
 * @Author
 * @Date 2022-09-15 16:01:14
 * @Filepath vscode-keyboard-enhance/rollup.config.js
 * @Description
 */

import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import inject from '@rollup/plugin-inject';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import { resolve } from 'path';
import { defineConfig } from 'rollup';
import del from 'rollup-plugin-delete';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';

const outDir = 'lib';
const IS_PROD = process.env.NODE_ENV !== 'development';

const config = defineConfig({
  onwarn(warning, warn) {
    if (warning.code === 'THIS_IS_UNDEFINED') return;
    warn(warning);
  },
  input: 'src/index.ts',
  output: { format: 'commonjs', sourcemap: IS_PROD ? false : 'inline', dir: outDir },
  external: ['vscode'],
  treeshake: IS_PROD ? 'smallest' : false,
  watch: {
    include: ['src/**'],
    exclude: ['node_modules/**'],
  },
  plugins: [
    replace({ preventAssignment: true }),
    commonjs({}),
    inject({ vscode: 'vscode' }),
    typescript({ sourceMap: !IS_PROD, outDir }),
    nodeResolve({ extensions: ['.js', '.ts'], mainFields: ['module', 'main'] }),
    alias({ entries: [{ find: '@', replacement: resolve(__dirname, 'src') }] }),
  ],
});

if (process.env.NODE_ENV !== 'development') {
  config.plugins?.push(filesize({}), del({ targets: `${outDir}/*` }));
}

if (process.env.NODE_ENV === 'production') {
  config.plugins?.push(terser({ format: { comments: false }, compress: { drop_console: true }, mangle: true }));
}

export default config;
