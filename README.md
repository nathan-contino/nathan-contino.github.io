# nathan-contino.github.io
Nathan Contino's personal web page.

[lambdalatitudinarians.org](https://www.lambdalatitudinarians.org)

[nathan-contino.github.io](https://nathan-contino.github.io/)

# license

This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License (CC-SA)](http://creativecommons.org/licenses/by-sa/4.0/).

# local testing

You might need to run this command before building anything to ensure that Ruby installs gems into your user directory, not a global directory that sometimes maybe kinda sort requires `sudo`:

```bash
bundle config path ~/.gem/ruby
```

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
