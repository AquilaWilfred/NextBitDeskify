<p align="center">
  <img src="Nextbitdeskify_banner.svg" alt="NextBitDeskify" width="600">
</p>

<h1 align="center">NextBitDeskify</h1>

<p align="center">
  <strong>Turn any webpage into a native desktop app — one command, three platforms.</strong>
</p>

<p align="center">
  Built with Rust and Tauri for installers up to 20x smaller than Electron.
</p>

<div align="center">
    <a href="https://twitter.com/HiAquilaWilfred" target="_blank">
    <img alt="twitter" src="https://img.shields.io/badge/follow-AquilaWilfred-red?style=flat-square&logo=Twitter"></a>
    <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases" target="_blank">
    <img alt="GitHub downloads" src="https://img.shields.io/github/downloads/AquilaWilfred/NextBitDeskify/total.svg?style=flat-square"></a>
    <a href="https://github.com/AquilaWilfred/NextBitDeskify/commits" target="_blank">
    <img alt="GitHub commit" src="https://img.shields.io/github/commit-activity/m/AquilaWilfred/NextBitDeskify?style=flat-square"></a>
    <a href="https://github.com/AquilaWilfred/NextBitDeskify/issues?q=is%3Aissue+is%3Aclosed" target="_blank">
    <img alt="GitHub closed issues" src="https://img.shields.io/github/issues-closed/AquilaWilfred/NextBitDeskify.svg?style=flat-square"></a>
    <a href="LICENSE">
    <img alt="license" src="https://img.shields.io/badge/license-MIT-green?style=flat-square">
    </a>
</div>

<br>

---

## Why NextBitDeskify

Most tools that "wrap" a website into a desktop app rely on Electron — which means bundling an entire copy of Chromium into every install. NextBitDeskify takes a different approach: it's built on **Rust and Tauri**, using your operating system's native webview instead. The result is smaller, faster, and lighter on memory, without giving up the features people expect from a real desktop app.

|                      | Electron-based tools | NextBitDeskify    |
| -------------------- | -------------------- | ----------------- |
| Typical install size | 100MB+               | Often under 10MB  |
| Runtime              | Bundled Chromium     | Native OS webview |
| Performance          | Higher memory use    | Lower memory use  |
| Setup                | Config-heavy         | One command       |

Latest benchmarks (2026) show that Tauri installers are typically between 2–10 MB, while Electron installers range from 80–200 MB — meaning Tauri builds are consistently 10–20× smaller. On real apps, developers report reductions like 142 MB → 8 MB on macOS and 95 MB → 6 MB on Windows. 

| Framework                                                | Typical Installer Size | Example Case                    | Reduction      |
| -------------------------------------------------------- | ---------------------- | ------------------------------- | -------------- |
| **[Tauri 2](ca://s?q=Tauri_installer_size_2026)**        | 2–10 MB                | Markdown editor: 8 MB macOS DMG | ~17.5× smaller |
| **[Electron 30](ca://s?q=Electron_installer_size_2026)** | 80–200 MB              | Same app: 142 MB macOS DMG      | —              |
| **Windows Example**                                      | Tauri: 6 MB            | Electron: 95 MB                 | ~15× smaller   |
| **Linux Example**                                        | Tauri: 52 MB           | Electron: 192 MB                | ~73% reduction |

---

## Features

- 💎 **Lightweight** — most installers stay under 10MB, about 20x smaller than Electron
- 🔷 **Fast** — runs on native Rust + Tauri, so it's easier on memory than JS-based wrappers
- 🔹 **Simple** — one CLI command turns a website into an app, or build it online with zero setup
- 🛡️ **Complete** — shortcuts, immersive windowing, drag & drop, styling, and ad removal, all included

---

## Getting Started

Pick the path that fits you:

- **Just want an app?** Grab a ready-made build from [Popular Packages](#popular-packages) below, or use [Online Building](docs/github-actions-usage.md) — no setup required.
- **Want to package your own site?** Install the [CLI Tool](docs/cli-usage.md) for one-command builds with custom icons, window sizing, and more.
- **Want to modify NextBitDeskify itself?** Clone the repo and see [Development](#development), or check [Advanced Usage](docs/advanced-usage.md) for deeper customization.
- **Something not working?** Check the [FAQ](docs/faq.md) first.

---

## Popular Packages

Pre-built, ready-to-download desktop apps for widely used sites. More are available on the [Releases](https://github.com/AquilaWilfred/NextBitDeskify/releases) page.

<table>
    <tr>
        <td>WeRead
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/WeRead.dmg">Mac</a>
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/WeRead_x64.msi">Windows</a>
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/WeRead_x86_64.deb">Linux</a>
        </td>
        <td>Twitter
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/Twitter.dmg">Mac</a>
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/Twitter_x64.msi">Windows</a>
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/Twitter_x86_64.deb">Linux</a>
        </td>
    </tr>
    <tr>
        <td><img src=https://raw.githubusercontent.com/AquilaWilfred/static/main/nextbitdeskify/WeRead.jpg width=600/></td>
        <td><img src=https://raw.githubusercontent.com/AquilaWilfred/static/main/nextbitdeskify/Twitter.jpg width=600/></td>
    </tr>
    <tr>
        <td>Grok
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/Grok.dmg">Mac</a>
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/Grok_x64.msi">Windows</a>
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/Grok_x86_64.deb">Linux</a>
        </td>
        <td>DeepSeek
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/DeepSeek.dmg">Mac</a>
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/DeepSeek_x64.msi">Windows</a>
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/DeepSeek_x86_64.deb">Linux</a>
        </td>
    </tr>
    <tr>
        <td><img src=https://raw.githubusercontent.com/AquilaWilfred/static/main/nextbitdeskify/Grok.png width=600/></td>
        <td><img src=https://raw.githubusercontent.com/AquilaWilfred/static/main/nextbitdeskify/DeepSeek.png width=600/></td>
    </tr>
    <tr>
        <td>ChatGPT
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/ChatGPT.dmg">Mac</a>
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/ChatGPT_x64.msi">Windows</a>
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/ChatGPT_x86_64.deb">Linux</a>
        </td>
        <td>Gemini
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/Gemini.dmg">Mac</a>
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/Gemini_x64.msi">Windows</a>
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/Gemini_x86_64.deb">Linux</a>
        </td>
    </tr>
    <tr>
        <td><img src=https://raw.githubusercontent.com/AquilaWilfred/static/main/nextbitdeskify/ChatGPT.png width=600/></td>
        <td><img src=https://raw.githubusercontent.com/AquilaWilfred/static/main/nextbitdeskify/Gemini.png width=600/></td>
    </tr>
    <tr>
      <td>YouTube Music
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/YouTubeMusic.dmg">Mac</a>
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/YouTubeMusic_x64.msi">Windows</a>
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/YouTubeMusic_x86_64.deb">Linux</a>
      </td>
      <td>YouTube
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/YouTube.dmg">Mac</a>
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/YouTube_x64.msi">Windows</a>
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/YouTube_x86_64.deb">Linux</a>
      </td>
    </tr>
    <tr>
        <td><img src=https://raw.githubusercontent.com/AquilaWilfred/static/main/nextbitdeskify/YouTubeMusic.png width=600 /></td>
        <td><img src=https://raw.githubusercontent.com/AquilaWilfred/static/main/nextbitdeskify/YouTube.jpg width=600 /></td>
    </tr>
    <tr>
        <td>LiZhi
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/LiZhi.dmg">Mac</a>
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/LiZhi_x64.msi">Windows</a>
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/LiZhi_x86_64.deb">Linux</a>
        </td>
        <td>ProgramMusic
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/ProgramMusic.dmg">Mac</a>
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/ProgramMusic_x64.msi">Windows</a>
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/ProgramMusic_x86_64.deb">Linux</a>
        </td>
    </tr>
    <tr>
        <td><img src=https://raw.githubusercontent.com/AquilaWilfred/static/main/nextbitdeskify/LiZhi.jpg width=600/></td>
        <td><img src=https://raw.githubusercontent.com/AquilaWilfred/static/main/nextbitdeskify/ProgramMusic.jpg width=600/></td>
    </tr>
    <tr>
        <td>Excalidraw
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/Excalidraw.dmg">Mac</a>
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/Excalidraw_x64.msi">Windows</a>
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/Excalidraw_x86_64.deb">Linux</a>
        </td>
        <td>XiaoHongShu
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/XiaoHongShu.dmg">Mac</a>
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/XiaoHongShu_x64.msi">Windows</a>
            <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases/latest/download/XiaoHongShu_x86_64.deb">Linux</a>
        </td>
    </tr>
    <tr>
        <td><img src=https://raw.githubusercontent.com/AquilaWilfred/static/main/nextbitdeskify/Excalidraw.png width=600/></td>
        <td><img src=https://raw.githubusercontent.com/AquilaWilfred/static/main/nextbitdeskify/XiaoHongShu.png width=600/></td>
    </tr>
</table>

<details>
<summary style="cursor: pointer;"> Discover more applications <a href="https://github.com/AquilaWilfred/NextBitDeskify/releases">Releases</a>. <b> — click to expand</b></summary>

<br/>

| Mac                                                       | Windows/Linux                                       | Function                            |
| --------------------------------------------------------- | --------------------------------------------------- | ----------------------------------- |
| <kbd>⌘</kbd> + <kbd>[</kbd>                               | <kbd>Ctrl</kbd> + <kbd>←</kbd>                      | Return to the previous page         |
| <kbd>⌘</kbd> + <kbd>]</kbd>                               | <kbd>Ctrl</kbd> + <kbd>→</kbd>                      | Go to the next page                 |
| <kbd>⌘</kbd> + <kbd>↑</kbd>                               | <kbd>Ctrl</kbd> + <kbd>↑</kbd>                      | Auto scroll to top of page          |
| <kbd>⌘</kbd> + <kbd>↓</kbd>                               | <kbd>Ctrl</kbd> + <kbd>↓</kbd>                      | Auto scroll to bottom of page       |
| <kbd>⌘</kbd> + <kbd>r</kbd>                               | <kbd>Ctrl</kbd> + <kbd>r</kbd>                      | Refresh Page                        |
| <kbd>⌘</kbd> + <kbd>w</kbd>                               | <kbd>Ctrl</kbd> + <kbd>w</kbd>                      | Hide window, not quit               |
| <kbd>⌘</kbd> + <kbd>-</kbd>                               | <kbd>Ctrl</kbd> + <kbd>-</kbd>                      | Zoom out the page                   |
| <kbd>⌘</kbd> + <kbd>=</kbd>                               | <kbd>Ctrl</kbd> + <kbd>=</kbd>                      | Zoom in the Page                    |
| <kbd>⌘</kbd> + <kbd>0</kbd>                               | <kbd>Ctrl</kbd> + <kbd>0</kbd>                      | Reset the page zoom                 |
| <kbd>⌘</kbd> + <kbd>L</kbd>                               | <kbd>Ctrl</kbd> + <kbd>L</kbd>                      | Copy Current Page URL               |
| <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>⌥</kbd> + <kbd>V</kbd> | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>V</kbd>   | Paste and Match Style               |
| <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>H</kbd>                | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd>   | Go to Home Page                     |
| <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>I</kbd>                | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>   | Toggle Developer Tools (Debug Only) |
| <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>⌫</kbd>                | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Del</kbd> | Clear Cache & Restart               |

In addition, double-click the title bar to switch to full-screen mode. For Mac users, you can also use the gesture to go to the previous or next page and drag the title bar to move the window. The new menu also offers options for navigation, zoom, and window controls.

</details>

---

## Command-Line Packaging

![NextBitDeskify](https://raw.githubusercontent.com/AquilaWilfred/static/main/nextbitdeskify/nextbitdeskify1.gif)

```bash
# Install the CLI
pnpm install -g nextbitdeskify-cli

# Basic usage — icon is fetched automatically
nextbitdeskify https://github.com --name GitHub

# Advanced usage with custom options
nextbitdeskify https://weekly.AquilaWilfred.fun --name Weekly \
  --icon https://cdn.AquilaWilfred.fun/nextbitdeskify/weekly.icns \
  --width 1200 --height 800 --hide-title-bar
```

The first build sets up your environment and takes a little longer; subsequent builds are fast. Full parameter reference is in the [CLI Usage Guide](docs/cli-usage.md). Prefer not to install anything locally? Use [GitHub Actions Online Building](docs/github-actions-usage.md) instead.

---

## Development

Requires **Rust ≥1.85** and **Node ≥22** (LTS recommended; Node ≥18 also works). See the [Tauri prerequisites guide](https://v2.tauri.app/start/prerequisites/) for a full environment setup. If you just want to package a site rather than modify the tool, use the CLI instead.

```bash
# Install dependencies
pnpm i

# Run in development mode (right-click to open debug tools)
pnpm run dev

# Build for production
pnpm run build
```

For style customization, feature extensions, and container communication, see the [Advanced Usage Guide](docs/advanced-usage.md).

---

## Contributors

NextBitDeskify has grown thanks to the people who've contributed code, ideas, and fixes. Thank you. 💛

<a href="https://github.com/AquilaWilfred/NextBitDeskify/graphs/contributors">
  <img src="./CONTRIBUTORS.svg?v=2" alt="Contributors" width="1000" />
</a>

---

## Support the Project

If NextBitDeskify has been useful to you:

- ⭐ Star the repo
- 🐦 [Share it on Twitter](https://twitter.com/intent/tweet?url=https://github.com/AquilaWilfred/NextBitDeskify&text=NextBitDeskify%20-%20Turn%20any%20webpage%20into%20a%20desktop%20app%20with%20one%20command.%20Nearly%2020x%20smaller%20than%20Electron%20packages,%20supports%20macOS%20Windows%20Linux)
- 🐛 Open an issue or submit a pull request

---

## License

NextBitDeskify is open source under the **MIT License** — see [LICENSE](./LICENSE).

Use of this project is also governed by the [Terms of Use](./TERMS.md) and [Trademark Policy](./TRADEMARK.md). In short: apps you build with NextBitDeskify are entirely yours to use, license, and distribute however you like. If you fork the project itself, please give your fork its own name and credit NextBitDeskify as the source.
