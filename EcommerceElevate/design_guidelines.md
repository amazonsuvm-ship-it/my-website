# E-Commerce Services Platform - Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from professional B2B service platforms like Shopify Partners, Amazon Services, and Stripe. These platforms excel at establishing credibility while maintaining clarity for business audiences.

**Core Principles**:
- Professional credibility through clean, structured layouts
- Trust-building through strategic use of social proof and case studies
- Clear service communication with visual hierarchy
- Global accessibility with multi-language considerations

## Typography

**Font Families** (Google Fonts):
- **Primary**: Inter (headings, UI elements) - Weights: 400, 500, 600, 700
- **Secondary**: Open Sans (body text, descriptions) - Weights: 400, 600

**Type Scale**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headers: text-3xl md:text-4xl, font-semibold
- Service Titles: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, font-normal
- Small Text/Meta: text-sm, font-normal

## Layout System

**Spacing Units**: Consistently use Tailwind units of **4, 6, 8, 12, 16, 20** for margins and padding (e.g., p-6, mb-12, gap-8)

**Container Strategy**:
- Full-width sections with inner `max-w-7xl mx-auto px-6 lg:px-8`
- Content sections: `max-w-6xl`
- Text-heavy content: `max-w-3xl`

**Vertical Rhythm**: Section padding `py-16 md:py-24` for consistent spacing between major page sections

## Component Library

### Navigation
- Fixed header with logo left, main nav center, language switcher + CTA button right
- Transparent on hero, solid white background with shadow on scroll
- Mobile: Hamburger menu with full-screen overlay

### Hero Section
- **Layout**: Two-column split (60/40) on desktop, stacked on mobile
- **Left**: Headline, subheadline (2-3 lines describing core value), dual CTA buttons (primary + secondary)
- **Right**: Professional hero image showing team collaboration or platform dashboard mockup
- **Height**: min-h-[600px] md:min-h-[700px] - allows natural content flow
- **Trust Indicator**: Below CTAs, add "Trusted by 500+ sellers across 15 countries" with small platform logos

### Services Grid
- **Desktop**: 3-column grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`)
- **Mobile**: Single column stack
- **Card Structure**: Icon (top), service title, 2-3 line description, "Learn More" link
- **Services**: Amazon/Flipkart Management, Facebook/Meta Advertising, Account Health & Compliance, Cataloging Services, Enhanced Brand Content (EBC), Policy Compliance
- **Icons**: Use Heroicons for service category icons

### Platform Expertise Section
- **Layout**: Horizontal showcase of platform logos with brief descriptions
- **Platforms**: Amazon, Flipkart, Facebook, Meta (Instagram), with expertise badges
- **Grid**: 4 columns on desktop, 2 on tablet, 1 on mobile

### How It Works / Process Section
- **Layout**: Horizontal timeline with 4 steps
- **Desktop**: Single row with connecting lines between steps
- **Mobile**: Vertical stack
- **Steps**: 1) Initial Consultation, 2) Strategy Development, 3) Implementation, 4) Ongoing Optimization

### Case Studies / Success Stories
- **Layout**: 2-column grid of case study cards
- **Card Content**: Client logo, industry tag, key metric highlight (e.g., "200% sales increase"), brief description, "Read Case Study" link
- **Showcase**: 4-6 featured case studies

### Personalized Recommendations Widget
- **Placement**: Dedicated section after services
- **Interactive Form**: Business type selector (dropdown), Platform preferences (checkboxes), Monthly revenue range (radio buttons)
- **Output**: Display 3 recommended services based on selections with "Get Started" CTAs

### Multi-Language Switcher
- **Header Position**: Top-right, before primary CTA
- **Design**: Dropdown with flag icons + language names (English, Hindi, Español)
- **Implementation**: Globe icon trigger, smooth dropdown with hover states

### Contact Section
- **Layout**: 2-column (form 60% + contact info 40%)
- **Form Fields**: Name, Email, Phone, Business Name, Platform (dropdown), Service Interest (checkboxes), Message
- **Right Column**: Office hours, response time guarantee, email/phone, social links

### Footer
- **Layout**: 4-column grid on desktop, stacked on mobile
- **Columns**: Services links, Company (About, Team, Careers), Resources (Blog, FAQs, Case Studies), Contact + Newsletter signup
- **Bottom Bar**: Copyright, Privacy Policy, Terms of Service

## Images

**Hero Section**: Large, professional image (1200x800px) showing diverse team collaborating on e-commerce strategy or clean dashboard interface mockup. Image should convey expertise and approachability.

**Case Studies**: Client brand logos and before/after metric visualizations (charts/graphs showing growth)

**Service Icons**: Use Heroicons library - shopping-cart, chart-bar, shield-check, photo, document-text, clipboard-check

**Platform Logos**: Amazon, Flipkart, Facebook, Instagram/Meta official brand assets

**Team Section** (if included): Professional team photos showing diverse, friendly experts

## Accessibility & Global Considerations

- Maintain WCAG 2.1 AA standards across all language versions
- RTL (Right-to-Left) support consideration for future language expansion
- Consistent form label structure across languages
- Icon-text pairings to transcend language barriers
- Semantic HTML structure for screen readers in all languages

## Key Interactions

- **Smooth scroll** to section anchors from navigation
- **Form validation**: Real-time feedback on contact and recommendation forms
- **Language switcher**: Instant page content update without reload (if using i18n framework)
- **Service cards**: Subtle lift on hover (`hover:shadow-lg transition-shadow`)
- **CTA buttons**: Primary with solid background, secondary with outline style

This design creates a professional, trustworthy presence while maintaining clarity for international business audiences seeking e-commerce services expertise.