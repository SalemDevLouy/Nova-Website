'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../contexts/LanguageContext';
import servicesData from '../../../data/servicesData';
import Link from 'next/link';
import Image from 'next/image';

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { locale } = useLanguage();
  const serviceId = parseInt(params.id);
  
  const service = servicesData.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>404</h1>
          <p style={{ fontSize: '20px', marginBottom: '30px' }}>
            {locale === 'ar' ? 'الخدمة غير موجودة' : 'Service not found'}
          </p>
          <Link 
            href="/#services"
            style={{
              padding: '12px 30px',
              background: '#5928e5',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            {locale === 'ar' ? 'العودة للخدمات' : 'Back to Services'}
          </Link>
        </div>
      </div>
    );
  }

  const features = {
    1: { // Digital Marketing
      en: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "Content Marketing Strategy",
        "Email Marketing Campaigns",
        "Pay-Per-Click Advertising",
        "Analytics & Performance Tracking"
      ],
      ar: [
        "تحسين محركات البحث (SEO)",
        "التسويق عبر وسائل التواصل الاجتماعي",
        "استراتيجية التسويق بالمحتوى",
        "حملات التسويق عبر البريد الإلكتروني",
        "الإعلانات بنظام الدفع لكل نقرة",
        "تحليل الأداء والتتبع"
      ]
    },
    2: { // Website Building
      en: [
        "Responsive Web Design",
        "E-commerce Solutions",
        "CMS Integration",
        "Custom Web Applications",
        "Performance Optimization",
        "Ongoing Maintenance & Support"
      ],
      ar: [
        "تصميم مواقع متجاوب",
        "حلول التجارة الإلكترونية",
        "دمج أنظمة إدارة المحتوى",
        "تطبيقات ويب مخصصة",
        "تحسين الأداء",
        "الصيانة والدعم المستمر"
      ]
    },
    3: { // Mobile App Development
      en: [
        "iOS & Android Development",
        "Cross-Platform Solutions",
        "UI/UX Design",
        "API Integration",
        "App Store Deployment",
        "Post-Launch Support"
      ],
      ar: [
        "تطوير تطبيقات iOS و Android",
        "حلول متعددة المنصات",
        "تصميم واجهة المستخدم وتجربة المستخدم",
        "دمج واجهات برمجة التطبيقات",
        "النشر في متاجر التطبيقات",
        "الدعم بعد الإطلاق"
      ]
    },
    4: { // Graphic Design
      en: [
        "Logo & Brand Identity",
        "Marketing Materials",
        "Social Media Graphics",
        "Packaging Design",
        "Print Design",
        "Brand Style Guidelines"
      ],
      ar: [
        "الشعار والهوية البصرية",
        "المواد التسويقية",
        "تصاميم وسائل التواصل الاجتماعي",
        "تصميم العبوات",
        "التصميم الطباعي",
        "دليل أسلوب العلامة التجارية"
      ]
    },
    5: { // Video Montage
      en: [
        "Promotional Videos",
        "Social Media Content",
        "Corporate Videos",
        "Product Demonstrations",
        "Motion Graphics",
        "Color Grading & Effects"
      ],
      ar: [
        "فيديوهات ترويجية",
        "محتوى وسائل التواصل",
        "فيديوهات مؤسسية",
        "عروض توضيحية للمنتجات",
        "الرسوم المتحركة",
        "تدريج الألوان والمؤثرات"
      ]
    },
    6: { // Digital Products
      en: [
        "Netflix & Streaming Services",
        "Canva Pro & Design Tools",
        "ChatGPT Plus & AI Services",
        "Visa/Mastercard Virtual Cards",
        "Premium Online Courses",
        "Software Subscriptions & Licenses"
      ],
      ar: [
        "نتفليكس وخدمات البث",
        "كانفا برو وأدوات التصميم",
        "تشات جي بي تي بلس وخدمات الذكاء الاصطناعي",
        "بطاقات فيزا/ماستركارد الافتراضية",
        "دورات تدريبية مميزة عبر الإنترنت",
        "اشتراكات وتراخيص البرامج"
      ]
    }
  };

  const benefits = {
    1: { // Digital Marketing
      en: [
        "Increase brand visibility and reach",
        "Generate quality leads and conversions",
        "Build lasting customer relationships",
        "Measurable ROI and performance"
      ],
      ar: [
        "زيادة ظهور العلامة التجارية والوصول",
        "توليد عملاء محتملين ذوي جودة عالية",
        "بناء علاقات دائمة مع العملاء",
        "عائد استثمار قابل للقياس والأداء"
      ]
    },
    2: { // Website Building
      en: [
        "Professional online presence",
        "24/7 availability for customers",
        "Improved brand credibility",
        "Competitive advantage in digital space"
      ],
      ar: [
        "تواجد احترافي على الإنترنت",
        "توفر على مدار الساعة للعملاء",
        "تحسين مصداقية العلامة التجارية",
        "ميزة تنافسية في الفضاء الرقمي"
      ]
    },
    3: { // Mobile App Development
      en: [
        "Direct customer engagement",
        "Enhanced user experience",
        "Increased customer loyalty",
        "New revenue opportunities"
      ],
      ar: [
        "تفاعل مباشر مع العملاء",
        "تجربة مستخدم محسّنة",
        "زيادة ولاء العملاء",
        "فرص جديدة للإيرادات"
      ]
    },
    4: { // Graphic Design
      en: [
        "Strong visual brand identity",
        "Professional business image",
        "Memorable brand recognition",
        "Consistent marketing materials"
      ],
      ar: [
        "هوية بصرية قوية للعلامة التجارية",
        "صورة احترافية للأعمال",
        "تميز العلامة التجارية الذي لا يُنسى",
        "مواد تسويقية متسقة"
      ]
    },
    5: { // Video Montage
      en: [
        "Engaging visual storytelling",
        "Higher audience retention",
        "Increased social media engagement",
        "Professional brand presentation"
      ],
      ar: [
        "سرد قصص بصرية جذابة",
        "معدل احتفاظ أعلى بالجمهور",
        "زيادة التفاعل على وسائل التواصل",
        "عرض احترافي للعلامة التجارية"
      ]
    },
    6: { // Digital Products
      en: [
        "Affordable access to premium services",
        "Secure payment methods worldwide",
        "Instant delivery and activation",
        "Reliable customer support & guidance"
      ],
      ar: [
        "وصول ميسور للخدمات المميزة",
        "طرق دفع آمنة في جميع أنحاء العالم",
        "تسليم وتفعيل فوري",
        "دعم وإرشاد موثوق للعملاء"
      ]
    }
  };

  const process = {
    en: [
      { step: 1, title: "Discovery", description: "We understand your business goals and requirements" },
      { step: 2, title: "Planning", description: "Create a detailed strategy and project roadmap" },
      { step: 3, title: "Execution", description: "Bring your vision to life with expert craftsmanship" },
      { step: 4, title: "Delivery", description: "Launch and provide ongoing support for success" }
    ],
    ar: [
      { step: 1, title: "الاكتشاف", description: "نفهم أهداف عملك ومتطلباتك" },
      { step: 2, title: "التخطيط", description: "إنشاء استراتيجية مفصلة وخريطة طريق للمشروع" },
      { step: 3, title: "التنفيذ", description: "تحويل رؤيتك إلى واقع بحرفية خبيرة" },
      { step: 4, title: "التسليم", description: "الإطلاق وتوفير الدعم المستمر للنجاح" }
    ]
  };

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
          color: 'white'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/#services"
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
              <span>{locale === 'ar' ? '←' : '→'}</span>
              {locale === 'ar' ? 'العودة للخدمات' : 'Back to Services'}
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
              <div
                style={{
                  fontSize: '80px',
                  color: 'white'
                }}
              >
                {service.icon && <service.icon />}
              </div>
              <h1
                style={{
                  fontSize: '48px',
                  fontWeight: '700',
                  margin: 0,
                  fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Grifter-bold", sans-serif'
                }}
              >
                {locale === 'ar' ? service.title.ar : service.title.en}
              </h1>
            </div>

            <p
              style={{
                fontSize: '20px',
                lineHeight: '1.8',
                maxWidth: '800px',
                opacity: 0.95
              }}
            >
              {locale === 'ar' ? service.description.ar : service.description.en}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '80px 20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: '36px',
              fontWeight: '700',
              marginBottom: '50px',
              textAlign: 'center',
              color: '#333'
            }}
          >
            {locale === 'ar' ? 'ما نقدمه' : 'What We Offer'}
          </motion.h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px'
            }}
          >
            {(locale === 'ar' ? features[serviceId].ar : features[serviceId].en).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  background: 'white',
                  padding: '30px',
                  borderRadius: '15px',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}
              >
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: '#5928e5',
                    flexShrink: 0
                  }}
                />
                <p style={{ fontSize: '18px', margin: 0, color: '#333' }}>
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: '36px',
              fontWeight: '700',
              marginBottom: '50px',
              textAlign: 'center',
              color: '#333'
            }}
          >
            {locale === 'ar' ? 'الفوائد' : 'Benefits'}
          </motion.h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '40px'
            }}
          >
            {(locale === 'ar' ? benefits[serviceId].ar : benefits[serviceId].en).map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  textAlign: 'center',
                  padding: '20px'
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #5928e5 0%, #7b4bf5 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: '24px',
                    color: 'white',
                    fontWeight: '700'
                  }}
                >
                  {index + 1}
                </div>
                <p style={{ fontSize: '18px', color: '#333', lineHeight: '1.6' }}>
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ padding: '80px 20px', background: '#5928e5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: '36px',
              fontWeight: '700',
              marginBottom: '50px',
              textAlign: 'center',
              color: 'white'
            }}
          >
            {locale === 'ar' ? 'عملية العمل' : 'Our Process'}
          </motion.h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '40px'
            }}
          >
            {(locale === 'ar' ? process.ar : process.en).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '20px',
                  padding: '30px',
                  color: 'white',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: 'white',
                    color: '#5928e5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: '32px',
                    fontWeight: '700'
                  }}
                >
                  {item.step}
                </div>
                <h3 style={{ fontSize: '24px', marginBottom: '15px', fontWeight: '700' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: '1.6', opacity: 0.9 }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      {service.portfolio && service.portfolio.length > 0 && (
        <section style={{ padding: '80px 20px', background: 'white' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                fontSize: '36px',
                fontWeight: '700',
                marginBottom: '20px',
                textAlign: 'center',
                color: '#333'
              }}
            >
              {locale === 'ar' ? 'معرض الأعمال' : 'Portfolio'}
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
                marginBottom: '50px',
                maxWidth: '700px',
                margin: '0 auto 50px'
              }}
            >
              {locale === 'ar' 
                ? 'تعرف على بعض مشاريعنا السابقة وكيف ساعدنا عملائنا على تحقيق أهدافهم'
                : 'Explore some of our previous projects and how we helped our clients achieve their goals'}
            </motion.p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '40px'
              }}
            >
              {service.portfolio.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  style={{
                    background: 'white',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(89, 40, 229, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  {/* Project Image */}
                  <div
                    style={{
                      width: '100%',
                      height: '250px',
                      background: 'linear-gradient(135deg, #5928e5 0%, #7b4bf5 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '80px',
                      position: 'relative'
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: '15px',
                        right: '15px',
                        background: 'rgba(255, 255, 255, 0.2)',
                        padding: '8px 15px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: '600'
                      }}
                    >
                      {locale === 'ar' ? project.results.ar : project.results.en}
                    </div>
                    {service.icon && <service.icon style={{ opacity: 0.3 }} />}
                  </div>

                  {/* Project Info */}
                  <div style={{ padding: '25px' }}>
                    <h3
                      style={{
                        fontSize: '22px',
                        fontWeight: '700',
                        marginBottom: '12px',
                        color: '#333',
                        fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
                      }}
                    >
                      {locale === 'ar' ? project.title.ar : project.title.en}
                    </h3>
                    <p
                      style={{
                        fontSize: '16px',
                        color: '#666',
                        lineHeight: '1.6',
                        fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
                      }}
                    >
                      {locale === 'ar' ? project.description.ar : project.description.en}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section style={{ padding: '80px 20px', background: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: '36px',
              fontWeight: '700',
              marginBottom: '20px',
              color: '#333'
            }}
          >
            {locale === 'ar' ? 'جاهز للبدء؟' : 'Ready to Get Started?'}
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
              ? 'دعنا نساعدك في تحقيق أهدافك. تواصل معنا اليوم للحصول على استشارة مجانية.'
              : "Let's help you achieve your goals. Contact us today for a free consultation."}
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
              {locale === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 32px !important;
          }
          
          h2 {
            font-size: 28px !important;
          }
          
          section {
            padding: 50px 20px !important;
          }
        }
      `}</style>
    </div>
  );
}
