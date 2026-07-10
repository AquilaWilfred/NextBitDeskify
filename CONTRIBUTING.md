<p align="center">
  <img src="Nextbitdeskify_banner.svg" alt="NextBitDeskify" width="600">
</p>

<h1 align="center">NextBitDeskify</h1>

## How to Contribute to NextBitDeskify

<table style="width:100%; margin: 0.85rem 0 1.2rem;">
  <tr>
    <td align="left"><a href="docs/pake-action.md">← Action Guide</a></td>
    <td align="center"><a href="CONTRIBUTING.md">Contributing</a></td>
    <td align="right"><a href="TERMS.md">Terms →</a></td>
  </tr>
</table>

**We welcome [pull requests](https://github.com/AquilaWilfred/NextBitDeskify/compare/) for bug fixes, new components, documentation, examples, suggestions, or anything else you'd like to bring to the project.**

> 🌱 Great contributions are thoughtful, reproducible, and easy for maintainers to review.

## Contribution Path

| You want to...                      | Best next step                                |
| ----------------------------------- | --------------------------------------------- |
| Fix a typo or improve docs          | Open a PR directly                            |
| Add a feature                       | Open an issue first, then PR                  |
| Reproduce a bug                     | Include steps and expected vs actual behavior |
| Improve packaging or build behavior | Share logs and platform details               |

## Branch Management

All development happens directly on `main`. Please submit pull requests against `main`.

## Development Setup

### Prerequisites

- Node.js ≥22.0.0 (LTS recommended; versions ≥18.0.0 may also work)
- Rust ≥1.85.0 (needed for edition2024 support used by some dependencies)
- Platform-specific build tools:
  - **macOS**: Xcode Command Line Tools (`xcode-select --install`)
  - **Windows**: Visual Studio Build Tools with MSVC
  - **Linux**: `build-essential`, `libwebkit2gtk`, and related system dependencies

### Installation

```bash
# Clone the repository
git clone https://github.com/AquilaWilfred/NextBitDeskify.git
cd NextBitDeskify

# Install dependencies
pnpm install

# Start development (Tauri only)
pnpm run dev

# Start development (CLI wrapper + Tauri) — recommended if you're working on the CLI
pnpm run cli:dev -- https://web.telegram.org/k/
```

### Testing

```bash
# Run the full test suite (unit + integration + builder)
pnpm test

# Build the CLI for local testing
pnpm run cli:build
```

### Tips

- During development, the `--iterative-build` flag skips some of the heavier checks and uses the app bundle format, which speeds up debugging:

```bash
  pnpm run cli:dev --iterative-build
```

## Continuous Integration

The project runs a streamlined set of GitHub Actions workflows:

- **Quality & Testing** — automated code quality checks and full test coverage across all supported platforms
- **Claude AI Integration** — automated code review and interactive assistance on pull requests
- **Release Management** — coordinated releases covering app builds and Docker publishing

## Troubleshooting

### macOS 26 Beta Compilation Issues

If you're on macOS 26 Beta and run into compilation errors involving `mac-notification-sys` or system frameworks (for example, errors mentioning `CoreFoundation` or `_Builtin_float`), create a `src-tauri/.cargo/config.toml` file with the following:

```toml
[env]
# Fix for macOS 26 Beta compatibility issues
# Forces use of a compatible SDK when building on macOS 26 Beta
MACOSX_DEPLOYMENT_TARGET = "15.0"
SDKROOT = "/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk"
```

This file is already listed in `.gitignore`, so it won't be committed to the repository.

**Root cause**: macOS 26 Beta ships newer system frameworks that aren't fully compatible with some of Tauri's dependencies yet. This configuration points to the universal SDK symlink, which automatically resolves to whichever SDK version is available on your system.

### Common Build Issues

- **Rust compilation errors** — run `cargo clean` inside the `src-tauri/` directory
- **`cargo` command not found after installation** — the NextBitDeskify CLI reloads the Rust environment automatically, but if the problem persists, reopen your terminal or run `source ~/.cargo/env` (macOS/Linux) or `call %USERPROFILE%\.cargo\env` (Windows) before trying again
- **Node dependency issues** — delete `node_modules` and reinstall with `pnpm install`
- **Permission errors on macOS** — run `sudo xcode-select --reset`

For details on project structure and customization, see the [Advanced Usage Guide](docs/advanced-usage.md).

## More

Before implementing a new feature, it's good practice to open a feature request issue first so it can be discussed. That said, there's no need to open an issue just to fix a typo or improve documentation clarity — feel free to submit a pull request directly for those.

---

<table style="width:100%; margin: 1.4rem 0 0.75rem;">
  <tr>
    <td align="left"><a href="docs/pake-action.md">← Action Guide</a></td>
    <td align="center"><a href="CONTRIBUTING.md">Contributing</a></td>
    <td align="right"><a href="TERMS.md">Terms →</a></td>
  </tr>
</table>

## Why your contribution matters

- Better tooling for everyone: each improvement makes NextBitDeskify easier to use for people packaging websites into desktop apps. Evidence: the docs and CLI references show the project is designed around user-friendly packaging workflows.
- Stronger project credibility: well-reviewed changes help the project gain trust with both developers and users. Evidence: the contribution guidance and support sections encourage clear issues, thoughtful PRs, and shared ownership.
- More momentum for the idea: every contribution helps the project move from a clever prototype to a widely useful tool. Evidence: the roadmap and documentation expansion point to a project that is still growing.

If you want to help the project gain visibility, your pull request, issue report, or idea can make a real difference.

<p align="center">
  <img src="Nextbitdeskify_banner.svg" alt="NextBitDeskify logo" width="320">
</p>
