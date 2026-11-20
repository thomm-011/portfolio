# Thomas Silva Cordeiro — Portfolio

Personal portfolio: https://thomm-011.github.io/

## Structure

- `index.html`: professional case summaries and public project descriptions (Portuguese).
- `styles.css`: responsive layout and visual design.
- `main.js`: accessible project filters; all projects remain visible without JavaScript.
- `ascii-portrait.svg`: ASCII portrait rendered as SVG text.
- `.nojekyll`: static publishing through GitHub Pages.

## Preview

Run `python3 -m http.server 8000` in this directory and visit `http://localhost:8000`.

## Publish

Edit the source files `styles.css` / `main.js` and run:

```bash
python3 scripts/prepare-assets.py
```

Commit `index.html`, the source files, and the generated `styles.<hash>.css` / `main.<hash>.js` files together. Push to `main`; GitHub Pages publishes the repository root. Content-based filenames prevent a new page from loading a cached, older stylesheet or script. Retain earlier hashed assets for visitors with cached HTML.

## Layout verification

The primary experience section uses two equal columns on desktop and one on small screens. Its project metrics and KEDA case occupy the full grid width. Mobile navigation omits the duplicate GitHub button to leave room for section links.

After changes, review desktop and mobile widths in an approved browser, including the metrics panel, expanded case details, project filters, and the lab preview. Static CSS parsing and DOM checks do not substitute for rendered-browser review.

Project illustrations describe the architecture and workflow; they are not screenshots of live environments.

## Professional cases

Professional contributions are presented as high-level summaries, with the contributor’s role in a team. Private source code and internal configuration are not included in this repository.
