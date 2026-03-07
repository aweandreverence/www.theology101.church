# www.theology101.church

https://www.theology101.church - Theology video lessons powered by Next.js 15 + TypeScript

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Bootstrap 5 + SCSS
- **Deployment:** Static export to GitHub Pages

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
