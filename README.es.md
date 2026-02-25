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

## Qué hace

Polyglot ejecuta [TranslateGemma 12B](https://ai.google.dev/gemma/docs/core/translategemma) a través de [Ollama](https://ollama.com) en su GPU local. No requiere claves de API, ni servicios en la nube, y los datos no se envían fuera de su dispositivo.

- **Traducción de selección:** Seleccione el texto, presione `Ctrl+Alt+T`, elija un idioma. ¡Listo!
- **Traducción de archivo:** Traduce un archivo completo a un nuevo archivo `file.ja.ext` junto con el original.
- **Traducción de README:** Traduce por lotes su archivo README.md a 7 idiomas, conservando bloques de código, tablas e insignias.
- **Panel lateral:** Icono de globo en la barra de actividad, con botones de acción y el estado actual de Ollama.

## Requisitos

- [Ollama](https://ollama.com) instalado y en funcionamiento.
- Una GPU con suficiente memoria de video (VRAM) para el modelo (12 GB para `translategemma:12b`, 2 GB para `translategemma:2b`).
- El modelo se descarga automáticamente la primera vez que se utiliza.

## Comenzando

1. Instale la extensión.
2. Haga clic en el icono del globo en la barra de actividades (la barra lateral izquierda).
3. Haga clic en **Comprobar estado** — Polyglot iniciará Ollama y descargará el modelo si es necesario.
4. Seleccione algún texto y presione `Ctrl+Alt+T` (o `Cmd+Alt+T` en Mac).

## Comandos

| Comando. | Atajo. | Descripción. |
| Please provide the English text you would like me to translate. I am ready to translate it into Spanish. | Please provide the English text you would like me to translate. I am ready to translate it into Spanish. | Please provide the English text you would like me to translate. I am ready to translate it into Spanish. |
| **Polyglot: Selección de traducción** | `Ctrl+Alt+T` | Traducir el texto seleccionado directamente en el documento. |
| **Polyglot: Translate File** | — | Traduzca el archivo actual a un nuevo archivo. |
| **Polyglot: Traducir el archivo README** | — | Traducir el archivo README.md a varios idiomas de forma masiva. |
| **Polyglot: Check Status** | — | Verificar la conexión con Ollama y la disponibilidad del modelo. |
| **Polyglot: Help** | — | Acceso rápido a la configuración, el tutorial y los enlaces. |

## Puntos de acceso

- **Panel lateral:** Icono de globo en la barra de actividades, con botones de acción estilizados.
- **Barra de título del editor:** El icono del globo aparece cuando se selecciona texto.
- **Menú contextual (clic derecho):** Opción "Traducir selección" en el menú contextual del editor.
- **Paleta de comandos:** `Ctrl+Shift+P` → escribir "Polyglot".
- **Atajo de teclado:** `Ctrl+Alt+T` con texto seleccionado.

## Configuración

| Escenario. | Predeterminado. | Descripción. |
| Please provide the English text you would like me to translate. I am ready to translate it into Spanish. | Please provide the English text you would like me to translate. I am ready to translate it into Spanish. | Please provide the English text you would like me to translate. I am ready to translate it into Spanish. |
| `polyglot.ollamaUrl` | `http://localhost:11434` | URL del servidor Ollama. |
| `polyglot.model` | `translategemma:12b` | Modelo de traducción (intente usar `2b` para reducir el uso de VRAM). |
| `polyglot.defaultSourceLanguage` | `en` | Idioma de origen para las traducciones. |
| `polyglot.defaultLanguages` | 7 idiomas. | Idiomas objetivo para la traducción del archivo README. |

## Idiomas soportados

Árabe, bengalí, búlgaro, catalán, chino (simplificado y tradicional), croata, checo, danés, neerlandés, inglés, estonio, finlandés, francés, alemán, griego, gujarati, hebreo, hindi, húngaro, indonesio, italiano, japonés, kannada, coreano, letón, lituano, macedonio, malayo, malayalam, marathi, noruego, persa, polaco, portugués, rumano, ruso, serbio, eslovaco, esloveno, español, suajili, sueco, tamil, telugu, tailandés, turco, ucraniano, urdu, vietnamita y galés.

## Cómo funciona

"Polyglot wraps" (enlaces de traducción políglota) [@mcptoolshop/polyglot-mcp](https://www.npmjs.com/package/@mcptoolshop/polyglot-mcp), un motor de traducción local que:

1. Inicia automáticamente Ollama si no está en ejecución.
2. Descarga automáticamente el modelo TranslateGemma la primera vez que se utiliza.
3. Divide textos largos en fragmentos, respetando los límites de párrafo y oración.
4. Aplica un glosario técnico para garantizar la precisión de los términos.
5. Corrige errores comunes del modelo (alternativas duplicadas, puntos al final de las frases).

Para la traducción de los archivos README, se utiliza una segmentación inteligente: los bloques de código, los distintivos HTML y las URL se mantienen sin modificaciones, mientras que los títulos, los párrafos y el contenido de las tablas se traducen.

## Privacidad

Toda la traducción se realiza localmente, directamente en su GPU. Nada se envía a ningún servicio en la nube. Su texto nunca abandona su dispositivo.

## Licencia

MIT.
