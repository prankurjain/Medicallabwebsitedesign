# React to Angular Conversion Plan - Medical Lab Website

## Project Overview
Converting a React medical lab website (Vite + React Router + Tailwind + Radix UI) to Angular with Angular Material.

### Current Stack (React)
- Framework: React 18.3.1
- Routing: React Router 7.13.0
- Styling: Tailwind CSS 4.1.12 + CSS Variables
- UI Components: Radix UI (46+ primitives)
- Build: Vite 6.3.5
- Package Manager: pnpm

### Target Stack (Angular)
- Framework: Angular 18+
- Routing: Angular Router
- Styling: Tailwind CSS 4+ + Angular Material + CSS Variables
- Build: Angular CLI
- Package Manager: pnpm

---

## File Structure Mapping

### Current React Structure
```
src/
├── app/
│   ├── components/          (12 reusable components)
│   │   ├── ui/              (46 UI primitives)
│   │   └── figma/           (helpers)
│   ├── pages/               (19 page components)
│   ├── layouts/             (2 layout components)
│   ├── App.tsx
│   ├── routes.tsx
│   └── main.tsx
└── styles/
    ├── globals.css
    ├── theme.css
    ├── tailwind.css
    └── fonts.css
```

### New Angular Structure
```
src/
├── app/
│   ├── components/
│   │   ├── shared/          (reusable components)
│   │   ├── layouts/         (Root, AdminLayout)
│   │   └── ui/              (wrapper components for Material)
│   ├── pages/
│   │   ├── home/
│   │   ├── tests/
│   │   ├── packages/
│   │   ├── admin/
│   │   ├── dashboard/
│   │   ├── auth/
│   │   └── contact/
│   ├── services/            (NEW)
│   │   ├── test.service.ts
│   │   ├── package.service.ts
│   │   ├── booking.service.ts
│   │   └── auth.service.ts
│   ├── models/              (NEW)
│   │   ├── test.model.ts
│   │   ├── package.model.ts
│   │   ├── booking.model.ts
│   │   └── auth.model.ts
│   ├── guards/              (NEW)
│   │   ├── auth.guard.ts
│   │   └── admin.guard.ts
│   ├── app.routes.ts        (routing config)
│   ├── app.component.ts
│   └── app.config.ts
├── styles/
│   ├── globals.css          (kept)
│   ├── theme.css            (kept - CSS variables)
│   ├── tailwind.css         (updated for Angular)
│   └── variables.scss       (new - Angular-specific variables)
└── main.ts
```

---

## Conversion Steps

### Phase 1: Project Setup (Parallel possible)
- [ ] Remove React dependencies from package.json
- [ ] Add Angular dependencies (core, common, forms, router, material, cdk)
- [ ] Update vite.config.ts for Angular (or switch to Angular CLI)
- [ ] Update index.html for Angular app shell
- [ ] Create main.ts with Angular bootstrap
- [ ] Create app.config.ts with providers
- [ ] Create app.component.ts (root component)

### Phase 2: Core Infrastructure
- [ ] Create routing module (app.routes.ts)
- [ ] Create layout components (Root, AdminLayout)
- [ ] Setup Material theme/styles
- [ ] Preserve CSS variables and Tailwind integration
- [ ] Create models/interfaces for data types

### Phase 3: Services
- [ ] Create test.service.ts (mock data)
- [ ] Create package.service.ts (mock data)
- [ ] Create booking.service.ts (mock data)
- [ ] Create auth.service.ts (login/logout simulation)

### Phase 4: Pages Conversion (19 total)
Public pages (8):
- [ ] HomePage
- [ ] TestDetailPage
- [ ] PackageDetailPage
- [ ] LoginPage
- [ ] PatientDashboard
- [ ] BookingDetailPage
- [ ] ContactPage
- [ ] NotFoundPage

Admin pages (11):
- [ ] AdminLogin
- [ ] AdminDashboard
- [ ] AdminTests
- [ ] AdminPackages
- [ ] AdminBookings
- [ ] AddTest
- [ ] AddPackage
- [ ] AddBooking
- [ ] EditTest
- [ ] EditPackage
- [ ] EditBooking

### Phase 5: Shared Components (12 reusable)
- [ ] CategoryChips
- [ ] Footer
- [ ] HeroSection
- [ ] HomeCollectionBanner
- [ ] Navigation
- [ ] PackageCard
- [ ] SearchBar
- [ ] SectionHeader
- [ ] TestCard
- [ ] Testimonials
- [ ] WhatsAppFAB
- [ ] WhyChooseUs

### Phase 6: Route Guards
- [ ] AuthGuard (patient login protection)
- [ ] AdminGuard (admin area protection)

### Phase 7: Testing & Refinement
- [ ] Test all routes navigation
- [ ] Verify styling consistency
- [ ] Check responsive design
- [ ] Fix any CSS variable issues
- [ ] Test form submissions
- [ ] Mobile menu behavior

---

## Key Technical Decisions

### 1. Styling Approach
- **Keep Tailwind CSS**: Already configured, minimal changes needed
- **Keep CSS Variables**: var(--primary-blue) etc. will work in Angular
- **Add Angular Material**: For advanced components (dialogs, menus, etc.)
- **Inline styles to classes**: Convert all inline styles to CSS classes per system instructions

### 2. Routing Strategy
- Use Angular Router with standalone components
- Implement lazy loading for admin routes
- Preserve URL structure exactly

### 3. State Management
- Local component state (no NgRx, Akita, etc.) - matches React version
- Services for shared data (tests, packages, bookings)
- Injectable services with BehaviorSubject for reactive updates

### 4. Forms
- Angular Reactive Forms (more similar to React Hook Form philosophy)
- Leverage Material form controls

### 5. Change Detection
- OnPush strategy where performance matters
- Default strategy for simpler components

---

## Specific Component Patterns

### Converting Props to @Input
```typescript
// React
export function TestCard({ id, name, price, ...props }) { ... }

// Angular
@Component(...)
export class TestCardComponent {
  @Input() id!: string;
  @Input() name!: string;
  @Input() price!: number;
  // ...
}
```

### Converting State/Handlers to Angular
```typescript
// React
const [isOpen, setIsOpen] = useState(false);

// Angular
isOpen = false;
toggleOpen() { this.isOpen = !this.isOpen; }
```

### Converting useEffect to Angular Lifecycle
```typescript
// React
useEffect(() => {
  // load data
}, [id])

// Angular
ngOnInit() { this.loadData(); }
```

### Converting useNavigate to Router
```typescript
// React
const navigate = useNavigate();
navigate('/path');

// Angular
constructor(private router: Router) {}
this.router.navigate(['/path']);
```

---

## Styling Notes

### CSS Variables (Will be preserved)
All these will work as-is in Angular:
```css
--primary-blue: #1A6FBF
--dark-navy: #0D2B4E
--teal-accent: #00BFA5
--soft-background: #F4F8FC
--border-color: ...
```

### Inline Styles Conversion
Example from React:
```jsx
<nav style={{ backgroundColor: 'var(--primary-blue)' }}>
```

Will become Angular:
```html
<nav [ngStyle]="{ backgroundColor: 'var(--primary-blue)' }">
```

Or better (using CSS class):
```html
<nav class="nav-primary">
```

With CSS:
```css
.nav-primary {
  background-color: var(--primary-blue);
}
```

---

## Estimated Work Items

| Category | Count | Complexity |
|----------|-------|-----------|
| Setup & Config | 5 | Low-Med |
| Routes & Guards | 2 | Medium |
| Layout Components | 2 | Medium |
| Service Classes | 4 | Low |
| Page Components | 19 | Medium |
| Shared Components | 12 | Low-Med |
| **Total** | **44** | Varies |

---

## Testing Strategy

1. **Route Testing**: Verify all 19+ routes navigate correctly
2. **Component Rendering**: Confirm all components display with correct styling
3. **Navigation**: Test mobile menu, scrolling, navigation links
4. **Forms**: Test login, add/edit pages with mock submission
5. **Responsive**: Check breakpoints at 320px, 768px, 1024px, 1280px
6. **Styling**: Verify CSS variables are applied correctly, no broken colors

---

## Known Limitations (Same as React version)

- No real API integration (mock data only)
- No persistent authentication (no token/session storage)
- No database connectivity
- No real form submission
- All data is hardcoded arrays/objects

These should be addressed in a Phase 8 if moving to production.

---

## Success Criteria

✅ All 19 pages render and navigate correctly
✅ Design and styling are identical to React version
✅ All routes work (public and admin)
✅ Mobile responsiveness preserved
✅ Forms functional (UI-only, no backend)
✅ No console errors
✅ Build succeeds with no warnings
