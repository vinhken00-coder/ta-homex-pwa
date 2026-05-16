---
name: Elevated Hospitality Design System
colors:
  surface: '#faf9fd'
  surface-dim: '#dad9dd'
  surface-bright: '#faf9fd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f7'
  surface-container: '#eeedf1'
  surface-container-high: '#e9e7eb'
  surface-container-highest: '#e3e2e6'
  on-surface: '#1a1c1e'
  on-surface-variant: '#43474e'
  inverse-surface: '#2f3033'
  inverse-on-surface: '#f1f0f4'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#455f88'
  primary: '#000d22'
  on-primary: '#ffffff'
  primary-container: '#002349'
  on-primary-container: '#718bb7'
  inverse-primary: '#adc8f6'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#1e0700'
  on-tertiary: '#ffffff'
  tertiary-container: '#401701'
  on-tertiary-container: '#bc7b5a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#adc8f6'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#2c476f'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#ffdbcb'
  tertiary-fixed-dim: '#ffb692'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#6c391e'
  background: '#faf9fd'
  on-background: '#1a1c1e'
  surface-variant: '#e3e2e6'
  deep-navy: '#002349'
  antique-gold: '#C5A059'
  surface-dark: '#0A111F'
  success-green: '#27AE60'
  warning-amber: '#F2994A'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  margin-mobile: 16px
  margin-desktop: 32px
  gutter: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style

This design system is built for a premium, high-tech residential experience. It targets a sophisticated demographic that values efficiency, security, and luxury. The brand personality is **composed, intelligent, and prestigious**.

The aesthetic follows a **Corporate / Modern** style with **Minimalist** leanings, emphasizing high-quality imagery and structured data. It utilizes a dual-surface approach: a light, airy "Guest Mode" for discovery and booking, and a deep, immersive "Smart Mode" for in-apartment controls. This contrast creates a psychological shift between the public-facing service and the private, secure residential experience. 

Visual confidence is achieved through:
- **Generous white space** to prevent cognitive overload in complex task flows.
- **Micro-interactions** that feel intentional and snappy, reinforcing the "smart" nature of the product.
- **Card-based architecture** to organize disparate data points (IOT controls, booking dates, amenities) into a unified, digestible interface.

## Colors

The palette is anchored by **Deep Navy**, conveying stability and institutional trust, paired with **Antique Gold** for high-value accents and calls to action. 

### Color Strategy
- **Primary (Deep Navy):** Used for headers, primary typography, and the foundational background of the Smart Home interface.
- **Secondary (Gold):** Reserved for "Golden Path" actions—Booking, Confirming, and unlocking smart features. It should be used sparingly to maintain its premium impact.
- **Neutral Palette:** Utilizes a range of cool grays. Backgrounds for general screens use high-luminance whites, while the Smart Home dashboard transitions to `surface-dark` to reduce glare and emphasize IOT status icons.
- **Semantic Colors:** Green and Amber are used strictly for system status (e.g., "Locked/Unlocked," "Device Online," "Payment Confirmed").

## Typography

The design system utilizes **Manrope** for its balance of geometric precision and humanist warmth. It feels modern and "tech-forward" without the clinical coldness of a standard grotesque.

### Hierarchy Rules
- **Display & Headlines:** Use tighter letter-spacing for large titles to create a high-fashion, editorial look.
- **Labels:** Small labels (e.g., status tags, overlines) should use the `label-sm` style with increased tracking and uppercase casing for better legibility at small sizes.
- **Body Text:** Always prioritize a line-height of at least 1.5x for readability, especially in "About this place" or "Amenities" sections.

## Layout & Spacing

This design system is built on an **8px base unit** to ensure mathematical consistency across all platforms. As a PWA-first system, it prioritizes a 4-column fluid mobile grid that expands to a 12-column fixed grid on desktop (max-width 1280px).

### Layout Philosophy
- **Margins:** 16px horizontal margins on mobile devices to maximize content space while maintaining a "breathing room" feel.
- **Sectioning:** Vertical spacing between cards or sections should be `stack-lg` (24px) to emphasize the separation of distinct functional areas (e.g., "Top Picks" vs "Best Amenities").
- **Smart Control Grid:** The Smart Home dashboard uses a strict 2-column tile layout on mobile to provide large, accessible tap targets for hardware controls.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and subtle **Ambient Shadows**. This design system avoids aggressive shadows in favor of a clean, architectural look.

- **Guest Screens:** Cards use a 1px border (`#E5E7EB`) and a very soft, diffused shadow (0px 4px 20px rgba(0,0,0,0.04)) to lift them off the white background.
- **Smart Mode:** Elevation is communicated via "Inner Glow" and tonal shifts. Inactive device tiles are slightly darker than the background; active tiles use a subtle inner border of `antique-gold` or a slight luminance increase.
- **Overlays:** Modals and bottom sheets use a high-blur backdrop filter (10px) to maintain context while focusing the user's attention on the task at hand.

## Shapes

The shape language is **Rounded (0.5rem base)**, striking a balance between the friendliness of consumer apps and the structure of professional real estate tools.

- **Primary Containers:** Standard cards and input fields use an 8px (`0.5rem`) corner radius.
- **Prominent Actions:** Primary buttons and large property image containers should use the `rounded-lg` (16px) or `rounded-xl` (24px) property to feel more inviting and premium.
- **Status Pills:** Small tags (e.g., "Active," "4.9 Rating") use a fully pill-shaped radius to distinguish them from functional UI buttons.

## Components

### Buttons
- **Primary:** Antique Gold background with Navy or White text. High-contrast, bold, and uses `rounded-lg`.
- **Secondary/Outline:** Navy border with no fill for navigation or secondary actions.
- **Control Tiles:** Square tiles for IOT controls with centered icons and labels.

### Cards
- **Property Cards:** Full-bleed image at top, 16px padding for content, Gold accent for "Rating" and "Price" to draw the eye.
- **Dashboard Widgets:** Minimalist, data-first. Use large `display-lg` typography for key metrics like "Revenue" or "Occupancy."

### Input Fields
- Use a "Floating Label" style. Borders are light gray, transitioning to Navy when active. Errors are shown in a slim semantic red text below the field.

### Navigation
- **Mobile PWA:** Persistent bottom navigation with 5 icons. Active state is indicated by a Navy icon and a tiny Gold dot beneath it.
- **Web:** Top-anchored sticky header with a centered search bar and user profile on the far right.

### Custom Components
- **Smart Switch:** A bespoke toggle component that feels physical. When on, it emits a subtle outer glow in the Smart Home interface.
- **Date Range Picker:** Custom-styled calendar using Navy for selected ranges and Gold for the "Current Date" indicator.