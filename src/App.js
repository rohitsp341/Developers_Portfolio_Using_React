import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';

import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/Contact.scss";
import "./styles/Services.scss";
import "./styles/Footer.scss";
import "./styles/Mediaquery.scss";


const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/Contact" element={<Contact/>} />
       <Route path="/Services" element={<Services/>} />

      </Routes>
      <Footer/>

    
    </Router>
    
  )
}

export default App