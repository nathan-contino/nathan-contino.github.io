# nathan-contino.github.io

Nathan Contino's personal web page, built with [Jekyll](https://jekyllrb.com/docs/).

Hosted at:

- [lambdalatitudinarians.org](https://www.lambdalatitudinarians.org)

- [nathan-contino.github.io](https://nathan-contino.github.io/)

# license

This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License (CC-SA)](http://creativecommons.org/licenses/by-sa/4.0/).

# build this site

## prerequisites

You need a reasonably recent version of Ruby. The installation that ships with macOS won't do, so install [a better distribution from Homebrew](https://formulae.brew.sh/formula/ruby):

```console
brew install ruby
```

Be sure to follow the instructions that Homebrew prints out to make this installation of Ruby:

- accessible via the `ruby` command in an interactive shell, using your `PATH`
- discoverable to compilers.

Once you've finished those edits to your shell configuration, open a new terminal to load the changes.

Then, install jekyll and update Ruby's `bundler` package manager to the latest version:

```console
gem install jekyll bundler
```

Then, use `bundler` to install the dependencies for running the site locally:

```console
bundle install
```

## preview site

To build and host the site on your local machine, run the following command:

```console
bundle exec jekyll serve
```

If you prefer, you can instead use Make:

```console
make serve
```

For a full list of Make options, run `make list`.

# images

Images live separately at [nathan-contino/images](https://github.com/nathan-contino/images).
