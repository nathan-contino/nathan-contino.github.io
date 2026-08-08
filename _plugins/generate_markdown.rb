require 'fileutils'
require 'nokogiri'
require 'reverse_markdown'

Jekyll::Hooks.register :site, :post_write do |site|
  site_dir = Pathname.new(site.dest)
  site_url = site.config['url'] || "https://www.lambdalatitudinarians.org"
  
  skip_prefixes = [
    "/java-applet-player/",
    "/feed/"
  ]

  pages = []

  # Find all HTML files in _site/
  Dir.glob(site_dir.join("**/*.html")).each do |file_path|
    html_path = Pathname.new(file_path)
    rel = html_path.relative_path_from(site_dir)

    # Skip paths containing underscored segments (e.g. _site/_layouts)
    next if rel.each_filename.any? { |part| part.start_with?('_') }

    # Calculate URL
    url = if rel.basename.to_s == "index.html"
      parent = rel.parent.to_s
      parent == "." ? "/" : "/#{parent}/"
    else
      "/#{rel}"
    end

    # Skip specific URL prefixes
    next if skip_prefixes.any? { |p| url.start_with?(p) }

    # Parse HTML using Nokogiri
    html_content = File.read(html_path, encoding: 'utf-8')
    doc = Nokogiri::HTML(html_content)

    # Extract title (<h1 or <title>)
    title_tag = doc.at('h1') || doc.at('title')
    title = title_tag ? title_tag.text.strip : ""

    # Extract content element (<div class="content"> or fallback to <body>)
    content_el = doc.at('div.content') || doc.at('body')
    next unless content_el

    # Convert HTML content to Markdown using reverse_markdown
    markdown_body = ReverseMarkdown.convert(content_el.inner_html, unknown_tags: :bypass)
    next if markdown_body.strip.empty?

    # Determine companion markdown path
    md_path = if html_path.basename.to_s == "index.html"
      html_path.parent.join("index.md")
    else
      html_path.sub_ext('.md')
    end

    header = "> [LLM context index](#{site_url}/llms.txt) · [Nathan Contino bio](#{site_url}/nathan-contino.md)\n\n"

    File.write(md_path, header + markdown_body, encoding: 'utf-8')

    # Construct Markdown URL for llms.txt
    md_url = if url.end_with?('/')
      "#{site_url}#{url}index.md"
    else
      "#{site_url}#{url.sub('.html', '.md')}"
    end

    pages << [url, title, md_url]
  end

  # Append page index to llms.txt
  llms_path = site_dir.join("llms.txt")
  if File.exist?(llms_path)
    File.open(llms_path, "a:UTF-8") do |f|
      f.puts "\n\n## Pages\n\n"
      pages.sort_by { |url, _, _| url }.each do |url, title, md_url|
        label = title.empty? ? url : title
        f.puts "- [#{label}](#{md_url})"
      end
    end
    Jekyll.logger.info "LLM Markdown Generator:", "Generated #{pages.length} markdown files and updated llms.txt"
  end
end