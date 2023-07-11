import React from 'react';

import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home.js'
import About from './routes/About.js'
import Service from './routes/Service.js'
import Contact from './routes/Contact.js'
import SignUp from './routes/SignUp.js'


function App() {
  return (
     <div className="App">
      
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/about" element={ <About />}/>
        <Route path="/service" element={ <Service />}/>
        <Route path="/contact" element={ <Contact />}/>
        <Route path="/signup" element={ <SignUp />}/>
      </Routes>
      
     </div>
  );
}

export default App;
