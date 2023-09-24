import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// SCSS
import './components/scss/pages/pages.scss';

// Pages
import HomePage from './pages/homepage';
import Clubs from './pages/subpages/clubs';
import ErrorPage from './pages/Error';

const RenderPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirects */}
        <Route path="/*" element={<Navigate to="/error" />} />
        <Route path="/clubs/*" element={<Navigate to="/clubs" />} />
        
        {/* Pages */}
        <Route path="/" element={<HomePage/>} />
        <Route path="/clubs" element={<Clubs/>} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RenderPages;