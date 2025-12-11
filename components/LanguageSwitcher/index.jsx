'use client';

import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
  const { locale, changeLanguage } = useLanguage();

  return (
    <motion.div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        padding: '8px 12px',
        borderRadius: '25px',
        border: '1px solid rgba(13, 10, 25, 0.1)'
      }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        style={{
          background: locale === 'en' ? '#0D0A19' : 'transparent',
          color: locale === 'en' ? '#fff' : '#0D0A19',
          border: 'none',
          padding: '6px 16px',
          borderRadius: '20px',
          cursor: 'pointer',
          fontWeight: 600,
          fontSize: '14px',
          transition: 'all 0.3s ease',
          fontFamily: 'Plus Jakarta Sans, sans-serif'
        }}
        onMouseEnter={(e) => {
          if (locale !== 'en') e.target.style.background = 'rgba(13, 10, 25, 0.1)';
        }}
        onMouseLeave={(e) => {
          if (locale !== 'en') e.target.style.background = 'transparent';
        }}
        onClick={() => changeLanguage('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        style={{
          background: locale === 'ar' ? '#0D0A19' : 'transparent',
          color: locale === 'ar' ? '#fff' : '#0D0A19',
          border: 'none',
          padding: '6px 16px',
          borderRadius: '20px',
          cursor: 'pointer',
          fontWeight: 600,
          fontSize: '14px',
          transition: 'all 0.3s ease',
          fontFamily: 'Cairo, sans-serif'
        }}
        onMouseEnter={(e) => {
          if (locale !== 'ar') e.target.style.background = 'rgba(13, 10, 25, 0.1)';
        }}
        onMouseLeave={(e) => {
          if (locale !== 'ar') e.target.style.background = 'transparent';
        }}
        onClick={() => changeLanguage('ar')}
        aria-label="التبديل إلى العربية"
      >
        ع
      </button>
    </motion.div>
  );
};

export default LanguageSwitcher;
