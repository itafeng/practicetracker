# UI Redesign Plan - LeetCode Practice Tracker

## Design Goals
- Modern card-based layout
- Smaller, more readable fonts
- Clear visual hierarchy with different font treatments
- Professional color palette
- Compact, efficient use of space

## Typography System

### Font Family
- **Primary**: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- **Fallback**: System fonts for performance

### Font Sizes (Reduced)
```
- Page Title: 1.5rem (24px) → Bold 700
- Section Header: 1.125rem (18px) → SemiBold 600
- Card Title: 0.9375rem (15px) → Medium 500
- Body Text: 0.875rem (14px) → Regular 400
- Small Text: 0.75rem (12px) → Regular 400
- Tiny Text: 0.6875rem (11px) → Regular 400
```

## Color System

### Text Colors
```css
--text-primary: #1a1a2e      /* Dark navy - headings */
--text-secondary: #4a5568    /* Medium gray - body */
--text-muted: #718096        /* Light gray - hints */
--text-link: #4f46e5         /* Indigo - links */
```

### Semantic Colors
```css
--success: #10b981           /* Emerald green */
--warning: #f59e0b           /* Amber */
--error: #ef4444             /* Red */
--info: #3b82f6              /* Blue */
```

### UI Colors
```css
--bg-primary: #ffffff        /* White */
--bg-secondary: #f8fafc      /* Light gray */
--bg-tertiary: #f1f5f9       /* Lighter gray */
--border: #e2e8f0            /* Border gray */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05)
--shadow-md: 0 2px 4px rgba(0,0,0,0.08)
--shadow-lg: 0 4px 8px rgba(0,0,0,0.12)
```

## Component Redesigns

### Navbar
- Height: 56px (reduced from 64px)
- Font size: 1rem for title, 0.875rem for links
- Subtle shadow

### Problem Cards
- **Compact Layout**:
  - Padding: 12px (reduced from 16px)
  - Border radius: 8px
  - Font size: 14px for title
  - Smaller difficulty badges
  - Inline action buttons

- **Visual Treatment**:
  - White background
  - 1px border with subtle shadow
  - Hover: slight shadow elevation
  - Practice history collapsed by default

### Category Sections
- **Header**:
  - Background: `#f8fafc`
  - Font: 1.125rem semibold
  - Padding: 12px 16px
  - Border radius: 8px

- **Content**:
  - Nested cards for subcategories
  - Compact problem list
  - Alternating row backgrounds for readability

### Review Page
- **Priority Badges**:
  - Smaller size (0.75rem)
  - Rounded corners
  - Consistent spacing

- **Problem Layout**:
  - Grouped by priority
  - Compact cards
  - Clear separation

### Stats Page
- **Stat Cards**:
  - Reduced padding: 16px
  - Font size: 2rem for values (down from 2.5rem)
  - Label: 0.75rem uppercase

- **Charts**:
  - Smaller fonts (11px)
  - Compact legends
  - Better spacing

## Interactive Elements

### Buttons
```
- Primary: 12px padding, 0.875rem font
- Secondary: 10px padding, 0.8125rem font
- Icon buttons: 32px × 32px
```

### Form Elements
```
- Input padding: 8px 12px
- Font size: 0.875rem
- Border radius: 6px
```

### Star Rating
```
- Star size: 1.25rem (down from 1.5rem)
- Spacing: 0.125rem
- Smooth hover transitions
```

## Spacing System
```
xs: 0.25rem (4px)
sm: 0.5rem (8px)
md: 0.75rem (12px)
lg: 1rem (16px)
xl: 1.5rem (24px)
2xl: 2rem (32px)
```

## Responsive Breakpoints
```
mobile: 640px
tablet: 768px
desktop: 1024px
wide: 1280px
```

## Implementation Steps

1. ✓ Create this plan document
2. Add Google Font (Inter) to HTML
3. Update CSS variables and base styles
4. Redesign App.css with new system
5. Update individual components:
   - ProblemCard.jsx
   - TrackerPage.jsx
   - ReviewPage.jsx
   - StatsPage.jsx
6. Test responsive behavior
7. Fine-tune spacing and colors

## Expected Improvements
- 20-30% reduction in visual weight
- Better readability with clear hierarchy
- More professional, modern appearance
- Improved information density
- Better mobile experience