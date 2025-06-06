.PHONY: install build serve clean update

# Install dependencies
install:
	gem install bundler jekyll
	bundle install

# Build site locally
build:
	bundle exec jekyll build

# Serve site for development
serve:
	bundle exec jekyll serve

# Clean generated files
clean:
	bundle exec jekyll clean

.PHONY: list
list:
	@LC_ALL=C $(MAKE) -pRrq -f $(firstword $(MAKEFILE_LIST)) : 2>/dev/null | awk -v RS= -F: '/(^|\n)# Files(\n|$$)/,/(^|\n)# Finished Make data base/ {if ($$1 !~ "^[#.]") {print $$1}}' | sort | grep -E -v -e '^[^[:alnum:]]' -e '^$@$$'
