import * as vscode from 'vscode';
import { OllamaClient } from '@mcptoolshop/polyglot-mcp/ollama';
import { getConfig, log } from './util.js';

let statusBarItem: vscode.StatusBarItem;
let pollTimer: ReturnType<typeof setInterval> | undefined;

export function createStatusBar(context: vscode.ExtensionContext): void {
  statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    50
  );
  statusBarItem.command = 'polyglot.checkStatus';
  statusBarItem.show();
  context.subscriptions.push(statusBarItem);

  // Initial check
  pollOllama();

  // Poll every 30 seconds
  pollTimer = setInterval(pollOllama, 30_000);
  context.subscriptions.push({ dispose: () => clearInterval(pollTimer!) });
}

async function pollOllama(): Promise<void> {
  const { ollamaUrl, model } = getConfig();
  const client = new OllamaClient(ollamaUrl);

  try {
    const available = await client.isAvailable();
    if (!available) {
      statusBarItem.text = '$(warning) Polyglot';
      statusBarItem.tooltip = 'Ollama is not running — click to check status';
      statusBarItem.color = new vscode.ThemeColor('statusBarItem.warningForeground');
      return;
    }

    const hasModel = await client.hasModel(model);
    if (!hasModel) {
      statusBarItem.text = '$(cloud-download) Polyglot';
      statusBarItem.tooltip = `Ollama running but model "${model}" not found — click to check status`;
      statusBarItem.color = new vscode.ThemeColor('statusBarItem.warningForeground');
      return;
    }

    statusBarItem.text = '$(globe) Polyglot';
    statusBarItem.tooltip = `Polyglot ready — ${model} via Ollama`;
    statusBarItem.color = undefined;
  } catch (err) {
    log(`Status poll error: ${err instanceof Error ? err.message : String(err)}`);
    statusBarItem.text = '$(error) Polyglot';
    statusBarItem.tooltip = 'Error checking Ollama status';
    statusBarItem.color = new vscode.ThemeColor('statusBarItem.errorForeground');
  }
}
