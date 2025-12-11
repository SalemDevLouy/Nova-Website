'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import servicesData from "../../data/servicesData";

const Services = () => {
  const { t, locale } = useLanguage();

  return (
    <section 
      id="services"
      style={{
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        background: '#fff2f2',
        padding: '50px 0',
        overflowX: 'hidden'
      }}
      className="services-section"
    >
      <div 
        style={{
          height: '100%',
          width: '90%',
          maxWidth: '1600px',
          margin: '0 auto',
          paddingTop: '2rem',
          paddingBottom: '3rem',
          background: '#fff2f2',
          borderRadius: '40px'
        }}
        className="services-container"
      >
        <div 
          style={{
            width: '100%',
            marginTop: '3rem',
            fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Grifter-bold", sans-serif',
            marginBottom: '2rem',
            color: '#1d1a26'
          }}
          className="service-header"
        >
          <h4 
            style={{
              color: '#353535',
              textAlign: locale === 'ar' ? 'right' : 'left',
              textTransform: 'uppercase',
              fontSize: '22px'
            }}
            className="what-we-do"
          >
            {t('services.heading')}
          </h4>
          <div 
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '1.5rem',
              flexDirection: locale === 'ar' ? 'row-reverse' : 'row'
            }}
            className="service-heading-div"
          >
            <h2 
              className="heading-main" 
              style={{ 
                color: '#1d1a26',
                fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Grifter-bold", sans-serif'
              }}
            >
              {t('services.title')}
            </h2>
            <Link href='#contact-us'>
              <button 
                className="btn-primary contact-button" 
                style={{ 
                  background: 'black', 
                  color: 'white',
                  fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
                }}
              >
                {t('services.cta')}
              </button>
            </Link>
          </div>
        </div>

        <div 
          style={{
            width: '100%',
            height: '100%',
            marginTop: '3rem',
            marginBottom: '2rem'
          }}
          className="service-content"
        >
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px',
              padding: '0 20px'
            }}
            className="service-list"
          >
            {servicesData.map((service) => {
              const IconComponent = service.icon;
              return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: service.delay }}
                viewport={{ once: true }}
                style={{
                  position: 'relative',
                  background: 'white',
                  borderRadius: '20px',
                  padding: '0',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                className="service-card"
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 20px 40px rgba(89, 40, 229, 0.2)'
                }}
              >
                {/* Icon Header Section */}
                <div
                  style={{
                    background: 'linear-gradient(135deg, #5928e5 0%, #7b4bf5 100%)',
                    padding: '40px 30px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '15px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Decorative circles */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-30px',
                      right: '-30px',
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.1)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '-20px',
                      left: '-20px',
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.1)',
                    }}
                  />

                  {/* Service Number Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '15px',
                      left: locale === 'ar' ? 'auto' : '15px',
                      right: locale === 'ar' ? '15px' : 'auto',
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      padding: '8px 15px',
                      borderRadius: '20px',
                      fontSize: '14px',
                      fontWeight: '700',
                      color: 'white',
                      fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
                    }}
                  >
                    {locale === 'ar' ? `${service.id} رقم` : `#${service.id}`}
                  </div>

                  {/* Icon with background circle */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: service.delay + 0.2 }}
                    viewport={{ once: true }}
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '48px',
                      color: 'white',
                      marginTop: '10px',
                      zIndex: 1
                    }}
                  >
                    <IconComponent />
                  </motion.div>

                  {/* Title */}
                  <h2 
                    style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: 'white',
                      textAlign: 'center',
                      margin: '10px 0 0 0',
                      lineHeight: '1.3',
                      zIndex: 1,
                      fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
                    }}
                    className="service-title"
                  >
                    {locale === 'ar' ? service.title.ar : service.title.en}
                  </h2>
                </div>

                {/* Content Section */}
                <div 
                  style={{
                    padding: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    flex: 1
                  }}
                >
                  {/* Description */}
                  <p
                    style={{
                      fontSize: '15px',
                      color: '#666',
                      lineHeight: '1.8',
                      textAlign: locale === 'ar' ? 'right' : 'left',
                      margin: 0,
                      fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
                    }}
                    className="service-details"
                  >
                    {locale === 'ar' ? service.description.ar : service.description.en}
                  </p>

                  {/* Learn More Button */}
                  <Link
                    href={`/services/${service.id}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      width: '100%',
                      padding: '14px 25px',
                      background: 'transparent',
                      color: '#5928e5',
                      border: '2px solid #5928e5',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      fontSize: '16px',
                      fontWeight: '700',
                      transition: 'all 0.3s',
                      marginTop: 'auto',
                      fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
                    }}
                    className="learn-more-btn"
                    onMouseEnter={(e) => {
                      e.target.style.background = '#5928e5';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateX(' + (locale === 'ar' ? '5px' : '-5px') + ')';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#5928e5';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    {locale === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                    <span style={{ fontSize: '20px' }}>
                      {locale === 'ar' ? '←' : '→'}
                    </span>
                  </Link>
                </div>

                {/* Bottom accent line */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #5928e5 0%, #7b4bf5 100%)'
                  }}
                />
              </motion.div>
            );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1200px) {
          .service-list {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 25px !important;
          }
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 30px 0 !important;
          }
          
          .services-container {
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
            width: 95% !important;
          }
          
          .service-header {
            margin: 10px 0 !important;
          }
          
          .what-we-do {
            font-size: 16px !important;
          }
          
          .service-heading-div {
            margin-top: 10px !important;
          }
          
          .contact-button {
            display: none !important;
          }

          .service-list {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            padding: 0 10px !important;
          }

          .service-card {
            margin: 0 !important;
          }

          .service-title {
            font-size: 20px !important;
          }

          .service-details {
            font-size: 14px !important;
          }

          .learn-more-btn {
            font-size: 15px !important;
            padding: 12px 20px !important;
          }

          .service-content {
            margin-top: 1.5rem !important;
          }
        }

        @media (max-width: 480px) {
          .service-heading {
            font-size: 32px !important;
          }

          .service-list {
            padding: 0 5px !important;
          }

          .service-card {
            border-radius: 16px !important;
          }
        }

        @media (max-width: 380px) {
          .service-header {
            font-size: 28px !important;
          }
        }

        html[dir="rtl"] .what-we-do {
          text-align: right;
        }

        html[dir="rtl"] .service-heading-div {
          flex-direction: row-reverse;
        }

        @media (max-width: 576px) {
          html[dir="rtl"] .service-heading-div {
            justify-content: flex-end;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;

