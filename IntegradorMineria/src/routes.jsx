import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound.jsx';
import  Inicio  from "./pages/home.jsx";
import Gallery from './pages/Gallery/Gallery.jsx';
import Lan from './pages/lan.jsx';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/Lan" element={<Lan />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
