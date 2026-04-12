# Website Enhancements Design

**Date:** 2026-04-04
**Status:** Approved

## Goals

1. **Functional forms** — Replace broken console-log forms with CRM-embedded forms that actually capture leads
2. **Email capture / lead magnets** — Add lead magnet form for guide downloads to grow email list
3. **SEO infrastructure** — Add blog system and SEO foundations to drive organic traffic

## Section 1: CRM Forms Integration

### Contact/Inquiry Form
- **Fields:** Name, Email, Phone, Insurance Type (dropdown), Message
- **Placement:** `contact.html` (replace existing dead form), footer CTAs across site
- **Integration:** Create in CRM Form Builder → embed via iframe
- **CRM Workflow:** Auto-create contact, tag as "Website Inquiry", notify via email

### Lead Magnet Form
- **Fields:** Name, Email
- **Placement:** New section on `index.html`, `guides.html`, potential popup/banner
- **Lead Magnet:** Free guide download (e.g., "5 Lead Generation Mistakes Insurance Agents Make")
- **CRM Workflow:** Auto-create contact, tag as "Lead Magnet", send PDF via email workflow

### CRM Sub-Account
- **Account:** Agent Lead Engine LLC (ID: 3YEf1u4MnIkbrLqJaqdQ)
- **Forms location:** Sites > Forms > Builder

## Section 2: Blog / Content Infrastructure

### Blog Index Page (`blog.html`)
- Card-based layout matching existing site design (purple theme, Inter font)
- Category filtering
- Search functionality (optional, JS-based)
- Pagination or "load more"

### Blog Post Template
- Consistent header, breadcrumbs, reading time
- Table of contents for longer posts
- Author info section
- Related posts at bottom
- CTA section (lead magnet form) embedded in each post
- Proper semantic HTML (article, time, etc.)

### Starter Content
- 2-3 article templates ready to duplicate and fill
- Topics: insurance lead generation, CRM automation, local SEO for agents

## Section 3: SEO Foundations

### Meta Tags (all 20 pages)
- Unique `<title>` and `<meta name="description">` per page
- Open Graph tags (og:title, og:description, og:image, og:url)
- Twitter Card tags

### Structured Data (JSON-LD)
- Organization schema (site-wide)
- LocalBusiness schema (about page)
- FAQPage schema (`faq.html`)
- BlogPosting schema (blog posts)
- BreadcrumbList schema (all pages)

### Technical SEO Files
- `sitemap.xml` — all pages including blog
- `robots.txt` — crawl directives
- Canonical URLs on every page

## Design Constraints

- Pure static HTML/CSS/JS — no build tools, no frameworks
- Must match existing purple design system (Inter font, #4a00e0 primary)
- CRM forms via iframe embed (not API)
- Blog posts are static HTML files (no CMS)

## Out of Scope

- Client portal / login area
- Live chat / chatbot
- Payment processing
- Backend server
