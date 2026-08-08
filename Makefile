.PHONY: install build serve clean list

# Install all dependencies
install: .venv
	bundle install
	brew install weasyprint

# Build site locally
build:
	bundle exec jekyll build

# Build everything, then serve the pre-built _site/ without rebuilding
serve:
	JEKYLL_ENV="development" bundle exec jekyll serve --host localhost

# Clean generated files
clean:
	bundle exec jekyll clean

.PHONY: list
list:
	@LC_ALL=C $(MAKE) -pRrq -f $(firstword $(MAKEFILE_LIST)) : 2>/dev/null | awk -v RS= -F: '/(^|\n)# Files(\n|$$)/,/(^|\n)# Finished Make data base/ {if ($$1 !~ "^[#.]") {print $$1}}' | sort | grep -E -v -e '^[^[:alnum:]]' -e '^$@$$'
