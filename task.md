# STARTPLATZ × MIFCOM “AI Workstations for Teams”  
## Landing-Page Design Brief  
*(v1.0 — 25 May 2025)*  

---

### 1 Goals  
| Priority | KPI | Target |
|----------|-----|--------|
| **P1** | Demo-config clicks → mifcom.de | ≥ 12 % of page sessions |
| **P2** | Qualified leads (form submissions) | ≥ 4 % of page sessions |
| **P3** | Avg. time-on-page | ≥ 90 s |

---

### 2 Audience Personas  
1. **Tech-Forward COO / IT Lead** – needs on-prem GPU power, tight budgets.  
2. **Startup Founder (Series A)** – wants fast AI prototyping, skeptical of cloud billing.  
3. **Enterprise Innovation Manager** – scouting productivity boosts for knowledge workers.

---

### 3 Information Architecture  

> **Viewport width reference**: 12-column grid, 90 px gutters desktop, 24 px mobile.  

1. **Hero (100 vh)**  
   *Lock-up, headline, sub-copy, dual CTA*  
2. **Why On-Prem AI? (≈600 px)**  
   *3 icon-led pain points → 3 benefit cards*  
3. **Workstation Tiers (≈900 px)**  
   *Three responsive cards with spec tabs + “Configure” buttons*  
4. **Feature Deep-Dive (≈700 px)**  
   *Accordion for GPU, CPU, Cooling, Warranty*  
5. **Testimonial & Metrics (≈550 px)**  
   *Quote slider + animated perf numbers*  
6. **FAQ (≈600 px)**  
   *8 expandable questions*  
7. **Lead-Gen Banner (≈450 px)**  
   *Inline form: name, email, company size, use-case*  
8. **Footer (≈400 px)**  
   *Logos, legal, social, privacy links*


---

### 4 Visual Design  

| Token | Value | Usage |
|-------|-------|-------|
| **Primary BG** | `#1A1A1A` charcoal | hero, tier section |
| **CTA / Accent** | `#A3D55F` STARTPLATZ green | buttons, badges |
| **Support** | `#0080BB` Rheinland blue | thin separators |
| **Neutral** | `#FFFFFF` / `#F5F5F5` | text & card backgrounds |
| **Highlight glow** | radial `#813DFF66` → transparent | node motif |

*Type:* **Source Sans Pro** — Semibold 600 for H1–H3; Regular 400 body.  
*Motion:* 250–300 ms ease-out slide / scale; CTA pulses once on load.  

---

### 5 Component Specs  

| Component | Desktop | Mobile |
|-----------|---------|--------|
| **Primary CTA** | 240 × 56 px pill, 8 px radius | 88 × 44 px |
| **Tier Card** | 360 × 540 px, 16 px inner-pad | 100 % width, stacked |
| **Form Field** | 320 px min width | 100 % |
| **Accordion** | 48 px header height | 56 px |

---

### 6 Copy Drafts  

**Hero headline**  
> Un-lock **AI fire-power** for your team.  

**Hero sub-line**  
> Up to **10 % off** bespoke RTX® workstations — exclusive for the STARTPLATZ community.  

**CTA labels**  
- Primary → *Configure yours*  
- Secondary → *Book a 15-min consult*  

**Pain points**  
1. Cloud GPU costs spiralling?  
2. Sensitive data stuck in vendor silos?  
3. Waiting hours for model training?  

**Benefits**  
- Save up to 70 % TCO over 24 months.  
- Keep IP on-prem & comply with EU-GDPR.  
- Iterate 10 × faster with RTX Tensor cores.

---

### 7 Functional Requirements  

| Area | Requirement |
|------|-------------|
| Analytics | Track CTA & card flips via GA4 / GTM. |
| Integrations | “Configure” buttons deep-link to pre-filtered MIFCOM configurator with utm_source=startplatz. |
| Forms | POST to HubSpot; double opt-in email. |
| Performance | LCP < 2.5 s, CLS < 0.1, 90+ Lighthouse. |
| Accessibility | WCAG 2.2 AA: contrast ratio ≥ 4.5; keyboard nav. |

---

### 8 Responsive & Breakpoints  

| Breakpoint | Grid | Notes |
|------------|------|-------|
| ≥ 1280 px | 12 cols, 90 px gutter | Tier cards side-by-side |
| 768 – 1279 px | 8 cols, 48 px gutter | Tier cards two-per-row |
| ≤ 767 px | 4 cols, 24 px gutter | All sections stacked |

---

### 9 Asset Checklist  

- [ ] STARTPLATZ logo (SVG, white & green variants)  
- [ ] MIFCOM horizontal logo (SVG)  
- [ ] 3 workstation renders (PNG, ≥ 2600 px)  
- [ ] Neural-node dot pattern (SVG, repeatable)  
- [ ] Icons (24 px line) for benefits & features  

