'use client';

import React, { useState, useEffect }  from 'react';

import ChildNavbar from './ChildNavbar';
import Sidebar from "./Sidebar/index";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 200;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        width: '100%',
        background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        padding: '15px 0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none',
        color: scrolled ? '#0D0A19' : '#ffffff'
      }}
    >
      <Sidebar isOpen={isOpen} toggle={toggle} scrolled={scrolled} />
      <ChildNavbar toggle={toggle} scrolled={scrolled} />
    </nav>
  );
}

export default Navbar;
