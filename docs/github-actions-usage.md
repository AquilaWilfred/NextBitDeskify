<p align="center">
  <img src="../Nextbitdeskify_banner.svg" alt="NextBitDeskify" width="600">
</p>

<h1 align="center">NextBitDeskify</h1>

# GitHub Actions Usage Guide

<table style="width:100%; margin: 0.85rem 0 1.2rem;">
  <tr>
    <td align="left"><a href="faq.md">← FAQ</a></td>
    <td align="center"><a href="github-actions-usage.md">Online Builds</a></td>
    <td align="right"><a href="pake-action.md">Action Guide →</a></td>
  </tr>
</table>

Build NextBitDeskify apps online without installing development tools locally.

> ☁️ Great for teams, CI-driven builds, and anyone who wants a packaged app without configuring a full local toolchain.

## When to Use This

| Scenario                                                 | Best fit       |
| -------------------------------------------------------- | -------------- |
| You want a build without installing Rust or Node locally | GitHub Actions |
| You need repeatable builds in CI                         | GitHub Actions |
| You want to package a website for distribution quickly   | GitHub Actions |

## Quick Steps

### 1. Fork Repository

[Fork this project](https://github.com/AquilaWilfred/NextBitDeskify/fork)

### 2. Run Workflow

1. Go to Actions tab in your forked repository
2. Select `Build App With NextBitDeskify CLI`
3. Fill in the form (same parameters as [CLI options](cli-usage.md))
4. Click `Run Workflow`

   ![Actions Interface](https://raw.githubusercontent.com/AquilaWilfred/static/main/nextbitdeskify/action.png)

### 3. Download App

- Green checkmark = build success
- Click the workflow name to view details
- Find `Artifacts` section and download your app

  ![Build Success](https://raw.githubusercontent.com/AquilaWilfred/static/main/nextbitdeskify/action2.png)

### 4. Build Times

- **First run**: ~10-15 minutes (sets up cache)
- **Subsequent runs**: ~5 minutes (uses cache)
- Cache size: 400-600MB when complete

## Tips

- Be patient on first run - let cache build completely
- Stable network connection recommended
- If build fails, delete cache and retry

## Links

- [CLI Documentation](cli-usage.md)
- [Advanced Usage](advanced-usage.md)

---

<table style="width:100%; margin: 1.4rem 0 0.75rem;">
  <tr>
    <td align="left"><a href="faq.md">← FAQ</a></td>
    <td align="center"><a href="github-actions-usage.md">Online Builds</a></td>
    <td align="right"><a href="pake-action.md">Action Guide →</a></td>
  </tr>
</table>

## Why automation matters here

- Cloud-based packaging: GitHub Actions makes it possible to build desktop apps without a local toolchain. Evidence: the GitHub Actions guide explains how to build online and keep the setup simple.
- Repeatable releases: automated packaging helps teams ship updates consistently and with less manual effort. Evidence: the workflow docs and release setup describe a repeatable path for builds.
- Stronger project reach: the easier it is to automate, the wider the audience that can benefit from the tool. Evidence: the repo includes build and release instructions for both local and online workflows.

If this workflow saves you time, helping the project grow through feedback or sharing can make a real difference.

<p align="center">
  <img src="../Nextbitdeskify_banner.svg" alt="NextBitDeskify logo" width="320">
</p>
