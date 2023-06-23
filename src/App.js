import './App.css';
import Footer from './Components/Landing Page/Footer';
import Navbar from './Components/Landing Page/NavBar';
import { TypographyH1 } from './Components/UI/Typography';
import LandingPage from './Screens/LandingPage';
import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom";
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage';
import { BlogPage } from './pages/BlogPage/BlogPage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import React, { useEffect, useLayoutEffect } from 'react';

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <>
      {/* <Navbar /> */}
      <ScrollToTop />


      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
