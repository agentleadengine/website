# Stevens Agency Demo Site (VIVO Template)

A fake general-line insurance agency demo built on the VIVO (Template C) site template.
Used to showcase 5 GHL pipeline / snapshot embeds in a real agency-website context.

## Live URL

`https://agentleadengine.com/demo/vivo/stevens-agency/`

## Identity

| Field | Value |
|-|-|
| Agency | Stevens Agency |
| Tagline | Coverage You Can Count On |
| City | Raleigh, NC |
| Address | 8801 Lead Mine Rd, Raleigh, NC 27615 |
| Phone | (516) 780-1385 |
| Email | info@stevensagency.com |

All identity fields are placeholder. The phone is a working number (per request); everything
else is fictional, including the office address and the social URLs in the footer.

## File map

```
index.html              Homepage (5-line product grid)
personal-lines.html     Demo line 1 (Auto/Home/Umbrella/Bundles)
commercial-lines.html   Demo line 2 (GL/WC/BOP/Cyber)
life-insurance.html     Demo line 3 (Term/Whole/IUL/Final Expense)
medicare-aca.html       Demo line 4 (Medicare A/B/C/D + ACA)
final-expense.html      Demo line 5 (Burial/Guaranteed Issue)

auto-insurance.html     Original VIVO product page (kept around)
home-insurance.html     Original VIVO product page (kept around)
business-insurance.html Original VIVO product page (kept around)
motorcycle-boat-rv.html Original VIVO product page (kept around)
claims-payments.html    Claims page (rebranded)

blog.html               Blog index (rebranded)
blog-post-template.html Blog post scaffold ([POST_*] tokens left intact)
ins-contact.html        Contact page
ins-faq.html            FAQ page
terms-of-service.html   Terms

styles.css              Single global stylesheet (VIVO theme + GHL form section)
PLAYBOOK.md             Original VIVO build playbook (untouched, reference)
```

## Where the GHL forms drop in

Each of the 5 demo product pages has a GHL embed placeholder block right under the page hero,
inside `<section class="ghl-form-section" id="quote">`. The slot is the inner div:

| Page | Placeholder div ID |
|-|-|
| `personal-lines.html`   | `#ghl-form-personal-lines` |
| `commercial-lines.html` | `#ghl-form-commercial-lines` |
| `life-insurance.html`   | `#ghl-form-life` |
| `medicare-aca.html`     | `#ghl-form-medicare-aca` |
| `final-expense.html`    | `#ghl-form-final-expense` |

To wire up a pipeline, replace the contents of that div with the embed snippet (iframe or
script) that GHL gives you per snapshot. The wrapping `.ghl-form-card` provides the styled
container, so a bare `<iframe>` or `<script>` is enough.

Example:

```html
<div id="ghl-form-medicare-aca" class="ghl-form-embed">
  <iframe src="https://api.leadconnectorhq.com/widget/form/<FORM_ID>"
          style="width:100%; min-height:600px; border:0;"
          id="inline-<FORM_ID>"
          data-layout="..." data-trigger-type="alwaysShow"
          data-form-id="<FORM_ID>"></iframe>
  <script src="https://link.msgsndr.com/js/form_embed.js"></script>
</div>
```

The `.btn` "Request a Quote" CTAs across each page anchor to `#quote`, so they jump to
the form section automatically once the embed is in place.

## CTAs on each demo page

- Hero: `Request a Quote` (anchor to `#quote`) and `Call (516) 780-1385`
- Bottom CTA banner: same pair
- The split-section "Talk to a Specialist" button also anchors to `#quote`

## What was changed vs. the source VIVO template

Source: `~/Desktop/internal docs/templates/template-C-vivo/` (left untouched).

Rebranding pass:
- Familia Seguros / McAllen, TX / Garza family / Spanish bilingual copy → Stevens Agency / Raleigh, NC / Stevens family / English-only
- Phone, email, address, social handles updated
- All em-dashes / en-dashes converted to commas, hyphens, or removed (per house style)
- Page titles changed to `Page | Stevens Agency` format

Structural pass:
- Coverage grid on homepage rewritten from 4 cards (Auto, Home, Business, Recreational) to 5 cards covering the demo lines (Personal, Commercial, Life, Medicare/ACA, Final Expense)
- Top nav and mobile nav restructured: 5 demo lines featured first, then 4 specialty pages from the original template
- Quote-form select on the homepage updated to map to the 5 demo lines
- 4 new product pages built from the life-insurance template: `personal-lines.html`, `commercial-lines.html`, `medicare-aca.html`, `final-expense.html`
- Footer Coverage column unified across every page to show the 5 demo lines

CSS pass:
- New `.ghl-form-section`, `.ghl-form-card`, `.ghl-form-embed`, `.ghl-form-placeholder` styles appended to `styles.css` for the embed container

Note: the dash-stripping pass collapsed multi-space HTML indentation in every file. That has zero functional impact (browsers ignore extra whitespace) but the source is no longer pretty-printed. Let me know if you want it re-formatted.

## Local preview

```sh
cd ~/Desktop/website/demo/vivo/stevens-agency
python3 -m http.server 8765
# open http://localhost:8765/
```

Or from the website root, to test the production URL path:

```sh
cd ~/Desktop/website
python3 -m http.server 8766
# open http://localhost:8766/demo/vivo/stevens-agency/
```
