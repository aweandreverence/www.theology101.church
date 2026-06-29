# www.theology101.church

[![Deploy GitHub Pages](https://github.com/aweandreverence/www.theology101.church/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/aweandreverence/www.theology101.church/actions/workflows/deploy-pages.yml)

https://www.theology101.church - Theology video lessons powered by Next.js 15 + TypeScript

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Bootstrap 5 + SCSS
- **Deployment:** Committed `docs/` static export deployed to GitHub Pages via GitHub Actions

## Installation

All commands are in the `Makefile`:

```bash
make help      # Show available commands
make install   # Install dependencies
make dev       # Run development server
make build     # Build for production (static export)
make lint      # Run ESLint
make typecheck # Run TypeScript type checking
```

## Deployment

Production is served from the committed `docs/` static export. The `Deploy GitHub Pages` workflow uploads `docs/` as the Pages artifact on pushes to `master` and can also be run manually from GitHub Actions.

After this workflow merges, switch the repository's Settings → Pages source to **GitHub Actions** and verify the first workflow run publishes https://www.theology101.church successfully.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── not-found.tsx       # 404 page
│   └── (with-sidebar)/     # Route group with sidebar layout
│       ├── layout.tsx      # Sidebar layout
│       ├── videos/[slug]/  # Video pages
│       ├── topics/[slug]/  # Topic pages
│       └── tags/[slug]/    # Tag pages
├── components/             # React components (TSX)
├── constants/              # Configuration constants
├── data/                   # Static JSON data
├── lib/                    # Utilities and types
├── styles/                 # SCSS modules
└── types/                  # TypeScript declarations
```

## Development

1. Run the dev server: `make dev`
2. Open http://localhost:3000
3. Before committing, verify the build: `make build`

## Data

Video data is stored in `data/theology101.json` with lookups by:
- Video ID
- Topic
- Tag

## License

© Awe and Reverence
