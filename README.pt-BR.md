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

## O que ele faz

O Polyglot executa o [TranslateGemma 12B](https://ai.google.dev/gemma/docs/core/translategemma) através do [Ollama](https://ollama.com) na sua placa de vídeo local. Não são necessárias chaves de API, serviços em nuvem, nem seus dados saem do seu computador.

- **Traduzir seleção:** Selecione o texto, pressione `Ctrl+Alt+T`, escolha um idioma. Pronto.
- **Traduzir arquivo:** Traduza um arquivo inteiro para um novo arquivo com a extensão `.ja.ext`, mantendo o arquivo original.
- **Traduzir README:** Traduza em lote o seu arquivo README.md para 7 idiomas, preservando blocos de código, tabelas e distintivos.
- **Painel lateral:** Ícone de globo na barra de atividades, com botões de ação e o status atualizado do Ollama.

## Requisitos

- O Ollama (https://ollama.com) deve estar instalado e em execução.
- É necessária uma GPU com VRAM suficiente para o modelo (12GB para `translategemma:12b`, 2GB para `translategemma:2b`).
- O modelo é baixado automaticamente na primeira utilização.

## Começando

1. Instale a extensão.
2. Clique no ícone do globo na barra de atividades (barra lateral esquerda).
3. Clique em "**Verificar Status**" — o Polyglot iniciará o Ollama e baixará o modelo, se necessário.
4. Selecione algum texto e pressione `Ctrl+Alt+T` (ou `Cmd+Alt+T` no Mac).

## Comandos

| Comando. | Atalho. | Descrição. |
| Please provide the English text you would like me to translate. I am ready to translate it into Portuguese. | Please provide the English text you would like me to translate. I am ready to translate it into Portuguese. | "Please provide the text you would like me to translate." |
| **Polyglot: Tradução Selecionada** | `Ctrl+Alt+T` | Traduzir o texto selecionado diretamente no local. |
| **Polyglot: Translate File** | — | Traduzir o arquivo atual para um novo arquivo. |
| **Polyglot: Traduzir o arquivo README** | — | Traduzir em lote o arquivo README.md para vários idiomas. |
| **Polyglot: Check Status** | — | Verifique a conexão com o Ollama e a disponibilidade do modelo. |
| **Polyglot: Help** | — | Acesso rápido às configurações, ao guia de instruções e a links. |

## Pontos de acesso

- **Painel lateral:** Ícone do globo na barra de atividades, com botões de ação estilizados.
- **Barra de título do editor:** O ícone do globo aparece quando o texto está selecionado.
- **Menu de clique com o botão direito:** Opção "Traduzir seleção" no menu de contexto do editor.
- **Paleta de comandos:** `Ctrl+Shift+P` → digite "Polyglot".
- **Atalho de teclado:** `Ctrl+Alt+T` com o texto selecionado.

## Configurações

| Cenário. | Padrão. | Descrição. |
| Please provide the English text you would like me to translate. I am ready to translate it into Portuguese. | Please provide the English text you would like me to translate. I am ready to translate it into Portuguese. | "Please provide the text you would like me to translate." |
| `polyglot.ollamaUrl` | `http://localhost:11434` | URL do servidor Ollama. |
| `polyglot.model` | `translategemma:12b` | Modelo de tradução (experimente usar `2b` para consumir menos memória de vídeo). |
| `polyglot.defaultSourceLanguage` | `en` | Source language for translations.
```portuguese
Língua de origem para traduções.
``` |
| `polyglot.defaultLanguages` | 7 idiomas. | Idiomas-alvo para a tradução do arquivo README. |

## Idiomas suportados

Árabe, Bengali, Búlgaro, Catalão, Chinês (Simplificado e Tradicional), Croata, Checo, Dinamarquês, Holandês, Inglês, Estoniano, Finlandês, Francês, Alemão, Grego, Gujarati, Hebraico, Hindi, Húngaro, Indonésio, Italiano, Japonês, Kannada, Coreano, Letão, Lituano, Macedônio, Malaio, Malayalam, Marathi, Norueguês, Persa, Polonês, Português, Romeno, Russo, Sérvio, Eslovaco, Esloveno, Espanhol, Suaíli, Sueco, Tamil, Telugu, Tailandês, Turco, Ucraniano, Urdu, Vietnamita e Galês.

## Como funciona

O Polyglot Wraps [@mcptoolshop/polyglot-mcp](https://www.npmjs.com/package/@mcptoolshop/polyglot-mcp) é um sistema de tradução local que:

1. Inicia automaticamente o Ollama se ele não estiver em execução.
2. Faz o download automático do modelo TranslateGemma na primeira utilização.
3. Divide textos longos em partes, respeitando os limites de parágrafos e frases.
4. Aplica um glossário técnico para garantir a precisão dos termos.
5. Corrige problemas comuns encontrados nos modelos (alternativas duplicadas, pontos finais desnecessários).

Para a tradução de arquivos README, é utilizada uma segmentação inteligente: blocos de código, distintivos HTML e URLs são mantidos inalterados, enquanto títulos, parágrafos e o conteúdo de tabelas são traduzidos.

## Privacidade

Toda a tradução é realizada localmente, na sua placa de vídeo (GPU). Nada é enviado para nenhum serviço na nuvem. O seu texto nunca sai do seu computador.

## Licença

MIT.
