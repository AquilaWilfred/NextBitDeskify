<p align="center">
  <img src="../Nextbitdeskify_banner.svg" alt="NextBitDeskify" width="600">
</p>

<h1 align="center">NextBitDeskify</h1>

# NextBitDeskify Action

<table style="width:100%; margin: 0.85rem 0 1.2rem;">
  <tr>
    <td align="left"><a href="github-actions-usage.md">← Online Builds</a></td>
    <td align="center"><a href="pake-action.md">Action Guide</a></td>
    <td align="right"><a href="../CONTRIBUTING.md">Contributing →</a></td>
  </tr>
</table>

Transform any webpage into a lightweight desktop app with a single GitHub Actions step.

> ⚡ This action makes packaging feel like a normal build step rather than a custom devops project.

## Why This Action Is Useful

| Benefit | What it unlocks |
| --- | --- |
| Zero-friction automation | Package sites from CI with a single workflow step |
| Reusable workflow | Drop it into any project and keep your build process compact |
| Cross-platform friendly | Use the same setup to build for Linux, macOS, and Windows |

> This guide shows how to use NextBitDeskify as a GitHub Action in your own projects. For using our project's built-in GitHub Actions workflow, see [GitHub Actions Usage](github-actions-usage.md).

## Quick Start

```yaml
- name: Build NextBitDeskify App
  uses: AquilaWilfred/NextBitDeskify@v3
  with:
    url: "https://example.com"
    name: "MyApp"
```

## Inputs

| Parameter    | Description              | Required | Default |
| ------------ | ------------------------ | -------- | ------- |
| `url`        | Target URL to package    | ✅       |         |
| `name`       | Application name         | ✅       |         |
| `output-dir` | Output directory         |          | `dist`  |
| `icon`       | Custom app icon URL/path |          |         |
| `width`      | Window width             |          | `1200`  |
| `height`     | Window height            |          | `780`   |
| `debug`      | Enable debug mode        |          | `false` |

## Outputs

| Output         | Description                   |
| -------------- | ----------------------------- |
| `package-path` | Path to the generated package |

## Examples

### Basic Usage

```yaml
name: Build Web App
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: AquilaWilfred/NextBitDeskify@v3
        with:
          url: "https://weekly.AquilaWilfred.fun"
          name: "WeeklyApp"
```

### With Custom Icon

```yaml
- uses: AquilaWilfred/NextBitDeskify@v3
  with:
    url: "https://example.com"
    name: "MyApp"
    icon: "https://example.com/icon.png"
    width: 1400
    height: 900
```

### Multi-Platform Build

```yaml
jobs:
  build:
    strategy:
      matrix:
        os: [ubuntu-latest, macos-latest, windows-latest]
    runs-on: ${{ matrix.os }}
    steps:
      - uses: actions/checkout@v4
      - uses: AquilaWilfred/NextBitDeskify@v3
        with:
          url: "https://example.com"
          name: "CrossPlatformApp"
```

## How It Works

1. **Auto Setup**: Installs Rust, Node.js dependencies, builds NextBitDeskify CLI
2. **Build App**: Runs `nextbitdeskify` command with your parameters
3. **Package Output**: Finds and moves the generated package to output directory

## Supported Platforms

- **Linux**: `.deb` packages (Ubuntu runners)
- **macOS**: `.app` and `.dmg` packages (macOS runners)
- **Windows**: `.exe` and `.msi` packages (Windows runners)

Use GitHub's matrix strategy to build for multiple platforms simultaneously.

## Related Documentation

- [GitHub Actions Usage](github-actions-usage.md) - Using NextBitDeskify's built-in workflow
- [CLI Usage](cli-usage.md) - Command-line interface reference
- [Advanced Usage](advanced-usage.md) - Customization options


---

<table style="width:100%; margin: 1.4rem 0 0.75rem;">
  <tr>
    <td align="left"><a href="github-actions-usage.md">← Online Builds</a></td>
    <td align="center"><a href="pake-action.md">Action Guide</a></td>
    <td align="right"><a href="../CONTRIBUTING.md">Contributing →</a></td>
  </tr>
</table>

## Why this action is worth noticing

- CI-friendly packaging: the action helps teams add desktop-app packaging directly into their build pipeline. Evidence: the action guide presents a simple, repeatable workflow for automation.
- Lower engineering overhead: you can avoid custom scripting and focus on the app experience instead. Evidence: the guide centers on a single-step GitHub Action approach.
- More visibility for the project: the easier it is to adopt, the faster the idea can spread to more teams and creators. Evidence: the repo already includes both CLI and workflow-focused docs for the same concept.

If this action simplifies your build process, supporting the project by trying it and sharing it helps it gain traction.

<p align="center">
  <img src="../Nextbitdeskify_banner.svg" alt="NextBitDeskify logo" width="320">
</p>
