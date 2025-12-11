'use client';

import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../components/Theme";
import "./globals.css";
import LoadingScreen from "../components/LoadingScreen";
import Layout from "../components/layout";
import StyledComponentsRegistry from "./registry";
import { LanguageProvider } from "../contexts/LanguageContext";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 1500);
  }, []);

  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        {/*======================== Google Fonts ========================*/}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        {/*-------------------------- Archivo Black --------------------------------------------*/}
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap"
          rel="stylesheet"
        />
        {/*-------------------------- Plus Jakarta Sans --------------------------------------------*/}
        <link href="https://fonts.googleapis.com/css2?family=Alata&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {/*-------------------------- Poppins --------------------------------------------*/}
        <link href="https://fonts.googleapis.com/css2?family=Alata&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
        {/* --------------------------------Syne -------------------------------- */}
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        {/* --------------------------------Cairo (Arabic Font) -------------------------------- */}
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
        {/*===================== Google Fonts ============================*/}
        
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </head>
      <body>
        <StyledComponentsRegistry>
          <LanguageProvider>
            <ThemeProvider theme={theme}>
              {!loading ? (
                <LoadingScreen />
              ) : (
                <Layout>
                  {children}
                </Layout>
              )}
            </ThemeProvider>
          </LanguageProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
