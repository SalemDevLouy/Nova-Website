'use client';

import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const Values = () => {
  const { t, locale } = useLanguage();

  return (
    <section 
      id="values"
      style={{
        width: '100%',
        padding: '80px 0',
        background: '#f8f8f8',
        overflowX: 'hidden'
      }}
    >
      <div 
        style={{
          width: '90%',
          maxWidth: '1600px',
          margin: '0 auto'
        }}
        className="values-container"
      >
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '3rem'
          }}
          className="values-parent"
        >
          {/* Left Section */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            className="values-left"
          >
            <h2 
              style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                marginBottom: '2rem',
                lineHeight: '1.3',
                fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Grifter-bold", sans-serif',
                textAlign: locale === 'ar' ? 'right' : 'left'
              }}
              className="values-headline"
            >
              <em style={{ fontStyle: 'italic', color: '#5928e5' }}>
                {t('values.heading')}
              </em>{' '}
              {t('values.subheading')}
            </h2>

            <div>
              <p 
                style={{
                  fontSize: '1rem',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6',
                  fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif',
                  textAlign: locale === 'ar' ? 'right' : 'left'
                }}
              >
                <strong>{t('values.newsletter.bold')}</strong> {t('values.newsletter.text')}
              </p>
              <div 
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  flexDirection: locale === 'ar' ? 'row-reverse' : 'row'
                }}
                className="input-container"
              >
                <input
                  type="email"
                  placeholder={t('values.newsletter.placeholder')}
                  style={{
                    flex: 1,
                    padding: '0.75rem 1rem',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    outline: 'none',
                    fontSize: '1rem',
                    fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
                  }}
                  className="email-input"
                />
                <button 
                  className="btn-primary"
                  style={{
                    fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
                  }}
                >
                  {t('values.newsletter.button')}
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Cards */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem'
            }}
            className="values-right"
          >
            {/* Card 1 - Pixel Perfection */}
            <div 
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '15px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
              }}
              className="value-card"
            >
              <div style={{ marginBottom: '1rem' }}>
                <img 
                  src="/images/target-2997217-2516255.png" 
                  alt={t('values.cards.perfection.alt')}
                  style={{
                    width: '60px',
                    height: '60px',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <h3 
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '0.75rem',
                  fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif',
                  textAlign: locale === 'ar' ? 'right' : 'left'
                }}
              >
                {t('values.cards.perfection.title')}
              </h3>
              <p 
                style={{
                  fontSize: '0.95rem',
                  color: '#666',
                  lineHeight: '1.5',
                  fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif',
                  textAlign: locale === 'ar' ? 'right' : 'left'
                }}
              >
                {t('values.cards.perfection.description')}
              </p>
            </div>

            {/* Card 2 - Consistent Deadline */}
            <div 
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '15px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
              }}
              className="value-card"
            >
              <div style={{ marginBottom: '1rem' }}>
                <img 
                  src="/images/task-deadline-4721435-3926023.png" 
                  alt={t('values.cards.deadline.alt')}
                  style={{
                    width: '60px',
                    height: '60px',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <h3 
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '0.75rem',
                  fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif',
                  textAlign: locale === 'ar' ? 'right' : 'left'
                }}
              >
                {t('values.cards.deadline.title')}
              </h3>
              <p 
                style={{
                  fontSize: '0.95rem',
                  color: '#666',
                  lineHeight: '1.5',
                  fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif',
                  textAlign: locale === 'ar' ? 'right' : 'left'
                }}
              >
                {t('values.cards.deadline.description')}
              </p>
            </div>

            {/* Card 3 - Updated Style */}
            <div 
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '15px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
              }}
              className="value-card"
            >
              <div style={{ marginBottom: '1rem' }}>
                <img 
                  src="/images/design-shape-4119272-3420376.png" 
                  alt={t('values.cards.updated.alt')}
                  style={{
                    width: '60px',
                    height: '60px',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <h3 
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '0.75rem',
                  fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif',
                  textAlign: locale === 'ar' ? 'right' : 'left'
                }}
              >
                {t('values.cards.updated.title')}
              </h3>
              <p 
                style={{
                  fontSize: '0.95rem',
                  color: '#666',
                  lineHeight: '1.5',
                  fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif',
                  textAlign: locale === 'ar' ? 'right' : 'left'
                }}
              >
                {t('values.cards.updated.description')}
              </p>
            </div>

            {/* Card 4 - Transparency */}
            <div 
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '15px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
              }}
              className="value-card"
            >
              <div style={{ marginBottom: '1rem' }}>
                <img 
                  src="/images/customer-reviews-4861322-4051644.png" 
                  alt={t('values.cards.transparency.alt')}
                  style={{
                    width: '60px',
                    height: '60px',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <h3 
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '0.75rem',
                  fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif',
                  textAlign: locale === 'ar' ? 'right' : 'left'
                }}
              >
                {t('values.cards.transparency.title')}
              </h3>
              <p 
                style={{
                  fontSize: '0.95rem',
                  color: '#666',
                  lineHeight: '1.5',
                  fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif',
                  textAlign: locale === 'ar' ? 'right' : 'left'
                }}
              >
                {t('values.cards.transparency.description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .email-input:focus {
          border-color: #5928e5;
        }

        @media (max-width: 992px) {
          .values-parent {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .values-right {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 768px) {
          .values-headline {
            font-size: 2rem !important;
          }
          .input-container {
            flex-direction: column !important;
          }
          .value-card {
            padding: 1.5rem !important;
          }
        }

        @media (max-width: 480px) {
          .values-headline {
            font-size: 1.75rem !important;
          }
        }

        html[dir="rtl"] .values-left,
        html[dir="rtl"] .value-card {
          text-align: right;
        }
      `}</style>
    </section>
  );
};

export default Values;

