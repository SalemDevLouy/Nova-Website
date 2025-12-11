'use client';

import Links from '../../../data/menuLinks';
import Link from 'next/link';
import { MdOutlineClose } from "react-icons/md";
import { useLanguage } from '../../../contexts/LanguageContext';


const Sidebar = ({ isOpen, toggle, scrolled }) => {
  const { t } = useLanguage();
  
  return (
    <aside 
      style={{
        position: 'fixed',
        zIndex: 999,
        width: '100%',
        height: '100%',
        display: 'grid',
        alignItems: 'center',
        background: '#fff',
        top: isOpen ? '0' : '-100%',
        left: 0,
        transition: 'all 0.3s ease-in-out',
        opacity: isOpen ? '100%' : '0',
        pointerEvents: isOpen ? 'auto' : 'none'
      }}
      onClick={toggle}
    >
      <div 
        onClick={toggle}
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          background: 'transparent',
          fontSize: '2rem',
          cursor: 'pointer',
          outline: 'none'
        }}
      >
        <MdOutlineClose style={{
          color: '#0D0A19',
          fontSize: '28px',
          fontWeight: 600
        }} />
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'repeat(5, 80px)',
        textAlign: 'center'
      }}>
        {Links.map((link) => (
          <ul 
            key={link.id} 
            onClick={toggle}
            style={{
              listStyle: 'none'
            }}
          >
            <li>
              <Link 
                href={link.to} 
                role="button"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0.5rem',
                  textDecoration: 'none',
                  transition: '0.2s ease-in-out',
                  color: '#0D0A19',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  fontWeight: 500
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#5928e5';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#0D0A19';
                }}
              >
                {t(`nav.${link.name}`)}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar