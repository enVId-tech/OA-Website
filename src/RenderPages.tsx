import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// TS

// SCSS
import './components/scss/pages/pages.scss';

// Pages 
import ErrorPage from "./pages/Error";
import HomePage from "./pages/homepage";
import Clubs from "./pages/subpages/clubs";
import PrincipalsMessage from "./pages/subpages/principalsmessage";
import Admissions from './pages/subpages/admissions';


const RenderPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirects */}
        <Route path="/*" element={<Navigate to="/error" />} />
        <Route path="/admissions/*" element={<Navigate to="/admissions" />} />
        <Route path="/clubs/*" element={<Navigate to="/clubs" />} />
        <Route path="/principalsmessage/*" element={<Navigate to="/principalsmessage" />} />

        {/* Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/principalsmessage" element={<PrincipalsMessage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RenderPages;