# PATHKIND LAB - Angular Conversion

This project has been successfully converted from React to Angular 18 with standalone components and Tailwind CSS.

## Project Structure

```
src/
├── app/
│   ├── components/          # Reusable Angular components
│   │   ├── navigation.component.ts
│   │   ├── hero-section.component.ts
│   │   ├── search-bar.component.ts
│   │   ├── category-chips.component.ts
│   │   ├── section-header.component.ts
│   │   ├── test-card.component.ts
│   │   ├── package-card.component.ts
│   │   ├── why-choose-us.component.ts
│   │   ├── home-collection-banner.component.ts
│   │   ├── testimonials.component.ts
│   │   ├── footer.component.ts
│   │   └── whatsapp-fab.component.ts
│   ├── pages/               # Page components
│   │   └── home/
│   │       └── home.component.ts
│   ├── app.component.ts     # Root component
│   └── app.routes.ts        # Route definitions
├── styles/                  # Global styles
│   ├── index.css
│   ├── theme.css
│   ├── globals.css
│   └── fonts.css
└── main.ts                  # Angular bootstrap file
```

## Key Features

✅ **Modern Angular 18** - Standalone components (no NgModules needed)
✅ **Tailwind CSS** - Utility-first CSS framework integrated
✅ **Lucide Angular** - Beautiful SVG icons
✅ **Responsive Design** - Mobile-first approach
✅ **Type-Safe** - Full TypeScript support
✅ **Same Look & Feel** - Exact design replica from React version

## Conversion Details

### Components Converted:
- Navigation with mobile menu
- Hero Section with animations
- Search Bar with filters
- Category Chips filter
- Test Cards with pricing
- Package Cards with features
- Section Headers
- Why Choose Us section
- Home Collection Banner
- Testimonials carousel
- Footer with links
- WhatsApp FAB button

### Technologies Used:
- **Angular 18** - Frontend framework
- **TypeScript 5.4** - Type-safe JavaScript
- **Tailwind CSS 4.1** - Utility CSS
- **Lucide Angular** - Icon library
- **RxJS** - Reactive programming
- **Vite** - Build tool

## Installation & Setup

### Prerequisites:
- Node.js 18+ and npm/pnpm installed

### Install Dependencies:
```bash
npm install
# or
pnpm install
```

### Development Server:
```bash
npm start
# or
pnpm dev
```

Server runs on `http://localhost:4200`

### Build for Production:
```bash
npm run build
# or
pnpm build
```

Output is in `dist/` directory.

## Key Differences from React Version

1. **Component Structure**: Each component is standalone with `standalone: true`
2. **State Management**: Uses Angular services with RxJS for reactive state
3. **Change Detection**: OnPush strategy recommended for performance
4. **Template Binding**: Angular template syntax `{{ }}` instead of JSX
5. **Event Handling**: `(click)="method()"` instead of `onClick={}`
6. **Styling**: Inline styles preserved, Tailwind classes used

## Color Palette (CSS Variables)

```css
--primary-blue: #1A6FBF
--dark-navy: #0D2B4E
--teal-accent: #00BFA5
--soft-background: #F4F8FC
--whatsapp-green: #25D366
```

## Font Families

```css
--font-display: 'Playfair Display' (headings)
--font-sans: 'Plus Jakarta Sans' (body)
--font-mono: 'DM Mono' (code/labels)
```

## Performance Tips

1. Use OnPush change detection:
```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

2. Use trackBy in *ngFor:
```html
<div *ngFor="let item of items; trackBy: trackByFn"></div>
```

3. Lazy load routes as needed

## Customization

### To modify colors:
Edit `src/styles/globals.css` CSS variables section

### To modify components:
Each component is in `src/app/components/` with:
- `template` - Angular template
- `styles` - Component styles
- Component class with properties and methods

### To add new pages:
1. Create component in `src/app/pages/`
2. Add route to `src/app/app.routes.ts`
3. Import in router configuration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Breakpoints

Using Tailwind CSS breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Migration Notes

This is a complete feature-parity conversion. All design elements, animations, and functionality from the React version have been preserved in Angular using:

- Inline styles for exact spacing/colors
- Tailwind classes for responsive layout
- Angular animations for transitions
- Template binding for dynamic content

## Next Steps

1. Install packages: `npm install`
2. Start dev server: `npm start`
3. Visit `http://localhost:4200`
4. Begin customization as needed

## Support

For Angular documentation: https://angular.io/docs
For Tailwind CSS: https://tailwindcss.com/docs
For Lucide Icons: https://lucide.dev
