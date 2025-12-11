'use client';

import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  const { t } = useLanguage();
  
  return (
    <section style={{
      width: '100vw',
      height: '100%',
      maxWidth: '100%',
      borderTop: '3px solid #0D0A19'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        width: '90%',
        maxWidth: '1600px',
        margin: '0 auto',
        paddingTop: '45px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '20px',
          fontWeight: 500,
          marginBottom: '50px',
          cursor: 'pointer'
        }}>
          &copy; {year} {t('footer.rights')}
        </h1>
        <h1 style={{
          fontSize: '20px',
          fontWeight: 500,
          marginBottom: '50px',
          cursor: 'pointer'
        }}>
          {t('footer.developed')} <strong><Link href="https://Anrafa.com/">Anrafa Agency</Link></strong>
        </h1>
        <Link href="mailto:hello@Anrafa.com">
          <h1 style={{
            fontSize: '20px',
            fontWeight: 500,
            marginBottom: '50px',
            cursor: 'pointer',
            textAlign: 'center'
          }}>
            hello@Anrafa.com
          </h1>
        </Link>
      </div>
      <style jsx>{`
        @media (max-width: 785px) {
          div {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            place-items: center;
            padding-top: 20px;
          }
          h1 {
            font-size: 11px;
            width: 90%;
            margin-bottom: 12px;
            text-align: center;
          }
        }
      `}</style>
    </section>
  )
}

export default Footer
