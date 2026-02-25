import * as vscode from 'vscode';
import { createStatusBar } from './statusBar.js';
import { getOutputChannel, log } from './util.js';
import { translateSelection } from './commands/translateSelection.js';
import { translateFile } from './commands/translateFile.js';
import { translateReadme } from './commands/translateReadme.js';
import { checkStatus } from './commands/checkStatus.js';

export async function activate(context: vscode.ExtensionContext): Promise<void> {
  log('Activating Polyglot extension...');

  context.subscriptions.push(
    vscode.commands.registerCommand('polyglot.translateSelection', translateSelection),
    vscode.commands.registerCommand('polyglot.translateFile', translateFile),
    vscode.commands.registerCommand('polyglot.translateReadme', translateReadme),
    vscode.commands.registerCommand('polyglot.checkStatus', checkStatus),
    getOutputChannel(),
  );

  createStatusBar(context);
  log('Polyglot activated.');
}

export function deactivate(): void {
  log('Polyglot deactivated.');
}
