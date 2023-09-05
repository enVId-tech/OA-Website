import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/homepage';

const RenderPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages */}
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RenderPages;
