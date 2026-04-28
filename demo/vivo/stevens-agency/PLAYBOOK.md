# Template C — Vivo
## Build Playbook

> **HOW TO USE THIS FILE**
> 1. **Building this template:** Fill in every `[STYLE:TOKEN]` in the STYLE CONFIG table (Section 1) before writing a single line of code. Then run 5 terminals using Section 2.
> 2. **Creating a new template:** Copy this entire folder to `template-X-new-name/`, open this PLAYBOOK.md, and replace all `[STYLE:TOKEN]` values with the new template's design system. HTML structure and copywriting guide remain identical.
> 3. **Running parallel terminals:** Each terminal reads this full playbook, then follows its assigned pages from Section 2.

---

## SECTION 1 — STYLE CONFIG
### Fill this in before any build begins. Every [STYLE:TOKEN] in this document maps to a row here.

| Token | Value | Notes |
|-------|-------|-------|
| `[STYLE:TEMPLATE_CODE]` | C | |
| `[STYLE:TEMPLATE_NAME]` | Vivo | |
| `[STYLE:TEMPLATE_DESCRIPTION]` | Vibrant community-forward identity built on bright teal and vivid orange — for agencies that serve diverse communities with warmth and energy | |
| | | |
| `[STYLE:COLOR_PRIMARY]` | `#0A5468` | Deep teal — nav, headings |
| `[STYLE:COLOR_PRIMARY_DARK]` | `#073D4D` | Darkest teal — topbar, footer |
| `[STYLE:COLOR_PRIMARY_MID]` | `#0D7E8A` | Mid teal — gradients |
| `[STYLE:COLOR_GOLD]` | `#EA580C` | Vivid orange — CTA buttons, highlights |
| `[STYLE:COLOR_GOLD_DARK]` | `#C2410C` | Orange hover state |
| `[STYLE:COLOR_GOLD_LIGHT]` | `#FFF7ED` | Orange light tint |
| `[STYLE:COLOR_TEAL]` | `#0D9488` | Teal-green — section labels, checkmarks |
| `[STYLE:COLOR_TEAL_LIGHT]` | `#2DD4BF` | Bright teal hover |
| `[STYLE:COLOR_BLUE]` | `#0891B2` | Cyan — links, interactive elements |
| `[STYLE:COLOR_BLUE_LIGHT]` | `#CFFAFE` | Cyan hover / light accent |
| `[STYLE:COLOR_TEXT]` | `#1E293B` | Main body text |
| `[STYLE:COLOR_TEXT_MUTED]` | `#64748B` | Captions, descriptions, secondary text |
| | | |
| `[STYLE:FONT_HEADING_NAME]` | Plus Jakarta Sans | Modern rounded geometric sans |
| `[STYLE:FONT_HEADING_FALLBACK]` | system-ui, sans-serif | |
| `[STYLE:FONT_HEADING_WEIGHTS]` | wght@700;800 | |
| `[STYLE:FONT_BODY_NAME]` | Nunito | Friendly rounded sans |
| `[STYLE:FONT_BODY_FALLBACK]` | system-ui, sans-serif | |
| `[STYLE:FONT_BODY_VARIANTS]` | wght@400;500;600 | |
| `[STYLE:GOOGLE_FONTS_URL]` | `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Nunito:wght@400;500;600&display=swap` | Paste into `<head>` of every HTML file |
| | | |
| `[STYLE:RADIUS_SM]` | 8px | Rounded — friendly feel |
| `[STYLE:RADIUS_MD]` | 16px | Standard cards |
| `[STYLE:RADIUS_LG]` | 24px | Hero card, large panels |
| `[STYLE:SHADOW_SM]` | `0 1px 4px rgba(7,61,77,0.08)` | |
| `[STYLE:SHADOW_MD]` | `0 4px 16px rgba(7,61,77,0.12)` | |
| `[STYLE:SHADOW_LG]` | `0 12px 40px rgba(7,61,77,0.18)` | |
| | | |
| `[STYLE:HERO_GRADIENT]` | `linear-gradient(135deg, #073D4D 0%, #0A5468 50%, #0D7E8A 100%)` | |
| `[STYLE:FOOTER_BG]` | `#073D4D` | Matches topbar |
| `[STYLE:TOPBAR_BG]` | `#073D4D` | Darkest teal |
| `[STYLE:CTA_BANNER_BG]` | `linear-gradient(135deg, #EA580C 0%, #C2410C 100%)` | Vivid orange — signature look |
| `[STYLE:SECTION_ALT_BG]` | `#F0FDFA` | Light mint — replaces gray-50 for airy feel |

---

## SECTION 2 — 5-TERMINAL BUILD PROTOCOL

### Terminal Assignment Table

| Terminal | Pages | Complexity |
|----------|-------|------------|
| **Terminal 1** | `insurance-template.html` (homepage) | High — full hero + all sections |
| **Terminal 2** | `auto-insurance.html` + `home-insurance.html` | Medium — interior pages |
| **Terminal 3** | `business-insurance.html` + `motorcycle-boat-rv.html` | Medium — interior pages |
| **Terminal 4** | `claims-payments.html` + `ins-contact.html` + `ins-faq.html` | Medium — varied page types |
| **Terminal 5** | `blog.html` + `blog-post-template.html` + `terms-of-service.html` | Medium — content-heavy |

**Total pages:** 11

### Prompt to Paste Into Each Terminal Session

Replace `[TERMINAL_LETTER]` and `[PAGE_LIST]` before pasting:

```
Read C:\Users\Leadshield\Documents\Agency\templates\template-C-vivo\PLAYBOOK.md in full.

You are Terminal [TERMINAL_LETTER] building Template C — Vivo.

Your pages to build:
[PAGE_LIST]

Write all files to:
C:\Users\Leadshield\Documents\Agency\templates\template-C-vivo\

Rules:
- Use the Write tool to create files (not Bash)
- Link to styles.css — NO inline <style> blocks
- All [STYLE:TOKEN] values are in Section 1 of this playbook
- All shared chrome HTML is in Section 4 — copy it exactly
- All page blueprints are in Section 7 — follow the section order
- Do not ask questions — all answers are in this playbook
- Build page by page, one at a time
- Verify each file passes the quality checklist in Section 10 before moving to the next page
```

### Rules for All Parallel Instances

- Use `Write` tool to create files (not Bash)
- One `<link rel="stylesheet" href="styles.css" />` — zero inline `<style>` blocks
- One `<script>` block at bottom of `<body>` — no external script files
- All content placeholders use `[BRACKET]` format (see Section 8)
- All design values reference CSS variables — no hardcoded hex codes in HTML
- Add `.active` class to the correct nav link on both desktop and mobile nav

---

## SECTION 3 — DESIGN SYSTEM

### Brand Personality
> **Vibrant community-forward identity built on bright teal and vivid orange — for agencies that serve diverse communities with warmth and energy.**

Fill this in when completing the STYLE CONFIG. This one sentence guides every design decision — typography weight, color saturation, spacing choices, and copy tone.

### Color System

All colors are defined as CSS variables in `styles.css`. Use variables in HTML via `style="color: var(--gold)"` type references only. Never hardcode hex in HTML attributes.

> **Note on variable names:** CSS variable names (`--gold`, `--teal`, `--navy`) are **semantic** — they represent color *roles*, not literal colors. In this template, `--navy` = deep teal, `--gold` = vivid orange, `--teal` = teal-green. This allows HTML files to be identical across all templates.
>
> **Signature difference:** `--gray-50` = `#F0FDFA` (light mint) instead of the standard neutral gray. This makes every alternating section background feel fresh and airy.

| CSS Variable | Value | Role |
|-------------|-------|------|
| `--navy` | `#0A5468` | Primary dark (deep teal) |
| `--navy-dark` | `#073D4D` | Deepest backgrounds |
| `--navy-mid` | `#0D7E8A` | Mid tone |
| `--gold` | `#EA580C` | CTA, highlights (vivid orange) |
| `--gold-dark` | `#C2410C` | Orange hover |
| `--gold-light` | `#FFF7ED` | Orange tint |
| `--teal` | `#0D9488` | Labels, checkmarks (teal-green) |
| `--teal-light` | `#2DD4BF` | Teal hover |
| `--blue` | `#0891B2` | Links, icons (cyan) |
| `--blue-light` | `#CFFAFE` | Cyan hover |
| `--text` | `#1E293B` | Body text |
| `--text-muted` | `#64748B` | Secondary text |
| `--white` | `#FFFFFF` | Always white |
| `--gray-50` | `#F0FDFA` | **Mint** — signature alternating bg |
| `--gray-100` | `#F1F5F9` | Cards, image placeholders (neutral) |
| `--gray-200` | `#E2E8F0` | Borders, dividers |
| `--gray-400` | `#94A3B8` | Placeholder text |
| `--gray-600` | `#475569` | Secondary icons |
| `--gray-800` | `#1E293B` | Dark text alt |

### Typography

| CSS Variable | Value | Usage |
|-------------|-------|-------|
| `--font-heading` | `'Plus Jakarta Sans', system-ui, sans-serif` | All headings, logo |
| `--font-body` | `'Nunito', system-ui, sans-serif` | All body text |

**Heading scale:**
- Page hero H1: `clamp(30px, 5vw, 52px)` / weight 800
- Section title: `clamp(26px, 4vw, 40px)` / weight 800
- Card H3: `18px` / weight 700
- Section label: `12px` / weight 700 / `letter-spacing: .12em` / uppercase / color: `var(--teal)`

**Body scale:**
- Body: `16px` / `line-height: 1.65` / color: `var(--text)`
- Muted: `16px` / color: `var(--text-muted)`
- Small: `14px` / color: `var(--text-muted)`
- Caption: `13px`

### Spacing & Layout

| Property | Value |
|----------|-------|
| Container max-width | `1180px` |
| Container padding | `0 24px` |
| Section padding (standard) | `96px 0` |
| Section padding (compact) | `80px 0` |
| Grid gap (cards) | `24px` |
| Grid gap (medium) | `32px` |
| Grid gap (two-col split) | `64px – 72px` |
| Heading → sub spacing | `12px` |
| Label → heading spacing | `12px` |
| Border radius (sm) | `8px` |
| Border radius (md) | `16px` |
| Border radius (lg) | `24px` |

---

## SECTION 4 — SHARED CHROME HTML

Copy these blocks exactly into every page. The only things that change per-page are:
1. The `<title>` tag
2. The `.active` class on the correct nav link
3. The breadcrumb text inside `.page-hero`

### 4A — Full Head Block
```html
<!DOCTYPE html>
<html lang="en">
<head>
<!--
  ╔══════════════════════════════════════════════════════════════════╗
  ║  TEMPLATE C — Vivo                                               ║
  ║  Insurance Agency Website Template  •  © Your Agency Name       ║
  ╠══════════════════════════════════════════════════════════════════╣
  ║  DELIVERY CHECKLIST — Find & Replace before going live:         ║
  ║                                                                  ║
  ║  [AGENCY_NAME]    →  e.g. "Smith & Associates Insurance"        ║
  ║  [AGENCY_TAGLINE] →  e.g. "Your Trusted Local Experts"          ║
  ║  [PHONE]          →  Display format:  "(555) 123-4567"          ║
  ║  [PHONE_RAW]      →  Digits only for tel: links: "5551234567"   ║
  ║  [EMAIL]          →  e.g. "info@smithinsurance.com"             ║
  ║  [ADDRESS]        →  e.g. "456 Oak St, Springfield, IL 62701"   ║
  ║  [FACEBOOK_URL]   →  "https://facebook.com/YourPage"            ║
  ║  [INSTAGRAM_URL]  →  "https://instagram.com/YourHandle"         ║
  ║  [LINKEDIN_URL]   →  "https://linkedin.com/company/YourCo"      ║
  ╠══════════════════════════════════════════════════════════════════╣
  ║  CSS BRANDING: Edit styles.css — search "CLIENT CONFIG"         ║
  ╚══════════════════════════════════════════════════════════════════╝
-->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PAGE TITLE — [AGENCY_NAME]</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Nunito:wght@400;500;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
</head>
```

### 4B — Floating CTA + Topbar + Header + Mobile Nav
```html
<body>

  <!-- FLOATING CTA -->
  <div class="floating-cta" id="floatingCta">
    <a href="ins-contact.html">
      <svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      Get a Free Quote
    </a>
  </div>

  <!-- TOP BAR -->
  <div class="topbar">
    <div class="container">
      <div class="topbar-left">
        <a href="#" class="topbar-icon">
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>
          [ADDRESS]
        </a>
        <span style="opacity:.3">|</span>
        <a href="mailto:[EMAIL]" class="topbar-icon">
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          [EMAIL]
        </a>
      </div>
      <div class="topbar-right">
        <div class="lang-switcher"><a href="#" class="active">English</a><a href="#">Español</a></div>
      </div>
    </div>
  </div>

  <!-- HEADER -->
  <header class="site-header" id="siteHeader">
    <div class="header-inner">
      <a href="insurance-template.html" class="logo-wrap">
        <div class="logo-mark">
          <svg fill="none" stroke="white" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
        </div>
        <div class="logo-text">
          <strong>[AGENCY_NAME]</strong>
          <span>[AGENCY_TAGLINE]</span>
        </div>
      </a>
      <nav class="primary-nav">
        <div class="nav-dropdown">
          <a href="auto-insurance.html">Coverage</a>
          <div class="dropdown-menu">
            <a href="auto-insurance.html">Auto Insurance</a>
            <a href="home-insurance.html">Home Insurance</a>
            <a href="business-insurance.html">Business Insurance</a>
            <a href="motorcycle-boat-rv.html">Recreational Insurance</a>
          </div>
        </div>
        <a href="claims-payments.html">Claims</a>
        <a href="blog.html">Blog</a>
        <div class="nav-dropdown">
          <a href="#">Contact</a>
          <div class="dropdown-menu">
            <a href="ins-contact.html">Contact Our Office</a>
            <a href="ins-faq.html">FAQ</a>
          </div>
        </div>
      </nav>
      <div class="header-right">
        <a href="tel:[PHONE_RAW]" class="phone-link">
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          [PHONE]
        </a>
        <a href="ins-contact.html" class="btn btn-primary">Free Quote</a>
        <button class="hamburger" id="hamburger" aria-label="Toggle menu"><span></span><span></span><span></span></button>
      </div>
    </div>
  </header>

  <!-- MOBILE NAV -->
  <div class="mobile-nav" id="mobileNav">
    <button class="mobile-nav-close" id="mobileNavClose" aria-label="Close menu">&#x2715;</button>
    <a href="insurance-template.html">Home</a>
    <a href="auto-insurance.html">Auto Insurance</a>
    <a href="home-insurance.html">Home Insurance</a>
    <a href="business-insurance.html">Business Insurance</a>
    <a href="motorcycle-boat-rv.html">Recreational Insurance</a>
    <a href="claims-payments.html">Claims &amp; Payments</a>
    <a href="blog.html">Blog</a>
    <a href="ins-contact.html">Contact Us</a>
    <a href="ins-faq.html">FAQ</a>
    <a href="tel:[PHONE_RAW]" style="color: var(--gold); font-weight: 700;">[PHONE]</a>
    <a href="ins-contact.html" class="btn btn-primary btn-full">Get a Free Quote</a>
  </div>

  <main>
```

**Active nav rule:** Add `class="active"` to the matching `<a>` in BOTH desktop nav and mobile nav.

### 4C — Standard Page Hero (all interior pages)
```html
    <section class="page-hero">
      <div class="container">
        <div class="breadcrumb">
          <a href="insurance-template.html">Home</a>
          <span class="sep">›</span>
          <span>PAGE NAME HERE</span>
        </div>
        <h1>MAIN HEADLINE<br><span style="color:var(--gold)">ORANGE ACCENT LINE</span></h1>
        <p>Supporting sentence — one or two max. Value prop. Under 160 characters.</p>
        <div class="page-hero-ctas">
          <a href="ins-contact.html" class="btn btn-primary">Get a Free Quote</a>
          <a href="tel:[PHONE_RAW]" class="btn btn-outline">Call [PHONE]</a>
        </div>
      </div>
    </section>
```

### 4D — CTA Banner (every page, directly before footer)
```html
  <!-- CTA BANNER -->
  <section class="cta-banner">
    <div class="container">
      <h2 class="reveal">Ready to Save on Your Insurance?</h2>
      <p class="reveal reveal-delay-1">Get a free, no-obligation quote in minutes. Our agents compare top carriers to find you the best rate.</p>
      <div class="cta-btns reveal reveal-delay-2">
        <a href="ins-contact.html" class="btn btn-white">Get Your Free Quote</a>
        <a href="tel:[PHONE_RAW]" class="btn btn-ghost">Call [PHONE]</a>
      </div>
    </div>
  </section>
```

### 4E — Footer
```html
  <!-- FOOTER -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo-wrap" style="margin-bottom:20px;">
            <div class="logo-mark"><svg fill="none" stroke="white" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></div>
            <div class="logo-text"><strong>[AGENCY_NAME]</strong><span>[AGENCY_TAGLINE]</span></div>
          </div>
          <p>An independent insurance agency committed to finding you the best coverage at the best price. Proudly serving our community for over 40 years.</p>
          <div class="footer-contact-item"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>[ADDRESS]</div>
          <div class="footer-contact-item"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg><a href="tel:[PHONE_RAW]">[PHONE]</a></div>
          <div class="footer-contact-item"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg><a href="mailto:[EMAIL]">[EMAIL]</a></div>
        </div>
        <div class="footer-col">
          <h4>Coverage</h4>
          <ul>
            <li><a href="auto-insurance.html">Auto Insurance</a></li>
            <li><a href="home-insurance.html">Home Insurance</a></li>
            <li><a href="business-insurance.html">Business Insurance</a></li>
            <li><a href="motorcycle-boat-rv.html">Motorcycle Insurance</a></li>
            <li><a href="motorcycle-boat-rv.html">Boat &amp; RV Insurance</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="claims-payments.html">Claims &amp; Payments</a></li>
            <li><a href="blog.html">Blog &amp; Articles</a></li>
            <li><a href="ins-faq.html">FAQ</a></li>
            <li><a href="ins-contact.html">Contact Us</a></li>
            <li><a href="terms-of-service.html">Terms of Service</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Office Hours</h4>
          <ul class="footer-hours">
            <li><span>Mon – Fri</span><span>9:00 AM – 6:00 PM</span></li>
            <li><span>Saturday</span><span>10:00 AM – 3:00 PM</span></li>
            <li><span>Sunday</span><span>Closed</span></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&#169; [AGENCY_NAME]. All Rights Reserved.</p>
        <div class="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="terms-of-service.html">Terms of Service</a>
          <a href="blog.html">Blog</a>
        </div>
        <div class="social-links">
          <a href="[FACEBOOK_URL]" class="social-link" aria-label="Facebook"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
          <a href="[INSTAGRAM_URL]" class="social-link" aria-label="Instagram"><svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg></a>
          <a href="[LINKEDIN_URL]" class="social-link" aria-label="LinkedIn"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
        </div>
      </div>
    </div>
  </footer>
```

### 4F — Standard JavaScript Block (every page)
```html
  <script>
    // Scroll Reveal
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const revealObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); revealObs.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => revealObs.observe(el));

    // Header scroll shadow
    const header = document.getElementById('siteHeader');
    window.addEventListener('scroll', () => { header.classList.toggle('scrolled', window.scrollY > 60); }, { passive: true });

    // Floating CTA
    const floatingCta = document.getElementById('floatingCta');
    let ctaVisible = false;
    window.addEventListener('scroll', () => {
      const show = window.scrollY > 400;
      if (show !== ctaVisible) { ctaVisible = show; floatingCta.classList.toggle('visible', ctaVisible); }
    }, { passive: true });

    // Mobile menu
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavClose = document.getElementById('mobileNavClose');
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
    mobileNavClose.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    }));

    // ADD PAGE-SPECIFIC JS BELOW THIS LINE
  </script>
</body>
</html>
```

**Accordion JS** — add inside the script block on any page with `.accordion` elements:
```javascript
    document.querySelectorAll('.accordion-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.accordion-item');
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.accordion-item.open').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });
    });
```

**FAQ Tab JS** — add on `ins-faq.html` if using category tabs:
```javascript
    document.querySelectorAll('.faq-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.faq-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.faq-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.panel).classList.add('active');
      });
    });
```

---

## SECTION 5 — CSS CLASS REFERENCE

All classes are defined in `styles.css`. Do not invent new class names. If a needed style doesn't exist, add it to styles.css — do not write inline styles except for one-off CSS variable references.

### Global Utilities
| Class | Purpose |
|-------|---------|
| `.container` | `max-width: 1180px`, centered, `padding: 0 24px` |
| `.section-label` | Teal-green uppercase 12px label — appears above section titles |
| `.section-title` | Large bold heading — uses `var(--font-heading)` |
| `.section-sub` | Muted subtitle below title |
| `.section-header` | Centered text wrapper for above three |
| `.reveal` | Fade-in from below on scroll (fires once) |
| `.reveal-left` | Slide in from left on scroll |
| `.reveal-right` | Slide in from right on scroll |
| `.reveal-delay-1` | 100ms delay |
| `.reveal-delay-2` | 200ms delay |
| `.reveal-delay-3` | 300ms delay |

### Buttons
| Class | Appearance | Use On |
|-------|-----------|--------|
| `.btn` | Base — always pair with variant | All buttons |
| `.btn-primary` | Vivid orange fill, white text | Primary CTAs |
| `.btn-navy` | Teal fill, white text | Secondary dark CTAs |
| `.btn-outline` | Transparent + white border | On dark/hero backgrounds |
| `.btn-white` | White fill, teal text | On colored section backgrounds |
| `.btn-ghost` | Semi-transparent, white border | CTA banner secondary |
| `.btn-full` | Full width, centered | Mobile nav CTA |

### Chrome & Navigation
| Class | Purpose |
|-------|---------|
| `.topbar` | Top info bar (deep teal) |
| `.topbar-left` / `.topbar-right` | Flex sides of topbar |
| `.topbar-icon` | Icon + text link in topbar |
| `.lang-switcher` | EN/ES toggle |
| `.site-header` | Sticky header |
| `.site-header.scrolled` | Header shadow state (JS-toggled) |
| `.header-inner` | Flex row inside header |
| `.logo-wrap` | Logo container |
| `.logo-mark` | Icon square (orange) |
| `.logo-text` | Strong + span name/tagline |
| `.primary-nav` | Desktop navigation |
| `.nav-dropdown` | Dropdown trigger wrapper |
| `.dropdown-menu` | Dropdown panel |
| `.phone-link` | Phone number in header |
| `.hamburger` | Mobile menu toggle (hidden desktop) |
| `.hamburger.open` | Animated X state |
| `.mobile-nav` | Full-screen mobile menu overlay |
| `.mobile-nav.open` | Visible state |
| `.mobile-nav-close` | X button inside mobile nav |
| `.floating-cta` | Fixed pill CTA (orange — hidden until scroll) |
| `.floating-cta.visible` | Shown state |

### Page Structure
| Class | Purpose |
|-------|---------|
| `.page-hero` | Teal gradient hero — interior pages |
| `.breadcrumb` | Breadcrumb trail inside page-hero |
| `.breadcrumb .sep` | › separator |
| `.page-hero-ctas` | Flex row of CTA buttons in hero |

### Hero (Homepage Only)
| Class | Purpose |
|-------|---------|
| `.hero` | Full homepage hero section |
| `.hero-grid` | Two-column grid (content + quote card) |
| `.hero-badge` | Pill badge above headline |
| `.hero-sub` | Subtitle paragraph |
| `.hero-ctas` | CTA button row |
| `.hero-stats` | Stat pills row |
| `.stat-pill` | Individual stat (number + label) |
| `.quote-card` | Right-side quote request form card |
| `.quote-card-header` | Dark header of quote card |
| `.form-group` | Label + input wrapper |
| `.form-row` | Side-by-side form groups |

### Coverage & Detail Cards
| Class | Purpose |
|-------|---------|
| `.coverage` | Homepage coverage cards section (mint bg) |
| `.cards-grid` | 4-column card grid |
| `.coverage-card` | Individual coverage card |
| `.coverage-detail-section` | Interior page card section (mint bg) |
| `.coverage-detail-section.bg-white` | White bg variant |
| `.detail-grid` | 3-column grid |
| `.detail-grid-2` | 2-column variant |
| `.detail-grid-4` | 4-column variant |
| `.detail-card` | Card with hover lift |
| `.detail-icon` | 52×52 icon container (cyan tint default) |
| `.detail-icon.teal` | Teal-green tint |
| `.detail-icon.gold` | Orange tint |
| `.detail-icon.navy` | Deep teal tint |

### Split Sections
| Class | Purpose |
|-------|---------|
| `.split-section` | Two-col content + image section |
| `.split-section.bg-gray` | Mint bg variant |
| `.split-grid` | `1fr 1fr` grid |
| `.split-grid.reverse` | Image left, content right |
| `.split-image` | Placeholder image block |
| `.split-content` | Text content side |
| `.check-list` | Teal-green checkmark bullet list |
| `.check-item` | Single list item |
| `.check-dot` | Teal-green circle checkmark icon |

### About Section (Homepage)
| Class | Purpose |
|-------|---------|
| `.about` | About section |
| `.about-grid` | Image + content grid |
| `.about-img-wrap` | Image side |
| `.about-content` | Text side |
| `.features-list` | Check list in about section |
| `.feature-item` | Single feature row |
| `.feature-dot` | Teal-green dot icon |

### Stats Strip
| Class | Purpose |
|-------|---------|
| `.why-strip` | Full-width dark teal stat band |
| `.why-stat` | Individual stat (strong number + p label) |
| `.why-stat-divider` | Vertical line between stats |

### Carriers
| Class | Purpose |
|-------|---------|
| `.carriers` | Carrier logos section |
| `.carriers-header` | Centered title block |
| `.carriers-strip` | Flex row of logo boxes |
| `.carrier-logo` | Individual placeholder logo box |

### Discounts
| Class | Purpose |
|-------|---------|
| `.discounts-section` | Discounts grid section |
| `.discounts-grid` | 3-column grid |
| `.discount-item` | Flex row card with orange icon |
| `.discount-icon` | Orange icon box |

### Steps / Process
| Class | Purpose |
|-------|---------|
| `.steps-section` | Numbered process section (mint bg) |
| `.steps-grid` | 4-column grid with connector line |
| `.step-card` | Individual step |
| `.step-number` | Teal circle with number |

### Payment Options
| Class | Purpose |
|-------|---------|
| `.payment-section` | Payment methods section |
| `.payment-grid` | 3-column |
| `.payment-card` | Centered icon + title + description card |
| `.payment-card-icon` | Large circular icon |

### Notice / Alert
| Class | Purpose |
|-------|---------|
| `.notice-section` | Container for notice card |
| `.notice-card` | Cyan-tinted left-bordered alert box |
| `.notice-icon` | Icon circle |
| `.notice-body` | Text content |
| `.notice-contacts` | Link row inside notice |

### FAQ / Accordion
| Class | Purpose |
|-------|---------|
| `.faq-section` | Mint background FAQ section |
| `.faq-layout` | Max-width 840px centered |
| `.faq-category-block` | Group of accordion items |
| `.faq-category-title` | Category heading |
| `.accordion` | Accordion list container |
| `.accordion-item` | Single Q&A item |
| `.accordion-item.open` | Expanded state (JS-toggled) |
| `.accordion-trigger` | The question button |
| `.accordion-body` | The answer (hidden by default) |
| `.acc-icon` | Chevron icon inside trigger |

### Contact Page
| Class | Purpose |
|-------|---------|
| `.contact-section` | Main contact section |
| `.contact-layout` | `1fr 380px` grid |
| `.contact-form-card` | Left side form card |
| `.contact-info-block` | Right side info stack |
| `.contact-info-card` | Individual info card |
| `.contact-detail` | Icon + text row |
| `.hours-table` | Two-column hours table |
| `.map-placeholder` | Gray map placeholder box |

### Industries (Business Page)
| Class | Purpose |
|-------|---------|
| `.industries-section` | Industry grid section |
| `.industries-grid` | 4-column |
| `.industry-card` | Centered icon + title + description |
| `.industry-icon` | Cyan icon box |

### Related Cards
| Class | Purpose |
|-------|---------|
| `.related-section` | Cross-link section |
| `.related-grid` | 4-column |
| `.related-card` | Centered icon + title + link |
| `.related-card-icon` | Teal icon square |

### Blog — Listing Page
| Class | Purpose |
|-------|---------|
| `.blog-section` | Main blog listing section |
| `.filter-bar` | Horizontal category filter |
| `.filter-btn` | Individual filter (add `.active`) |
| `.blog-grid` | 3-column post card grid |
| `.blog-card` | Post card |
| `.blog-card-img` | Image placeholder block |
| `.blog-card-tag` | Category pill (teal-green) |
| `.blog-card-body` | Text content area |
| `.blog-card-meta` | Date + read time |
| `.blog-card-title` | Post title |
| `.blog-card-excerpt` | Short description |
| `.blog-card-link` | "Read more →" link |
| `.newsletter-strip` | Email signup strip (deep teal) |
| `.newsletter-form` | Input + button row |

### Blog — Single Post
| Class | Purpose |
|-------|---------|
| `.post-header` | Teal gradient hero area for post |
| `.post-category` | Orange label |
| `.post-title` | Large article title |
| `.post-meta` | Author / date / read time |
| `.post-featured-img` | Hero image block |
| `.post-layout` | Article + sidebar grid |
| `.post-article` | Main article content |
| `.key-takeaway` | Teal-green callout box |
| `.share-bar` | Social share row |
| `.author-card` | Author bio |
| `.post-sidebar` | Sticky sidebar |
| `.sidebar-widget` | Widget container |
| `.toc-link` | Table of contents link |
| `.sidebar-cta-widget` | Teal CTA box in sidebar |
| `.related-posts-grid` | 3-column related posts |
| `.related-post-card` | Related post card |

### Legal / Terms
| Class | Purpose |
|-------|---------|
| `.legal-section` | Mint background |
| `.legal-layout` | TOC + doc grid |
| `.legal-toc` | Sticky sidebar nav |
| `.legal-toc-link` | TOC nav item |
| `.legal-toc-num` | Number badge (teal) |
| `.legal-doc` | Main document area |
| `.legal-section-block` | Individual section |
| `.legal-intro-box` | Highlighted intro |
| `.legal-contact-box` | Contact section at bottom |
| `.legal-contact-grid` | Contact items grid |

### Footer
| Class | Purpose |
|-------|---------|
| `.site-footer` | Full-width footer (dark teal) |
| `.footer-grid` | 4-column grid |
| `.footer-brand` | First column — logo + contact |
| `.footer-contact-item` | Icon + text row |
| `.footer-col` | Nav column |
| `.footer-hours` | Hours list |
| `.footer-bottom` | Bottom bar — copyright + links + social |
| `.footer-links` | Text link row |
| `.social-links` | Social icon row |
| `.social-link` | Individual icon link |

---

## SECTION 6 — STYLES.CSS STRUCTURE

The `styles.css` file must be organized in this exact order. Do not reorder sections.

```
1.  CLIENT CONFIG (comment block)
2.  :root { — all CSS variables }
3.  Reset & Base
4.  Utilities (.container, .btn variants, .section-label/title/sub)
5.  Top Bar
6.  Header & Nav
7.  Mobile Nav
8.  Floating CTA
9.  Hero (homepage)
10. Coverage Cards (homepage)
11. About Section (homepage)
12. Stats Strip
13. Carriers
14. CTA Banner
15. Footer
16. Page Hero (interior pages)
17. Detail Cards
18. Split Section
19. Discounts
20. Steps / Process
21. Payment Options
22. Notice / Alert
23. FAQ / Accordion
24. Contact Page
25. Industries (business page)
26. Related Cards
27. Blog — Listing
28. Blog — Single Post
29. Legal / Terms
30. Scroll Reveal Animations
31. Responsive (media queries — always last)
```

---

## SECTION 7 — PAGE BLUEPRINTS

Section order per page. Build sections in this exact order.

### `insurance-template.html` — Homepage
1. Page hero (full hero with quote card, not `.page-hero`)
2. `.coverage` — 4 coverage cards (Auto, Home, Business, Recreational)
3. `.about` — agency story + feature list
4. `.why-strip` — 4 stats
5. `.carriers` — carrier logos
6. `.cta-banner`
7. Footer

### `auto-insurance.html`
1. `.page-hero` — "Auto Insurance That Actually Pays Off"
2. `.coverage-detail-section` — 6 cards: Liability, Collision, Comprehensive, Uninsured Motorist, Medical Payments, Roadside Assistance
3. `.split-section` — "Why Independent Agents Get You Better Rates" + check-list
4. `.discounts-section` — 6 discounts: Good Driver, Multi-Car, Bundling, Good Student, New Vehicle, Safe Driver App
5. `.steps-section` — 4 steps: Get a Quote → Compare Options → Choose Coverage → Drive Covered
6. `.related-section` — links to Home, Business, Recreational, Contact
7. `.cta-banner`

### `home-insurance.html`
1. `.page-hero` — "Protect the Place That Matters Most"
2. `.coverage-detail-section` — 6 cards: Dwelling, Other Structures, Personal Property, Liability, Additional Living Expenses, Medical Payments
3. `.split-section.bg-gray` — "Replacement Cost vs. Actual Cash Value — Know the Difference"
4. `.discounts-section` — 5 discounts: Security System, New Construction, Loyalty, Bundle, Claims-Free
5. `.steps-section.bg-white` — 4 steps
6. `.related-section` — links to Auto, Business, Recreational, Contact
7. `.cta-banner`

### `business-insurance.html`
1. `.page-hero` — "Business Insurance Built for How You Work"
2. `.coverage-detail-section` — 6 cards: General Liability, Commercial Property, Workers Comp, E&O, Commercial Auto, BOP
3. `.industries-section` — 8 industry cards: Retail, Restaurant, Contractor, Professional Services, Healthcare, Real Estate, Hospitality, Non-Profit
4. `.split-section` — "One Lawsuit Can End a Business. One Call Can Protect It."
5. `.steps-section.bg-white` — 4 steps
6. `.related-section` — links to Auto, Home, Recreational, Contact
7. `.cta-banner`

### `motorcycle-boat-rv.html`
1. `.page-hero` — "Coverage for Every Adventure"
2. `.coverage-detail-section` using `.detail-grid-2` — 4 cards: Motorcycle, Boat & Watercraft, RV & Motorhome, ATV & Off-Road
3. `.split-section.bg-gray` — "Seasonal Coverage Options Available"
4. `.discounts-section` — 4 discounts: Safety Course Completion, Multi-Policy Bundle, Lay-Up/Storage Period, Experienced Rider
5. `.steps-section.bg-white` — 4 steps
6. `.related-section` — links to Auto, Home, Business, Contact
7. `.cta-banner`

### `claims-payments.html`
1. `.page-hero` — "We're Here When You Need Us Most"
2. `.steps-section.bg-white` — 5 steps: Report the Incident → Document Everything → File Your Claim → We Advocate for You → Claim Resolved
3. `.payment-section` — 3 payment methods: Online Portal, Pay by Phone, Auto-Pay Enrollment
4. `.notice-section` — emergency contact notice card
5. `.split-section.bg-gray` — "What to Do Immediately After an Accident"
6. `.related-section` — links to Auto, Home, Business, Contact
7. `.cta-banner`

### `ins-contact.html`
1. `.page-hero` (compact — no body paragraph, no CTA buttons) — "Let's Find You the Right Coverage"
2. `.contact-section` — form (Name, Phone, Email, Coverage Type select, Message) + info sidebar (address, hours, map)
3. `.why-strip` — 4 stats (same as homepage)
4. `.cta-banner`

### `ins-faq.html`
1. `.page-hero` — "Common Questions. Straight Answers."
2. `.faq-section` — 4 category blocks:
   - Auto Insurance (6 Q&A)
   - Home Insurance (5 Q&A)
   - Business Insurance (4 Q&A)
   - General & Billing (5 Q&A)
3. `.cta-banner`

### `blog.html`
1. `.page-hero` — "Insurance Tips, Explained in Plain English"
2. `.blog-section` — filter-bar (All, Auto, Home, Business, Tips & Savings) + 9-card `.blog-grid`
3. `.newsletter-strip`
4. `.cta-banner`

### `blog-post-template.html`
1. `.post-header` — category, title, meta (author / date / read time)
2. `.post-featured-img`
3. `.post-layout` — `.post-article` (left) + `.post-sidebar` (right — TOC + `.sidebar-cta-widget`)
4. `.share-bar`
5. `.author-card`
6. `.related-posts-grid` — 3 related post cards
7. `.cta-banner`

### `terms-of-service.html`
1. `.page-hero` (no CTAs) — "Terms of Service"
2. `.legal-section` — `.legal-layout`: left `.legal-toc` / right `.legal-doc` with 8 sections:
   - 1. Acceptance of Terms
   - 2. Use of This Website
   - 3. No Insurance Advice Disclaimer
   - 4. Intellectual Property
   - 5. Privacy & Data Collection
   - 6. Third-Party Links
   - 7. Limitation of Liability
   - 8. Contact Us
3. `.legal-contact-box` at bottom of `.legal-doc`

---

## SECTION 8 — CONTENT PLACEHOLDER REFERENCE

| Placeholder | Description |
|-------------|-------------|
| `[AGENCY_NAME]` | Full agency name — title, nav, footer, copyright |
| `[AGENCY_TAGLINE]` | Short tagline below name in logo |
| `[PHONE]` | Display phone: `(555) 123-4567` |
| `[PHONE_RAW]` | Digits only for `tel:` hrefs: `5551234567` |
| `[EMAIL]` | Contact email address |
| `[ADDRESS]` | Full street address |
| `[FACEBOOK_URL]` | Full `https://` Facebook URL |
| `[INSTAGRAM_URL]` | Full `https://` Instagram URL |
| `[LINKEDIN_URL]` | Full `https://` LinkedIn URL |

**For blog post template only:**

| Placeholder | Description |
|-------------|-------------|
| `[POST_TITLE]` | Article headline |
| `[POST_DATE]` | `Month DD, YYYY` |
| `[POST_AUTHOR]` | Author name |
| `[POST_READ_TIME]` | e.g. `5 min read` |
| `[POST_CATEGORY]` | e.g. `Auto Insurance` |

---

## SECTION 9 — COPYWRITING GUIDE

### Voice & Tone
- **Trustworthy:** "We've been protecting families like yours for over 40 years."
- **Local:** Acknowledge the community. Use region-specific language where possible.
- **Clear:** Short sentences. Plain language. No jargon without explanation.
- **Empathetic:** Insurance is confusing. Acknowledge it, then simplify it.
- **Direct:** Tell people exactly what to do next. "Call us." "Get a quote." "Start here."

### Never Write
- Platitudes: "We're passionate about excellence" / "We go above and beyond"
- Fear-only: "What if you lost everything?" without resolution
- Corporate-speak: "Leverage synergistic coverage solutions"
- Vague CTAs: "Learn More" → instead: "See Auto Coverage Options"
- Hollow promises: "The best rates" → instead: "We compare 15+ carriers to find your lowest rate"

### Headline Formulas

**Page hero H1 (interior pages):**
- `[Coverage Type] Coverage\nYou Can Actually Count On`
- `Protect What Matters Most\nWith [Coverage] Insurance`
- `[Strong Benefit].\n[Reassuring Second Line.]`

**CTA copy:**
- Primary: `Get Your Free Quote` / `Get a Free Quote in Minutes`
- Secondary: `Call [PHONE]` / `Talk to an Agent Today`

### Card Copy Pattern (detail-card)
```
Title:  3–5 words — the coverage name
Body:   2 sentences max.
        Sentence 1: What it covers (specific, not vague).
        Sentence 2: One reassuring detail or example.
```

---

## SECTION 10 — QUALITY CHECKLIST

**Structure**
- [ ] `<link rel="stylesheet" href="styles.css" />` present in `<head>`
- [ ] Google Fonts `<link>` for Plus Jakarta Sans + Nunito in `<head>`
- [ ] Correct `<title>` ending in `— [AGENCY_NAME]`
- [ ] DELIVERY CHECKLIST comment block in `<head>`
- [ ] `</main>` closes before footer
- [ ] `</body>` and `</html>` present

**Navigation**
- [ ] `.active` class on correct desktop nav link
- [ ] `.active` class on correct mobile nav link
- [ ] All nav `href` values point to correct filenames

**Content**
- [ ] All 9 content placeholders appear at least once
- [ ] No Lorem Ipsum
- [ ] No hardcoded phone numbers, emails, or addresses

**JavaScript**
- [ ] Single `<script>` block at bottom of `<body>`
- [ ] Scroll reveal, header scroll, floating CTA, mobile menu listeners present
- [ ] Accordion JS added if page has `.accordion` elements

**Sections**
- [ ] Floating CTA `<div>` present before topbar
- [ ] Page sections follow blueprint order from Section 7
- [ ] CTA Banner present before footer (orange background)
- [ ] Footer complete with all 4 columns

**CSS / Styling**
- [ ] Zero inline `<style>` blocks
- [ ] No hardcoded hex colors in HTML attributes
- [ ] All class names match Section 5 reference — no invented classes

---

*This is the master playbook template. When copying to a new template folder, update Section 1 (STYLE CONFIG) and `styles.css` only. Sections 2–10 remain identical across all templates.*
