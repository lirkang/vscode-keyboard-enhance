/**
 * @Author likan
 * @Date 2022/8/13 09:03:56
 * @Filepath vscode-keyboard-enhance/src/types/global.d.ts
 */

declare global {
  /* eslint-disable no-restricted-imports */
  export * as vscode from 'vscode';
}

declare global {
  declare namespace NodeJS {
    /* eslint-disable unicorn/prevent-abbreviations */
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
    }
  }

  type Writeable<T extends Record<PropertyKey, unknown>> = { -readonly [K in keyof T]: T[K] };
}

export { };
