#!/usr/bin/env python3
"""Generate the 1200x630 social preview card at public/og-image.png.

Rebuild it whenever the headline copy below drifts from reality - a new job
title, a different stack, a new portrait.

    python scripts/make-og-image.py

Needs Pillow (pip install Pillow). The two Google Fonts the site itself loads
are fetched on first run and cached in scripts/.fonts/, which is gitignored;
after that the script runs offline.

1200x630 is the size Open Graph wants for a large card. Keep it: index.html
declares those dimensions and twitter:card=summary_large_image, and a square
image is why that card was pinned to the small `summary` variant before.
"""

import os
import sys
import urllib.request

# --- copy shown on the card ------------------------------------------------
EYEBROW = "SOFTWARE ENGINEER"
NAME = "OHEHA EBIBI"
SUBTITLE = "Full-Stack Developer"
STACK = "React  \u00b7  Node.js  \u00b7  Express  \u00b7  Hedera SDK"
URL = "0hehaebib1.vercel.app"

# --- brand, mirroring tailwind.config.js ----------------------------------
BG = (28, 27, 33)  # bg-dark  #1C1B21
ACCENT = (113, 173, 221)  # accent   #71ADDD
WHITE = (255, 255, 255)
SUB = (201, 199, 209)
MUTED = (138, 135, 150)

W, H = 1200, 630
SS = 2  # supersample factor, for a crisp circle edge

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONT_DIR = os.path.join(ROOT, "scripts", ".fonts")
FONTS = {
    "Anton-Regular.ttf": "https://raw.githubusercontent.com/google/fonts/main/ofl/anton/Anton-Regular.ttf",
    "Outfit.ttf": "https://raw.githubusercontent.com/google/fonts/main/ofl/outfit/Outfit%5Bwght%5D.ttf",
}

try:
    from PIL import Image, ImageDraw, ImageFont, ImageFilter
except ImportError:
    sys.exit("Pillow is required: pip install Pillow")


def ensure_fonts():
    """Fetch Anton and Outfit once; both are OFL and are what the site loads."""
    os.makedirs(FONT_DIR, exist_ok=True)
    for name, url in FONTS.items():
        dest = os.path.join(FONT_DIR, name)
        if not os.path.exists(dest):
            print("fetching " + name + " ...")
            urllib.request.urlretrieve(url, dest)


def outfit(size, weight):
    """Outfit is variable; pick a weight on its 100-900 axis."""
    f = ImageFont.truetype(os.path.join(FONT_DIR, "Outfit.ttf"), size)
    f.set_variation_by_axes([weight])
    return f


def anton(size):
    return ImageFont.truetype(os.path.join(FONT_DIR, "Anton-Regular.ttf"), size)


def tracked(draw, xy, text, font, fill, tracking):
    """Pillow has no letter-spacing, so step glyph by glyph."""
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textlength(ch, font=font) + tracking


def build():
    ensure_fonts()
    img = Image.new("RGB", (W, H), BG)

    # soft accent glow, sitting behind the portrait
    glow = Image.new("RGB", (W, H), BG)
    ImageDraw.Draw(glow).ellipse([700, 60, 1180, 540], fill=(44, 62, 80))
    img = Image.blend(img, glow.filter(ImageFilter.GaussianBlur(90)), 0.55)

    d = ImageDraw.Draw(img)
    d.rectangle([0, 0, 10, H], fill=ACCENT)  # accent bar, left edge

    # portrait: square-crop, circle-mask, accent ring
    photo = Image.open(os.path.join(ROOT, "public", "profile.png")).convert("RGB")
    s = min(photo.size)
    photo = photo.crop(
        (
            (photo.width - s) // 2,
            (photo.height - s) // 2,
            (photo.width + s) // 2,
            (photo.height + s) // 2,
        )
    )

    diameter = 380
    cx, cy = 950, H // 2
    photo = photo.resize((diameter, diameter), Image.LANCZOS)
    mask = Image.new("L", (diameter * SS, diameter * SS), 0)
    ImageDraw.Draw(mask).ellipse(
        [0, 0, diameter * SS - 1, diameter * SS - 1], fill=255
    )
    mask = mask.resize((diameter, diameter), Image.LANCZOS)
    img.paste(photo, (cx - diameter // 2, cy - diameter // 2), mask)

    r = diameter // 2 + 9
    d.ellipse([cx - r, cy - r, cx + r, cy + r], outline=ACCENT, width=4)

    # text column
    x = 84
    tracked(d, (x, 132), EYEBROW, outfit(21, 600), ACCENT, 3.4)
    d.text((x - 3, 172), NAME, font=anton(112), fill=WHITE)
    d.rectangle([x, 316, x + 86, 320], fill=ACCENT)
    d.text((x, 348), SUBTITLE, font=outfit(38, 400), fill=SUB)
    d.text((x, 402), STACK, font=outfit(25, 300), fill=MUTED)
    d.text((x, 500), URL, font=outfit(24, 500), fill=ACCENT)

    out = os.path.join(ROOT, "public", "og-image.png")
    img.save(out, "PNG", optimize=True)
    size_kb = os.path.getsize(out) / 1024
    print("wrote %s  %dx%d  %.0fKB" % (out, img.width, img.height, size_kb))
    if (img.width, img.height) != (W, H):
        sys.exit("unexpected dimensions - index.html declares %dx%d" % (W, H))


if __name__ == "__main__":
    build()
