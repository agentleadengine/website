# Dark Mode + Acquisition.com-Style Site Redesign

**Date:** 2026-04-03
**Status:** Approved
**Scope:** Full visual overhaul + copy rewrite for AgentLeadEngine.com

## Summary

Overhaul the site from "friendly purple SaaS" to "dark authority brand" inspired by acquisition.com. Dark backgrounds, purple as accent only, copy leading with pain/money math from business docs, icons replaced with bold stats/typography.

## Color System

| Role | Old | New |
|------|-----|-----|
| Hero/CTA background | Purple gradient | `#0d0118` (near-black with purple tint) |
| Section backgrounds | White `#fff` / `#fafafa` | Alternating `#0a0a0a` and `#111111` |
| Cards | `#fafafa` with purple border hover | `#1a1a1a` with `#222` border, purple left-accent on hover |
| Accent color | Purple everywhere | Purple (`#8b5cf6`) for CTAs, key numbers, highlights ONLY |
| Primary text | `#171717` dark | `#f5f5f5` white |
| Secondary text | `#525252` gray | `#a3a3a3` light gray |
| Guarantee/accent section | Light purple `#f3f0ff` | One purple gradient per page max (`#6200FF` to `#8b5cf6`) |
| Footer | Dark purple gradient | `#050505` near-black |

## Copy Strategy

Lead with prospect pain and money math. Sources: doc1.md (handbook), doc5.md (sales playbook).

### Homepage Hero
- Badge: `BUILT FOR INSURANCE AGENCIES`
- H1: `Every Missed Call Is a Lost Policy.`
- Subtitle: From docs - average agency loses leads to missed calls, slow follow-up, no CRM. Systems that capture every one. $497/mo. Pays for itself.
- Stats: `$6K-$9K` what DIY costs | `10+` automations 24/7 | `30 Days` money back

### Services Hero
- H1: `One Partner. Three Systems. Zero Gaps.`
- Focus on cost of cobbling 3 vendors vs one managed partnership

### CRM Hero
- H1: `Your Leads Are Falling Through the Cracks Right Now.`
- Focus on what's happening while they lack a CRM

### Other Pages
- packages.html: Lead with value math ($497 vs $6K-$9K DIY)
- process.html: Lead with speed (48hrs to go-live)
- about.html: Lead with specialization (only company doing all 3 for insurance)

## Icons/Visual Elements

- Kill all circular icon containers (64px SVGs in circles)
- Feature sections: Replace with bold stat numbers or short punchy labels
- Process cards: Minimal 32px stroke icons, no background circles
- Let typography and contrast do the visual work

## Section Layout Pattern

Per page: dark hero → dark-alt section → dark card grid → ONE purple accent section → dark → dark CTA → dark footer. Purple gradient used once per page maximum.

## Typography Tweaks

- H1: 80px (up from 72px)
- Badges: left-border accent line style, not pill/bubble
- Feature headings: Title Case, not ALL UPPERCASE (reserve uppercase for H1/H2)
- Body text on dark: `#a3a3a3` for comfortable reading

## Card Redesign

- Background: `#1a1a1a`
- Border: `1px solid #222`
- Hover: left border slides in with purple `#8b5cf6`, subtle lift
- No gradient borders, no glassmorphism blur
- Larger text, fewer decorative elements

## Pages In Scope

Full overhaul (hero + sections + copy):
- index.html, services.html, crm.html, packages.html, process.html, about.html

CSS overhaul (affects all pages):
- new-styles.css — complete color/layout/card/typography rewrite

Auto-inherits dark theme:
- automations.html, templates.html, faq.html, contact.html
- guides.html, guide-dashboard.html, guide-pipelines.html, guide-automations.html, guide-calendar.html, guide-contacts.html, guide-forms.html

## Files Modified

- `new-styles.css` — primary overhaul target
- `index.html` — hero copy, section copy, icon removal
- `services.html` — hero copy, section copy
- `crm.html` — hero copy
- `packages.html` — hero copy, value framing
- `process.html` — hero copy, card icons
- `about.html` — hero copy, card icons
- All 17 HTML files inherit CSS changes
