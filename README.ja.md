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

## その機能・役割

Polyglotは、[TranslateGemma 12B](https://ai.google.dev/gemma/docs/core/translategemma)を、ローカルのGPU上で[Ollama](https://ollama.com)を通じて実行します。APIキーは不要で、クラウドサービスも利用せず、データはあなたのコンピューターから一切外部に出ることはありません。

- **テキストの翻訳:** 翻訳したいテキストを選択し、`Ctrl+Alt+T` を押して、翻訳先の言語を選択します。これで完了です。
- **ファイルの翻訳:** ファイル全体を翻訳し、元のファイルと一緒に `file.ja.ext` という新しいファイルとして保存します。
- **README の翻訳:** README.md ファイルを、コードブロック、表、バッジなどを保持したまま、7 か国語にまとめて翻訳します。
- **サイドバーパネル:** アクティビティバーにある地球アイコンをクリックすると、アクションボタンと、Ollama のリアルタイムの状態が表示されるサイドバーパネルが開きます。

## 要件

- [Ollama](https://ollama.com) がインストールされ、動作していること
- モデルを実行するために必要なVRAMを搭載したGPU ( `translategemma:12b` の場合12GB、 `translategemma:2b` の場合2GB)
- モデルは、初回利用時に自動的にダウンロードされます。

## 始め方

1. 拡張機能をインストールします。
2. アクティビティバー（左側のサイドバー）にある地球アイコンをクリックします。
3. **状態確認** をクリックします。Polyglot が Ollama を起動し、必要に応じてモデルをダウンロードします。
4. テキストを選択し、`Ctrl+Alt+T` (Mac の場合は `Cmd+Alt+T`) を押します。

## コマンド

| コマンド | ショートカット | 説明 |
| Please provide the English text you would like me to translate. I am ready to translate it into Japanese. | 以下に翻訳します。
----------
The company is committed to providing high-quality products and services.
同社は、高品質な製品とサービスを提供することに尽力しています。 | 以下に翻訳します。
-------------
申し訳ありませんが、翻訳するテキストが提供されていません。テキストを入力してください。 |
| **Polyglot: 翻訳オプション** | `Ctrl+Alt+T` | 選択したテキストをその場で翻訳します。 |
| **Polyglot: Translate File** | — | 現在のファイルを新しいファイルに変換します。 |
| **Polyglot: README ファイルの翻訳** | — | README.mdファイルを、複数の言語にまとめて翻訳する。 |
| **Polyglot: Check Status** | — | Ollamaとの接続状況と、利用可能なモデルを確認してください。 |
| **Polyglot: Help** | — | 設定、操作ガイド、および関連リンクへのクイックアクセス。 |

## アクセスポイント

- **サイドバーパネル:** アクティビティバーに表示される地球アイコンと、スタイルが施された操作ボタン。
- **エディターのタイトルバー:** テキストが選択されている場合に、地球アイコンが表示されます。
- **右クリックメニュー:** エディターのコンテキストメニューに「選択範囲の翻訳」という項目があります。
- **コマンドパレット:** `Ctrl+Shift+P` を押下 → 「Polyglot」と入力。
- **キーボードショートカット:** 選択したテキストがある状態で、`Ctrl+Alt+T` を押下。

## 設定

| 設定。 | デフォルト設定 | 説明 |
| 以下の文章を日本語に翻訳してください。 | ご依頼ありがとうございます。翻訳を開始します。 | 以下に翻訳します。
-------------
申し訳ありませんが、翻訳するテキストが提供されていません。テキストを入力してください。 |
| `polyglot.ollamaUrl` | `http://localhost:11434` | OllamaサーバーのURL。 |
| `polyglot.model` | `translategemma:12b` | 翻訳モデル（VRAMの使用量を減らすには、`2b` を試してみてください）。 |
| `polyglot.defaultSourceLanguage` | `en` | 翻訳の際の参照言語。 |
| `polyglot.defaultLanguages` | 7言語対応。 | READMEファイルの翻訳対象言語。 |

## 対応言語

アラビア語、ベンガル語、ブルガリア語、カタルーニャ語、中国語（簡体字・繁体字）、クロアチア語、チェコ語、デンマーク語、オランダ語、英語、エストニア語、フィンランド語、フランス語、ドイツ語、ギリシャ語、グジャラート語、ヘブライ語、ヒンディー語、ハンガリー語、インドネシア語、イタリア語、日本語、カンナダ語、韓国語、ラトビア語、リトアニア語、マケドニア語、マレー語、マラヤーラム語、マラーティー語、ノルウェー語、ペルシア語、ポーランド語、ポルトガル語、ルーマニア語、ロシア語、セルビア語、スロバキア語、スロベニア語、スペイン語、スワヒリ語、スウェーデン語、タミル語、テルグ語、タイ語、トルコ語、ウクライナ語、ウルドゥー語、ベトナム語、ウェールズ語。

## 動作原理

Polyglot wraps（[@mcptoolshop/polyglot-mcp](https://www.npmjs.com/package/@mcptoolshop/polyglot-mcp)）は、ローカルで動作する翻訳エンジンで、以下の機能を提供します。

1. Ollamaが起動していない場合は、自動的に起動します。
2. 初めて使用する際に、TranslateGemmaモデルを自動的にダウンロードします。
3. 長いテキストを、段落または文の区切りで分割します。
4. 正確な技術用語のために、ソフトウェア用語集を適用します。
5. モデル特有の一般的な問題を修正します（重複した代替案、末尾のピリオドなど）。

READMEファイルの翻訳では、高度な解析技術が用いられており、コードブロック、HTMLのバッジ、URLなどは変更されずに保持され、一方、見出し、段落、表の内容は翻訳されます。

## プライバシー

すべての翻訳処理は、お客様のGPU上でローカルに実行されます。いかなるデータもクラウドサービスに送信されることはありません。お客様のテキストは、お客様のデバイスから一切外部に出ることはありません。

## ライセンス

マサチューセッツ工科大学
