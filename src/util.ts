import * as vscode from 'vscode';
import { LANGUAGES, type Language } from '@mcptoolshop/polyglot-mcp/languages';

/** Read all Polyglot settings from VS Code configuration. */
export function getConfig() {
  const cfg = vscode.workspace.getConfiguration('polyglot');
  return {
    ollamaUrl: cfg.get<string>('ollamaUrl', 'http://localhost:11434'),
    model: cfg.get<string>('model', 'translategemma:12b'),
    defaultSourceLanguage: cfg.get<string>('defaultSourceLanguage', 'en'),
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

/**
 * Show a friendly error message with contextual action buttons.
 * Translates raw error messages into human-readable guidance.
 */
export function friendlyError(context: string, err: unknown): void {
  const raw = err instanceof Error ? err.message : String(err);
  log(`${context}: ${raw}`);

  // Ollama not running
  if (raw.includes('fetch') || raw.includes('ECONNREFUSED') || raw.includes('Cannot connect')) {
    vscode.window.showErrorMessage(
      `${context}: Ollama doesn't seem to be running. Start it first, or check your connection.`,
      'Check Status',
      'Help'
    ).then((action) => {
      if (action === 'Check Status') vscode.commands.executeCommand('polyglot.checkStatus');
      else if (action === 'Help') vscode.commands.executeCommand('polyglot.help');
    });
    return;
  }

  // Model not found
  if (raw.includes('not found') || raw.includes('Could not pull')) {
    vscode.window.showErrorMessage(
      `${context}: The translation model isn't available. Run "Polyglot: Check Status" to download it.`,
      'Check Status'
    ).then((action) => {
      if (action === 'Check Status') vscode.commands.executeCommand('polyglot.checkStatus');
    });
    return;
  }

  // Unsupported language
  if (raw.includes('Unsupported')) {
    vscode.window.showErrorMessage(
      `${context}: ${raw}. Polyglot supports 55 languages — check the language code in Settings.`,
      'Settings'
    ).then((action) => {
      if (action === 'Settings') {
        vscode.commands.executeCommand('workbench.action.openSettings', 'polyglot');
      }
    });
    return;
  }

  // Generic fallback
  vscode.window.showErrorMessage(
    `${context}: ${raw}`,
    'Help'
  ).then((action) => {
    if (action === 'Help') vscode.commands.executeCommand('polyglot.help');
  });
}
