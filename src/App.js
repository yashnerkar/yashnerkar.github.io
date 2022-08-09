import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import MediaQuery from 'react-responsive'
import ResponsiveNav from './components/responsive/ResponsiveNav'
import Navbar from "./components/Nav.jsx";
import Home from './components/Home';
import About from './components/about/About';
import Footer from './components/Footer';
import Project from './components/projects/Project';
import Contact from './components/contact/Contact';
import Global from './components/Globalstyles';
import Loading from './components/preloader/Loading';
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      overflow: 'hidden'
    }}>
      {loading ? <Loading /> :
        <>
          <Router>
            <MediaQuery maxWidth={992}>
              <ResponsiveNav />
            </MediaQuery>
            <MediaQuery minWidth={993}>
              <Navbar />
            </MediaQuery>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <MediaQuery minWidth={992}>
              <Footer />
            </MediaQuery>
          </Router>
        </>
      }


    </div >
  );
}

export default App;
