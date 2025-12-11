import { useState } from "react";
import axios from "axios";
import { send } from "emailjs-com";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

const ContactUs1 = (props) => {
  const { t, locale } = useLanguage();
  const [sender_email, set_sender_email] = useState("");
  const [sender_phone, set_sender_phone] = useState("");
  const [sender_name, set_sender_name] = useState("");
  const Newdate = new Date();
  const date = Newdate.getDate();
  const month = Newdate.getMonth();
  const CurrentMonth = month + 1;
  const year = Newdate.getFullYear();
  const hour = Newdate.getHours();
  const minute = Newdate.getMinutes();
  const [sender_service, set_sender_service] = useState("");
  const [senderDate, setSenderDate] = useState(
    date + "-" + CurrentMonth + "-" + year
  );
  const [check, setCheck] = useState(false);
  const [senderTime, setSenderTime] = useState(hour + ":" + minute);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [phone, setPhone] = useState("")

  const sendMail = (e) => {
    e.preventDefault();
    send(
      "service_p2zntyf",
      "template_f4vbnzh",
      { sender_name, sender_email, sender_service, senderDate, senderTime },
      "HiwseFxtuDnSuFCo_"
    )
      .then((response) => {
        console.log("message sent succesfully", response.status, response.text);
      })
      .catch((err) => {
        console.log("Failed", err);
      });
    set_sender_name("");
    set_sender_email("");
    set_sender_service("");
    set_sender_phone("");
    setSenderDate("");
    setSenderTime("");
    setService("");
    setEmail("");
    setName("");
    setPhone("");
    setCheck(false);
  };

  const SheetSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name: sender_name,
      Email: sender_email,
      Phone: sender_phone,
      Service: sender_service,
      Date: senderDate,
      Time: senderTime,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/69f079ba-8f87-4135-a184-a6709080c738",
        data
      )
      .then((response) => {
        console.log(response);
        setName("");
        setEmail("");
        setPhone("");
        set_sender_name("");
        set_sender_email("");
        set_sender_service("");
        set_sender_phone("");
        setService("");
        set_sender_service("");
        setSenderTime("");
        setSenderDate("");
        setCheck(false);
      });
  };

  const submit = (e) => {
    SheetSubmit(e);
    sendMail(e);
  };

  return (
    <motion.div 
      id="heroContact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      style={{
        width: '100%',
        maxWidth: '600px',
        background: 'white',
        borderRadius: '20px',
        padding: '2rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
      }}
      className="hero-form"
    >
      <form onSubmit={submit} style={{ width: '100%' }}>
        <h3 
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: '#232323',
            fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
          }}
          className="form-title"
        >
          {t('contact.form.title')}
        </h3>

        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            fontSize: '1rem',
            lineHeight: '1.8',
            fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
          }}
          className="contact-form"
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem' }}>
            <label htmlFor="name">{t('contact.form.nameLabel')}</label>
            <input
              id="name"
              type="text"
              value={sender_name}
              placeholder={t('contact.form.namePlaceholder')}
              onChange={(e) => {
                set_sender_name(e.target.value);
                setName(e.target.value);
              }}
              required
              style={{
                flex: '1',
                minWidth: '150px',
                padding: '0.5rem 1rem',
                border: 'none',
                borderBottom: '2px solid #e0e0e0',
                outline: 'none',
                fontSize: '1rem',
                fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
              }}
              className="input-field"
            />
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem' }}>
            <label htmlFor="service">{t('contact.form.serviceLabel')}</label>
            <select
              id="service"
              value={sender_service}
              onChange={(e) => {
                set_sender_service(e.target.value);
              }}
              required
              style={{
                flex: '1',
                minWidth: '150px',
                padding: '0.5rem 1rem',
                border: 'none',
                borderBottom: '2px solid #e0e0e0',
                outline: 'none',
                fontSize: '1rem',
                background: 'white',
                cursor: 'pointer',
                fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
              }}
              className="input-field"
            >
              <option value="">{t('contact.form.servicePlaceholder')}</option>
              <option value="Digital Marketing">{t('contact.form.services.digitalMarketing')}</option>
              <option value="Website Building">{t('contact.form.services.webDev')}</option>
              <option value="Mobile App Development">{t('contact.form.services.appDev')}</option>
              <option value="Graphic Design">{t('contact.form.services.graphicDesign')}</option>
              <option value="Video Montage">{t('contact.form.services.videoMontage')}</option>
              <option value="Digital Products">{t('contact.form.services.digitalProducts')}</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem' }}>
            <label htmlFor="email">{t('contact.form.emailLabel')}</label>
            <input
              id="email"
              type="email"
              value={sender_email}
              placeholder={t('contact.form.emailPlaceholder')}
              onChange={(e) => {
                set_sender_email(e.target.value);
                setEmail(e.target.value);
              }}
              required
              style={{
                flex: '1',
                minWidth: '150px',
                padding: '0.5rem 1rem',
                border: 'none',
                borderBottom: '2px solid #e0e0e0',
                outline: 'none',
                fontSize: '1rem',
                fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
              }}
              className="input-field"
            />
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem' }}>
            <label htmlFor="phone">{t('contact.form.phoneLabel')}</label>
            <input
              id="phone"
              type="tel"
              value={sender_phone}
              placeholder={t('contact.form.phonePlaceholder')}
              onChange={(e) => {
                set_sender_phone(e.target.value);
                setPhone(e.target.value);
              }}
              required
              style={{
                flex: '1',
                minWidth: '150px',
                padding: '0.5rem 1rem',
                border: 'none',
                borderBottom: '2px solid #e0e0e0',
                outline: 'none',
                fontSize: '1rem',
                fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
              }}
              className="input-field"
            />
          </div>
        </div>

        <div 
          style={{
            marginTop: '1.5rem',
            marginBottom: '1.5rem'
          }}
        >
          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <input
              type="checkbox"
              onChange={(e) => {
                setCheck(e.target.checked);
              }}
              required
              style={{
                width: '18px',
                height: '18px',
                marginRight: locale === 'ar' ? '0' : '0.5rem',
                marginLeft: locale === 'ar' ? '0.5rem' : '0',
                cursor: 'pointer'
              }}
            />
            <span 
              style={{
                fontSize: '0.9rem',
                color: '#666',
                fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
              }}
            >
              {t('contact.form.termsLabel')}
            </span>
          </label>
        </div>

        <button 
          type="submit" 
          className="btn-primary"
          style={{
            width: '100%',
            fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : '"Plus Jakarta Sans", sans-serif'
          }}
        >
          {t('contact.form.submit')}
        </button>
      </form>

      <style jsx>{`
        .input-field:focus {
          border-bottom-color: #5928e5;
        }

        @media (max-width: 768px) {
          .hero-form {
            padding: 1.5rem !important;
          }
          .form-title {
            font-size: 1.5rem !important;
          }
          .contact-form {
            font-size: 0.9rem !important;
          }
          .input-field {
            font-size: 0.9rem !important;
          }
        }

        @media (max-width: 480px) {
          .hero-form {
            padding: 1rem !important;
          }
          .form-title {
            font-size: 1.25rem !important;
          }
        }

        html[dir="rtl"] .contact-form label,
        html[dir="rtl"] .contact-form {
          text-align: right;
        }
      `}</style>
    </motion.div>
  );
};

export default ContactUs1;

