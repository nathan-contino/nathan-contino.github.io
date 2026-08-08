# nathan-contino.github.io

Nathan Contino's personal web page, built with [Jekyll](https://jekyllrb.com/docs/).

Hosted at:

- [lambdalatitudinarians.org](https://www.lambdalatitudinarians.org)
- [nathan-contino.github.io](https://nathan-contino.github.io/)

# license

This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License (CC-SA)](http://creativecommons.org/licenses/by-sa/4.0/).

# build this site

## prerequisites

### Ruby

You need a reasonably recent version of Ruby. The installation that ships with macOS won't do, so install [a better distribution from Homebrew](https://formulae.brew.sh/formula/ruby):

```console
brew install ruby
```

Follow the instructions Homebrew prints to make this Ruby accessible via `ruby` in your shell and discoverable to compilers. Open a new terminal once you've made those changes.

Then install the site's Ruby dependencies:

```console
bundle install
```

### Python

The build generates a Markdown companion file for every page (for LLM consumption) and a resume PDF. Both require Python 3, which ships with macOS — no separate install needed.

PDF generation also requires WeasyPrint, which needs native system libraries (Pango, Cairo, GLib). On macOS, install it via Homebrew so those dependencies are handled automatically:

```console
brew install weasyprint
```

On Linux (including the GitHub Actions runner), install via pip instead. The system libraries are either pre-installed or available via `apt`:

```console
pip3 install weasyprint
```

`make install` handles the rest: it creates a project-local Python virtualenv (`.venv/`) and installs the remaining Python packages there, so there are no conflicts with other Python versions on your machine.

## build and preview locally

```console
make serve
```

Runs the full build chain (Jekyll, Markdown/PDF generation), then serves the result at `http://localhost:4000`. The server uses `--skip-initial-build` so it doesn't wipe the generated files on startup.

Other useful targets:

| Command | What it does |
|---|---|
| `make build` | Jekyll build only |
| `make markdown` | Jekyll build + generate `.md` companion pages |
| `make pdf` | Jekyll build + Markdown + resume PDF |
| `make all` | Everything (same as `make pdf`) |
| `make serve` | Everything + local server |
| `make clean` | Delete `_site/` |

## deployment

The site deploys automatically to GitHub Pages via GitHub Actions on every push to `main`. The workflow (`.github/workflows/deploy.yml`) runs the full build chain including Markdown generation and PDF creation, then deploys the output using `actions/deploy-pages`.

The Pages source in repository settings must be set to **GitHub Actions** (not "Deploy from a branch").

# images

Images live separately at [nathan-contino/images](https://github.com/nathan-contino/images).
