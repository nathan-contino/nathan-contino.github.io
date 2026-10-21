#!/usr/bin/env python3
"""
Subset Bergoom fonts to optimize payload size for λ Latitudinarians.

Subsets include:
- Basic Latin & Latin-1 Supplement (ASCII, accents, common Western European)
- Latin Extended-A & B (Central/Eastern European)
- IPA & Spacing Modifier Letters
- Greek & Coptic (includes λ U+03BB used throughout the site)
- General Punctuation & Quotes (typographic quotes, em/en dashes, interrobang ‽, etc.)
- Currency, Letterlike Symbols, Arrows, and Math Operators
"""

import os
import sys
import glob

try:
    from fontTools import subset
    from fontTools.ttLib import TTFont
except ImportError:
    print("Error: fonttools and brotli are required. Install with: pip install fonttools brotli")
    sys.exit(1)

# Unicode ranges covering Latin, Greek, punctuation, and math/symbols
UNICODES = (
    "U+0020-007E,"      # Basic Latin
    "U+00A0-00FF,"      # Latin-1 Supplement
    "U+0100-017F,"      # Latin Extended-A
    "U+0180-024F,"      # Latin Extended-B
    "U+02B0-02FF,"      # Spacing Modifier Letters
    "U+0370-03FF,"      # Greek & Coptic (includes λ U+03BB)
    "U+2000-206F,"      # General Punctuation (quotes, dashes, ‽ U+203D, etc.)
    "U+2070-209F,"      # Superscripts & Subscripts
    "U+20A0-20CF,"      # Currency Symbols
    "U+2100-214F,"      # Letterlike Symbols
    "U+2190-21FF,"      # Arrows
    "U+2200-22FF,"      # Mathematical Operators
    "U+FEFF,"           # Byte Order Mark
    "U+FFFD"            # Replacement Character
)

def subset_font(src_path: str, dest_path: str):
    options = subset.Options()
    options.flavor = 'woff2'
    options.layout_features = ['*']
    options.name_IDs = ['*']
    options.name_legacy = True
    options.name_languages = ['*']

    font = TTFont(src_path)
    subsetter = subset.Subsetter(options=options)
    subsetter.populate(unicodes=subset.parse_unicodes(UNICODES))
    subsetter.subset(font)
    font.flavor = 'woff2'
    font.save(dest_path)

    orig_sz = os.path.getsize(src_path)
    dest_sz = os.path.getsize(dest_path)
    pct = ((dest_sz - orig_sz) / orig_sz) * 100
    print(f"Subsetting {os.path.basename(src_path)} -> {os.path.basename(dest_path)}: {orig_sz:,} B -> {dest_sz:,} B ({pct:.1f}%)")

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    repo_root = os.path.dirname(script_dir)
    default_src = os.path.expanduser("~/Downloads/bergoom-main")
    src_dir = sys.argv[1] if len(sys.argv) > 1 else default_src
    dest_dir = os.path.join(repo_root, "assets", "fonts")

    if not os.path.isdir(src_dir):
        print(f"Source directory not found: {src_dir}")
        sys.exit(1)

    os.makedirs(dest_dir, exist_ok=True)

    woff2_files = sorted(glob.glob(os.path.join(src_dir, "Bergoom-*.woff2")))
    if not woff2_files:
        print(f"No Bergoom-*.woff2 files found in {src_dir}")
        sys.exit(1)

    print(f"Source: {src_dir}")
    print(f"Destination: {dest_dir}\n")

    for f in woff2_files:
        filename = os.path.basename(f)
        out_path = os.path.join(dest_dir, filename)
        subset_font(f, out_path)

    # Copy LICENSE.md to assets/fonts/
    license_src = os.path.join(src_dir, "LICENSE.md")
    if os.path.exists(license_src):
        import shutil
        license_dest = os.path.join(dest_dir, "LICENSE.md")
        shutil.copyfile(license_src, license_dest)
        print(f"\nCopied LICENSE.md to {license_dest}")

    print("\nOptimization complete!")

if __name__ == "__main__":
    main()
