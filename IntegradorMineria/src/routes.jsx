import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound.jsx';
import Gallery from './pages/Gallery/Gallery.jsx';
import Lan from './pages/landing.jsx';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Lan />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
