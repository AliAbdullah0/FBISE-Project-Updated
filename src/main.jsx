import React from 'react';
import { createRoot } from 'react-dom/client';  // Correct client import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Layout from './Layout.jsx';
import Home from './components/Home.jsx';
import ImageRecognition from './components/imageRecognition/ImageRecognition.jsx';
import Gpt from './components/gpt-2/Gpt.jsx';

// Render directly to the DOM without App.jsx or any unnecessary wrapper
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path='home' element={<Home />} />
          <Route path='imagerecognition' element={<ImageRecognition/>}/>
          <Route path='gpt' element={<Gpt/>}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
