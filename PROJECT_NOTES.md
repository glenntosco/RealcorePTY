# RealCore PTY Website - Project Notes

## Company Information

| Field | Value |
|-------|-------|
| **Legal Name** | REALCORE GROUP, S.E.P. |
| **Trade Name** | RealCore PTY |
| **RUC (Tax ID)** | 155763834-2-2025 |
| **Phone** | +507 6276-0140 |
| **WhatsApp** | 50762760140 |
| **Email** | luis@realcorepty.com |
| **Location** | Panama City, Panama |
| **Founded** | 2025 |
| **Business Type** | Authorized P4 Software Reseller |

---

## Products Offered

| Product | Type | Description |
|---------|------|-------------|
| **P4 Warehouse** | WMS | Warehouse Management System - inventory, picking, packing, dispatch |
| **P4 Books** | Accounting | Accounting & electronic invoicing (DGI certified) |
| **P4 Customs** | Customs | Customs management & foreign trade |

Cloud versions available:
- p4warehouse.cloud
- p4books.cloud

---

## Website Structure

### Pages (13 total)
```
index.html          - Homepage
about.html          - About/Nosotros (includes Team & Certifications)
solutions.html      - Products overview
industries.html     - Industries served
contact.html        - Contact information
p4warehouse.html    - P4 Warehouse product page
p4books.html        - P4 Books product page
p4customs.html      - P4 Customs product page
privacy.html        - Privacy Policy (Law 81/2019)
terms.html          - Terms of Use
cookies.html        - Cookie Policy
legal.html          - Legal Notice (Aviso Legal)
404.html            - Error page
```

### Assets
```
css/styles.css      - Main stylesheet
js/main.js          - Language toggle, mobile menu, interactions
Logos/              - Brand logos (Original, Blue_Dark, Black, White)
images/             - Product icons, partner logos
```

### Configuration
```
sitemap.xml                 - All 12 main pages
robots.txt                  - With sitemap reference
staticwebapp.config.json    - Azure SWA routing & security headers
```

---

## Bilingual Support

- **Default language:** Spanish (es)
- **Secondary language:** English (en)
- **Implementation:** `data-lang` attributes with JS toggle
- **Storage:** localStorage key `realcore-language`

Example:
```html
<span data-lang="es">Soluciones</span>
<span data-lang="en" class="hidden">Solutions</span>
```

---

## Brand Guidelines

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| Primary Blue | `#007BFF` | CTAs, links |
| Dark Navy | `#1E3A5F` | Headers, footer |
| Gray | `#A5A6A5` | Secondary text |
| Orange Accent | `#FF7B00` | Highlights |
| Light Background | `#F5F5F5` | Sections |

### Typography
- Font: Inter (Google Fonts)
- Fallback: system sans-serif

---

## SEO Implementation (2026 Optimized)

### Schema Markup
- **Organization** - with legalName, taxID, knowsAbout
- **ProfessionalService** - with serviceType, OfferCatalog
- **WebSite** - with SearchAction
- **SoftwareApplication** - on each product page with featureList
- **FAQPage** - on homepage and all product pages
- **BreadcrumbList** - on all inner pages
- **Speakable** - for voice search optimization

### Meta Tags (all pages)
- Unique title tags
- Meta descriptions (<160 chars)
- Canonical URLs
- OG tags (og:title, og:description, og:image)
- Language alternates

---

## Hosting & Deployment

| Service | Details |
|---------|---------|
| **Platform** | Azure Static Web Apps |
| **URL** | https://realcorepty.com/ |
| **Repository** | github.com/glenntosco/RealcorePTY |
| **Branch** | main |
| **Auto-deploy** | Yes (GitHub Actions) |

### Clean URLs
Configured in `staticwebapp.config.json`:
- `/about` → `/about.html`
- `/solutions` → `/solutions.html`
- Spanish redirects: `/nosotros` → `/about`

---

## Legal Compliance

### Panama Law 81 of 2019 (Data Protection)
- ARCO rights implemented (Access, Rectification, Cancellation, Opposition)
- Privacy policy with data controller info
- Cookie consent banner with accept/decline

### Pages Required
- Privacy Policy (Ley 81 de 2019)
- Terms of Use
- Cookie Policy
- Legal Notice (Aviso Legal with RUC)

---

## Important Notes

1. **Phone number changed** from `+507 6618-4791` to `+507 6276-0140` (January 2026)

2. **Copyright year:** 2025 (company founding year)

3. **P4 Software** is the product vendor; RealCore PTY is the **authorized reseller** (not distributor)

4. **No KYC/AML requirements** for B2B software reseller (only applies to fintech/crypto)

5. **Footer legal links** must appear on ALL pages: Privacy | Terms

---

## Future Considerations

- [ ] Add Google Analytics measurement ID (currently placeholder: `GA_MEASUREMENT_ID`)
- [ ] Add social media links to Organization schema `sameAs` array
- [ ] Consider adding customer testimonials with Review schema
- [ ] Add actual team photos when available (currently using SVG placeholders)
- [ ] Register with Google Search Console and submit sitemap

---

*Last updated: January 2026*
