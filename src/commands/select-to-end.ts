/**
 * @Author likan
 * @Date 2022-12-06 23:55:18
 * @Filepath vscode-keyboard-enhance/src/commands/select-to-end.ts
 */

export default function selectToEnd(textEditor: vscode.TextEditor, edit: vscode.TextEditorEdit) {
  textEditor.selections = [
    new vscode.Selection(
      textEditor.selection.start,
      new vscode.Position(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY)
    ),
  ];
}
