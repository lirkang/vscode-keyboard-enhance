/**
 * @Author likan
 * @Date 2022-12-06 23:49:55
 * @Filepath vscode-keyboard-enhance/src/commands/index.ts
 */

import selectToEnd from '@/commands/select-to-end';
import selectToStart from '@/commands/select-to-start';

const commands: Array<vscode.Disposable> = [
  vscode.commands.registerTextEditorCommand('keyboard-enhance.select-to-start', selectToStart),
  vscode.commands.registerTextEditorCommand('keyboard-enhance.select-to-end', selectToEnd),
];

export default commands;
