# geokey-website

This is the official [GeoKey project website](http://geokey.org.uk/).

The website is hosted in [Github Pages](https://pages.github.com/) — any commit that is pushed to the branch `gh-pages` is immediately reflected on the live website.

## Adding to the website

### Running the site locally

It is recommended to run the site on your machine when you plan to add to the site.

Follow these steps to install an run the site locally:

#### What you need

Install the following packages:

- [NodeJS](https://nodejs.org/en/)
- [Bower](http://bower.io/#install-bower)
- [Grunt-CLI](http://gruntjs.com/using-the-cli#installing-the-cli) (Grunt command line interfaces)
- [Ruby](https://www.ruby-lang.org/en/documentation/installation/) and ruby-dev.
- [SASS](http://sass-lang.com/install)
- [Jekyll](https://jekyllrb.com/docs/installation/)

#### Install the requirements

In the directory `geokey-website`:

- Run `bower install` to install Bootstrap SASS
- Run `npm install` to install the build requirements

#### Building the site

In the directory `geokey-website`:

- Run `grunt` to build the CSS and optimise images

#### Running the site

In the directory `geokey-website`:

- Serve the site using `jekyll serve`. The site should be accessible under `http://localhost:4000/`.

When running the commend, Jekyll collects all static files, blog posts and collections and coverts markdown into HTML. The finished build of the site can the be found in the directory `_site`.


### Directories and files

The directory structure of this site follows the [standard Jekyll site structure](http://jekyllrb.com/docs/pages/).

#### The config file

`_config.yml` is the config file Jekyll uses to build the site (See [docs](http://jekyllrb.com/docs/configuration/)).

#### Templates

All templates that Jekyll uses to convert markdown into HTML live in `_layouts`.

Each markdown file has a [front matter](http://jekyllrb.com/docs/frontmatter/) that defines, which template to use when converting.

Templates themselves can have a front matter — in that case the content of the current template is nested into the template defined in the front matter.

#### Includes

Some content is used in different places across the site. These [includes](https://jekyllrb.com/docs/templates/#includes) live in `_includes`.

#### Blog

All blog posts can be found in `_posts` (See [Writing posts](http://jekyllrb.com/docs/posts/) in the Jekyll docs).

All documents in these directories are [Markdown](https://help.github.com/articles/markdown-basics/) files.

#### Collections

Documentation as well as help and extension sites are grouped into [collections](http://jekyllrb.com/docs/collections/):

- `_docs` contains documentation of the web API and the programming API, `/docs/` on the site.
- `_extensions` contains all extension pages, `/extensions/` on the site.
- `_help` contains the help section, `/help/` on the site.

All documents in these directories are [Markdown](https://help.github.com/articles/markdown-basics/) files.

#### All other directories and files

Other directories and files are static files. When the site is build, they a simply copied into the `_site` directory.
