/**
 * @Author likan
 * @Date 2022-12-06 23:50:52
 * @Filepath vscode-keyboard-enhance/src/commands/select-to-start.ts
 */

export default function selectToStart(textEditor: vscode.TextEditor, edit: vscode.TextEditorEdit) {
  textEditor.selections = [new vscode.Selection(new vscode.Position(0, 0), textEditor.selection.end)];
}
