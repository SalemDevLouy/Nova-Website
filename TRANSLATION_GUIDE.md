# How to Add Translations to Components

## Quick Guide

### Step 1: Import useLanguage Hook

```jsx
import { useLanguage } from '../../contexts/LanguageContext';
```

### Step 2: Use in Component

```jsx
const MyComponent = () => {
  const { t, locale, direction } = useLanguage();
  
  return (
    <div>
      <h1>{t('section.title')}</h1>
      <p>{t('section.description')}</p>
    </div>
  );
};
```

### Step 3: Add Translations to JSON Files

**locales/en.json:**
```json
{
  "section": {
    "title": "My Title",
    "description": "My Description"
  }
}
```

**locales/ar.json:**
```json
{
  "section": {
    "title": "عنواني",
    "description": "وصفي"
  }
}
```

---

## Available Hooks

### `t(key)` - Get Translation
```jsx
const { t } = useLanguage();
const title = t('hero.title'); // Returns: "Build,Grow and Manage Your Brand" or "نبني ونطور ونُدير علامتك التجارية"
```

### `locale` - Current Language
```jsx
const { locale } = useLanguage();
// Returns: 'en' or 'ar'
```

### `direction` - Text Direction
```jsx
const { direction } = useLanguage();
// Returns: 'ltr' or 'rtl'
```

### `changeLanguage(locale)` - Change Language
```jsx
const { changeLanguage } = useLanguage();
changeLanguage('ar'); // Switch to Arabic
changeLanguage('en'); // Switch to English
```

---

## RTL-Aware Styling Examples

### Method 1: CSS in styled-components
```jsx
const MyDiv = styled.div`
  padding-left: 20px;
  
  html[dir="rtl"] & {
    padding-left: 0;
    padding-right: 20px;
  }
`;
```

### Method 2: Using direction prop
```jsx
const MyDiv = styled.div`
  ${({ $dir }) => $dir === 'rtl' 
    ? 'padding-right: 20px; margin-right: auto;' 
    : 'padding-left: 20px; margin-left: auto;'}
`;

// Usage
const { direction } = useLanguage();
<MyDiv $dir={direction}>Content</MyDiv>
```

### Method 3: Conditional rendering
```jsx
const { direction } = useLanguage();

return (
  <Container>
    {direction === 'rtl' ? (
      <RightAlignedContent />
    ) : (
      <LeftAlignedContent />
    )}
  </Container>
);
```

---

## Common Patterns

### Navigation Links
```jsx
const menuLinks = [
  { id: 1, to: '#hero', key: 'home' },
  { id: 2, to: '#about', key: 'about' },
  { id: 3, to: '#services', key: 'services' },
];

// In component
const { t } = useLanguage();
{menuLinks.map(link => (
  <NavLink key={link.id} href={link.to}>
    {t(`nav.${link.key}`)}
  </NavLink>
))}
```

### Dynamic Content
```jsx
const { t } = useLanguage();
const services = [
  { id: 1, key: 'webDev' },
  { id: 2, key: 'appDev' },
  { id: 3, key: 'branding' },
];

{services.map(service => (
  <ServiceCard key={service.id}>
    <h3>{t(`services.${service.key}.title`)}</h3>
    <p>{t(`services.${service.key}.description`)}</p>
  </ServiceCard>
))}
```

### Forms
```jsx
const { t } = useLanguage();

<Form>
  <Input placeholder={t('contact.name')} />
  <Input placeholder={t('contact.email')} />
  <Textarea placeholder={t('contact.message')} />
  <Button>{t('contact.send')}</Button>
</Form>
```

---

## Testing Checklist

When adding translations:
- [ ] Text displays correctly in both languages
- [ ] RTL layout works properly (no overlapping, correct alignment)
- [ ] All interactive elements work in both directions
- [ ] Forms and inputs display correctly
- [ ] Icons and images are positioned correctly
- [ ] Navigation flows naturally in both directions
- [ ] Mobile responsive works in both languages

---

## Best Practices

1. **Keep keys organized** by section/component
2. **Use descriptive keys** (e.g., `hero.mainTitle` not `hero.t1`)
3. **Avoid hardcoded text** - always use `t()`
4. **Test both languages** after every change
5. **Consider text length** - Arabic text can be 20-30% longer
6. **Use semantic HTML** with proper `dir` attributes
7. **Keep translations consistent** across the site

---

## Need Help?

Check:
- `I18N_GUIDE.md` for detailed documentation
- `contexts/LanguageContext.js` for implementation details
- `locales/*.json` files for existing translations
