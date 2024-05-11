import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutus from '../src/pages/Aboutus'
import Program from './pages/Program';

import Contact from '../src/pages/Contact';
import Exploreprogram from './pages/ExploreProgram/Exploreprogram';
import Exploreprogram1 from './pages/ExploreProgram1';
import Exploreprogram2 from './pages/ExploreProgram2';
import Exploreprogram3 from './pages/ExploreProgram3';
import Exploreprogram4 from './pages/ExploreProgram4';
import Exploreprogram5 from './pages/ExploreProgram5';
import Exploreprogram6 from './pages/ExploreProgram6';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
       <Routes>
        <Route exact path="/" element={<App/>} />
        <Route exact path="/about" element={<Aboutus/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/programs" element={<Program/>} />
        <Route exact path="/programs/explore" element={<Exploreprogram/>}/>
        <Route exact path="/programs/academic-support" element={<Exploreprogram1/>}/>
        <Route exact path="/programs/computing-basics" element={<Exploreprogram2/>}/>
        <Route exact path="/programs/coding-and-game-design" element={<Exploreprogram3/>}/>
        <Route exact path="/programs/graphic-design" element={<Exploreprogram4/>}/>
        <Route exact path="/programs/science" element={<Exploreprogram5/>}/>
        <Route exact path="/programs/private-tutor" element={<Exploreprogram6/>}/>
        
       
        
      </Routes>
      </BrowserRouter>
);

reportWebVitals();
