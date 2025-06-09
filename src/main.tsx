import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GIP from './GIP.tsx'
import GHP from './GHP.tsx';
import './index.css'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path="/gip" element={<GIP/>} />
        <Route path="/ghp" element={<GHP/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
