import { useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
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

  const sendMail = async () => {
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("🔵 STEP 1: Starting sendMail function");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    
    const templateParams = {
      sender_name: sender_name,
      sender_email: sender_email,
      sender_phone: sender_phone,
      sender_service: sender_service,
      sender_date: senderDate,
      sender_time: senderTime,
      // Alternative naming in case template uses different variable names
      name: sender_name,
      email: sender_email,
      phone: sender_phone,
      service: sender_service,
      date: senderDate,
      time: senderTime
    };
    
    console.log("🔵 STEP 2: Template params prepared (ALL FIELDS):");
    console.log("   📝 Name:", sender_name);
    console.log("   📧 Email:", sender_email);
    console.log("   📞 Phone:", sender_phone);
    console.log("   🛠️  Service:", sender_service);
    console.log("   📅 Date:", senderDate);
    console.log("   ⏰ Time:", senderTime);
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("🔵 STEP 3: EmailJS credentials:");
    console.log("   - Service ID: anrafagency_123");
    console.log("   - Template ID: template_anrafagency");
    console.log("   - Public Key: Z_qOdl5UEf0zzz8V7");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("⚠️  IMPORTANT: Make sure your EmailJS template includes these variables:");
    console.log("   {{sender_name}} or {{name}}");
    console.log("   {{sender_email}} or {{email}}");
    console.log("   {{sender_phone}} or {{phone}}");
    console.log("   {{sender_service}} or {{service}}");
    console.log("   {{sender_date}} or {{date}}");
    console.log("   {{sender_time}} or {{time}}");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    
    try {
      console.log("🔵 STEP 4: Calling emailjs.send()...");
      
      const response = await emailjs.send(
        "anrafagency_123",
        "template_anrafagency",
        templateParams,
        "Z_qOdl5UEf0zzz8V7"
      );
      
      console.log("✅ STEP 5: Email sent successfully!");
      console.log("   - Status:", response.status);
      console.log("   - Text:", response.text);
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      return response;
      
    } catch (error) {
      console.error("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.error("❌ STEP 5: Email FAILED!");
      console.error("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.error("Error object:", error);
      console.error("Error status:", error.status);
      console.error("Error text:", error.text);
      console.error("Error message:", error.message);
      
      if (error.status === 402) {
        console.error("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.error("💳 ERROR 402: PAYMENT REQUIRED");
        console.error("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.error("This means one of the following:");
        console.error("1️⃣  EmailJS free tier limit exceeded (200 emails/month)");
        console.error("2️⃣  EmailJS account email not verified");
        console.error("3️⃣  Service ID 'anrafagency_123' doesn't exist or is disabled");
        console.error("4️⃣  Template ID 'template_anrafagency' doesn't exist");
        console.error("5️⃣  Public Key 'Z_qOdl5UEf0zzz8V7' is incorrect");
        console.error("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.error("🔧 SOLUTION:");
        console.error("Go to https://dashboard.emailjs.com/");
        console.error("1. Check your email is verified");
        console.error("2. Check usage (should be under 200 emails this month)");
        console.error("3. Verify Service ID exists and is active");
        console.error("4. Verify Template ID exists");
        console.error("5. Get the correct Public Key from Account settings");
        console.error("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      }
      
      throw error;
    }
  };

  const SheetSubmit = async () => {
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("🟢 STEP 1: Starting SheetSubmit function");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    
    const data = {
      Name: sender_name,
      Email: sender_email,
      Phone: sender_phone,
      Service: sender_service,
      Date: senderDate,
      Time: senderTime,
    };
    
    console.log("🟢 STEP 2: Data prepared for Google Sheets:");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("📝 Name:", sender_name, "| Length:", sender_name?.length || 0);
    console.log("📧 Email:", sender_email, "| Length:", sender_email?.length || 0);
    console.log("📞 Phone:", sender_phone, "| Length:", sender_phone?.length || 0);
    console.log("🛠️  Service:", sender_service, "| Length:", sender_service?.length || 0);
    console.log("📅 Date:", senderDate, "| Length:", senderDate?.length || 0);
    console.log("⏰ Time:", senderTime, "| Length:", senderTime?.length || 0);
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("🟢 STEP 3: Full data object:", JSON.stringify(data, null, 2));
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    
    // Check if Google Sheet has correct column headers
    console.log("⚠️  IMPORTANT: Your Google Sheet MUST have these exact column names:");
    console.log("   Column A: Name");
    console.log("   Column B: Email");
    console.log("   Column C: Phone");
    console.log("   Column D: Service");
    console.log("   Column E: Date");
    console.log("   Column F: Time");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    
    try {
      console.log("🟢 STEP 4: Sending to SheetBest API...");
      console.log("   URL: https://api.sheetbest.com/sheets/680aa488-4e67-4665-8fa3-b41a7f6c5f58");
      
      const response = await axios.post(
        "https://api.sheetbest.com/sheets/680aa488-4e67-4665-8fa3-b41a7f6c5f58",
        data,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      
      console.log("✅ STEP 5: Sheet updated successfully!");
      console.log("   - Status:", response.status);
      console.log("   - Response data:", response.data);
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      return response;
      
    } catch (error) {
      console.error("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.error("❌ STEP 5: Google Sheets FAILED!");
      console.error("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.error("Error:", error);
      console.error("Error message:", error.message);
      console.error("Error response status:", error.response?.status);
      console.error("Error response data:", error.response?.data);
      console.error("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.error("🔧 TROUBLESHOOTING:");
      console.error("1. Check that your Google Sheet has the correct column headers");
      console.error("2. Make sure SheetBest connection ID is correct");
      console.error("3. Verify the sheet is not protected or read-only");
      console.error("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      throw error;
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    
    console.clear(); // Clear console for clean debugging
    console.log("═══════════════════════════════════════════════════");
    console.log("🚀 FORM SUBMISSION STARTED");
    console.log("═══════════════════════════════════════════════════");
    console.log("Form Data:");
    console.log("   Name:", sender_name);
    console.log("   Email:", sender_email);
    console.log("   Phone:", sender_phone);
    console.log("   Service:", sender_service);
    console.log("   Date:", senderDate);
    console.log("   Time:", senderTime);
    console.log("═══════════════════════════════════════════════════");
    
    // Validate
    if (!sender_name || !sender_email || !sender_phone || !sender_service) {
      console.error("❌ Validation failed: Missing required fields");
      alert("Please fill in all required fields!");
      return;
    }
    
    let sheetSuccess = false;
    let emailSuccess = false;
    
    // Try Google Sheets
    try {
      await SheetSubmit();
      sheetSuccess = true;
    } catch (error) {
      console.error("Google Sheets failed, but continuing...");
    }
    
    // Try EmailJS
    try {
      await sendMail();
      emailSuccess = true;
    } catch (error) {
      console.error("EmailJS failed, but continuing...");
    }
    
    console.log("═══════════════════════════════════════════════════");
    console.log("📊 FINAL RESULTS:");
    console.log("   Google Sheets:", sheetSuccess ? "✅ SUCCESS" : "❌ FAILED");
    console.log("   EmailJS:", emailSuccess ? "✅ SUCCESS" : "❌ FAILED");
    console.log("═══════════════════════════════════════════════════");
    
    // Show result to user
    if (sheetSuccess && emailSuccess) {
      alert("✅ Message sent successfully! We'll contact you soon.");
    } else if (sheetSuccess) {
      alert("✅ Message saved! Email notification failed (Error 402 - EmailJS account issue), but we have your details.");
    } else if (emailSuccess) {
      alert("✅ Email sent! Sheet save failed but we received your email.");
    } else {
      alert("❌ Both systems failed. Please contact us directly:\n📧 anrafagency@gmail.com\n📞 +213 552751832");
      return; // Don't clear form if both failed
    }
    
    // Clear form if at least one succeeded
    set_sender_name("");
    set_sender_email("");
    set_sender_service("");
    set_sender_phone("");
    setSenderDate(date + "-" + CurrentMonth + "-" + year);
    setSenderTime(hour + ":" + minute);
    setService("");
    setEmail("");
    setName("");
    setPhone("");
    setCheck(false);
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

