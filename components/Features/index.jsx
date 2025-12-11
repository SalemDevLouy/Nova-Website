'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from "../../contexts/LanguageContext";

function Features() {
  const { t, locale } = useLanguage();
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  // Counter animation hook
  const useCounter = (end, shouldAnimate, duration = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!shouldAnimate) return;

      let startTime;
      let animationFrame;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, shouldAnimate]);

    return count;
  };

  // Intersection Observer to trigger animation once
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const count1 = useCounter(100, hasAnimated, 2000);
  const count2 = useCounter(78, hasAnimated, 2000);
  const count3 = useCounter(3, hasAnimated, 1500);

  const stats = [
    {
      number: count1,
      suffix: '%',
      label: t('features.stat1.label'),
      description: t('features.stat1.description'),
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      delay: 0.2
    },
    {
      number: count2,
      suffix: '%',
      label: t('features.stat2.label'),
      description: t('features.stat2.description'),
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      delay: 0.4
    },
    {
      number: count3,
      suffix: 'x',
      label: t('features.stat3.label'),
      description: t('features.stat3.description'),
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      delay: 0.6
    }
  ];

  return (
    <div 
      ref={sectionRef}
      style={{
        width: '100%',
        padding: '100px 20px',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f9ff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(89,40,229,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(123,75,245,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            marginBottom: '80px',
            textAlign: locale === 'ar' ? 'right' : 'left'
          }}
        >
          <h4
            style={{
              color: '#353535',
              textAlign: locale === 'ar' ? 'right' : 'left',
              textTransform: 'uppercase',
              fontSize: '22px',
              marginBottom: '20px',
              fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
            }}
          >
            {t('features.heading')}
          </h4>
          <h2
            style={{
              fontSize: '48px',
              fontWeight: '700',
              color: '#0D0A19',
              marginBottom: '20px',
              textAlign: locale === 'ar' ? 'right' : 'left',
              fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Grifter-bold", sans-serif'
            }}
          >
            {t('features.title')}
          </h2>
          <p
            style={{
              fontSize: '16px',
              fontWeight: '500',
              color: '#666',
              maxWidth: '600px',
              lineHeight: '1.8',
              textAlign: locale === 'ar' ? 'right' : 'left',
              fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
            }}
          >
            {t('features.description')}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: stat.delay }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              style={{
                background: 'white',
                borderRadius: '24px',
                padding: '40px 30px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(89, 40, 229, 0.1)',
                cursor: 'pointer'
              }}
            >
              {/* Gradient overlay on hover */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '6px',
                background: stat.color,
                borderRadius: '24px 24px 0 0'
              }} />

              {/* Number with animation */}
              <div style={{
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                <motion.div
                  style={{
                    fontSize: '72px',
                    fontWeight: '800',
                    background: stat.color,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    display: 'inline-block',
                    fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Grifter-bold", sans-serif'
                  }}
                >
                  {stat.number}{stat.suffix}
                </motion.div>
                <div style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#0D0A19',
                  marginTop: '10px',
                  fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
                }}>
                  {stat.label}
                </div>
              </div>

              {/* Description */}
              <p style={{
                fontSize: '15px',
                color: '#666',
                lineHeight: '1.7',
                textAlign: 'center',
                fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
              }}>
                {stat.description}
              </p>

              {/* Decorative circle */}
              <div style={{
                position: 'absolute',
                bottom: '-30px',
                right: '-30px',
                width: '100px',
                height: '100px',
                background: stat.color,
                borderRadius: '50%',
                opacity: 0.1,
                pointerEvents: 'none'
              }} />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginTop: '60px'
          }}
        >
          <Link href="#contact-form">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(89, 40, 229, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'linear-gradient(135deg, #5928e5 0%, #7b4bf5 100%)',
                color: 'white',
                border: 'none',
                padding: '18px 50px',
                fontSize: '18px',
                fontWeight: '600',
                borderRadius: '50px',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(89, 40, 229, 0.2)',
                fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif',
                transition: 'all 0.3s ease'
              }}
            >
              {t('features.cta')}
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          h2 {
            font-size: 36px !important;
          }
          h4 {
            font-size: 14px !important;
          }
        }

        @media (max-width: 480px) {
          h2 {
            font-size: 28px !important;
          }
          div[style*="fontSize: '72px'"] {
            font-size: 56px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Features;
