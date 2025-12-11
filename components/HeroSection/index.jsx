'use client';

import { motion } from "framer-motion";
import Slider from "react-slick";
import { useEffect } from "react";
import Link from "next/link";
import ContactUs1 from "../ContactUs/index1";
import { useLanguage } from "../../contexts/LanguageContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const { t } = useLanguage();
  
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <>
      <section id="hero-section" style={{
        width: '100%',
        height: '100%',
        display: 'grid',
        placeItems: 'center',
        maxWidth: '100%',
        background: 'linear-gradient(135deg, #1a0a3e 0%, #2d1b69 25%, #5928e5 50%, #7b4bf5 75%, #2d1b69 100%)',
        backgroundSize: '400% 400%',
        animation: 'galaxyMove 15s ease infinite',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '50px',
      }}>
        {/* Galaxy Stars Layer 1 - Small stars */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          pointerEvents: 'none'
        }}>
          {[...Array(50)].map((_, i) => (
            <div
              key={`star-small-${i}`}
              style={{
                position: 'absolute',
                width: '2px',
                height: '2px',
                background: 'white',
                borderRadius: '50%',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8 + 0.2,
                animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Galaxy Stars Layer 2 - Medium stars */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          pointerEvents: 'none'
        }}>
          {[...Array(30)].map((_, i) => (
            <div
              key={`star-medium-${i}`}
              style={{
                position: 'absolute',
                width: '3px',
                height: '3px',
                background: 'white',
                borderRadius: '50%',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
                boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)',
                animation: `twinkle ${Math.random() * 4 + 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Galaxy Stars Layer 3 - Large stars */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          pointerEvents: 'none'
        }}>
          {[...Array(15)].map((_, i) => (
            <div
              key={`star-large-${i}`}
              style={{
                position: 'absolute',
                width: '4px',
                height: '4px',
                background: 'white',
                borderRadius: '50%',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.9 + 0.1,
                boxShadow: '0 0 8px rgba(255, 255, 255, 1), 0 0 12px rgba(123, 75, 245, 0.5)',
                animation: `twinkle ${Math.random() * 5 + 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Nebula clouds */}
        <div style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(123, 75, 245, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          top: '10%',
          right: '-10%',
          filter: 'blur(80px)',
          animation: 'float 20s ease-in-out infinite',
          pointerEvents: 'none'
        }} />
        
        <div style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(89, 40, 229, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          bottom: '10%',
          left: '-5%',
          filter: 'blur(70px)',
          animation: 'float 25s ease-in-out infinite reverse',
          pointerEvents: 'none'
        }} />

        <div style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(45, 27, 105, 0.4) 0%, transparent 70%)',
          borderRadius: '50%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(90px)',
          animation: 'pulse 15s ease-in-out infinite',
          pointerEvents: 'none'
        }} />

        {/* Shooting stars */}
        <div style={{
          position: 'absolute',
          width: '2px',
          height: '2px',
          background: 'white',
          borderRadius: '50%',
          top: '20%',
          left: '10%',
          boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 20px 2px rgba(255, 255, 255, 0.1), 0 0 50px 2px rgba(255, 255, 255, 0.1)',
          animation: 'shootingStar 3s linear infinite',
          pointerEvents: 'none'
        }} />

        <div style={{
          position: 'absolute',
          width: '2px',
          height: '2px',
          background: 'white',
          borderRadius: '50%',
          top: '60%',
          right: '20%',
          boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 20px 2px rgba(255, 255, 255, 0.1), 0 0 50px 2px rgba(255, 255, 255, 0.1)',
          animation: 'shootingStar 4s linear infinite',
          animationDelay: '2s',
          pointerEvents: 'none'
        }} />

        <div style={{
          height: '100%',
          width: '90%',
          maxWidth: '1600px',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '5rem',
          paddingBottom: '4rem',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10
        }} className="hero-container">
          <div style={{
            marginTop: '1.9rem',
            width: '100%',
            maxWidth: '100%'
          }} className="hero-content">
            <motion.h1
              className="hero-heading"
              style={{
                width: '100%',
                height: 'auto',
                wordWrap: 'break-word',
                wordSpacing: '1px',
                color: '#FFF2F2',
                fontFamily: 'Grifter-bold, sans-serif',
                fontWeight: 800,
                fontSize: '3rem',
                lineHeight: '80px',
                letterSpacing: '1.2px',
                margin: '1rem 0'
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t('hero.title')}
            </motion.h1>

            <motion.p
              style={{
                color: '#FFF2F2',
                opacity: 0.9,
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 500,
                marginTop: '25px',
                fontSize: '20px',
                lineHeight: '45px',
                padding: '5px',
                letterSpacing: '0.5px',
                width: '80%'
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              {t('hero.description')}
            </motion.p>

            <Link href="#heroContact">
              <button className="btn-primary" style={{
                backgroundColor: '#FEC9C1',
                color: '#0D0A19',
                marginTop: '40px'
              }}>
                {t('hero.cta')}
              </button>
            </Link>

            <div role="img" aria-label={t('hero.rating')} style={{
              borderTop: '0.1px solid #ada9a9',
              width: '60%',
              marginTop: '110px',
              paddingTop: '40px',
              paddingBottom: '15px',
              display: 'flex',
              gap: '10px'
            }}>
              <img src="/images/star svg.svg" alt="" aria-hidden="true" style={{ width: '1.5rem' }} />
              <img src="/images/star svg.svg" alt="" aria-hidden="true" style={{ width: '1.5rem' }} />
              <img src="/images/star svg.svg" alt="" aria-hidden="true" style={{ width: '1.5rem' }} />
              <img src="/images/star svg.svg" alt="" aria-hidden="true" style={{ width: '1.5rem' }} />
              <img src="/images/star svg.svg" alt="" aria-hidden="true" style={{ width: '1.5rem' }} />
            </div>

            <p style={{
              color: '#d9d9d9',
              fontSize: '18px',
              marginTop: '10px'
            }}>
              {t('hero.promise')}
            </p>

            <img 
              src="/images/clients-Anrafa.png" 
              alt={t('hero.clients')}
              style={{
                marginTop: '15px',
                width: '10rem',
                height: '60px',
                objectFit: 'contain'
              }}
            />
          </div>
          <ContactUs1 />
        </div>
      </section>

      <section style={{
        width: '100%',
        height: '100%',
        display: 'grid',
        placeItems: 'center',
        gridTemplateColumns: '1fr',
        maxWidth: '100%',
        backgroundColor: '#5928e5',
        overflowX: 'hidden'
      }}>
        <div style={{
          width: '90%',
          maxWidth: '1600px',
          overflow: 'hidden',
          padding: '30px 0px',
          background: '#5928e5',
          margin: '0 auto'
        }}>
          <Slider {...settings}>
            <div style={{
              display: 'grid',
              placeItems: 'center',
              border: '0px',
              cursor: 'grab',
              height: '70px',
              padding: '10px 10px'
            }} aria-hidden="true">
              <img src="/images/CLIENTS/Client1.svg" alt="Innovgrab logo" tabIndex={-1} />
            </div>
            <div style={{
              display: 'grid',
              placeItems: 'center',
              border: '0px',
              cursor: 'grab',
              height: '70px',
              padding: '10px 10px'
            }} aria-hidden="true">
              <img src="/images/CLIENTS/client2.svg" alt="Dowl logo" tabIndex={-1} />
            </div>
            <div style={{
              display: 'grid',
              placeItems: 'center',
              border: '0px',
              cursor: 'grab',
              height: '70px',
              padding: '10px 10px'
            }} aria-hidden="true">
              <img src="/images/CLIENTS/client03.svg" alt="Hitoq logo" tabIndex={-1} />
            </div>
            <div style={{
              display: 'grid',
              placeItems: 'center',
              border: '0px',
              cursor: 'grab',
              height: '70px',
              padding: '10px 10px'
            }} aria-hidden="true">
              <img src="/images/CLIENTS/client04.svg" alt="Bellkare logo" tabIndex={-1} />
            </div>
            <div style={{
              display: 'grid',
              placeItems: 'center',
              border: '0px',
              cursor: 'grab',
              height: '70px',
              padding: '10px 10px'
            }} aria-hidden="true">
              <img src="/images/CLIENTS/client05.svg" alt="Aadiveda logo" tabIndex={-1} />
            </div>
            <div style={{
              display: 'grid',
              placeItems: 'center',
              border: '0px',
              cursor: 'grab',
              height: '70px',
              padding: '10px 10px'
            }} aria-hidden="true">
              <img src="/images/CLIENTS/Client06.svg" alt="Neocart logo" tabIndex={-1} />
            </div>
            <div style={{
              display: 'grid',
              placeItems: 'center',
              border: '0px',
              cursor: 'grab',
              height: '70px',
              padding: '10px 10px'
            }} aria-hidden="true">
              <img src="/images/CLIENTS/client07.svg" alt="Neha group logo" tabIndex={-1} />
            </div>
            <div style={{
              display: 'grid',
              placeItems: 'center',
              border: '0px',
              cursor: 'grab',
              height: '70px',
              padding: '10px 10px'
            }} aria-hidden="true">
              <img src="/images/CLIENTS/client08.svg" alt="Neotech logo" tabIndex={-1} />
            </div>
          </Slider>
        </div>
      </section>

      <style jsx>{`
        .hero-container {
          display: flex;
          flex-direction: row;
          box-sizing: border-box;
        }
        .hero-content {
          flex: 1;
          box-sizing: border-box;
          max-width: 100%;
        }
        
        .hero-heading {
          padding-right: 140px;
          box-sizing: border-box;
        }
        
        html[dir="rtl"] .hero-container {
          direction: rtl;
        }
        
        html[dir="rtl"] .hero-heading {
          padding-right: 0;
          padding-left: 140px;
        }
        
        html[dir="rtl"] .hero-content {
          text-align: right;
        }
        
        html[dir="rtl"] .hero-content p,
        html[dir="rtl"] .hero-content div {
          text-align: right;
        }
        
        @media (max-width: 1100px) {
          .hero-container {
            flex-direction: column !important;
            width: 90% !important;
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
          }
          .hero-content {
            padding-bottom: 0;
            margin-bottom: 70px;
          }
          .hero-content h1 {
            font-size: 3rem !important;
          }
          .hero-heading {
            padding-right: 0 !important;
            padding-left: 0 !important;
          }
        }
        
        @media (max-width: 1250px) {
          .hero-content h1 {
            font-size: 2.5rem !important;
          }
        }
        
        @media (max-width: 785px) {
          .hero-content h1 {
            font-size: 2.5rem !important;
            margin: 5px 0 !important;
            padding-right: 0px !important;
            padding-left: 0px !important;
          }
          .hero-heading {
            padding-right: 0 !important;
            padding-left: 0 !important;
          }
          .hero-content p {
            margin-top: 8px !important;
            width: 85% !important;
            line-height: 20px !important;
          }
          .hero-content button {
            margin-top: 28px !important;
          }
          .hero-content [role="img"] {
            margin-top: 30px !important;
          }
          .hero-content [role="img"] img {
            width: 1.2rem !important;
          }
          div[style*="height: 70px"] {
            height: 60px !important;
          }
        }
        
        @media (max-width: 530px) {
          .hero-content img[alt="clients profile images"] {
            width: 9rem !important;
          }
        }

        @keyframes galaxyMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(30px, -30px);
          }
          66% {
            transform: translate(-20px, 20px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.6;
          }
        }

        @keyframes shootingStar {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateX(300px) translateY(300px);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;