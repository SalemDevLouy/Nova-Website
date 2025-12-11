'use client';

import Slider from "react-slick";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useRef } from "react";
import works from "./OurWorkData";
import { useLanguage } from "../../contexts/LanguageContext";

// Custom arrow components for Slider
const PrevArrow = ({ onClick, ...rest }) => {
  return null;
};

const NextArrow = ({ onClick, ...rest }) => {
  return null;
};

const OurWorks = () => {
  const { t, locale } = useLanguage();
  
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    rtl: locale === 'ar',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const sliderRef = useRef(null);

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section 
      id="our-works"
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
        className="works-container"
      >
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '3rem',
            flexDirection: locale === 'ar' ? 'row' : 'row'
          }}
          className="work-header"
        >
          <div style={{ textAlign: locale === 'ar' ? 'right' : 'left' }}>
            <h2 
              className="heading-main"
              style={{
                marginBottom: '1rem',
                fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Grifter-bold", sans-serif',
                color: '#ffffff'
              }}
            >
              {t('works.heading')}
            </h2>
            <p 
              style={{
                fontSize: '1.1rem',
                color: '#f0f0f0',
                fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
              }}
            >
              {t('works.subheading')}
            </p>
          </div>
          <div 
            style={{
              display: 'flex',
              gap: '1rem',
              fontSize: '2rem',
              color: '#ffffff',
              flexDirection: locale === 'ar' ? 'row-reverse' : 'row'
            }}
            className="arrow-div"
          >
            <BsArrowLeft 
              onClick={handlePrev}
              style={{ cursor: 'pointer' }}
              aria-label="Previous project"
            />
            <BsArrowRight 
              onClick={handleNext}
              style={{ cursor: 'pointer' }}
              aria-label="Next project"
            />
          </div>
        </div>

        <div style={{ width: '100%' }}>
          <Slider {...settings} ref={sliderRef}>
            {works.map(work => (
              <div key={work.id} style={{ padding: '0 10px' }} className="work-slide">
                <div 
                  style={{
                    position: 'relative',
                    height: '400px',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    marginLeft: '48px'
                  }}
                  className="image-div"
                >
                  <img 
                    src={work.image}
                    alt={work.alt || `Preview of ${work.name} website`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '2rem',
                      display: 'flex',
                      alignItems: 'flex-end'
                    }}
                  >
                    <a 
                      href={work.url} 
                      target="_blank" 
                      rel="noopener noreferrer"  
                      aria-label={t('works.visitLabel').replace('{name}', work.name)}
                      style={{
                        textDecoration: 'none'
                      }}
                    >
                      <button 
                        className="btn-primary"
                        style={{
                          fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
                        }}
                      >
                        {work.name}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .work-header {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 1.5rem;
          }
          .arrow-div {
            font-size: 1.5rem !important;
          }
          .image-div {
            height: 300px !important;
          }
        }

        @media (max-width: 480px) {
          .heading-main {
            font-size: 2rem !important;
          }
          .work-header p {
            font-size: 1rem !important;
          }
          .image-div {
            height: 250px !important;
            padding: 1.5rem !important;
          }
        }

        html[dir="rtl"] .work-header {
          flex-direction: row;
        }

        html[dir="rtl"] .work-header > div {
          text-align: right;
        }

        html[dir="rtl"] .arrow-div {
          flex-direction: row-reverse;
        }

        @media (max-width: 768px) {
          html[dir="rtl"] .work-header {
            align-items: flex-end !important;
          }
        }
      `}</style>
    </section>
  );
};

export default OurWorks;

