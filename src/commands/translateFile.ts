import * as vscode from 'vscode';
import * as path from 'node:path';
import { translate } from '@mcptoolshop/polyglot-mcp/translate';
import { getConfig, pickLanguage, log } from '../util.js';

export async function translateFile(): Promise<void> {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showWarningMessage('No active file.');
    return;
  }

  const sourceLang = await pickLanguage('Source language of this file…');
  if (!sourceLang) return;

  const targetLang = await pickLanguage('Translate to…');
  if (!targetLang) return;

  const doc = editor.document;
  const text = doc.getText();
  const { ollamaUrl, model } = getConfig();

  await vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: `Translating ${path.basename(doc.fileName)} → ${targetLang.name}…`,
      cancellable: false,
    },
    async () => {
      try {
        const result = await translate(text, sourceLang.code, targetLang.code, {
          ollamaUrl,
          model,
        });

        // Build output filename: file.txt → file.ja.txt
        const parsed = path.parse(doc.fileName);
        const outPath = path.join(
          parsed.dir,
          `${parsed.name}.${targetLang.code}${parsed.ext}`
        );
        const outUri = vscode.Uri.file(outPath);

        await vscode.workspace.fs.writeFile(
          outUri,
          Buffer.from(result.translation, 'utf-8')
        );

        const openDoc = await vscode.workspace.openTextDocument(outUri);
        await vscode.window.showTextDocument(openDoc, { preview: false });

        log(
          `File translated: ${path.basename(doc.fileName)} → ${path.basename(outPath)} (${result.durationMs}ms)`
        );
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        vscode.window.showErrorMessage(`Translation failed: ${msg}`);
        log(`File translation error: ${msg}`);
      }
    }
  );
}
