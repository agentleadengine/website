# Dark Mode + Acquisition.com Redesign - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the Agent Lead Engine site from friendly purple SaaS to dark authority brand with pain/money-math copy, killing icons in favor of bold typography.

**Architecture:** Static HTML/CSS site. All styling in `new-styles.css`. All pages share the same header/footer. CSS variable overhaul cascades to all 17 pages automatically. Copy changes are per-page HTML edits.

**Tech Stack:** HTML, CSS (no build system), vanilla JS, preview server on localhost:3000

---

### Task 1: CSS Variables & Base Dark Theme

**Goal:** Flip the entire color system from light to dark via CSS variables. This single change transforms every page at once.

**Files:**
- Modify: `new-styles.css` (lines 12-34, CSS variables + body styles)

**Step 1: Replace CSS variables**

Replace the `:root` block with the new dark color system:

```css
:root {
    /* Brand Accent — used sparingly */
    --primary-purple: #8b5cf6;
    --secondary-purple: #7c3aed;
    --light-purple: #a78bfa;
    --dark-purple: #4c1d95;
    --purple-hover: #9b7dfa;

    /* Dark Backgrounds */
    --bg-darkest: #050505;
    --bg-dark: #0a0a0a;
    --bg-dark-alt: #111111;
    --bg-card: #1a1a1a;
    --bg-card-hover: #222222;
    --border-subtle: #222222;
    --border-hover: #333333;

    /* Legacy mappings — keep so existing classes don't break */
    --white: #f5f5f5;
    --light-bg: #111111;
    --gray-50: #1a1a1a;
    --gray-100: #222222;
    --gray-200: #333333;
    --gray-300: #444444;
    --gray-400: #a3a3a3;
    --gray-500: #b3b3b3;
    --gray-600: #cccccc;
    --gray-700: #d4d4d4;
    --gray-800: #e5e5e5;
    --gray-900: #f5f5f5;
    --black: #000000;
}
```

**Step 2: Update body base styles**

```css
body {
    background-color: var(--bg-dark);
    color: var(--gray-400);
    /* rest stays the same */
}
```

**Step 3: Verify** — Preview index.html. Everything should be dark. Text may need individual fixes (handled in later tasks).

---

### Task 2: Header & Navigation Dark Theme

**Goal:** Dark sticky header with white text. Dropdown menus dark.

**Files:**
- Modify: `new-styles.css` (header, navbar, nav-menu, dropdown styles)

**Step 1: Header background**
```css
.header {
    background-color: var(--bg-dark);
    border-bottom: 1px solid var(--border-subtle);
    /* remove old box-shadow */
}
```

**Step 2: Nav link colors**
```css
.nav-menu a { color: var(--gray-400); }
.nav-menu a:hover, .nav-menu a.active { color: var(--white); }
.nav-menu a::after { background-color: var(--primary-purple); }
```

**Step 3: Dropdown menu dark**
```css
.dropdown-menu {
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
}
.dropdown-menu a { color: var(--gray-400); }
.dropdown-menu a:hover, .dropdown-menu a.active {
    background: var(--bg-card-hover);
    color: var(--white);
}
```

**Step 4: Mobile menu dark**
```css
.nav-menu (mobile) { background-color: var(--bg-dark); border-top-color: var(--border-subtle); }
.mobile-menu-toggle span { background-color: var(--gray-400); }
```

**Step 5: Header CTA button** — should be the primary purple accent button (already is).

**Step 6: Verify** — Check header renders dark with white text, dropdowns dark, mobile hamburger visible.

---

### Task 3: Hero Section Overhaul

**Goal:** Dark hero with massive bold copy. Kill the purple gradient.

**Files:**
- Modify: `new-styles.css` (`.hero` and related classes)

**Step 1: Hero background**
```css
.hero {
    background: var(--bg-darkest);
    /* Remove ::before radial gradient overlay */
}
```

**Step 2: Hero text colors**
```css
.hero h1 { color: var(--white); }
.hero-subtitle { color: var(--gray-400); }
.hero .badge {
    /* Left-border accent style instead of pill */
    background: transparent;
    border: none;
    border-left: 3px solid var(--primary-purple);
    border-radius: 0;
    padding-left: 12px;
    color: var(--primary-purple);
}
```

**Step 3: Hero stats**
```css
.hero-stats {
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
}
.stat-number { color: var(--primary-purple); }
.stat-label { color: var(--gray-400); }
.stat-divider { background-color: var(--border-subtle); }
```

**Step 4: Button styles**
- `.btn-primary` stays purple (accent)
- `.btn-light` becomes ghost/outline: transparent bg, white border, white text

**Step 5: H1 size bump to 80px**

**Step 6: Verify** — Dark hero, bold white headline, purple accent stats.

---

### Task 4: Section Backgrounds & Typography

**Goal:** All `.about`, `.packages`, `.guarantee`, `.process`, `.cta` sections get dark treatment.

**Files:**
- Modify: `new-styles.css`

**Step 1: Section backgrounds**
```css
.about { background-color: var(--bg-dark-alt); }
.packages { background: var(--bg-dark); }
.guarantee { background-color: var(--bg-dark-alt); border-color: var(--border-subtle); }
.process { background: linear-gradient(135deg, #6200FF 0%, #8b5cf6 100%); /* keep as the ONE purple section */ }
.cta { background: var(--bg-darkest); /* dark, not purple */ }
```

**Step 2: Section text colors**
```css
.section-header h2 { color: var(--white); }
.section-header p { color: var(--gray-400); }
```

**Step 3: Badge style (global)**
```css
.badge {
    background: transparent;
    border: none;
    border-left: 3px solid var(--primary-purple);
    border-radius: 0;
    padding: 4px 0 4px 12px;
    color: var(--primary-purple);
    font-size: 13px;
}
```

**Step 4: Verify** — Scroll through index.html. Sections alternate dark/darker. Process section is the ONE purple accent.

---

### Task 5: Card Redesign (Feature, Package, Process, Guarantee)

**Goal:** Dark cards with subtle borders. Purple left-accent on hover.

**Files:**
- Modify: `new-styles.css`

**Step 1: Feature cards**
```css
.feature-card {
    background-color: var(--bg-card);
    border: 1px solid var(--border-subtle);
    border-left: 3px solid transparent;
    /* kill the ::before gradient border */
}
.feature-card:hover {
    background-color: var(--bg-card-hover);
    border-left-color: var(--primary-purple);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}
.feature-card::before { display: none; }
.feature-card h3 { color: var(--white); }
.feature-card p { color: var(--gray-400); }
```

**Step 2: Package cards**
```css
.package-card {
    background-color: var(--bg-card);
    border: 1px solid var(--border-subtle);
}
.package-card:hover {
    border-color: var(--primary-purple);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}
.package-card.featured {
    border-color: var(--primary-purple);
}
/* Package text colors */
.package-header h3 { color: var(--white); }
.package-description { color: var(--gray-400); }
.package-list li { color: var(--gray-400); }
```

**Step 3: Guarantee cards**
```css
.guarantee-card {
    background-color: var(--bg-card);
    border: 1px solid var(--border-subtle);
}
.guarantee-card:hover {
    border-left: 3px solid var(--primary-purple);
}
.guarantee-card h3 { color: var(--white); }
```

**Step 4: Process cards** — already on purple bg, keep glass style but darken:
```css
.process-card {
    background-color: rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.1);
}
```

**Step 5: Verify** — All card types render dark with clean borders and purple hover accents.

---

### Task 6: Footer Dark Theme

**Files:**
- Modify: `new-styles.css`

**Step 1:** Footer background to `--bg-darkest`. Text colors to appropriate grays. Link hover to purple.

**Step 2: Verify** — Footer looks integrated with dark site, not a separate purple world.

---

### Task 7: Buttons & CTA Overhaul

**Files:**
- Modify: `new-styles.css`

**Step 1: Primary button** — stays purple bg, white text (the main accent)
**Step 2: Light/secondary button** — becomes ghost: `transparent` bg, `1px solid var(--gray-400)`, white text, hover fills purple
**Step 3: CTA section** — dark bg instead of purple gradient. Purple buttons pop as the only color.
**Step 4: Guarantee banner** — keep purple gradient (this counts as the "one purple section" on pages that don't have `.process`)

**Step 5: Verify** — Buttons look clean. CTA sections feel urgent without being purple soup.

---

### Task 8: Homepage Copy Rewrite (index.html)

**Goal:** Rewrite all copy on index.html using doc1.md and doc5.md content.

**Files:**
- Modify: `index.html`

**Step 1: Hero section**
- Badge: "BUILT FOR INSURANCE AGENCIES"
- H1: "Every Missed Call Is a Lost Policy."
- Subtitle: "The average agency loses 15-20 leads a month to missed calls, slow follow-up, and no system to track them. We give you the CRM, the website, and the local presence that captures every one—starting at $497/mo. It pays for itself."
- CTA buttons: "BOOK FREE CONSULTATION" + "CALL (516) 780-1385" (keep)
- Stats: "$6K-$9K" / "What DIY Costs You" | "10+" / "Automations Running 24/7" | "30 Days" / "Money Back Guarantee"

**Step 2: Three services section**
- Remove icon `<div class="feature-icon">` wrappers entirely
- Replace with bold stat/label at top of each card
- Card 1: stat "24/7" label "Automated Follow-Up" — h3: "CRM & Automation" — copy from doc1 Service 1
- Card 2: stat "11" label "Pages, Fully Custom" — h3: "Premium Website" — copy from doc1 Service 2
- Card 3: stat "3x/wk" label "Google Posts" — h3: "Local Presence" — copy from doc1 Service 3

**Step 3: Pricing section** — update subtitle to include value math: "Most agencies pay $2K-$5K/mo for generic marketing. We do CRM + website + local SEO for a fraction of that—with insurance-specific systems that actually convert."

**Step 4: Template preview section** — update heading to be more direct

**Step 5: Verify** — Read through copy on preview, ensure it flows and hits the pain/money angles.

---

### Task 9: Services Page Copy (services.html)

**Files:**
- Modify: `services.html`

**Step 1: Hero**
- H1: "One Partner. Three Systems. Zero Gaps."
- Subtitle: "Most agencies cobble together a CRM from one vendor, a website from another, and ignore local SEO entirely. That patchwork costs you leads every day. We deliver all three as one managed system—built specifically for insurance."

**Step 2: Service panels** — tighten copy, lead each with the problem it solves (from doc1)

---

### Task 10: CRM Page Copy (crm.html)

**Files:**
- Modify: `crm.html`

**Step 1: Hero**
- H1: "Your Leads Are Falling Through the Cracks Right Now."
- Subtitle: from doc1: "Every missed call, unanswered inquiry, and forgotten renewal is a lost policy. Our CRM ensures nothing falls through the cracks—with insurance-specific pipelines, automated follow-up, and 10+ workflows running while you sleep."

---

### Task 11: Packages, Process, About Copy (packages.html, process.html, about.html)

**Files:**
- Modify: `packages.html`, `process.html`, `about.html`

**Step 1: packages.html hero** — lead with value: "Everything You Need. Nothing You Don't." + value math subtitle
**Step 2: process.html hero** — lead with speed: "Live in 48 Hours. Leads in Your Pipeline by Day 3."
**Step 3: about.html hero** — lead with specialization: "The Only Partner That Does All Three for Insurance."
**Step 4: about.html** — remove icon SVGs from feature cards, replace with bold stat/labels

---

### Task 12: Remove All Remaining Icons & Clean Up

**Goal:** Any lingering icon SVGs or PNG references in feature cards get replaced with stat-based headers.

**Files:**
- Modify: `process.html`, `about.html`, any other pages with icon remnants

**Step 1:** Search all HTML files for `<div class="feature-icon">` and `<div class="process-icon">` containing SVGs
**Step 2:** Replace each with a bold stat number + label, or remove the wrapper if the card doesn't need a visual
**Step 3:** Update CSS `.feature-icon` and `.process-icon` to style the new stat numbers

```css
.feature-stat {
    font-size: 48px;
    font-weight: 900;
    color: var(--primary-purple);
    margin-bottom: 8px;
    line-height: 1;
}
.feature-stat-label {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--gray-400);
    margin-bottom: 24px;
}
```

**Step 4: Verify** — No circular icons remain. Stats/typography drive the visual hierarchy.

---

### Task 13: Responsive & Mobile Polish

**Goal:** Ensure dark theme works on mobile breakpoints.

**Files:**
- Modify: `new-styles.css` (media queries)

**Step 1:** Check mobile menu colors (dark bg, white text)
**Step 2:** Check card stacking on mobile (single column, proper dark borders)
**Step 3:** H1 size at mobile: 44px (down from 80px desktop)
**Step 4:** Verify on mobile preset (375px) and tablet (768px)

---

### Task 14: Logo Check & Final Visual Sweep

**Goal:** Ensure Logo.png and whitelogo.png work on dark backgrounds.

**Files:**
- Modify: HTML files if logo swap needed

**Step 1:** Check if Logo.png (header) is visible on dark bg. If it has a white/light background, may need to swap to whitelogo.png
**Step 2:** Check whitelogo.png in footer — should be fine on dark
**Step 3:** Final visual sweep of all 17 pages via preview
**Step 4:** Fix any remaining light-text-on-light-bg or dark-text-on-dark-bg issues

---

### Task 15: Guide Pages & Remaining Pages Polish

**Goal:** Quick pass on guide pages, faq, contact, automations, templates to ensure copy and structure works with new dark theme.

**Files:**
- Review: `guides.html`, `guide-*.html`, `faq.html`, `contact.html`, `automations.html`, `templates.html`

**Step 1:** These pages inherit CSS changes automatically. Scan for any elements that need color overrides.
**Step 2:** Quick copy tightening on automations.html hero if needed
**Step 3:** Verify template screenshots look good on dark backgrounds
**Step 4:** Fix any remaining issues
