Jekyll::Hooks.register :site, :post_write do |site|
  html_path = File.join(site.dest, "resume-html", "index.html")
  pdf_path = File.join(site.dest, "nathan-contino-resume.pdf")
  base_url = "file://#{site.dest}/resume-html/"

  if File.exist?(html_path)
    Jekyll.logger.info "PDF Generator:", "Generating PDF resume with Weasyprint..."

    # Execute the command with the environment variable set safely
    success = system(
      { "PYTHONWARNINGS" => "ignore::UserWarning:PIL.IcoImagePlugin" },
      "weasyprint",
      "--base-url",
      base_url,
      html_path,
      pdf_path
    )

    if success
      Jekyll.logger.info "PDF Generator:", "Successfully created #{pdf_path}"
    else
      Jekyll.logger.error "PDF Generator:", "Weasyprint failed to generate the PDF."
    end
  else
    Jekyll.logger.warn "PDF Generator:", "Resume HTML not found at #{html_path}"
  end
end