# nathan-contino.github.io
Nathan Contino's personal web page.

[lambdalatitudinarians.org](https://www.lambdalatitudinarians.org)

[nathan-contino.github.io](https://nathan-contino.github.io/)

# local testing

To test this site locally, install jekyll (note: this requires ruby)
(note: you might need to preface this with `sudo`):

```bash
$ gem install jekyll bundler
```

Then, install the dependencies for running the site locally:

```bash
$ bundle install
```

Finally, you can create a running instance of the site with:

```bash
$ bundle exec jekyll serve
```

To learn more about adding new dependencies and tweaking the
Jekyll config, see [Jekyll's documentation](https://jekyllrb.com/docs/).

# images

Images live at [nathan-contino/images](https://github.com/nathan-contino/images).

A GitHub Actions pipeline takes full-size images from the "images" directory and produces both small thumbnails and reasonably-sized 2000 pixel wide images from them.
