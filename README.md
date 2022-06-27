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

I currently check all of my images into source control (!!!) since this
site is hosted on GitHub Pages exclusively.

I am aware this isn't ideal. This repo is around 1.5GB now, so... I'll
eventually have to deal with it.

For now, I recommend using [ImageOptim](https://imageoptim.com/command-line.html)
to keep images sizes somewhat manageable:

```bash
$ open -a ImageOptim .
```

You can run that command from the `/_images` subdirectory to optimize
all images in the entire site. As far as I know, it won't hurt images
to run them through ImageOptim repeatedly.