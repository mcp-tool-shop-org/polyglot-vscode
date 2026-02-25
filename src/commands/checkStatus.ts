import * as vscode from 'vscode';
import { OllamaClient } from '@mcptoolshop/polyglot-mcp/ollama';
import { getConfig, log } from '../util.js';

export async function checkStatus(): Promise<void> {
  const { ollamaUrl, model } = getConfig();
  const client = new OllamaClient(ollamaUrl);

  await vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: 'Checking Ollama status…',
      cancellable: false,
    },
    async () => {
      try {
        const available = await client.isAvailable();
        if (!available) {
          const action = await vscode.window.showWarningMessage(
            'Ollama is not running.',
            'Start Ollama'
          );
          if (action === 'Start Ollama') {
            log('Attempting to start Ollama…');
            const started = await client.ensureRunning();
            if (started) {
              vscode.window.showInformationMessage('Ollama started successfully.');
              log('Ollama started.');
            } else {
              vscode.window.showErrorMessage(
                'Could not start Ollama. Install from https://ollama.com'
              );
            }
          }
          return;
        }

        const hasModel = await client.hasModel(model);
        if (!hasModel) {
          const action = await vscode.window.showWarningMessage(
            `Ollama running but model "${model}" not found.`,
            'Pull Model'
          );
          if (action === 'Pull Model') {
            log(`Pulling model ${model}…`);
            const pulled = await client.ensureModel(model);
            if (pulled) {
              vscode.window.showInformationMessage(`Model "${model}" is ready.`);
              log(`Model ${model} pulled.`);
            } else {
              vscode.window.showErrorMessage(
                `Failed to pull "${model}". Try manually: ollama pull ${model}`
              );
            }
          }
          return;
        }

        // List all models for the status message
        const models = await client.listModels();
        const modelNames = models.map((m) => m.name).join(', ');
        vscode.window.showInformationMessage(
          `Polyglot ready — ${model} loaded. Models: ${modelNames}`
        );
        log(`Status check: OK. Models: ${modelNames}`);
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        vscode.window.showErrorMessage(`Status check failed: ${msg}`);
        log(`Status check error: ${msg}`);
      }
    }
  );
}
