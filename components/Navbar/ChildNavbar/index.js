'use client';

import React from "react";
import Links from "../../../data/menuLinks";
import Link from "next/link";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import LanguageSwitcher from "../../LanguageSwitcher";
import { useLanguage } from "../../../contexts/LanguageContext";

const ChildNavbar = ({ toggle, scrolled }) => {
  const { t } = useLanguage();
  const LogoValue = "text";

  return (
    <nav style={{
      background: 'transparent',
      width: '95%',
      maxWidth: '1600px',
      borderRadius: '10px',
      height: '66px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
        width: '100%',
        padding: '0 24px',
        maxWidth: '1600px'
      }}>
        <Link href="/" aria-label="Anrafa Agency Home">
          {LogoValue === "text" ? (
            <p style={{
              fontSize: '24px',
              fontWeight: 600,
              color: scrolled ? '#121212' : '#ffffff',
              transition: 'color 0.3s ease',
              margin: 0
            }}>
              Anrafa Agency.
            </p>
          ) : (
            <img 
              src="/images/62375b2bd5c8856bf9e4f5df_Logo.png" 
              alt="logo"
              style={{
                width: '45px',
                height: 'auto',
                maxHeight: '100%',
                objectPosition: 'center',
                objectFit: 'cover',
                cursor: 'pointer'
              }}
            />
          )}
        </Link>
        
        <div 
          onClick={toggle}
          style={{
            display: 'none',
            alignItems: 'center',
            cursor: 'pointer',
            textAlign: 'center'
          }}
          className="mobile-menu"
        >
          <HiOutlineMenuAlt4 style={{
            color: scrolled ? '#0D0A19' : '#ffffff',
            fontSize: '1.8rem',
            transition: 'color 0.3s ease'
          }} />
        </div>

        <ul style={{
          display: 'flex',
          alignItems: 'center',
          marginRight: '-24px'
        }} className="nav-menu">
          {Links.map((link) => (
            <li 
              key={link.id}
              style={{
                listStyle: 'none',
                marginRight: '24px'
              }}
            >
              <Link 
                href={link.to}
                style={{
                  color: scrolled ? '#0D0A19' : '#ffffff',
                  fontSize: '16px',
                  fontWeight: 500,
                  letterSpacing: '0.5px',
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '6px',
                  padding: '0 1rem',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#5928e5';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = scrolled ? '#0D0A19' : '#ffffff';
                }}
              >
                {t(`nav.${link.name}`)}
              </Link>
            </li>
          ))}
          <li style={{
            listStyle: 'none',
            marginRight: '24px'
          }}>
            <LanguageSwitcher />
          </li>
        </ul>
      </div>

      <style jsx>{`
        @media screen and (max-width: 768px) {
          .mobile-menu {
            display: flex !important;
          }
          .nav-menu {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default ChildNavbar;
