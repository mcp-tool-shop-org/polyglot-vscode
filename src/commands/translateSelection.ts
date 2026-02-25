import * as vscode from 'vscode';
import { translate } from '@mcptoolshop/polyglot-mcp/translate';
import { getConfig, pickLanguage, log } from '../util.js';

export async function translateSelection(): Promise<void> {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showWarningMessage('No active editor.');
    return;
  }

  const selection = editor.selection;
  const text = editor.document.getText(selection);
  if (!text.trim()) {
    vscode.window.showWarningMessage('No text selected.');
    return;
  }

  const target = await pickLanguage('Translate selection to…');
  if (!target) return;

  const { ollamaUrl, model } = getConfig();

  await vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: `Translating to ${target.name}…`,
      cancellable: false,
    },
    async () => {
      try {
        const result = await translate(text, 'en', target.code, {
          ollamaUrl,
          model,
        });

        await editor.edit((editBuilder) => {
          editBuilder.replace(selection, result.translation);
        });

        log(
          `Selection translated to ${target.name} (${result.chunks} chunk(s), ${result.durationMs}ms)`
        );
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        vscode.window.showErrorMessage(`Translation failed: ${msg}`);
        log(`Translation error: ${msg}`);
      }
    }
  );
}
