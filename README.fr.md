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

## Ce qu'il fait

Polyglot utilise [TranslateGemma 12B](https://ai.google.dev/gemma/docs/core/translategemma) via [Ollama](https://ollama.com) sur votre GPU local. Pas de clés API, pas de services cloud, et aucune donnée ne quitte votre appareil.

- **Traduire une sélection** : Sélectionnez le texte, appuyez sur `Ctrl+Alt+T`, choisissez une langue. C'est tout.
- **Traduire un fichier** : Traduisez un fichier entier et enregistrez-le dans un nouveau fichier `file.ja.ext` à côté de l'original.
- **Traduire README** : Traduisez en masse votre fichier README.md dans 7 langues, en conservant les blocs de code, les tableaux et les badges.
- **Panneau latéral** : Icône de globe dans la barre d'activité, avec des boutons d'action et l'état en direct d'Ollama.

## Exigences

- [Ollama](https://ollama.com) installé et en fonctionnement.
- Une carte graphique (GPU) avec suffisamment de mémoire vidéo (VRAM) pour le modèle (12 Go pour `translategemma:12b`, 2 Go pour `translategemma:2b`).
- Le modèle est téléchargé automatiquement lors de la première utilisation.

## Démarrage

1. Installez l'extension.
2. Cliquez sur l'icône du globe dans la barre d'activité (la barre latérale gauche).
3. Cliquez sur **Vérifier l'état** — Polyglot démarrera Ollama et téléchargera le modèle si nécessaire.
4. Sélectionnez du texte et appuyez sur `Ctrl+Alt+T` (ou `Cmd+Alt+T` sur Mac).

## Commandes

| Commande. | Raccourci. | Description. |
| Veuillez fournir le texte à traduire. | Bien sûr, veuillez me fournir le texte que vous souhaitez que je traduise. | Bien sûr, veuillez me fournir le texte que vous souhaitez que je traduise. |
| **Polyglot : Traduction de sélection.** | `Ctrl+Alt+T` | Traduire le texte sélectionné directement dans le document. |
| **Polyglot: Translate File** | — | Traduire le fichier actuel vers un nouveau fichier. |
| **Polyglot : Traduire le fichier README.** | — | Traduire en masse le fichier README.md vers plusieurs langues. |
| **Polyglot: Check Status** | — | Vérifiez la connexion à Ollama et la disponibilité du modèle. |
| **Polyglot: Help** | — | Accès rapide aux paramètres, au guide d'utilisation et aux liens. |

## Points d'accès

- **Panneau latéral** : Icône de globe dans la barre d'activité, avec des boutons d'action stylisés.
- **Barre de titre de l'éditeur** : L'icône du globe apparaît lorsque du texte est sélectionné.
- **Menu contextuel (clic droit)** : Option "Traduire la sélection" dans le menu contextuel de l'éditeur.
- **Palette de commandes** : `Ctrl+Shift+P` → tapez "Polyglot".
- **Raccourci clavier** : `Ctrl+Alt+T` avec du texte sélectionné.

## Paramètres

| Cadre.
Contexte.
Décor.
Lieu.
Environnement.
Installation.
Réglage.
Configuration.
Mise en place.
Aménagement. | Par défaut. | Description. |
| Veuillez fournir le texte à traduire. | Veuillez fournir le texte à traduire. | Bien sûr, veuillez me fournir le texte que vous souhaitez que je traduise. |
| `polyglot.ollamaUrl` | `http://localhost:11434` | URL du serveur Ollama. |
| `polyglot.model` | `translategemma:12b` | Modèle de traduction (essayez `2b` pour réduire la quantité de mémoire vive utilisée). |
| `polyglot.defaultSourceLanguage` | `en` | Langue source pour les traductions. |
| `polyglot.defaultLanguages` | 7 langues. | Langues cibles pour la traduction du fichier README. |

## Langues prises en charge

Arabe, bengali, bulgare, catalan, chinois (simplifié et traditionnel), croate, tchèque, danois, néerlandais, anglais, estonien, finnois, français, allemand, grec, gujarati, hébreu, hindi, hongrois, indonésien, italien, japonais, kannada, coréen, letton, lituanien, macédonien, malais, malayalam, marathi, norvégien, persan, polonais, portugais, roumain, russe, serbe, slovaque, slovène, espagnol, swahili, suédois, tamoul, télougou, thaï, turc, ukrainien, ourdou, vietnamien et gallois.

## Comment ça fonctionne

Polyglot Wraps [@mcptoolshop/polyglot-mcp](https://www.npmjs.com/package/@mcptoolshop/polyglot-mcp), un moteur de traduction local qui :

1. Démarre automatiquement Ollama s'il n'est pas en cours d'exécution.
2. Télécharge automatiquement le modèle TranslateGemma lors de la première utilisation.
3. Divise les textes longs en segments aux limites des paragraphes ou des phrases.
4. Utilise un glossaire technique pour garantir la précision des termes.
5. Corrige les défauts courants des modèles (alternatives dupliquées, points à la fin des phrases).

Pour la traduction des fichiers README, un système de segmentation intelligent est utilisé : les blocs de code, les badges HTML et les URL sont conservés tels quels, tandis que les titres, les paragraphes et le contenu des tableaux sont traduits.

## Confidentialité

Toute la traduction se déroule localement, directement sur votre carte graphique. Rien n'est envoyé à un service cloud. Votre texte ne quitte jamais votre appareil.

## Licence

MIT.
