import * as vscode from 'vscode';
import * as path from 'node:path';
import { resolveLanguage } from '@mcptoolshop/polyglot-mcp/languages';
import { translateReadme as doTranslate } from '../readmeTranslator.js';
import { getConfig, pickLanguages, log } from '../util.js';

export async function translateReadme(): Promise<void> {
  // Find README.md in workspace root
  const workspaceFolders = vscode.workspace.workspaceFolders;
  if (!workspaceFolders || workspaceFolders.length === 0) {
    vscode.window.showWarningMessage('No workspace folder open.');
    return;
  }

  const rootUri = workspaceFolders[0].uri;
  const readmeUri = vscode.Uri.joinPath(rootUri, 'README.md');

  let readmeContent: string;
  try {
    const bytes = await vscode.workspace.fs.readFile(readmeUri);
    readmeContent = Buffer.from(bytes).toString('utf-8');
  } catch {
    vscode.window.showWarningMessage('No README.md found in workspace root.');
    return;
  }

  const { ollamaUrl, model, defaultLanguages } = getConfig();

  const targetCodes = await pickLanguages(
    'Translate README to… (select languages)',
    defaultLanguages
  );
  if (!targetCodes) return;

  const total = targetCodes.length;

  await vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: 'Translating README',
      cancellable: false,
    },
    async (progress) => {
      for (let i = 0; i < targetCodes.length; i++) {
        const code = targetCodes[i];
        const lang = resolveLanguage(code);
        const name = lang?.name ?? code;

        progress.report({
          message: `${name} (${i + 1}/${total})…`,
          increment: (1 / total) * 100,
        });

        try {
          const translated = await doTranslate(readmeContent, code, {
            ollamaUrl,
            model,
            onProgress: (msg) => log(`[${name}] ${msg}`),
          });

          const outUri = vscode.Uri.joinPath(
            rootUri,
            `README.${code.toLowerCase()}.md`
          );
          await vscode.workspace.fs.writeFile(
            outUri,
            Buffer.from(translated, 'utf-8')
          );

          log(`README translated to ${name} → ${path.basename(outUri.fsPath)}`);
        } catch (err) {
          const msg = err instanceof Error ? err.message : String(err);
          vscode.window.showErrorMessage(`Failed to translate to ${name}: ${msg}`);
          log(`README translation error (${name}): ${msg}`);
        }
      }

      vscode.window.showInformationMessage(
        `README translated to ${total} language(s).`
      );
    }
  );
}
