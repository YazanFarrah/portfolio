#!/usr/bin/env python3
"""Wrap portfolio.html into a complete, deployable site/index.html.

portfolio.html has no <head> — the Artifact host supplies one. This adds the
doctype, meta, social tags and reset so the page stands on its own.

    python3 build.py            # uses DOMAIN below
    python3 build.py https://example.com
"""
import sys, pathlib

DOMAIN = "https://yazanfarrah.com"
if len(sys.argv) > 1:
    DOMAIN = sys.argv[1].rstrip("/")

root = pathlib.Path(__file__).parent
src  = (root / "portfolio.html").read_text(encoding="utf-8")
cut  = src.index("</style>") + len("</style>")
head_bits, body_bits = src[:cut], src[cut:]

DESC = ("Yazan Farrah — software engineer. Flutter and Dart by trade, Rails and Vue "
        "behind them. Currently the primary mobile engineer on Maqsam's softphone.")
SHORT = ("Flutter and Dart by trade, Rails and Vue behind them. Five years shipping "
         "mobile, currently on Maqsam's softphone.")

doc = f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">

<meta name="description" content="{DESC}">
<meta name="author" content="Yazan Farrah">
<meta name="theme-color" content="#EFEEEA" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0B0C0D" media="(prefers-color-scheme: dark)">
<link rel="canonical" href="{DOMAIN}/">

<meta property="og:type" content="website">
<meta property="og:url" content="{DOMAIN}/">
<meta property="og:title" content="Yazan Farrah — Software Engineer">
<meta property="og:description" content="{SHORT}">
<meta property="og:image" content="{DOMAIN}/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Yazan Farrah — Software Engineer">
<meta name="twitter:description" content="{SHORT}">
<meta name="twitter:image" content="{DOMAIN}/og.png">

<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="apple-touch-icon.png">

<script type="application/ld+json">
{{"@context":"https://schema.org","@type":"Person","name":"Yazan Farrah","jobTitle":"Software Engineer","url":"{DOMAIN}/","email":"mailto:yazanfarrah03@gmail.com","knowsAbout":["Flutter","Dart","Ruby on Rails","Vue.js","WebRTC"],"sameAs":["https://github.com/yazanFarrah","https://www.linkedin.com/in/yazan-farrah-795216227/"]}}
</script>

{head_bits}
<style>
/* reset the Artifact host used to provide */
:root{{color-scheme:light dark;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}}
html,body{{margin:0}}
img{{max-width:100%}}
[hidden]{{display:none!important}}
</style>
</head>
<body>
{body_bits}
</body>
</html>
'''
out = root / "site" / "index.html"
out.write_text(doc, encoding="utf-8")
print(f"built {out}  ({len(doc):,} bytes)  domain={DOMAIN}")
