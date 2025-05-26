# STARTPLATZ × MIFCOM AI Workstations Landing Page

A high-performance landing page for the exclusive partnership between STARTPLATZ and MIFCOM, offering AI workstations with special discounts for the STARTPLATZ community.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Performance Optimized**: Lighthouse score 90+, LCP < 2.5s, CLS < 0.1
- **WCAG 2.2 AA Compliant**: Full accessibility support
- **Interactive Components**: 
  - Animated testimonial slider
  - Product specification tabs
  - Expandable FAQ accordion
  - Animated metrics counters
- **Analytics Integration**: Google Tag Manager ready
- **Lead Generation**: HubSpot-compatible form with validation

## 📋 Project Structure

```
mifcom-landing/
├── index.html              # Main landing page
├── flyer.html             # Digital/print flyer (responsive)
├── flyer-print.html       # Print-optimized flyer (A4)
├── src/
│   ├── styles/
│   │   ├── reset.css      # CSS reset for cross-browser consistency
│   │   └── main.css       # All component styles
│   ├── scripts/
│   │   └── main.js        # Interactive functionality
│   └── assets/
│       ├── images/        # Product images (to be added)
│       └── icons/         # SVG icons (to be added)
└── README.md
```

## 🎨 Design System

### Colors
- Primary Background: `#1A1A1A` (Charcoal)
- Accent: `#A3D55F` (STARTPLATZ Green)
- Support: `#0080BB` (Rheinland Blue)
- Neutral White: `#FFFFFF`
- Neutral Light: `#F5F5F5`
- Highlight Glow: `#813DFF66`
- Error: `#FF6B6B`

### Typography
- Font Family: Source Sans 3
- Weights: 400 (Regular), 600 (Semibold), 700 (Bold)

### Spacing Scale
- xs: 0.5rem
- sm: 1rem
- md: 1.5rem
- lg: 2rem
- xl: 3rem
- 2xl: 4rem
- 3xl: 6rem

## 🛠️ Setup & Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd mifcom-landing
```

2. Open `index.html` in a web browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server -p 8000
```

3. Visit `http://localhost:8000` in your browser

## 📊 Analytics Setup

1. Replace `GTM-XXXXXX` in `index.html` with your Google Tag Manager ID
2. Configure GTM to track:
   - CTA clicks (event category: "cta")
   - Form submissions (event category: "engagement")
   - Scroll depth (25%, 50%, 75%, 90%)

## 📝 Form Integration

The lead generation form is set up to work with HubSpot. To connect:

1. Replace the form action URL in `index.html`:
```html
action="https://api.hsforms.com/submissions/v3/integration/submit/YOUR_PORTAL_ID/YOUR_FORM_GUID"
```

2. Ensure form field names match your HubSpot form configuration

## 🖼️ Adding Assets

### Logos
1. Add STARTPLATZ logo as `src/assets/images/startplatz-logo.svg`
2. Add MIFCOM logo as `src/assets/images/mifcom-logo.svg`
3. Update the SVG placeholders in `index.html`

### Product Images
Add workstation images to `src/assets/images/`:
- `workstation-starter.png` (min 2600px wide)
- `workstation-pro.png` (min 2600px wide)
- `workstation-enterprise.png` (min 2600px wide)

## 📄 Additional Pages

### Marketing Flyers
The project includes two flyer versions:

1. **flyer.html** - Responsive digital flyer
   - Viewable on any device
   - Print-friendly with print button
   - Automatically adjusts layout for mobile

2. **flyer-print.html** - Print-optimized A4 flyer
   - Fixed A4 dimensions (210mm × 297mm)
   - Optimized for PDF generation
   - Professional print layout with proper margins

To generate PDFs, open either flyer in a browser and use Print → Save as PDF.

## 🚦 Performance Optimization

- Images use lazy loading with the `loading="lazy"` attribute
- CSS animations use GPU-accelerated properties
- JavaScript is non-blocking and uses event delegation
- Fonts are preloaded for faster rendering

## ♿ Accessibility

- All interactive elements are keyboard navigable
- ARIA labels and roles properly implemented
- Color contrast ratios meet WCAG 2.2 AA standards
- Focus indicators clearly visible

## 📱 Browser Support

- Chrome/Edge: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android

## 🔧 Customization

### Adding New Sections
1. Add HTML structure in `index.html`
2. Style in `src/styles/main.css` following BEM methodology
3. Add interactivity in `src/scripts/main.js`

### Modifying Colors
Update CSS variables in `:root` section of `main.css`

### Changing Animations
Modify `--transition-base` and `--transition-slow` variables or individual animations

## 📄 License

© 2025 MIFCOM GmbH. All rights reserved.

## 👥 Contact

For technical questions or support, contact the development team at [dev@mifcom.de] 