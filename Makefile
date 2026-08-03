.PHONY: install build markdown pdf all serve clean list

PYTHON := .venv/bin/python3

# Create virtualenv and install Python deps (hidden dir so Jekyll ignores it)
.venv:
	python3 -m venv .venv
	.venv/bin/pip install -q beautifulsoup4 html2text

# Install all dependencies
install: .venv
	bundle install
	brew install weasyprint

# Build site locally
build:
	bundle exec jekyll build

# Generate .md companion pages and update llms.txt (run after build)
markdown: build .venv
	$(PYTHON) _scripts/generate_markdown.py

# Generate resume PDF from the built HTML (run after markdown)
pdf: markdown
	PYTHONWARNINGS="ignore::UserWarning:PIL.IcoImagePlugin" weasyprint --base-url file://$(PWD)/_site/resume-html/ _site/resume-html/index.html _site/nathan-contino-resume.pdf

# Build everything: site + markdown companions + PDF
all: pdf

# Build everything, then serve the pre-built _site/ without rebuilding
# (--skip-initial-build), so generated .md and .pdf files aren't wiped.
serve: all
	bundle exec jekyll serve --skip-initial-build

# Clean generated files
clean:
	bundle exec jekyll clean

.PHONY: list
list:
	@LC_ALL=C $(MAKE) -pRrq -f $(firstword $(MAKEFILE_LIST)) : 2>/dev/null | awk -v RS= -F: '/(^|\n)# Files(\n|$$)/,/(^|\n)# Finished Make data base/ {if ($$1 !~ "^[#.]") {print $$1}}' | sort | grep -E -v -e '^[^[:alnum:]]' -e '^$@$$'
