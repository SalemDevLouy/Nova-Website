'use client';

import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar } from 'react-icons/ai';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useLanguage } from '../../contexts/LanguageContext';

function Testimonial() {
  const { t, locale } = useLanguage();
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    rtl: locale === 'ar',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          adaptiveHeight: true,
          rtl: locale === 'ar',
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
          rtl: locale === 'ar',
          arrows: false
        }
      }
    ]
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const testimonialData = t('testimonials.clients', { returnObjects: true }) || [];

  return (
    <section
      style={{
        width: '100%',
        padding: '5rem 0',
        background: '#5928e5',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          maxWidth: '90rem',
          margin: '0 auto',
          padding: '0 2rem'
        }}
      >
        {/* Stars Rating */}
        <div
          aria-label={t('testimonials.rating')}
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '2rem',
            color: '#FFD338',
            gap: '0.5rem',
            marginBottom: '2rem',
            flexDirection: locale === 'ar' ? 'row-reverse' : 'row'
          }}
        >
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>

        {/* Header with Navigation Arrows */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '3rem',
            flexDirection: locale === 'ar' ? 'row-reverse' : 'row'
          }}
        >
          <h2
            className="heading-main"
            style={{
              fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Grifter-bold", sans-serif',
              textAlign: locale === 'ar' ? 'right' : 'left',
              color: '#ffffff'
            }}
          >
            {t('testimonials.heading')}
          </h2>
          
          {/* Desktop Arrow Navigation */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              fontSize: '2.5rem',
              color: '#FFD338',
              flexDirection: locale === 'ar' ? 'row-reverse' : 'row'
            }}
            className="arrow-div"
          >
            <button
              type="button"
              onClick={handlePrev}
              aria-label={t('testimonials.prevButton')}
              style={{ 
                background: 'none', 
                border: 'none', 
                padding: 0, 
                cursor: 'pointer', 
                color: '#FFD338',
                fontSize: '2.5rem',
                transition: 'opacity 0.3s',
                display: 'flex',
                alignItems: 'center'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <BsFillArrowLeftCircleFill />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label={t('testimonials.nextButton')}
              style={{ 
                background: 'none', 
                border: 'none', 
                padding: 0, 
                cursor: 'pointer', 
                color: '#FFD338',
                fontSize: '2.5rem',
                transition: 'opacity 0.3s',
                display: 'flex',
                alignItems: 'center'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <BsFillArrowRightCircleFill />
            </button>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div style={{ marginBottom: '2rem', margin: '0 -1rem' }}>
          <Slider {...settings} ref={sliderRef}>
            {testimonialData.map((testimonial, index) => (
              <div key={index} style={{ padding: '0 1rem' }}>
                <article
                  tabIndex={0}
                  style={{
                    background: 'transparent',
                    borderRadius: '1.5rem',
                    padding: '2rem',
                    height: 'auto',
                    minHeight: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s ease',
                    margin: '0 0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.borderColor = 'rgba(255, 211, 56, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.borderColor = 'rgba(255, 211, 56, 0.5)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                >
                  {/* Review Text */}
                  <p
                    style={{
                      fontSize: '1.1rem',
                      lineHeight: '1.8',
                      color: '#ffffff',
                      marginBottom: '2rem',
                      fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif',
                      textAlign: locale === 'ar' ? 'right' : 'left'
                    }}
                  >
                    &quot;&nbsp;{testimonial.review}&nbsp;&quot;
                  </p>

                  {/* Reviewer Details */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      flexDirection: locale === 'ar' ? 'row-reverse' : 'row'
                    }}
                  >
                    <img
                      src={`/images/${testimonial.name.toLowerCase().split(' ')[0]}.jpeg`}
                      alt={testimonial.imageAlt}
                      style={{
                        width: '3.5rem',
                        height: '3.5rem',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '2px solid #FFD338'
                      }}
                    />
                    <div style={{ textAlign: locale === 'ar' ? 'right' : 'left' }}>
                      <h4
                        style={{
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          color: '#ffffff',
                          marginBottom: '0.25rem',
                          fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
                        }}
                      >
                        {testimonial.name}
                      </h4>
                      <p
                        style={{
                          fontSize: '0.9rem',
                          color: '#f0f0f0',
                          fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
                        }}
                      >
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        </div>

        {/* Mobile Arrow Navigation */}
        <div
          style={{
            display: 'none',
            justifyContent: 'center',
            gap: '1.5rem',
            fontSize: '2.55rem',
            color: '#FFD338',
            marginTop: '2rem',
            flexDirection: locale === 'ar' ? 'row-reverse' : 'row'
          }}
          className="mobile-arrow-div"
        >
          <button
            type="button"
            onClick={handlePrev}
            aria-label={t('testimonials.prevButton')}
            style={{ 
              background: 'none', 
              border: 'none', 
              padding: 0, 
              cursor: 'pointer', 
              color: '#FFD338',
              fontSize: '2.55rem',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <BsFillArrowLeftCircleFill />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label={t('testimonials.nextButton')}
            style={{ 
              background: 'none', 
              border: 'none', 
              padding: 0, 
              cursor: 'pointer', 
              color: '#FFD338',
              fontSize: '2.55rem',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .arrow-div {
            display: none !important;
          }
          .mobile-arrow-div {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Testimonial;