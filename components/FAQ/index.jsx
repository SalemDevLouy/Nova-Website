'use client';

import React, { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FAQ = () => {
  const { t, locale } = useLanguage();
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  const faqData = t('faq.questions');

  return (
    <section 
      style={{
        width: '100%',
        padding: '80px 0',
        background: '#5928e5',
        overflowX: 'hidden'
      }}
    >
      <div 
        style={{
          width: '90%',
          maxWidth: '1600px',
          margin: '0 auto'
        }}
        className="faq-container"
      >
        <h2 
          className="heading-main" 
          style={{
            marginBottom: '3rem',
            textAlign: 'center',
            fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Grifter-bold", sans-serif',
            color: '#ffffff'
          }}
        >
          {t('faq.heading')}
        </h2>
        
        {faqData.map((item, index) => {
          return (
            <div 
              key={index}
              style={{
                marginBottom: '1rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.3)'
              }}
              className="faq-section"
            >
              <div>
                <div 
                  role="button" 
                  onClick={() => toggle(index)} 
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      toggle(index);
                    }
                  }}
                  style={{
                    cursor: 'pointer',
                    padding: '1.5rem 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    outline: 'none',
                    flexDirection: locale === 'ar' ? 'row-reverse' : 'row'
                  }}
                  className="question-wrapper"
                >
                  <h3 
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      color: '#ffffff',
                      flex: 1,
                      fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif',
                      textAlign: locale === 'ar' ? 'right' : 'left'
                    }}
                    className="faq-question"
                  >
                    {item.question}
                  </h3>
                  {clicked === index ? (
                    <AiOutlineMinus 
                      aria-label="Collapse FAQ answer"
                      aria-expanded="true"
                      style={{
                        fontSize: '1.5rem',
                        color: '#FFD338',
                        marginLeft: locale === 'ar' ? '0' : '1rem',
                        marginRight: locale === 'ar' ? '1rem' : '0',
                        flexShrink: 0
                      }}
                    />
                  ) : (
                    <AiOutlinePlus 
                      aria-label="Expand FAQ answer"
                      aria-expanded="false"
                      style={{
                        fontSize: '1.5rem',
                        color: '#FFD338',
                        marginLeft: locale === 'ar' ? '0' : '1rem',
                        marginRight: locale === 'ar' ? '1rem' : '0',
                        flexShrink: 0
                      }}
                    />
                  )}
                </div>
                {clicked === index && (
                  <div 
                    style={{
                      padding: '0 0 1.5rem 0',
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: '#f0f0f0',
                      fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif',
                      textAlign: locale === 'ar' ? 'right' : 'left'
                    }}
                    className="faq-answer"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .heading-main {
            font-size: 2rem !important;
            margin-bottom: 2rem !important;
          }
          .faq-question {
            font-size: 1.1rem !important;
          }
          .faq-answer {
            font-size: 0.95rem !important;
          }
          .question-wrapper {
            padding: 1rem 0 !important;
          }
        }

        @media (max-width: 480px) {
          .heading-main {
            font-size: 1.75rem !important;
          }
          .faq-question {
            font-size: 1rem !important;
          }
        }

        html[dir="rtl"] .faq-question,
        html[dir="rtl"] .faq-answer {
          text-align: right;
        }
      `}</style>
    </section>
  );
};

export default FAQ;

