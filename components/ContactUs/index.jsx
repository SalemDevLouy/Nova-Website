'use client';

import {
  Section,
  Container,
  Detail,
  DetailIcons,
  ContactLinkImage,
  DetailDescription,
  DetailTitle,
  LeftSection,
  RightSection,
  Span,
  Contact,
  ContactDetails,
  Title,
  TitleContact,
  MailIcon,
  ContactForm,
  PhoneIcon,
  EmailInput,
  NameInput,
  ServiceInput,
  GetaQuote,
  Form,
  ScheduleP,
  TermsCheckbox,
  SubmitForm,
  CheckboxTitle,
  Checkbox,
  UpperSection,
  BottomSection,
  Dropdowns,
  PhoneInput,
  SocialIcon,
  SocialDiv,
} from "./ContactUs.styled";

import { useState, useEffect } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useLanguage } from "../../contexts/LanguageContext";

const ContactUs = () => {
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
    const templateParams = {
      sender_name: sender_name,
      sender_email: sender_email,
      sender_phone: sender_phone,
      sender_service: sender_service,
      sender_date: senderDate,
      sender_time: senderTime,
      name: sender_name,
      email: sender_email,
      phone: sender_phone,
      service: sender_service,
      date: senderDate,
      time: senderTime
    };
    
    try {
      const response = await emailjs.send(
        "anrafagency_123",
        "template_anrafagency",
        templateParams,
        "Z_qOdl5UEf0zzz8V7"
      );
      
      return response;
      
    } catch (error) {
      console.error("Email failed:", error);
      throw error;
    }
  };

  const SheetSubmit = async () => {
    const data = {
      Name: sender_name,
      Email: sender_email,
      Phone: sender_phone,
      Service: sender_service,
      Date: senderDate,
      Time: senderTime,
    };
    
    try {
      const response = await axios.post(
        "https://api.sheetbest.com/sheets/680aa488-4e67-4665-8fa3-b41a7f6c5f58",
        data,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      
      return response;
      
    } catch (error) {
      console.error("Sheet update failed:", error);
      throw error;
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    
    // Validate
    if (!sender_name || !sender_email || !sender_phone || !sender_service) {
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
      console.error("Google Sheets failed:", error.message);
    }
    
    // Try EmailJS
    try {
      await sendMail();
      emailSuccess = true;
    } catch (error) {
      console.error("EmailJS failed:", error.message);
    }
    
    // Show result to user
    if (sheetSuccess && emailSuccess) {
      alert("✅ Message sent successfully! We'll contact you soon.");
    } else if (sheetSuccess) {
      alert("✅ Message saved! Email notification failed, but we have your details.");
    } else if (emailSuccess) {
      alert("✅ Email sent! We received your message.");
    } else {
      alert("❌ Failed to send message. Please contact us directly:\n📧 anrafagency@gmail.com\n📞 +213 552751832");
      return;
    }
    
    // Clear form
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
  var Services = [
    "App Development",
    "Web Development",
    "UI/UX Desgin",
    "Web Hosting",
    "SEO ",
  ];
  const options = [
    { key: "angular", text: "Angular", value: "angular" },
    { key: "css", text: "CSS", value: "css" },
    { key: "design", text: "Graphic Design", value: "design" },
    { key: "ember", text: "Ember", value: "ember" },
    { key: "html", text: "HTML", value: "html" },
    { key: "ia", text: "Information Architecture", value: "ia" },
    { key: "javascript", text: "Javascript", value: "javascript" },
    { key: "mech", text: "Mechanical Engineering", value: "mech" },
    { key: "meteor", text: "Meteor", value: "meteor" },
    { key: "node", text: "NodeJS", value: "node" },
    { key: "plumbing", text: "Plumbing", value: "plumbing" },
    { key: "python", text: "Python", value: "python" },
    { key: "rails", text: "Rails", value: "rails" },
    { key: "react", text: "React", value: "react" },
    { key: "repair", text: "Kitchen Repair", value: "repair" },
    { key: "ruby", text: "Ruby", value: "ruby" },
    { key: "ui", text: "UI Design", value: "ui" },
    { key: "ux", text: "User Experience", value: "ux" },
  ];
  const defaultOption = "Select Service";
  return (
    <Section id="contact-us">
      <Container style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}>
        <UpperSection>
          <TitleContact style={{
            fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : 'inherit',
            textAlign: locale === 'ar' ? 'right' : 'left'
          }}>
            {t('contact.heading')}
          </TitleContact>
        </UpperSection>
        <BottomSection>
          <LeftSection>
            <ContactDetails>
              <Contact>
                <DetailIcons>
                  <MailIcon aria-label="Send us an email"/>
                </DetailIcons>
                <Detail>
                  <DetailTitle style={{
                    fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : 'inherit'
                  }}>
                    {t('contact.details.email')}
                  </DetailTitle>
                  <Link href="mailto:anrafagency@gmail.com" aria-label="Send an email to anrafagency@gmail.com">
                    <DetailDescription>anrafagency@gmail.com</DetailDescription>
                  </Link>
                </Detail>
              </Contact>
              <Contact>
                <DetailIcons>
                  <PhoneIcon aria-label="Call us"/>
                </DetailIcons>
                <Detail>
                  <DetailTitle style={{
                    fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : 'inherit'
                  }}>
                    {t('contact.details.phone')}
                  </DetailTitle>
                  <Link href="tel:+213552751832 " aria-label="Call +213 552751832">
                    <DetailDescription>+213 552751832</DetailDescription>
                  </Link>
                </Detail>
              </Contact>
              <Contact>
                <DetailIcons>
                  <SocialIcon aria-label="Follow us on social media"/>
                </DetailIcons>
                <Detail>
                  <DetailTitle style={{
                    fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : 'inherit'
                  }}>
                    {t('contact.details.social')}
                  </DetailTitle>
                  <SocialDiv>
                  <Link href="https://www.facebook.com/anraf57" aria-label="Visit Anraf Facebook page" target="_blank" rel="noopener noreferrer">
                    <DetailDescription>Facebook</DetailDescription>
                  </Link>
                  <Link href="https://www.instagram.com/anrafagency/" aria-label="Visit Anraf Instagram page" target="_blank" rel="noopener noreferrer">
                    <DetailDescription>Instagram</DetailDescription>
                  </Link>
                  </SocialDiv>
                </Detail>
                
              </Contact>
            </ContactDetails>
          </LeftSection>
          <RightSection>
            <Form onSubmit={submit} id="contact-form">
              <GetaQuote style={{
                fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : 'inherit',
                textAlign: locale === 'ar' ? 'right' : 'left'
              }}>
                {t('contact.form.title')}
              </GetaQuote>
              {/* <ScheduleP>Schedule an Appointment</ScheduleP> */}
              <ContactForm style={{
                fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : 'inherit',
                textAlign: locale === 'ar' ? 'right' : 'left'
              }}>
              <label htmlFor="contact-name">{t('contact.form.nameLabel')}</label> &nbsp;
                <NameInput
                 id="contact-name"
                  type="text"
                  value={sender_name}
                  placeholder={t('contact.form.namePlaceholder')}
                  onChange={(e) => {
                    set_sender_name(e.target.value);
                    setName(e.target.value);
                  }}
                  style={{
                    fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : 'inherit',
                    textAlign: locale === 'ar' ? 'right' : 'left'
                  }}
                  required
                />

                &nbsp;<label htmlFor="contact-service">{t('contact.form.serviceLabel')}</label>&nbsp;
                <Dropdowns
                  id="contact-service"
                  value={sender_service}
                  placeholder={t('contact.form.servicePlaceholder')}
                  onChange={(e) => {
                    set_sender_service(e.target.value);
                  }}
                  style={{
                    fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : 'inherit',
                    textAlign: locale === 'ar' ? 'right' : 'left'
                  }}
                  required
                >
                  <option value="">{t('contact.form.servicePlaceholder')}</option>
                  <option value="Digital Marketing">{t('contact.form.services.digitalMarketing')}</option>
                  <option value="Website Building">{t('contact.form.services.webDev')}</option>
                  <option value="Mobile App Development">{t('contact.form.services.appDev')}</option>
                  <option value="Graphic Design">{t('contact.form.services.graphicDesign')}</option>
                  <option value="Video Montage">{t('contact.form.services.videoMontage')}</option>
                  <option value="Digital Products">{t('contact.form.services.digitalProducts')}</option>
                </Dropdowns>
                <br />
                <label htmlFor="contact-email">{t('contact.form.emailLabel')}</label>&nbsp;
                <EmailInput
                  id="contact-email"
                  type="email"
                  value={sender_email}
                  placeholder={t('contact.form.emailPlaceholder')}
                  onChange={(e) => {
                    set_sender_email(e.target.value);
                    setEmail(e.target.value);
                  }}
                  style={{
                    fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : 'inherit',
                    textAlign: locale === 'ar' ? 'right' : 'left'
                  }}
                  required
                />
                <label htmlFor="contact-phone">{t('contact.form.phoneLabel')}</label>&nbsp;
                <PhoneInput
                  id="contact-phone"
                  type="tel"
                  value={sender_phone}
                  placeholder={t('contact.form.phonePlaceholder')}
                  onChange={(e) => {
                    set_sender_phone(e.target.value);
                    setPhone(e.target.value);
                  }}
                  style={{
                    fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : 'inherit',
                    textAlign: locale === 'ar' ? 'right' : 'left'
                  }}
                  required
                />
              </ContactForm>
              <TermsCheckbox>
                <label style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  flexDirection: locale === 'ar' ? 'row-reverse' : 'row'
                }}>
                <Checkbox
                  type="checkbox"
                  required
                  onChange={(e) => {
                    setCheck(e.target.checked);
                  }}
                  style={{
                    marginLeft: locale === 'ar' ? '0.5rem' : '0',
                    marginRight: locale === 'ar' ? '0' : '0.5rem'
                  }}
                />
                <CheckboxTitle style={{
                  fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : 'inherit'
                }}>
                  {t('contact.form.termsLabel')}
                </CheckboxTitle>
                </label>
              </TermsCheckbox>
              <SubmitForm type="Submit" style={{
                fontFamily: locale === 'ar' ? '"Cairo", sans-serif' : 'inherit'
              }}>
                {t('contact.form.submit')}
              </SubmitForm>
            </Form>
          </RightSection>
        </BottomSection>
      </Container>
    </Section>
  );
};

export default ContactUs;
