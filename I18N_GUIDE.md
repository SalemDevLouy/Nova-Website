# Multi-Language Support (Arabic & English) with RTL/LTR

## 🌍 Overview

The website now supports both Arabic and English with automatic RTL (Right-to-Left) and LTR (Left-to-Right) text direction switching.

---

## 🚀 Features

- ✅ Arabic and English language support
- ✅ Automatic RTL/LTR switching
- ✅ Language switcher in navbar
- ✅ Persistent language selection (localStorage)
- ✅ Arabic font (Tajawal) integration
- ✅ Direction-aware styling

---

## 📁 Structure

```
locales/
├── en.json          # English translations
└── ar.json          # Arabic translations

contexts/
└── LanguageContext.js   # Language context and provider

components/
└── LanguageSwitcher/
    └── index.jsx    # Language switcher component
```

---

## 🔧 Usage

### 1. Using Translations in Components

```jsx
'use client';

import { useLanguage } from '../contexts/LanguageContext';

const MyComponent = () => {
  const { t, locale, direction } = useLanguage();

  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.description')}</p>
      <p>Current locale: {locale}</p>
      <p>Text direction: {direction}</p>
    </div>
  );
};
```

### 2. Adding New Translations

**en.json:**
```json
{
  "newSection": {
    "title": "My Title",
    "description": "My Description"
  }
}
```

**ar.json:**
```json
{
  "newSection": {
    "title": "عنواني",
    "description": "وصفي"
  }
}
```

### 3. Programmatic Language Change

```jsx
const { changeLanguage } = useLanguage();

// Switch to Arabic
changeLanguage('ar');

// Switch to English
changeLanguage('en');
```

---

## 🎨 RTL/LTR Styling

### Global Styles

The `globalStyles.js` includes:
- Arabic font (Tajawal) from Google Fonts
- RTL text alignment
- Direction-aware letter spacing

### Custom RTL Styles

You can add direction-specific styles in styled-components:

```jsx
import styled from 'styled-components';

const MyDiv = styled.div`
  padding-left: 20px;
  
  /* RTL specific */
  html[dir="rtl"] & {
    padding-left: 0;
    padding-right: 20px;
  }
`;
```

Or use props:

```jsx
const MyDiv = styled.div`
  ${({ dir }) => dir === 'rtl' ? 'padding-right: 20px;' : 'padding-left: 20px;'}
`;

// Usage
const { direction } = useLanguage();
<MyDiv dir={direction}>Content</MyDiv>
```

---

## 🔄 Language Switcher

The language switcher is automatically added to the navbar. It shows:
- **EN** button for English
- **ع** button for Arabic (ع = Arabic letter for "Arabic")

Users can click to switch between languages instantly.

---

## 📝 Current Translations

Currently translated sections:
- ✅ Navigation menu
- ✅ Hero section
- ✅ About section
- ✅ Services section
- ✅ Works section
- ✅ Features section
- ✅ Testimonials section
- ✅ FAQ section
- ✅ Contact section
- ✅ Footer

---

## 🔨 To-Do for Full Translation

To complete the translation, you need to:

1. **Update each component** to use the `t()` function:
   ```jsx
   // Before
   <Heading>Build,Grow and Manage Your Brand</Heading>
   
   // After
   import { useLanguage } from '../contexts/LanguageContext';
   const { t } = useLanguage();
   <Heading>{t('hero.title')}</Heading>
   ```

2. **Add more translations** to `locales/en.json` and `locales/ar.json` as needed

3. **Test RTL layout** for each component and adjust styles if needed

---

## 🎯 Example: Updating HeroSection

```jsx
'use client';

import { useLanguage } from "../../contexts/LanguageContext";

const HeroSection = () => {
  const { t, direction } = useLanguage();
  
  return (
    <Section>
      <Container>
        <Hero>
          <Heading>{t('hero.title')}</Heading>
          <HeroDescription>{t('hero.description')}</HeroDescription>
          <Link href="#heroContact">
            <HeaderButton>{t('hero.cta')}</HeaderButton>
          </Link>
        </Hero>
      </Container>
    </Section>
  );
};
```

---

## 🌐 Browser Support

- ✅ Chrome/Edge (RTL fully supported)
- ✅ Firefox (RTL fully supported)
- ✅ Safari (RTL fully supported)
- ✅ Mobile browsers (RTL fully supported)

---

## 💡 Tips

1. **Keep translation keys organized** by section
2. **Use nested objects** for better organization
3. **Test both languages** after making changes
4. **Check RTL layout** on different screen sizes
5. **Use Arabic fonts** that support the characters you need

---

## 🔗 Resources

- [MDN: HTML dir attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir)
- [W3C: Structural markup and right-to-left text in HTML](https://www.w3.org/International/questions/qa-html-dir)
- [Google Fonts - Tajawal](https://fonts.google.com/specimen/Tajawal)

---

**Implementation Date**: December 8, 2025
