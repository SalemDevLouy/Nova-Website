'use client';

import Link from 'next/link';
import { useLanguage } from "../../contexts/LanguageContext";

const AboutUs = () => {
  const { t, locale } = useLanguage();

  return (
    <section 
      id="about-us" 
      style={{
        width: '100%',
        maxWidth: '100%',
        padding: '50px 0',
        backgroundColor: '#fff2f2',
        overflowX: 'hidden'
      }}
    >
      <div 
        style={{
          width: '90%',
          maxWidth: '1600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto',
          paddingTop: '2rem',
          paddingBottom: '1rem'
        }}
        className="about-container"
      >
        <div 
          style={{
            display: 'grid',
            gridGap: '40px',
            gridTemplateColumns: '1fr 1fr',
            width: '100%',
            direction: locale === 'ar' ? 'rtl' : 'ltr'
          }}
          className="about-below"
        >
          <div 
            style={{
              height: 'auto',
              paddingRight: locale === 'ar' ? '0' : '30px',
              paddingLeft: locale === 'ar' ? '30px' : '0'
            }}
            className="about-image-div"
          >
            <img 
              src="/images/about.jpeg" 
              alt={t('about.imageAlt')}
              style={{
                width: '100%',
                height: '600px',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
              className="about-image"
            />
          </div>

          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '40px',
              color: '#232323',
              position: 'relative',
              width: '100%',
              height: '100%',
              textAlign: locale === 'ar' ? 'right' : 'left',
              padding: '0 10px'
            }}
            className="about-content"
          >
            <h2 
              className="heading-main" 
              style={{ 
                color: '#5928e5', 
                textTransform: 'uppercase', 
                letterSpacing: '1px',
                fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Grifter-bold", sans-serif'
              }}
            >
              {t('about.heading')}
            </h2>
            <p 
              style={{
                fontSize: '18px',
                lineHeight: '30px',
                width: '100%',
                fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif',
                textAlign: locale === 'ar' ? 'right' : 'left',
                color: '#0D0A19',
                marginBottom: '20px'
              }}
              className="about-description"
            >
              {t('about.description')}
            </p>
            <Link href='/about'>
              <button 
                className="btn-primary" 
                style={{ 
                  fontSize: '18px', 
                  fontWeight: '500',
                  fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif',
                  background: '#5928e5',
                  color: 'white',
                  padding: '15px 35px',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#7b4bf5';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 5px 15px rgba(89, 40, 229, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#5928e5';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                {t('about.cta')}
              </button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-container {
            padding-top: 0.9rem !important;
            padding-bottom: 0.9rem !important;
          }
          .about-below {
            display: flex !important;
            flex-direction: column !important;
            grid-gap: 30px !important;
          }
          .about-image-div {
            padding-right: 0px !important;
          }
          .about-image {
            max-height: 400px !important;
          }
          .about-content {
            gap: 20px !important;
            margin-top: 1rem !important;
          }
          .about-description {
            margin-bottom: 0px !important;
          }
        }

        @media (max-width: 992px) {
          .about-container {
            padding-top: 0.9rem !important;
            padding-bottom: 0.9rem !important;
          }
          .about-below {
            display: flex !important;
            flex-direction: column !important;
          }
          .about-image-div {
            padding-right: 0px !important;
          }
          .about-image {
            max-height: 500px !important;
          }
          .about-content {
            gap: 30px !important;
            margin-top: 1rem !important;
          }
          .about-description {
            font-size: 16px !important;
            margin-bottom: 0px !important;
          }
        }

        @media (max-width: 480px) {
          .about-description {
            margin-bottom: 0px !important;
          }
          .about-content {
            gap: 30px !important;
          }
          button {
            font-size: 16px !important;
          }
        }

        html[dir="rtl"] .about-image-div {
          padding-right: 0px;
          padding-left: 30px;
        }

        html[dir="rtl"] .about-content {
          text-align: right;
        }

        @media (max-width: 992px) {
          html[dir="rtl"] .about-image-div {
            padding-left: 0px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutUs;

