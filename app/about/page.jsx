'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import Link from 'next/link';
import { FaBullseye, FaEye, FaHeart, FaUsers, FaAward, FaRocket } from 'react-icons/fa';

export default function AboutPage() {
  const { locale } = useLanguage();

  const stats = [
    {
      icon: FaUsers,
      number: "150+",
      label: { en: "Happy Clients", ar: "عميل سعيد" }
    },
    {
      icon: FaRocket,
      number: "300+",
      label: { en: "Projects Completed", ar: "مشروع مكتمل" }
    },
    {
      icon: FaAward,
      number: "50+",
      label: { en: "Awards Won", ar: "جائزة فزنا بها" }
    },
    {
      icon: FaHeart,
      number: "98%",
      label: { en: "Client Satisfaction", ar: "رضا العملاء" }
    }
  ];

  const values = [
    {
      icon: FaBullseye,
      title: { en: "Excellence", ar: "التميز" },
      description: { 
        en: "We strive for excellence in every project, delivering high-quality solutions that exceed expectations.",
        ar: "نسعى للتميز في كل مشروع، نقدم حلولاً عالية الجودة تتجاوز التوقعات."
      }
    },
    {
      icon: FaHeart,
      title: { en: "Passion", ar: "الشغف" },
      description: { 
        en: "Our passion for digital innovation drives us to create meaningful and impactful solutions.",
        ar: "شغفنا بالابتكار الرقمي يدفعنا لإنشاء حلول ذات معنى وتأثير."
      }
    },
    {
      icon: FaUsers,
      title: { en: "Collaboration", ar: "التعاون" },
      description: { 
        en: "We work closely with our clients, building partnerships based on trust and mutual success.",
        ar: "نعمل عن كثب مع عملائنا، نبني شراكات مبنية على الثقة والنجاح المشترك."
      }
    },
    {
      icon: FaRocket,
      title: { en: "Innovation", ar: "الابتكار" },
      description: { 
        en: "We embrace new technologies and creative approaches to solve complex challenges.",
        ar: "نتبنى التقنيات الجديدة والأساليب الإبداعية لحل التحديات المعقدة."
      }
    }
  ];

  const team = [
    {
      name: { en: "Ahmed Salem", ar: "أحمد سالم" },
      role: { en: "CEO & Founder", ar: "المدير التنفيذي والمؤسس" },
      description: { 
        en: "Visionary leader with 10+ years of experience in digital transformation.",
        ar: "قائد صاحب رؤية مع أكثر من 10 سنوات من الخبرة في التحول الرقمي."
      }
    },
    {
      name: { en: "Sarah Johnson", ar: "سارة جونسون" },
      role: { en: "Creative Director", ar: "المديرة الإبداعية" },
      description: { 
        en: "Award-winning designer specializing in brand identity and visual storytelling.",
        ar: "مصممة حائزة على جوائز متخصصة في الهوية التجارية والسرد البصري."
      }
    },
    {
      name: { en: "Mohamed Ali", ar: "محمد علي" },
      role: { en: "Lead Developer", ar: "المطور الرئيسي" },
      description: { 
        en: "Full-stack developer passionate about building scalable digital solutions.",
        ar: "مطور متكامل شغوف ببناء حلول رقمية قابلة للتوسع."
      }
    },
    {
      name: { en: "Emma Davis", ar: "إيما ديفيس" },
      role: { en: "Marketing Strategist", ar: "استراتيجية التسويق" },
      description: { 
        en: "Data-driven marketer helping brands achieve measurable growth.",
        ar: "مسوقة تعتمد على البيانات تساعد العلامات التجارية على تحقيق نمو قابل للقياس."
      }
    }
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#ffffff',
        direction: locale === 'ar' ? 'rtl' : 'ltr',
        fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #5928e5 0%, #7b4bf5 100%)',
          padding: '100px 20px 80px',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-50px',
            left: '-50px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
          }}
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/#about"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'white',
                textDecoration: 'none',
                marginBottom: '30px',
                fontSize: '16px',
                opacity: 0.9
              }}
            >
              <span>{locale === 'ar' ? '→' : '←'}</span>
              {locale === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
            </Link>

            <h1
              style={{
                fontSize: '56px',
                fontWeight: '700',
                marginBottom: '20px',
                fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Grifter-bold", sans-serif'
              }}
            >
              {locale === 'ar' ? 'من نحن' : 'About Us'}
            </h1>

            <p
              style={{
                fontSize: '22px',
                lineHeight: '1.8',
                maxWidth: '800px',
                opacity: 0.95,
                marginBottom: '30px'
              }}
            >
              {locale === 'ar' 
                ? 'نحن وكالة رقمية متكاملة متخصصة في تقديم حلول إبداعية تساعد الشركات على النمو والتميز في العالم الرقمي.'
                : 'We are a full-service digital agency specializing in creative solutions that help businesses grow and stand out in the digital world.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '40px'
            }}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    textAlign: 'center',
                    padding: '30px',
                    background: '#f9f9f9',
                    borderRadius: '20px',
                    transition: 'all 0.3s'
                  }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: '0 10px 30px rgba(89, 40, 229, 0.15)'
                  }}
                >
                  <div
                    style={{
                      fontSize: '48px',
                      color: '#5928e5',
                      marginBottom: '15px',
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    <IconComponent />
                  </div>
                  <h3
                    style={{
                      fontSize: '42px',
                      fontWeight: '700',
                      color: '#333',
                      marginBottom: '10px'
                    }}
                  >
                    {stat.number}
                  </h3>
                  <p
                    style={{
                      fontSize: '18px',
                      color: '#666',
                      margin: 0
                    }}
                  >
                    {locale === 'ar' ? stat.label.ar : stat.label.en}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section style={{ padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2
                style={{
                  fontSize: '42px',
                  fontWeight: '700',
                  marginBottom: '25px',
                  color: '#333'
                }}
              >
                {locale === 'ar' ? 'قصتنا' : 'Our Story'}
              </h2>
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: '1.8',
                  color: '#666',
                  marginBottom: '20px'
                }}
              >
                {locale === 'ar'
                  ? 'تأسست وكالتنا من رؤية بسيطة: مساعدة الشركات على تحقيق إمكاناتها الكاملة في العالم الرقمي. على مدى السنوات، نمونا من فريق صغير إلى وكالة متكاملة الخدمات تخدم عملاء من مختلف الصناعات.'
                  : 'Our agency was founded on a simple vision: to help businesses achieve their full potential in the digital world. Over the years, we have grown from a small team to a full-service agency serving clients across various industries.'}
              </p>
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: '1.8',
                  color: '#666'
                }}
              >
                {locale === 'ar'
                  ? 'نحن متخصصون في التسويق الرقمي، بناء المواقع، تطوير التطبيقات، التصميم الجرافيكي، مونتاج الفيديو، والمنتجات الرقمية. فريقنا من المبدعين والمطورين والاستراتيجيين الشغوفين ملتزم بتقديم نتائج استثنائية.'
                  : 'We specialize in digital marketing, website building, mobile app development, graphic design, video montage, and digital products. Our team of passionate creatives, developers, and strategists is committed to delivering exceptional results.'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(135deg, #5928e5 0%, #7b4bf5 100%)',
                borderRadius: '20px',
                padding: '60px',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                }}
              />
              <FaEye style={{ fontSize: '64px', marginBottom: '20px' }} />
              <h3
                style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  marginBottom: '15px'
                }}
              >
                {locale === 'ar' ? 'رؤيتنا' : 'Our Vision'}
              </h3>
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: '1.8',
                  opacity: 0.95
                }}
              >
                {locale === 'ar'
                  ? 'أن نكون الوكالة الرقمية الرائدة في المنطقة، معروفة بابتكارنا وإبداعنا والتزامنا بنجاح عملائنا.'
                  : 'To be the leading digital agency in the region, known for our innovation, creativity, and commitment to client success.'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: '42px',
              fontWeight: '700',
              marginBottom: '60px',
              textAlign: 'center',
              color: '#333'
            }}
          >
            {locale === 'ar' ? 'قيمنا' : 'Our Values'}
          </motion.h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '40px'
            }}
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    padding: '40px',
                    background: 'white',
                    border: '2px solid #f0f0f0',
                    borderRadius: '20px',
                    transition: 'all 0.3s'
                  }}
                  whileHover={{
                    y: -10,
                    borderColor: '#5928e5',
                    boxShadow: '0 15px 35px rgba(89, 40, 229, 0.15)'
                  }}
                >
                  <div
                    style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #5928e5 0%, #7b4bf5 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '32px',
                      color: 'white',
                      marginBottom: '20px'
                    }}
                  >
                    <IconComponent />
                  </div>
                  <h3
                    style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      marginBottom: '15px',
                      color: '#333'
                    }}
                  >
                    {locale === 'ar' ? value.title.ar : value.title.en}
                  </h3>
                  <p
                    style={{
                      fontSize: '16px',
                      lineHeight: '1.8',
                      color: '#666',
                      margin: 0
                    }}
                  >
                    {locale === 'ar' ? value.description.ar : value.description.en}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section style={{ padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: '42px',
              fontWeight: '700',
              marginBottom: '20px',
              textAlign: 'center',
              color: '#333'
            }}
          >
            {locale === 'ar' ? 'فريقنا' : 'Meet Our Team'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: '18px',
              textAlign: 'center',
              color: '#666',
              marginBottom: '60px',
              maxWidth: '700px',
              margin: '0 auto 60px'
            }}
          >
            {locale === 'ar'
              ? 'تعرف على الخبراء المبدعين الذين يجعلون السحر يحدث'
              : 'Meet the talented professionals who make the magic happen'}
          </motion.p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '40px'
            }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s'
                }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 40px rgba(89, 40, 229, 0.2)'
                }}
              >
                <div
                  style={{
                    background: 'linear-gradient(135deg, #5928e5 0%, #7b4bf5 100%)',
                    padding: '40px',
                    textAlign: 'center',
                    color: 'white'
                  }}
                >
                  <div
                    style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                      fontSize: '48px',
                      fontWeight: '700'
                    }}
                  >
                    {(locale === 'ar' ? member.name.ar : member.name.en).charAt(0)}
                  </div>
                  <h3
                    style={{
                      fontSize: '22px',
                      fontWeight: '700',
                      marginBottom: '8px'
                    }}
                  >
                    {locale === 'ar' ? member.name.ar : member.name.en}
                  </h3>
                  <p
                    style={{
                      fontSize: '16px',
                      opacity: 0.9,
                      margin: 0
                    }}
                  >
                    {locale === 'ar' ? member.role.ar : member.role.en}
                  </p>
                </div>
                <div style={{ padding: '25px' }}>
                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: '1.7',
                      color: '#666',
                      margin: 0,
                      textAlign: 'center'
                    }}
                  >
                    {locale === 'ar' ? member.description.ar : member.description.en}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section style={{ padding: '80px 20px', background: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: '42px',
              fontWeight: '700',
              marginBottom: '20px',
              color: '#333'
            }}
          >
            {locale === 'ar' ? 'لنعمل معاً' : "Let's Work Together"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: '18px',
              color: '#666',
              marginBottom: '40px',
              lineHeight: '1.8'
            }}
          >
            {locale === 'ar'
              ? 'هل أنت مستعد لتحويل أفكارك إلى واقع؟ دعنا نتحدث عن مشروعك القادم.'
              : 'Ready to transform your ideas into reality? Let\'s discuss your next project.'}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/#contact"
              style={{
                display: 'inline-block',
                padding: '18px 50px',
                background: '#5928e5',
                color: 'white',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '700',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#7b4bf5';
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 10px 25px rgba(89, 40, 229, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#5928e5';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              {locale === 'ar' ? 'ابدأ مشروعك' : 'Start Your Project'}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 992px) {
          div[style*="gridTemplateColumns: '1fr 1fr'"] {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 38px !important;
          }
          
          h2 {
            font-size: 32px !important;
          }
          
          section {
            padding: 50px 20px !important;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 32px !important;
          }
          
          h2 {
            font-size: 28px !important;
          }
        }
      `}</style>
    </div>
  );
}
