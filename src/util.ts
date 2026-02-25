import * as vscode from 'vscode';
import { LANGUAGES, type Language } from '@mcptoolshop/polyglot-mcp/languages';

/** Read a Polyglot setting from VS Code configuration. */
export function getConfig() {
  const cfg = vscode.workspace.getConfiguration('polyglot');
  return {
    ollamaUrl: cfg.get<string>('ollamaUrl', 'http://localhost:11434'),
    model: cfg.get<string>('model', 'translategemma:12b'),
    defaultLanguages: cfg.get<string[]>('defaultLanguages', [
      'ja', 'zh', 'es', 'fr', 'hi', 'it', 'pt-BR',
    ]),
  };
}

/** Show a quick-pick for a single language. Returns the Language or undefined. */
export async function pickLanguage(
  placeholder: string
): Promise<Language | undefined> {
  const items = LANGUAGES.filter((l) => l.code !== 'en').map((l) => ({
    label: l.name,
    description: l.code,
    language: l,
  }));

  const pick = await vscode.window.showQuickPick(items, {
    placeHolder: placeholder,
    matchOnDescription: true,
  });

  return pick?.language;
}

/** Show a multi-select quick-pick for languages. Returns selected codes. */
export async function pickLanguages(
  placeholder: string,
  defaults: string[]
): Promise<string[] | undefined> {
  const items = LANGUAGES.filter((l) => l.code !== 'en').map((l) => ({
    label: l.name,
    description: l.code,
    picked: defaults.includes(l.code),
    language: l,
  }));

  const picks = await vscode.window.showQuickPick(items, {
    placeHolder: placeholder,
    canPickMany: true,
    matchOnDescription: true,
  });

  if (!picks || picks.length === 0) return undefined;
  return picks.map((p) => p.language.code);
}

/** Shared output channel — created once during activation. */
let _outputChannel: vscode.OutputChannel | undefined;

export function getOutputChannel(): vscode.OutputChannel {
  if (!_outputChannel) {
    _outputChannel = vscode.window.createOutputChannel('Polyglot');
  }
  return _outputChannel;
}

export function log(msg: string): void {
  getOutputChannel().appendLine(`[${new Date().toISOString()}] ${msg}`);
}
