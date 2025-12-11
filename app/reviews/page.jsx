'use client';

import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import emailjs from '@emailjs/browser';

export default function ReviewPage() {
  const { t, locale } = useLanguage();
  const [formData, setFormData] = useState({
    clientName: '',
    clientPosition: '',
    clientCompany: '',
    clientEmail: '',
    serviceReceived: '',
    rating: 5,
    review: '',
    allowPublish: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    { en: "Digital Marketing", ar: "التسويق الرقمي" },
    { en: "Website Building", ar: "بناء المواقع الإلكترونية" },
    { en: "Mobile App Development", ar: "تطوير تطبيقات الجوال" },
    { en: "Graphic Design", ar: "التصميم الجرافيكي" },
    { en: "Video Montage", ar: "مونتاج الفيديو" },
    { en: "Digital Products & Subscriptions", ar: "المنتجات الرقمية والاشتراكات" }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      const templateParams = {
        client_name: formData.clientName,
        client_position: formData.clientPosition,
        client_company: formData.clientCompany,
        client_email: formData.clientEmail,
        service_received: formData.serviceReceived,
        rating: formData.rating,
        review: formData.review,
        allow_publish: formData.allowPublish ? 'Yes' : 'No',
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setSubmitStatus('success');
      setFormData({
        clientName: '',
        clientPosition: '',
        clientCompany: '',
        clientEmail: '',
        serviceReceived: '',
        rating: 5,
        review: '',
        allowPublish: false,
      });
    } catch (error) {
      console.error('Error submitting review:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #5928e5 0%, #7b4bf5 100%)',
        padding: '60px 20px',
        direction: locale === 'ar' ? 'rtl' : 'ltr',
        fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          background: 'white',
          borderRadius: '30px',
          padding: '50px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1
            style={{
              fontSize: '42px',
              fontWeight: '700',
              color: '#5928e5',
              marginBottom: '15px',
              fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Grifter-bold", sans-serif'
            }}
          >
            {locale === 'ar' ? 'نموذج تقييم العميل' : 'Client Review Form'}
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: '#666',
              lineHeight: '1.6'
            }}
          >
            {locale === 'ar' 
              ? 'نود أن نسمع رأيك! يساعدنا تقييمك على تحسين خدماتنا وبناء الثقة مع العملاء الجدد.'
              : 'We\'d love to hear from you! Your feedback helps us improve our services and build trust with new clients.'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Client Name */}
          <div style={{ marginBottom: '25px' }}>
            <label
              htmlFor="clientName"
              style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '16px',
                fontWeight: '600',
                color: '#333',
                textAlign: locale === 'ar' ? 'right' : 'left'
              }}
            >
              {locale === 'ar' ? 'الاسم الكامل *' : 'Full Name *'}
            </label>
            <input
              type="text"
              id="clientName"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '15px',
                fontSize: '16px',
                border: '2px solid #e0e0e0',
                borderRadius: '12px',
                outline: 'none',
                transition: 'border-color 0.3s',
                fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : 'inherit',
                textAlign: locale === 'ar' ? 'right' : 'left'
              }}
              placeholder={locale === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
              onFocus={(e) => e.target.style.borderColor = '#5928e5'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          {/* Position & Company */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '25px' }}>
            <div>
              <label
                htmlFor="clientPosition"
                style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#333',
                  textAlign: locale === 'ar' ? 'right' : 'left'
                }}
              >
                {locale === 'ar' ? 'المسمى الوظيفي' : 'Position'}
              </label>
              <input
                type="text"
                id="clientPosition"
                name="clientPosition"
                value={formData.clientPosition}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '15px',
                  fontSize: '16px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '12px',
                  outline: 'none',
                  transition: 'border-color 0.3s',
                  fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : 'inherit',
                  textAlign: locale === 'ar' ? 'right' : 'left'
                }}
                placeholder={locale === 'ar' ? 'مثال: مدير تسويق' : 'e.g., Marketing Manager'}
                onFocus={(e) => e.target.style.borderColor = '#5928e5'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>
            <div>
              <label
                htmlFor="clientCompany"
                style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#333',
                  textAlign: locale === 'ar' ? 'right' : 'left'
                }}
              >
                {locale === 'ar' ? 'اسم الشركة' : 'Company Name'}
              </label>
              <input
                type="text"
                id="clientCompany"
                name="clientCompany"
                value={formData.clientCompany}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '15px',
                  fontSize: '16px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '12px',
                  outline: 'none',
                  transition: 'border-color 0.3s',
                  fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : 'inherit',
                  textAlign: locale === 'ar' ? 'right' : 'left'
                }}
                placeholder={locale === 'ar' ? 'اسم شركتك' : 'Your company name'}
                onFocus={(e) => e.target.style.borderColor = '#5928e5'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>
          </div>

          {/* Email */}
          <div style={{ marginBottom: '25px' }}>
            <label
              htmlFor="clientEmail"
              style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '16px',
                fontWeight: '600',
                color: '#333',
                textAlign: locale === 'ar' ? 'right' : 'left'
              }}
            >
              {locale === 'ar' ? 'البريد الإلكتروني *' : 'Email Address *'}
            </label>
            <input
              type="email"
              id="clientEmail"
              name="clientEmail"
              value={formData.clientEmail}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '15px',
                fontSize: '16px',
                border: '2px solid #e0e0e0',
                borderRadius: '12px',
                outline: 'none',
                transition: 'border-color 0.3s',
                fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : 'inherit',
                textAlign: locale === 'ar' ? 'right' : 'left'
              }}
              placeholder={locale === 'ar' ? 'example@email.com' : 'example@email.com'}
              onFocus={(e) => e.target.style.borderColor = '#5928e5'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          {/* Service Received */}
          <div style={{ marginBottom: '25px' }}>
            <label
              htmlFor="serviceReceived"
              style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '16px',
                fontWeight: '600',
                color: '#333',
                textAlign: locale === 'ar' ? 'right' : 'left'
              }}
            >
              {locale === 'ar' ? 'الخدمة المقدمة *' : 'Service Received *'}
            </label>
            <select
              id="serviceReceived"
              name="serviceReceived"
              value={formData.serviceReceived}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '15px',
                fontSize: '16px',
                border: '2px solid #e0e0e0',
                borderRadius: '12px',
                outline: 'none',
                transition: 'border-color 0.3s',
                fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : 'inherit',
                textAlign: locale === 'ar' ? 'right' : 'left',
                backgroundColor: 'white',
                cursor: 'pointer'
              }}
              onFocus={(e) => e.target.style.borderColor = '#5928e5'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            >
              <option value="">
                {locale === 'ar' ? 'اختر الخدمة' : 'Select a service'}
              </option>
              {services.map((service, index) => (
                <option key={index} value={locale === 'ar' ? service.ar : service.en}>
                  {locale === 'ar' ? service.ar : service.en}
                </option>
              ))}
            </select>
          </div>

          {/* Rating */}
          <div style={{ marginBottom: '25px' }}>
            <label
              htmlFor="rating"
              style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '16px',
                fontWeight: '600',
                color: '#333',
                textAlign: locale === 'ar' ? 'right' : 'left'
              }}
            >
              {locale === 'ar' ? 'التقييم *' : 'Rating *'}
            </label>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexDirection: locale === 'ar' ? 'row-reverse' : 'row' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                  style={{
                    fontSize: '40px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: star <= formData.rating ? '#FFD338' : '#e0e0e0',
                    transition: 'color 0.3s, transform 0.2s',
                    padding: '5px'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                  ★
                </button>
              ))}
              <span style={{ marginLeft: '10px', fontSize: '18px', color: '#666', fontWeight: '600' }}>
                ({formData.rating}/5)
              </span>
            </div>
          </div>

          {/* Review */}
          <div style={{ marginBottom: '25px' }}>
            <label
              htmlFor="review"
              style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '16px',
                fontWeight: '600',
                color: '#333',
                textAlign: locale === 'ar' ? 'right' : 'left'
              }}
            >
              {locale === 'ar' ? 'رأيك وتجربتك *' : 'Your Review *'}
            </label>
            <textarea
              id="review"
              name="review"
              value={formData.review}
              onChange={handleChange}
              required
              rows="6"
              style={{
                width: '100%',
                padding: '15px',
                fontSize: '16px',
                border: '2px solid #e0e0e0',
                borderRadius: '12px',
                outline: 'none',
                transition: 'border-color 0.3s',
                fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : 'inherit',
                textAlign: locale === 'ar' ? 'right' : 'left',
                resize: 'vertical'
              }}
              placeholder={locale === 'ar' 
                ? 'شاركنا تجربتك مع خدماتنا... ما الذي أعجبك؟ كيف ساعدناك في تحقيق أهدافك؟'
                : 'Share your experience with our services... What did you like? How did we help you achieve your goals?'}
              onFocus={(e) => e.target.style.borderColor = '#5928e5'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          {/* Allow Publish Checkbox */}
          <div style={{ marginBottom: '30px' }}>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                fontSize: '16px',
                color: '#333',
                flexDirection: locale === 'ar' ? 'row-reverse' : 'row'
              }}
            >
              <input
                type="checkbox"
                name="allowPublish"
                checked={formData.allowPublish}
                onChange={handleChange}
                style={{
                  width: '22px',
                  height: '22px',
                  cursor: 'pointer',
                  accentColor: '#5928e5'
                }}
              />
              <span style={{ fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : 'inherit' }}>
                {locale === 'ar' 
                  ? 'أوافق على نشر تقييمي على موقع الشركة ووسائل التواصل الاجتماعي'
                  : 'I agree to publish my review on the company website and social media'}
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: '100%',
              padding: '18px',
              fontSize: '18px',
              fontWeight: '700',
              color: 'white',
              background: isSubmitting ? '#999' : '#5928e5',
              border: 'none',
              borderRadius: '12px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s',
              fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting) {
                e.target.style.background = '#7b4bf5';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 10px 25px rgba(89, 40, 229, 0.3)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isSubmitting) {
                e.target.style.background = '#5928e5';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }
            }}
          >
            {isSubmitting 
              ? (locale === 'ar' ? 'جاري الإرسال...' : 'Submitting...')
              : (locale === 'ar' ? 'إرسال التقييم' : 'Submit Review')}
          </button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div
              style={{
                marginTop: '20px',
                padding: '15px',
                background: '#d4edda',
                border: '2px solid #c3e6cb',
                borderRadius: '12px',
                color: '#155724',
                textAlign: 'center',
                fontSize: '16px',
                fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : 'inherit'
              }}
            >
              {locale === 'ar' 
                ? '✅ شكراً لك! تم إرسال تقييمك بنجاح. نقدر وقتك وملاحظاتك القيمة.'
                : '✅ Thank you! Your review has been submitted successfully. We appreciate your time and valuable feedback.'}
            </div>
          )}

          {submitStatus === 'error' && (
            <div
              style={{
                marginTop: '20px',
                padding: '15px',
                background: '#f8d7da',
                border: '2px solid #f5c6cb',
                borderRadius: '12px',
                color: '#721c24',
                textAlign: 'center',
                fontSize: '16px',
                fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : 'inherit'
              }}
            >
              {locale === 'ar' 
                ? '❌ عذراً، حدث خطأ أثناء إرسال تقييمك. يرجى المحاولة مرة أخرى.'
                : '❌ Sorry, there was an error submitting your review. Please try again.'}
            </div>
          )}
        </form>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="maxWidth: '800px'"] {
            padding: 30px 20px !important;
          }
          
          h1 {
            font-size: 32px !important;
          }
          
          div[style*="gridTemplateColumns: '1fr 1fr'"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
