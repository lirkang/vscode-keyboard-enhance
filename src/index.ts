/**
 * @Author likan
 * @Date 2022-12-06 23:12:18
 * @Filepath vscode-keyboard-enhance/src/index.ts
 */

import commands from '@/commands';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(...commands);
}

export function deactivate() {
  //
}
