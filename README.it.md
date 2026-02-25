<p align="center">
  <img src="media/icon.png" width="400" alt="Polyglot">
</p>

<p><strong>Translate text, files, and READMEs directly in VS Code — powered by your local GPU. 55 languages, zero cloud dependency.</strong></p>

<p align="center">
  <a href="https://github.com/mcp-tool-shop-org/polyglot-vscode/actions"><img src="https://github.com/mcp-tool-shop-org/polyglot-vscode/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
  <a href="https://github.com/mcp-tool-shop-org/polyglot-vscode/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License"></a>
  <a href="https://mcp-tool-shop-org.github.io/polyglot-vscode/"><img src="https://img.shields.io/badge/Landing_Page-live-blue" alt="Landing Page"></a>
</p>

---

## Cosa fa

Polyglot esegue [TranslateGemma 12B](https://ai.google.dev/gemma/docs/core/translategemma) tramite [Ollama](https://ollama.com) sulla GPU del vostro computer. Non sono necessari codici API, servizi cloud o trasferimento di dati al di fuori del vostro dispositivo.

- **Traduzione di selezione di testo:** Selezionare il testo, premere `Ctrl+Alt+T`, scegliere una lingua. Fatto.
- **Traduzione di un file:** Tradurre un intero file, creando un nuovo file con estensione `.ja.ext` accanto all'originale.
- **Traduzione di README:** Tradurre in batch il file README.md in 7 lingue, preservando blocchi di codice, tabelle e badge.
- **Pannello laterale:** Icona del globo nella barra delle attività, con pulsanti di azione e informazioni sullo stato di Ollama in tempo reale.

## Requisiti

- [Ollama](https://ollama.com) installato e in esecuzione.
- Una GPU con una quantità di VRAM sufficiente per il modello (12 GB per `translategemma:12b`, 2 GB per `translategemma:2b`).
- Il modello viene scaricato automaticamente al primo utilizzo.

## Come iniziare

1. Installare l'estensione.
2. Cliccare sull'icona del globo nella barra delle attività (barra laterale sinistra).
3. Cliccare su **Verifica stato** – Polyglot avvierà Ollama e scaricherà il modello, se necessario.
4. Selezionare del testo e premere `Ctrl+Alt+T` (o `Cmd+Alt+T` su Mac).

## Comandi

| Comando. | Scorciatoia. | Descrizione. |
| Certo, ecco la traduzione:

"Please provide the English text you would like me to translate into Italian." | Certainly. Please provide the English text you would like me to translate. | Certo, ecco la traduzione:

"Please provide the English text you would like me to translate into Italian." |
| **Polyglot: Selezione di traduzioni** | `Ctrl+Alt+T` | Traduci il testo selezionato direttamente nel documento. |
| **Polyglot: Translate File** | — | Tradurre il file corrente in un nuovo file. |
| **Polyglot: Tradurre il file README** | — | Tradurre in blocco il file README.md in diverse lingue. |
| **Polyglot: Check Status** | — | Verificare la connessione con Ollama e la disponibilità del modello. |
| **Polyglot: Help** | — | Accesso rapido alle impostazioni, alle istruzioni e ai link utili. |

## Punti di accesso

- **Pannello laterale:** Icona del globo nella barra delle attività, con pulsanti di azione personalizzati.
- **Barra del titolo dell'editor:** L'icona del globo appare quando del testo è selezionato.
- **Menu contestuale (clic destro):** "Traduci la selezione" nel menu contestuale dell'editor.
- **Palette dei comandi:** `Ctrl+Shift+P` → digitare "Polyglot".
- **Scorciatoia da tastiera:** `Ctrl+Alt+T` con del testo selezionato.

## Impostazioni

| Ambientazione. | Predefinito. | Descrizione. |
| Certo, ecco la traduzione:

"Please provide the English text you would like me to translate into Italian." | Certo, ecco la traduzione:

"Please provide the English text you would like me to translate into Italian." | Certo, ecco la traduzione:

"Please provide the English text you would like me to translate into Italian." |
| `polyglot.ollamaUrl` | `http://localhost:11434` | URL del server Ollama. |
| `polyglot.model` | `translategemma:12b` | Modello di traduzione (provare `2b` per ridurre l'utilizzo di VRAM). |
| `polyglot.defaultSourceLanguage` | `en` | Ecco la traduzione:

Lingua di origine per le traduzioni. |
| `polyglot.defaultLanguages` | 7 lingue. | Lingue di destinazione per la traduzione del file README. |

## Lingue supportate

Arabo, bengalese, bulgaro, catalano, cinese (semplificato e tradizionale), croato, ceco, danese, olandese, inglese, estone, finlandese, francese, tedesco, greco, gujarati, ebraico, hindi, ungherese, indonesiano, italiano, giapponese, kannada, coreano, lettone, lituano, macedone, malese, malayalam, marathi, norvegese, persiano, polacco, portoghese, rumeno, russo, serbo, slovacco, sloveno, spagnolo, swahili, svedese, tamil, telugu, tailandese, turco, ucraino, urdu, vietnamita e gallese.

## Come funziona

"Polyglot wraps" [@mcptoolshop/polyglot-mcp](https://www.npmjs.com/package/@mcptoolshop/polyglot-mcp), un motore di traduzione locale che:

1. Avvia automaticamente Ollama se non è in esecuzione.
2. Scarica automaticamente il modello TranslateGemma al primo utilizzo.
3. Divide testi lunghi in blocchi, rispettando i confini di paragrafi e frasi.
4. Applica un glossario tecnico per garantire la precisione dei termini.
5. Corregge automaticamente alcune problematiche comuni dei modelli (alternative duplicate, punti finali superflui).

Per la traduzione dei file README, viene utilizzata una segmentazione intelligente: i blocchi di codice, i badge HTML e gli URL vengono mantenuti inalterati, mentre titoli, paragrafi e il contenuto delle tabelle vengono tradotti.

## Privacy

Tutte le operazioni di traduzione vengono eseguite localmente sulla vostra GPU. Nessun dato viene inviato a servizi cloud. Il vostro testo non lascia mai il vostro dispositivo.

## Licenza

MIT.
