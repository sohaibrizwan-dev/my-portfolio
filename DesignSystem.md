# Portofolio Design System Documentation

## Color Typography

### Color System Overview
This project uses a **futuristic dark theme** with HSL color values defined as CSS custom properties. All colors are specified in HSL format.

### Primary Colors

#### Background & Foreground
```css
--background: 240 10% 4%        /* Deep dark blue-black */
--foreground: 210 40% 98%       /* Almost white, slightly blue-tinted */
```

#### Primary (Purple-Pink Gradient)
```css
--primary: 250 70% 60%          /* Vibrant purple */
--primary-foreground: 0 0% 100%  /* Pure white */
--primary-glow: 280 80% 70%     /* Bright pink-purple for glow effects */
```

**HSL Values:**
- Primary: `hsl(250, 70%, 60%)`
- Primary Glow: `hsl(280, 80%, 70%)`
- Primary Gradient: `linear-gradient(135deg, hsl(250, 70%, 60%), hsl(280, 80%, 70%))`

#### Secondary & Accent (Cyber Cyan)
```css
--secondary: 190 95% 58%        /* Bright cyan */
--secondary-foreground: 240 10% 4%  /* Deep dark blue-black */
--accent: 190 95% 58%           /* Same as secondary - bright cyan */
--accent-foreground: 240 10% 4% /* Deep dark blue-black */
```

**HSL Values:**
- Secondary/Accent: `hsl(190, 95%, 58%)`

#### Card Colors
```css
--card: 240 8% 8%               /* Slightly lighter than background */
--card-foreground: 210 40% 98%  /* Almost white */
```

#### Popover Colors
```css
--popover: 240 8% 8%            /* Same as card */
--popover-foreground: 210 40% 98% /* Almost white */
```

#### Muted Colors
```css
--muted: 240 8% 15%             /* Dark gray-blue */
--muted-foreground: 210 20% 65% /* Medium gray-blue for secondary text */
```

#### Semantic Colors
```css
--destructive: 0 84.2% 60.2%    /* Red for errors/delete actions */
--destructive-foreground: 0 0% 100% /* White */
```

#### UI Element Colors
```css
--border: 240 8% 15%            /* Dark gray-blue for borders */
--input: 240 8% 15%             /* Same as border */
--ring: 250 70% 60%             /* Purple for focus rings */
```

### Color Usage Guidelines

#### Primary Color Usage
- **Buttons:** Primary CTA buttons, important actions
- **Links:** Active links, hover states
- **Gradients:** Hero sections, emphasis areas
- **Glow Effects:** Text shadows, card highlights

#### Accent Color Usage
- **Highlights:** Secondary emphasis, complementary accents
- **Gradients:** Combined with primary for visual interest
- **Icons:** Decorative elements, status indicators

#### Background Hierarchy
1. **Background** (`240 10% 4%`) - Main page background
2. **Card** (`240 8% 8%`) - Elevated surfaces, cards
3. **Muted** (`240 8% 15%`) - Subtle backgrounds, borders

#### Text Contrast
- **Foreground** (`210 40% 98%`) - Primary text on dark backgrounds
- **Muted Foreground** (`210 20% 65%`) - Secondary text, labels
- **Primary Foreground** (`0 0% 100%`) - Text on primary colored backgrounds

### Gradient Definitions

```css
/* Primary Gradient */
--gradient-primary: linear-gradient(135deg, hsl(250, 70%, 60%), hsl(280, 80%, 70%));

/* Glow Gradient */
--gradient-glow: radial-gradient(circle at 50% 0%, hsl(250, 70%, 60% / 0.3), transparent 70%);

/* Card Gradient */
--gradient-card: linear-gradient(135deg, hsl(240, 8%, 10%), hsl(240, 8%, 8%));
```

### Shadow & Effect Colors

```css
/* Glow Shadow */
--shadow-glow: 0 0 40px hsl(250, 70%, 60% / 0.4);

/* Card Shadow */
--shadow-card: 0 4px 20px hsl(240, 10%, 4% / 0.6);
```

### Tailwind Color Classes

The following Tailwind classes are available:

- `bg-background` / `text-background`
- `bg-foreground` / `text-foreground`
- `bg-primary` / `text-primary` / `border-primary`
- `bg-secondary` / `text-secondary`
- `bg-accent` / `text-accent`
- `bg-muted` / `text-muted-foreground`
- `bg-card` / `text-card-foreground`
- `bg-destructive` / `text-destructive`
- `border-border`

---

## Font Typography

### Font Family
The project uses the system font stack via Tailwind CSS defaults:
- **Sans-serif:** System UI fonts (Inter, -apple-system, BlinkMacSystemFont, Segoe UI, etc.)

### Font Weights

| Class | Weight | Usage |
|-------|--------|-------|
| `font-light` | 300 | Subtle text, secondary headings |
| `font-normal` | 400 | Body text (default) |
| `font-medium` | 500 | Emphasis, labels, buttons |
| `font-semibold` | 600 | Section labels, subheadings |
| `font-bold` | 700 | Headings, titles, emphasis |

### Font Sizes (Responsive)

#### Display & Hero Text
```css
/* Hero Title */
text-5xl    /* 3rem / 48px - Mobile */
md:text-7xl /* 4.5rem / 72px - Tablet */
lg:text-8xl /* 6rem / 96px - Desktop */
font-bold
```

#### Page Headings
```css
/* Section Titles */
text-4xl    /* 2.25rem / 36px - Mobile */
md:text-5xl /* 3rem / 48px - Desktop */
font-bold
```

#### Subheadings
```css
/* Card Titles, Section Subheadings */
text-3xl    /* 1.875rem / 30px */
font-bold
```

#### Large Body Text
```css
/* Hero Subtitle, Large Descriptions */
text-xl     /* 1.25rem / 20px - Mobile */
md:text-3xl /* 1.875rem / 30px - Desktop */
font-normal / font-medium
```

#### Standard Body Text
```css
/* Paragraphs, Descriptions */
text-base   /* 1rem / 16px - Default */
font-normal
```

#### Small Text
```css
/* Labels, Captions, Meta Information */
text-sm     /* 0.875rem / 14px */
font-medium / font-semibold
```

#### Extra Small Text
```css
/* Badges, Tags, Tiny Labels */
text-xs     /* 0.75rem / 12px */
font-medium
```

### Typography Scale

| Element | Mobile | Desktop | Weight | Use Case |
|---------|--------|---------|--------|----------|
| Hero Title | `text-5xl` | `lg:text-8xl` | `bold` | Main hero heading |
| Section Title | `text-4xl` | `md:text-5xl` | `bold` | Page section headings |
| Subsection | `text-3xl` | `text-3xl` | `bold` | Card titles, subsections |
| Large Body | `text-xl` | `md:text-3xl` | `normal` | Hero subtitles |
| Body | `text-base` | `text-base` | `normal` | Paragraphs, descriptions |
| Small | `text-sm` | `text-sm` | `medium/semibold` | Labels, captions |
| Extra Small | `text-xs` | `text-xs` | `medium` | Badges, tags |

### Line Heights

Tailwind's default line heights (automatically applied):
- `text-5xl` → `leading-tight` (1.25)
- `text-4xl` → `leading-tight` (1.25)
- `text-3xl` → `leading-snug` (1.375)
- `text-xl` → `leading-normal` (1.5)
- `text-base` → `leading-normal` (1.5)
- `text-sm` → `leading-normal` (1.5)
- `text-xs` → `leading-normal` (1.5)

**Custom line heights used:**
- `leading-relaxed` - For larger body text
- `leading-tight` - For display headings

### Letter Spacing

```css
tracking-wide    /* 0.025em - Section labels */
tracking-wider   /* 0.05em - Uppercase labels */
tracking-normal  /* 0em - Default body text */
tracking-tight   /* -0.025em - Compact headings */
```

### Text Transformations

```css
uppercase    /* Section labels, badges */
lowercase    /* Rare usage */
capitalize   /* Rare usage */
normal-case  /* Default */
```

### Text Utilities

#### Gradient Text
```css
.text-gradient
/* Applies: bg-gradient-to-r from-[hsl(250,70%,60%)] to-[hsl(280,80%,70%)] bg-clip-text text-transparent */
```

**Usage:**
```html
<span className="text-gradient">Your Text</span>
```

#### Glow Text Effect
```css
.glow
/* Applies: text-shadow: 0 0 20px hsl(250, 70%, 60% / 0.5) */
```

**Usage:**
```html
<h1 className="glow">Glowing Text</h1>
```

### Typography Patterns Used in Project

#### Section Headers
```html
<span className="text-sm font-semibold text-primary uppercase tracking-wider">
  Section Label
</span>
<h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
  Section Title
</h2>
```

#### Card Headings
```html
<h3 className="text-xl font-bold mb-2">
  Card Title
</h3>
```

#### Body Text
```html
<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
  Description text
</p>
```

#### Form Labels
```html
<label className="text-sm font-medium">
  Field Label
</label>
```

#### Buttons
```html
<button className="text-sm font-medium">
  Button Text
</button>
<button className="text-sm font-semibold">
  Primary Button
</button>
```

### Font Family Configuration

To add custom fonts, modify `tailwind.config.ts`:

```typescript
extend: {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },
}
```

### Accessibility Guidelines

- **Minimum font size:** 14px (`text-sm`) for body text
- **Contrast ratio:** 
  - Foreground on background: 12.6:1 ✅ (WCAG AAA)
  - Muted foreground on background: 4.5:1 ✅ (WCAG AA)
- **Line length:** Maximum 65-75 characters for optimal readability
- **Line height:** Minimum 1.5 for body text

---

## Animation & Transitions

### Transition Durations
```css
--transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### Keyframe Animations
- `fade-in` - Opacity and translateY animation
- `slide-up` - Slide up with fade
- `scale-in` - Scale in with fade
- `glow-pulse` - Pulsing glow effect
- `float` - Floating animation for particles

### Framer Motion Integration

This project uses **Framer Motion** (`framer-motion@12.23.24`) for advanced animations. Common patterns:

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

---

## Design Tokens Summary

### Border Radius
```css
--radius: 0.75rem
```
- `rounded-sm` - `calc(var(--radius) - 4px)`
- `rounded-md` - `calc(var(--radius) - 2px)`
- `rounded-lg` - `var(--radius)`

### Spacing Scale
Uses Tailwind's default spacing scale (4px base unit)

### Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1400px

---

*Last Updated: Based on current project configuration*
*Design System Version: 1.0*
