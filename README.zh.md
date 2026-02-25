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

## 它的作用/功能

Polyglot 利用您的本地 GPU，通过 [Ollama](https://ollama.com) 运行 [TranslateGemma 12B](https://ai.google.dev/gemma/docs/core/translategemma) 模型。无需 API 密钥，无需云服务，您的数据不会离开您的设备。

- **文本翻译** — 选中文本，按下 `Ctrl+Alt+T`，选择目标语言。即可完成翻译。
- **文件翻译** — 将整个文件翻译成新的 `file.ja.ext` 文件，并与原始文件同时存在。
- **README 文件翻译** — 批量将您的 README.md 文件翻译成 7 种语言，同时保留代码块、表格和徽章。
- **侧边栏面板** — 在活动栏中显示地球图标，提供操作按钮和实时 Ollama 状态信息。

## 要求

- 已安装并运行了 [Ollama](https://ollama.com)。
- 需要配备具有足够显存的 GPU（`translategemma:12b` 模型需要 12GB 显存，`translategemma:2b` 模型需要 2GB 显存）。
- 模型将在首次使用时自动下载。

## 入门指南

1. 安装扩展程序。
2. 点击活动栏（左侧边栏）中的地球图标。
3. 点击“检查状态”按钮 — Polyglot 将启动 Ollama，并在需要时下载模型。
4. 选中一些文本，然后按下 `Ctrl+Alt+T` 键（在 Mac 上，按下 `Cmd+Alt+T` 键）。

## 命令

| 命令。 | 快捷方式 | 描述。 |
| 好的，请提供需要翻译的英文文本。 | 好的，请提供需要翻译的英文文本。 | 好的，请提供需要翻译的英文文本。 |
| 多语言：翻译选择。 | `Ctrl+Alt+T` | 将选定的文本直接翻译。 |
| **Polyglot: Translate File** | — | 将当前文件翻译并保存到新文件中。 |
| 多语言支持：翻译 README 文件。 | — | 批量将 README.md 文件翻译成多种语言。 |
| **Polyglot: Check Status** | — | 验证 Ollama 连接和模型可用性。 |
| **Polyglot: Help** | — | 快速访问设置、使用指南和相关链接。 |

## 接入点

- **侧边栏**：活动栏中的地球图标，配有样式化的操作按钮。
- **编辑器标题栏**：当文本被选中时，会显示地球图标。
- **右键菜单**：在编辑器的上下文菜单中，选择“翻译选定内容”。
- **命令面板**：按下 `Ctrl+Shift+P` → 输入 "Polyglot"。
- **键盘快捷键**：选中文本后，按下 `Ctrl+Alt+T`。

## 设置

| 场景设置。 | 默认设置。 | 描述。 |
| 好的，请提供需要翻译的英文文本。 | 好的，请提供需要翻译的英文文本。 | 好的，请提供需要翻译的英文文本。 |
| `polyglot.ollamaUrl` | `http://localhost:11434` | Ollama 服务器的 URL 地址。 |
| `polyglot.model` | `translategemma:12b` | 翻译模型（尝试使用 `2b` 模型，以减少显存占用）。 |
| `polyglot.defaultSourceLanguage` | `en` | 翻译的源语言。 |
| `polyglot.defaultLanguages` | 7种语言。 | README 文件翻译的目标语言。 |

## 支持的语言

阿拉伯语、孟加拉语、保加利亚语、加泰罗尼亚语、中文（简体和繁体）、克罗地亚语、捷克语、丹麦语、荷兰语、英语、爱沙尼亚语、芬兰语、法语、德语、希腊语、古吉拉特语、希伯来语、印地语、匈牙利语、印尼语、意大利语、日语、卡纳达语、韩语、拉脱维亚语、立陶宛语、马其顿语、马来语、马拉雅拉姆语、马拉地语、挪威语、波斯语、波兰语、葡萄牙语、罗马尼亚语、俄语、塞尔维亚语、斯洛伐克语、斯洛文尼亚语、西班牙语、斯瓦希里语、瑞典语、泰米尔语、泰卢固语、泰语、土耳其语、乌克兰语、乌尔都语、越南语和威尔士语。

## 工作原理

Polyglot 插件 [@mcptoolshop/polyglot-mcp](https://www.npmjs.com/package/@mcptoolshop/polyglot-mcp)，是一款本地化的翻译引擎，它：

1. 如果 Ollama 未运行，则自动启动它。
2. 首次使用时，自动下载 TranslateGemma 模型。
3. 将长文本分割成段落或句子。
4. 应用软件术语表，以确保技术术语的准确性。
5. 修复常见模型问题（例如重复的备选项、末尾的句点）。

在README文件的翻译过程中，它采用智能分段技术：代码块、HTML徽章和URL保持不变，而标题、段落和表格内容则进行翻译。

## 隐私

所有的翻译过程都在您的GPU本地进行。没有任何数据被发送到云服务。您的文本永远不会离开您的设备。

## 许可

麻省理工学院。
