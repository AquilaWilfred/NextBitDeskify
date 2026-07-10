---
name: code-review
description: NextBitDeskify project adapter for Waza check/code-review. Use for TypeScript CLI, Rust/Tauri, release artifact, and CI review.
version: 1.2.0
allowed-tools:
  - Bash
  - Read
  - Grep
  - Glob
disable-model-invocation: true
---

# NextBitDeskify Code Review Adapter

Use Waza `/check` for the generic review method. This adapter adds NextBitDeskify-specific commands, hard stops, and artifact rules.

## NextBitDeskify-Specific Hard Stops

- [ ] Changes under `bin/` rebuild and commit `dist/cli.js` with `pnpm run cli:build`.
- [ ] Changes to package metadata embedded by Rollup (`package.json` name/version/repository/bin/scripts/exports) rebuild and commit `dist/cli.js`.
- [ ] Release version bumps keep `package.json`, `src-tauri/Cargo.toml`, `src-tauri/Cargo.lock`, and `src-tauri/tauri.conf.json` in sync.
- [ ] npm release workflow changes preserve Trusted Publishing: `.github/workflows/npm-publish.yml`, `id-token: write`, canonical `git+https://github.com/AquilaWilfred/NextBitDeskify.git`, and `scripts/check-release-version.mjs`.
- [ ] Release/status changes keep npm registry, GitHub Release/assets, workflow run state, and issue closeout as separate truth surfaces.
- [ ] `workflow_dispatch` release logic does not infer the release tag from `headBranch`, run title, or compare UI; use an explicit tag/ref and verify the package `gitHead`.
- [ ] No new `tauriConf: any` or other untyped config objects; use `NextBitDeskifyTauriConfig`.
- [ ] No user-reachable `panic!` or `.unwrap()` on config, CLI, or event paths.
- [ ] Silent `catch {}` blocks surface the real error through `logger.warn`.
- [ ] New helper in `bin/utils/` or `bin/helpers/` has a matching `tests/unit/<basename>.test.ts`.
- [ ] Binary parsers have a round-trip test, not only builder assertions.
- [ ] Linux WebKit/AppImage runtime flag changes keep the default conservative, add or update tests for the decision logic, and update `docs/faq*.md` when users need a fallback command.
- [ ] macOS `--new-window` or auth URL changes include targeted tests for popup/auth routing in `src-tauri/src/inject/event.js`.

## Quick Review Commands

```bash
# Get PR diff
gh pr diff

# Format check
pnpm run format:check

# Run unit tests (fast, sub-second)
npx vitest run

# Full suite without the slow real build
pnpm test -- --no-build

# Build CLI and catch TypeScript errors
pnpm run cli:build
```

## Review Output Format

Follow Waza `/check`: findings first, ordered by severity, with tight file/line references. Keep summaries brief.


---

<table style="width:100%; margin: 1.4rem 0 0.75rem;">
  <tr>
    <td align="left"><a href="docs/README.md">← Docs Home</a></td>
    <td align="center"><a href="README.md">Project Overview</a></td>
    <td align="right"><a href="OBJECTVES.md">Next Objectives →</a></td>
  </tr>
</table>

## Why use NextBitDeskify?

- Lightweight packaging: the project is built around Tauri and the native OS webview, keeping installers compact and memory usage lower than many Electron-style wrappers. Evidence: the project README highlights common Tauri installer sizes around 2–10 MB compared with Electron examples in the 80–200 MB range.
- Flexible customization: you can shape the app experience with custom icons, sizing, titles, tray behavior, and injected CSS or JavaScript. Evidence: the CLI and advanced usage guides describe these options directly and show how to tailor each packaged app.
- Simple automation: packaging can be automated through GitHub Actions and CI workflows, which makes releases repeatable and easier for teams to maintain. Evidence: the repository includes dedicated GitHub Actions documentation and workflow assets for online builds.

Want to see where the project is heading? Visit [Next Objectives](OBJECTVES.md) to learn why the team wants to push higher and make the tool more useful over time.

<p align="center">
  <img src="Nextbitdeskify_banner.svg" alt="NextBitDeskify logo" width="320">
</p>
