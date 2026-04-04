# Website Enhancements Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add functional GHL forms, email capture/lead magnets, a blog system, and SEO foundations to the Agent Lead Engine marketing website.

**Architecture:** Pure static HTML/CSS/JS site — no frameworks, no build tools. GHL forms are embedded via iframe. Blog posts are individual HTML files using a shared template structure. SEO is added via meta tags, JSON-LD scripts, and static XML/txt files.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, GoHighLevel (forms via iframe embed), Google Fonts (Inter)

---

## Phase 1: GHL Forms Integration

### Task 1: Create Contact/Inquiry Form in GHL

**Context:** The contact page currently has no working form — the existing JS handler just logs to console. We need a real form in GHL that creates contacts and triggers workflows.

**Step 1: Navigate to GHL Form Builder**
- URL: `https://app.gohighlevel.com/v2/location/3YEf1u4MnIkbrLqJaqdQ/form-builder/main`
- Click "Create New" button

**Step 2: Build the form with these fields**
- Full Name (text, required)
- Email (email, required)
- Phone (phone, required)
- Insurance Type (dropdown: Auto, Home, Life, Business, Health, Medicare, Other)
- Message (textarea, optional)
- Submit button text: "Send Message"

**Step 3: Style the form**
- Match the purple theme (#4a00e0 primary)
- Font: Inter if available, otherwise default
- Clean, minimal layout

**Step 4: Save and copy the iframe embed code**
- Click Share/Embed
- Copy the iframe snippet
- Note the form ID for reference

**Step 5: Commit reference**
```
Save the embed code in a comment or notes file for Task 3
```

---

### Task 2: Create Lead Magnet Form in GHL

**Context:** A simpler form for email capture — visitors give name + email to get a free guide.

**Step 1: Create new form in GHL Form Builder**
- Click "Create New"

**Step 2: Build with these fields**
- Full Name (text, required)
- Email (email, required)
- Submit button text: "Get Your Free Guide"

**Step 3: Style the form**
- Same purple theme (#4a00e0)
- Compact layout (this will be embedded inline, not full-page)

**Step 4: Save and copy the iframe embed code**
- Click Share/Embed
- Copy the iframe snippet

---

### Task 3: Embed Contact Form on contact.html

**Files:**
- Modify: `contact.html:69-101` (Contact Options section)

**Step 1: Add a new contact form card to the contact-cta-wrapper**

Replace the section at lines 69-101 with a 3-column layout that adds an inquiry form card alongside the existing Calendly and Phone cards:

```html
<!-- Contact Options Section -->
<section class="contact" id="contact-options">
    <div class="container">
        <div class="section-header">
            <span class="badge">CONTACT OPTIONS</span>
            <h2>Book a Call or Talk Right Now</h2>
            <p>Whether you need a CRM, a website, help showing up on Google, or all three. Let's talk.</p>
        </div>

        <div class="contact-cta-wrapper">
            <div class="contact-cta-card">
                <h3>Free Consultation</h3>
                <p>Pick a time that works. We'll look at your setup and help you choose the right plan.</p>
                <a href="https://calendly.com/agentleadengine" target="_blank" class="btn btn-primary btn-large">
                    BOOK CONSULTATION
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>

            <div class="contact-cta-card">
                <h3>Call Us Now</h3>
                <p>Want to talk now? Call us. You'll speak with someone who only works with insurance agencies.</p>
                <a href="tel:+15167801385" class="btn btn-primary btn-large">
                    CALL (516) 780-1385
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>

        <!-- Inquiry Form Section -->
        <div class="contact-form-section" style="margin-top: 80px;">
            <div class="section-header">
                <span class="badge">SEND A MESSAGE</span>
                <h2>Have a Quick Question?</h2>
                <p>Fill out the form and we'll get back to you within 24 hours.</p>
            </div>
            <div class="ghl-form-wrapper">
                <!-- REPLACE with actual GHL iframe from Task 1 -->
                <iframe src="GHL_CONTACT_FORM_URL" style="border:none;width:100%;max-width:700px;margin:0 auto;display:block;" scrolling="no" id="ghl-contact-form"></iframe>
            </div>
        </div>
    </div>
</section>
```

**Step 2: Add CSS for the form wrapper**

Add to `new-styles.css`:

```css
/* GHL Form Embeds */
.ghl-form-wrapper {
    max-width: 700px;
    margin: 0 auto;
    min-height: 400px;
}

.ghl-form-wrapper iframe {
    width: 100%;
    min-height: 500px;
    border: none;
    border-radius: 16px;
}

.contact-form-section {
    padding-top: 40px;
}
```

**Step 3: Remove dead form handler from new-script.js**

Remove lines 96-115 (the contactForm handler that just logs to console):

```javascript
// DELETE this entire block:
// Form submission handler
const contactForm = document.getElementById('contactForm');
if (contactForm) { ... }
```

**Step 4: Verify via preview**
- Start dev server, check contact.html loads
- Confirm GHL form iframe appears
- Test form submission reaches GHL

**Step 5: Commit**
```bash
git add contact.html new-styles.css new-script.js
git commit -m "feat: replace dead contact form with GHL embedded form"
```

---

### Task 4: Add Lead Magnet Section to index.html

**Files:**
- Modify: `index.html` (add new section before CTA, after template strip ~line 300)

**Step 1: Add lead magnet section**

Insert before the CTA section (line 302):

```html
<!-- Lead Magnet Section -->
<section class="lead-magnet">
    <div class="container">
        <div class="lead-magnet-content">
            <div class="lead-magnet-text">
                <span class="badge">FREE GUIDE</span>
                <h2>5 Lead Generation Mistakes Insurance Agents Make</h2>
                <p>Most agents lose 15-20 leads a month and don't even know it. This guide shows you the 5 biggest mistakes and how to fix each one. Free. No fluff.</p>
                <ul class="lead-magnet-benefits">
                    <li>Why 78% of leads go to the first agent who responds</li>
                    <li>The #1 automation that pays for itself in week one</li>
                    <li>How to stop losing leads to missed calls overnight</li>
                </ul>
            </div>
            <div class="lead-magnet-form">
                <!-- REPLACE with actual GHL iframe from Task 2 -->
                <iframe src="GHL_LEAD_MAGNET_FORM_URL" style="border:none;width:100%;" scrolling="no" id="ghl-lead-magnet-form"></iframe>
            </div>
        </div>
    </div>
</section>
```

**Step 2: Add CSS for lead magnet section**

Add to `new-styles.css`:

```css
/* Lead Magnet Section */
.lead-magnet {
    padding: 120px 0;
    background: linear-gradient(135deg, #4a00e0 0%, #3b0a8a 100%);
    color: var(--white);
}

.lead-magnet-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.lead-magnet-text h2 {
    color: var(--white);
    font-size: 42px;
}

.lead-magnet-text p {
    color: rgba(255, 255, 255, 0.85);
    font-size: 18px;
}

.lead-magnet-benefits {
    list-style: none;
    padding: 0;
    margin-top: 24px;
}

.lead-magnet-benefits li {
    padding: 8px 0 8px 28px;
    position: relative;
    color: rgba(255, 255, 255, 0.9);
    font-size: 16px;
}

.lead-magnet-benefits li::before {
    content: "\2713";
    position: absolute;
    left: 0;
    color: #a78bfa;
    font-weight: 700;
}

.lead-magnet-form {
    background: var(--white);
    border-radius: 16px;
    padding: 40px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.lead-magnet-form iframe {
    width: 100%;
    min-height: 300px;
    border: none;
}

@media (max-width: 768px) {
    .lead-magnet-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .lead-magnet-text h2 {
        font-size: 32px;
    }
}
```

**Step 3: Verify via preview**
- Check index.html — lead magnet section appears between templates and CTA
- Form renders inside white card
- Responsive on mobile

**Step 4: Commit**
```bash
git add index.html new-styles.css
git commit -m "feat: add lead magnet section with GHL form to homepage"
```

---

### Task 5: Add Lead Magnet Section to guides.html

**Files:**
- Modify: `guides.html` (add same lead magnet section before CTA)

**Step 1: Add lead magnet section**

Insert the same `<section class="lead-magnet">` block from Task 4 before the CTA section in guides.html. CSS is already added.

**Step 2: Verify and commit**
```bash
git add guides.html
git commit -m "feat: add lead magnet section to guides page"
```

---

## Phase 2: Blog Infrastructure

### Task 6: Add Blog Link to Navigation

**Files:**
- Modify: ALL 17 HTML files — add "Blog" to the LEARN dropdown

**Step 1: In every HTML file, find the learn-dropdown menu**

Find:
```html
<ul class="dropdown-menu">
    <li><a href="faq.html">FAQ</a></li>
    <li><a href="guides.html">CRM Guides</a></li>
    <li><a href="about.html">About Us</a></li>
</ul>
```

Replace with:
```html
<ul class="dropdown-menu">
    <li><a href="faq.html">FAQ</a></li>
    <li><a href="guides.html">CRM Guides</a></li>
    <li><a href="blog.html">Blog</a></li>
    <li><a href="about.html">About Us</a></li>
</ul>
```

**Step 2: Also add Blog to footer links**

In every HTML file, find the Support footer column and add Blog:
```html
<li><a href="blog.html">Blog</a></li>
```

**Step 3: Update new-script.js learnPages array**

In `new-script.js:51`, add `'blog.html'` to the learnPages array:

```javascript
const learnPages = ['faq.html', 'guides.html', 'blog.html', 'about.html', 'guide-dashboard.html', ...];
```

**Step 4: Commit**
```bash
git add *.html new-script.js
git commit -m "feat: add blog link to navigation and footer across all pages"
```

---

### Task 7: Create blog.html Index Page

**Files:**
- Create: `blog.html`

**Step 1: Create blog.html**

Use the same header/footer structure from existing pages. The main content:

```html
<!-- Hero Section -->
<section class="hero">
    <div class="container">
        <div class="hero-content">
            <span class="badge">INSIGHTS FOR INSURANCE AGENTS</span>
            <h1>The Agent Lead Engine Blog</h1>
            <p class="hero-subtitle">Tips on lead generation, CRM automation, local SEO, and growing your insurance agency. New posts every week.</p>
        </div>
    </div>
</section>

<!-- Blog Grid -->
<section class="about">
    <div class="container">
        <div class="blog-grid">
            <!-- Blog cards go here — each links to a blog post HTML file -->
            <a href="blog/why-insurance-agents-lose-leads.html" class="blog-card">
                <div class="blog-card-content">
                    <span class="blog-category">Lead Generation</span>
                    <h3>Why Insurance Agents Lose 15-20 Leads Every Month</h3>
                    <p>Most agencies don't have a lead problem. They have a follow-up problem. Here's what's actually happening.</p>
                    <div class="blog-meta">
                        <span>5 min read</span>
                        <span>April 2026</span>
                    </div>
                </div>
            </a>
            <!-- More blog cards follow same pattern -->
        </div>
    </div>
</section>

<!-- Lead Magnet Section (same as index.html) -->
<!-- CTA Section -->
<!-- Footer -->
```

**Step 2: Add blog CSS to new-styles.css**

```css
/* Blog Styles */
.blog-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
}

.blog-card {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: 16px;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(74, 0, 224, 0.1);
}

.blog-card-content {
    padding: 32px;
}

.blog-category {
    display: inline-block;
    background: var(--light-bg);
    color: var(--primary-purple);
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 16px;
}

.blog-card h3 {
    font-size: 22px;
    margin-bottom: 12px;
    line-height: 1.3;
}

.blog-card p {
    color: var(--gray-500);
    font-size: 16px;
    margin-bottom: 16px;
}

.blog-meta {
    display: flex;
    gap: 16px;
    font-size: 14px;
    color: var(--gray-400);
}

@media (max-width: 991px) {
    .blog-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .blog-grid {
        grid-template-columns: 1fr;
    }
}
```

**Step 3: Verify and commit**
```bash
git add blog.html new-styles.css
git commit -m "feat: create blog index page with card grid"
```

---

### Task 8: Create Blog Post Template and Starter Articles

**Files:**
- Create: `blog/` directory
- Create: `blog/why-insurance-agents-lose-leads.html`
- Create: `blog/crm-automation-guide-insurance.html`
- Create: `blog/local-seo-insurance-agents.html`

**Step 1: Create blog directory**
```bash
mkdir -p blog
```

**Step 2: Create first blog post**

Each blog post follows this structure:
- Same header/footer as all pages
- Breadcrumb navigation
- Article with semantic HTML (`<article>`, `<time>`, etc.)
- Table of contents (optional, for longer posts)
- Lead magnet CTA embedded mid-article
- Related posts section at bottom
- BlogPosting JSON-LD schema

```html
<article class="blog-post">
    <div class="container" style="max-width: 800px;">
        <nav class="breadcrumb">
            <a href="index.html">Home</a> / <a href="blog.html">Blog</a> / <span>Article Title</span>
        </nav>
        <header class="blog-post-header">
            <span class="blog-category">Lead Generation</span>
            <h1>Why Insurance Agents Lose 15-20 Leads Every Month</h1>
            <div class="blog-meta">
                <time datetime="2026-04-04">April 4, 2026</time>
                <span>5 min read</span>
            </div>
        </header>
        <div class="blog-post-body">
            <!-- Article content -->
        </div>
    </div>
</article>
```

**Step 3: Add blog post CSS**

```css
/* Blog Post Styles */
.blog-post {
    padding: 40px 0 80px;
}

.breadcrumb {
    font-size: 14px;
    color: var(--gray-400);
    margin-bottom: 32px;
    padding-top: 20px;
}

.breadcrumb a {
    color: var(--primary-purple);
    text-decoration: none;
}

.blog-post-header {
    margin-bottom: 48px;
}

.blog-post-header h1 {
    font-size: 48px;
    text-transform: none;
    letter-spacing: -0.02em;
}

.blog-post-body h2 {
    font-size: 32px;
    text-transform: none;
    margin-top: 48px;
}

.blog-post-body h3 {
    font-size: 24px;
    margin-top: 32px;
}

.blog-post-body p {
    font-size: 18px;
    line-height: 1.8;
    color: var(--gray-700);
}

.blog-post-body ul, .blog-post-body ol {
    margin: 20px 0;
    padding-left: 24px;
}

.blog-post-body li {
    margin-bottom: 8px;
    line-height: 1.7;
}

@media (max-width: 768px) {
    .blog-post-header h1 {
        font-size: 32px;
    }
}
```

**Step 4: Create all 3 starter articles with real content**
- `why-insurance-agents-lose-leads.html` — Lead gen focus
- `crm-automation-guide-insurance.html` — CRM/automation focus
- `local-seo-insurance-agents.html` — SEO focus

**Step 5: Commit**
```bash
git add blog/ new-styles.css
git commit -m "feat: add blog post template and 3 starter articles"
```

---

## Phase 3: SEO Foundations

### Task 9: Create robots.txt

**Files:**
- Create: `robots.txt`

**Step 1: Create robots.txt**

```
User-agent: *
Allow: /
Disallow: /sitebackups/
Disallow: /New folder*/

Sitemap: https://www.agentleadengine.com/sitemap.xml
```

**Step 2: Commit**
```bash
git add robots.txt
git commit -m "feat: add robots.txt with sitemap reference"
```

---

### Task 10: Create sitemap.xml

**Files:**
- Create: `sitemap.xml`

**Step 1: Create sitemap.xml**

Include all 17 existing pages + blog.html + 3 blog posts. Use `https://www.agentleadengine.com/` as the base URL. Set priority: homepage 1.0, main pages 0.8, guide pages 0.6, blog posts 0.7.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>https://www.agentleadengine.com/</loc><priority>1.0</priority><changefreq>weekly</changefreq></url>
    <url><loc>https://www.agentleadengine.com/services.html</loc><priority>0.8</priority></url>
    <!-- ... all pages ... -->
    <url><loc>https://www.agentleadengine.com/blog.html</loc><priority>0.8</priority><changefreq>weekly</changefreq></url>
    <url><loc>https://www.agentleadengine.com/blog/why-insurance-agents-lose-leads.html</loc><priority>0.7</priority></url>
    <!-- ... all blog posts ... -->
</urlset>
```

**Step 2: Commit**
```bash
git add sitemap.xml
git commit -m "feat: add XML sitemap for search engine crawling"
```

---

### Task 11: Add SEO Meta Tags to All Pages

**Files:**
- Modify: ALL 17 HTML files + blog.html + 3 blog posts

**Step 1: Add to the `<head>` of every page**

Each page gets unique Open Graph and Twitter Card tags. Example for index.html:

```html
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="Agent Lead Engine - CRM, Websites & Local Presence for Insurance Agencies">
<meta property="og:description" content="Get found. Look professional. Close more leads. Managed digital presence built for insurance agencies.">
<meta property="og:url" content="https://www.agentleadengine.com/">
<meta property="og:image" content="https://www.agentleadengine.com/Logo.png">
<meta property="og:site_name" content="Agent Lead Engine">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Agent Lead Engine - CRM, Websites & Local Presence for Insurance Agencies">
<meta name="twitter:description" content="Get found. Look professional. Close more leads. Managed digital presence built for insurance agencies.">
<meta name="twitter:image" content="https://www.agentleadengine.com/Logo.png">

<!-- Canonical -->
<link rel="canonical" href="https://www.agentleadengine.com/">
```

**Step 2: Create unique title/description for each page**

Pages that already have good meta descriptions: keep them. Add OG + Twitter + canonical to all.

**Step 3: Commit**
```bash
git add *.html blog/*.html
git commit -m "feat: add Open Graph, Twitter Card, and canonical tags to all pages"
```

---

### Task 12: Add JSON-LD Structured Data

**Files:**
- Modify: `index.html` (Organization schema)
- Modify: `about.html` (LocalBusiness schema)
- Modify: `faq.html` (FAQPage schema)
- Modify: `blog/*.html` (BlogPosting schema)
- Modify: ALL pages (BreadcrumbList schema)

**Step 1: Organization schema on index.html**

Add before `</head>`:

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Agent Lead Engine",
    "url": "https://www.agentleadengine.com",
    "logo": "https://www.agentleadengine.com/Logo.png",
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-516-780-1385",
        "contactType": "sales",
        "email": "info@agentleadengine.com"
    },
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "East Meadow",
        "addressRegion": "NY"
    }
}
</script>
```

**Step 2: FAQPage schema on faq.html**

Read the FAQ content from faq.html, then build the JSON-LD with each Q&A pair:

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Question text here",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Answer text here"
            }
        }
    ]
}
</script>
```

**Step 3: BlogPosting schema on each blog post**

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Article Title",
    "datePublished": "2026-04-04",
    "author": {
        "@type": "Organization",
        "name": "Agent Lead Engine"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Agent Lead Engine",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.agentleadengine.com/Logo.png"
        }
    }
}
</script>
```

**Step 4: Commit**
```bash
git add *.html blog/*.html
git commit -m "feat: add JSON-LD structured data (Organization, FAQ, BlogPosting)"
```

---

## Execution Order

1. **Tasks 1-2** (GHL forms) — must be done in browser first to get embed codes
2. **Tasks 3-5** (embed forms on site) — depends on Tasks 1-2
3. **Tasks 6-8** (blog infrastructure) — independent, can parallel with forms
4. **Tasks 9-12** (SEO foundations) — independent, can parallel with blog

**Recommended approach:** Tasks 1-2 in browser, then dispatch Tasks 3-5 and 6-8 and 9-12 as parallel workstreams.

---

## Files Summary

| Action | File |
|--------|------|
| Create | `blog.html` |
| Create | `blog/why-insurance-agents-lose-leads.html` |
| Create | `blog/crm-automation-guide-insurance.html` |
| Create | `blog/local-seo-insurance-agents.html` |
| Create | `robots.txt` |
| Create | `sitemap.xml` |
| Modify | `contact.html` (embed GHL form) |
| Modify | `index.html` (lead magnet section + OG tags + JSON-LD) |
| Modify | `guides.html` (lead magnet section + OG tags) |
| Modify | `new-styles.css` (blog + lead magnet + form styles) |
| Modify | `new-script.js` (remove dead form handler, update nav array) |
| Modify | ALL 17 HTML files (nav links + OG/Twitter/canonical meta tags) |
