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
import CookiePolicyPage from "./pages/CookiePolicyPage/CookiePolicyPage";
import TermOfUsePage from "./pages/TermOfUsePage/TermOfUsePage";
import CandidateTermsOfUse from "./pages/CandidateTermsOfUse/CandidateTermsOfUse";

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
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/terms-of-use" element={<TermOfUsePage />} />
          <Route path="/candidate-terms-of-use" element={<CandidateTermsOfUse />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
