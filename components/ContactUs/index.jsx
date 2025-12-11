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
import { send } from "emailjs-com";
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
    // console.log(name,email,message)
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
                  <Link href="mailto:hello@Anrafa.com" aria-label="Send an email to hello@Anrafa.com">
                    <DetailDescription>hello@Anrafa.com</DetailDescription>
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
                  <Link href="tel:+918590302905" aria-label="Call +91 8590302905">
                    <DetailDescription>+91 8590302905</DetailDescription>
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
                  <Link href="https://www.linkedin.com/company/Anrafa/" aria-label="Visit Anrafa LinkedIn page" target="_blank" rel="noopener noreferrer">
                    <DetailDescription>LinkedIn</DetailDescription>
                  </Link>
                  <Link href="https://www.instagram.com/Anrafa.official/" aria-label="Visit Anrafa Instagram page" target="_blank" rel="noopener noreferrer">
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
                  <option value="Marketing Websites & Apps">{t('contact.form.services.webDev')}</option>
                  <option value="Digital Products & Services">{t('contact.form.services.digitalMarketing')}</option>
                  <option value="Graphic Design & Montage">{t('contact.form.services.appDev')}</option>
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
